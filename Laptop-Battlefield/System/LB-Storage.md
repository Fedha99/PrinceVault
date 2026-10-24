---
title: LB-Storage
type: system
tags: [#type/system, #laptop-battlefield, #storage]
last_verified: 2026-10-24
confidence: VERIFIED
---

# LB-Storage — Layout Blok, Mount, zram, USB Enclosure

> Recon read-only 2026-10-24. Data dari `lsblk -f`, `findmnt`, `/sys/block/*`, `cat /sys/block/sda/queue/scheduler`.

---

## Block Devices Overview

| Device | Type | Size | FSTYPE | Label | Mountpoint | Transport |
|--------|------|------|--------|-------|------------|-----------|
| sda | disk | 476.9G | - | - | - | USB (uas) |
| ├─sda1 | part | 101.9G | ext4 | Arch | / | USB |
| ├─sda2 | part | 1G | ext4 | - | /boot | USB |
| ├─sda3 | part | 122G | ext4 | - | (unmounted) | USB |
| └─sda4 | part | 250G | ext4 | - | /home | USB |
| mmcblk0 | disk | 1000G | - | - | - | MMC |
| └─mmcblk0p1 | part | 1000G | vfat | - | (unmounted) | MMC |
| zram0 | disk | 4G | swap | zram0 | [SWAP] | RAM |
| sr0 | rom | 1G | - | - | - | SATA |

---

## Mount Points (findmnt)

```
/dev/sda1   /           ext4   rw,relatime
/dev/sda4   /home       ext4   rw,relatime
/dev/sda2   /boot       ext4   rw,relatime
zram0       [SWAP]      swap   pri=100
```

**Semua filesystem root/home/boot berada di SSD USB (sda)**.

---

## USB Enclosure Detail (sda)

```
Model: Tech
Vendor: JMicron
Transport: usb
Driver: uas (USB Attached SCSI)
Speed: 5000 Mbps (USB 3.0 Gen 1)
Scheduler: [bfq] (mq-deadline, kyber available)
Discard granularity: 0B (tidak mendukung TRIM via USB bridge)
```

**Catatan penting**: Bridge JMicron + driver `uas` sering menyebabkan **stall I/O** pada SSD di Linux. Scheduler default `bfq` dirancang untuk HDD berputar, **bukan SSD**.

**Rekomendasi**: Ganti ke `mq-deadline` via udev rule permanen:
```udev
ACTION=="add|change", KERNEL=="sda", ATTR{queue/scheduler}="mq-deadline"
```

Lihat [[LB-Incident-Freeze-RAM-USB-SSD]] untuk konteks freeze.

---

## zram Swap

```
NAME       TYPE      SIZE USED PRIO
/dev/zram0 partition   4G  53M  100
```

- Algoritma kompresi: zstd (default kernel 7.2+)
- Swappiness: 10 (konservatif, hanya swap saat benar-benar perlu)
- Priority: 100 (lebih tinggi dari file swap kalau ada)

---

## I/O Scheduler Comparison

| Scheduler | Cocok untuk | Catatan |
|-----------|-------------|---------|
| `bfq` | HDD berputar, desktop interaktif | Default, tapi **bikin latency tinggi di SSD USB** |
| `mq-deadline` | SSD, NVMe, USB storage | **Rekomendasi untuk sda** — latency rendah, throughput baik |
| `kyber` | NVMe cepat, multi-queue | Bisa dipakai, tapi `mq-deadline` lebih stabil untuk USB |
| `none` | Raw, no scheduler | Tidak disarankan untuk USB |

---

## SMART / Health (READ-ONLY, no sudo)

`smartctl` butuh sudo → **UNKNOWN**. Tidak ada error I/O di journal untuk sda (`blk_update_request`, `I/O error` tidak ditemukan).

---

## mmcblk0 (microSD 1TB)

- Partisi tunggal: mmcblk0p1 (vfat, FAT32)
- Tidak dimount otomatis
- Gunakan: backup / media storage (INFERRED)

---

## Partisi sda3 (122 GB, unmounted)

- ext4, label kosong
- Kemungkinan: data lama, backup, atau partisi cadangan
- **UNKNOWN** isi & kegunaan

---

## Ringkasan Risiko

| Risiko | Likelihood | Impact | Mitigasi |
|--------|------------|--------|----------|
| Scheduler bfq bikin stutter | Tinggi | UI lag, I/O wait | Ganti ke mq-deadline (udev rule) |
| USB cable/enclosure flaky | Sedang | Disk disconnect, data loss | Kabel SATA internal sudah putus (lihat [[Hardware Repair SATA dan Repasting]]) |
| No TRIM via USB bridge | Tinggi | SSD wear cepat | fstrim tidak efektif; monitor health via smartctl (butuh sudo) |
| zram OOM fallback | Rendah | Swap thrash | earlyoom sudah aktif (lihat [[LB-Incident-Freeze-RAM-USB-SSD]]) |

---

## Terhubung ke

- [[LB-Hardware]] — detail fisik SSD & enclosure
- [[LB-Operating-System]] — kernel cmdline, mount root
- [[Hardware Repair SATA dan Repasting]] — root cause kabel SATA putus
- [[Diagnosis Freeze RAM dan USB SSD]] — insiden freeze & PSI stall
- [[LB-Development-Toolchain]] — Docker overlayfs di /var/lib/docker (rootfs container)

---

#laptop-battlefield #storage #system
[[Home-Laptop-Battlefield]]