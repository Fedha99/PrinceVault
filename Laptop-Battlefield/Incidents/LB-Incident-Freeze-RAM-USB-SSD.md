---
title: LB-Incident-Freeze-RAM-USB-SSD
type: incident
tags: [#type/incident, #laptop-battlefield, #freeze, #oom, #ram, #usb-ssd]
last_verified: 2026-10-24
confidence: VERIFIED
---

# LB-Incident-Freeze-RAM-USB-SSD — Freeze Berulang Akibat RAM Pressure + USB SSD Stall

> Recon read-only 2026-10-24. Bukti dari `journalctl`, `coredumpctl`, `free`, PSI (`/proc/pressure/*`), `vmstat`, log kernel.

---

## Ringkasan Eksekutif

**Gejala**: Laptop sering **freeze total** (UI not responding, mouse/keyboard macet, butuh restart paksa). Freeze random, bukan selalu saat beban CPU tinggi.

**Penyebab Utama**: **RAM pressure** — OOM killer berulang membunuh proses (Firefox, Electron apps, claude-desktop) setelah sistem masuk *swap thrash*. Tanpa earlyoom, freeze berlangsung lama sebelum kernel intervensi.

**Penyebab Kontribusi**: **Stall I/O ~2% konstan** (PSI) dari root filesystem di SSD via enclosure USB JMicron + scheduler `bfq` (suboptimal untuk SSD).

---

## Bukti: OOM Killer Events (journalctl)

| Tanggal | Proses Dibunuh | Jumlah | Detail |
|---------|----------------|--------|--------|
| 2026-09-01 | multiple | 7 | `systemd`, `gitstatusd`, `claude-desktop` dll |
| 2026-09-02 | - | 1 | - |
| 2026-09-04 | - | 2 | - |
| 2026-09-05 | - | 3 | - |
| 2026-09-07 | - | 1 | - |
| 2026-10-03 | `claude-desktop` (3x), `Isolated Web Co`, `gitstatusd-linu` | 6 | **Puncak**: 1.5TB virtual mem claude-desktop |

**Log sample (3 Okt 12:23)**:
```
Out of memory: Killed process 8735 (claude-desktop) total-vm:1518259812kB, anon-rss:9888kB
Out of memory: Killed process 6170 (claude-desktop) total-vm:1518259476kB
Out of memory: Killed process 14770 (Isolated Web Co) total-vm:12433552kB, anon-rss:694756kB
```

---

## Bukti: RAM & Swap State (Saat Recon)

```
Mem:           11Gi       6.6Gi       542Mi       642Mi       4.7Gi       5.0Gi
Swap:          4.0Gi        53Mi       3.9Gi
```
- Swappiness: 10 (konservatif)
- zram0: 4GiB kompresi zstd
- Available: 5.0 GiB — **mepet** untuk Firefox multi-tab + Electron (Claude, Telegram, Cursor) + Docker

---

## Bukti: PSI (Pressure Stall Information)

```bash
# Memory pressure
some avg10=0.00 avg60=0.00 avg300=0.00 total=48331
full avg10=0.00 avg60=0.00 avg300=0.00 total=48197

# I/O pressure (STALL KONSTAN ~2%)
some avg10=2.27 avg60=2.39 avg300=2.99 total=329851968
full avg10=2.03 avg60=2.00 avg300=2.56 total=299016311

# CPU pressure
some avg10=0.00 avg60=0.00 avg300=0.00 total=19616021
```

**Interpretasi**: CPU aman, Memory pressure rendah *saat ini* (karena earlyoom baru aktif), tapi **I/O stall ~2% konsisten** → task sering nunggu disk.

---

## Bukti: USB SSD & Scheduler

- Device: `/dev/sda` — SSD 512GB via **JMicron USB enclosure** (kabel SATA internal putus)
- Driver: `uas` (USB Attached SCSI), USB 3.0 5Gbps
- Scheduler: `bfq` (default) — **dirancang untuk HDD berputar**
- I/O error di journal: **ZERO** untuk sda
- Error USB `-71`: Hanya di **Bus 1 Port 4 (HID device)**, bukan SSD (SSD di Bus 4)

**Rekomendasi**: Ganti scheduler ke `mq-deadline` via udev rule permanen.

---

## Correlated: Coredump (Quickshell Crash Loop)

```
2026-10-22 07:13-07:14 — quickshell SIGABRT x10 + gnome-session-init-worker x2
```
Kemungkinan: RAM pressure trigger crash shell, bukan penyebab freeze utama.

---

## Fix yang Sudah Diterapkan

1. **earlyoom** — Terpasang + enabled 23 Okt 2026
   - SIGTERM: mem avail ≤10% & swap free ≤10%
   - SIGKILL: mem avail ≤5% & swap free ≤5%
   - Nice -20, avoid init/systemd/Xorg/sshd
   - **Effect**: Proses rakus RAM dibunuh instan, sistem tidak freeze thrash lama

---

## Todo / Pencegahan

- [ ] **Ganti scheduler sda → mq-deadline** (udev rule permanen)
  ```udev
  ACTION=="add|change", KERNEL=="sda", ATTR{queue/scheduler}="mq-deadline"
  ```
- [ ] Firefox: `browser.tabs.unloadOnLowMemory = true` (about:config)
- [ ] Disiplin tab: tutup tab tidak pakai, batasi Electron apps barengan
- [ ] Monitor: `journalctl -u earlyoom -f` untuk lihat korban berikutnya
- [ ] Upgrade hardware: SSD internal (perbaiki kabel SATA) atau laptop baru (TUF A15 target)

---

## Yang TIDAK Bersalah (Terverifikasi)

| Komponen | Status | Bukti |
|----------|--------|-------|
| Suhu CPU | ✅ Aman | 53-60°C (throttle 87°C, crit 105°C) |
| GPU Hang | ✅ Tidak ada | `drm`/`gpu` error tidak ditemukan |
| Kernel Panic | ✅ Tidak ada | Boot singkat = shutdown normal |
| SSD Health | ✅ Sehat | Zero I/O error, SMART UNKNOWN (butuh sudo) |
| USB Cable SSD | ✅ Stabil | Error -71 punya HID device lain |
| zram/swappiness | ✅ Optimal | Swappiness 10, zram 4GiB zstd |

---

## Terhubung ke

- [[LB-Hardware]] — Hardware detail & USB enclosure
- [[LB-Storage]] — Scheduler bfq vs mq-deadline
- [[LB-Operating-System]] — Kernel, earlyoom service
- [[Diagnosis Freeze RAM dan USB SSD]] — Note existing (sama konten)
- [[Hardware Repair SATA dan Repasting]] — Root cause kabel SATA putus
- [[Spek HP Pavilion g4]] — Spesifikasi laptop

---

#laptop-battlefield #incident #freeze #ram #oom #usb-ssd
[[Home-Laptop-Battlefield]]