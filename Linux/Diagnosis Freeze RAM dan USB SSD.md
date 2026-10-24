# Diagnosis Freeze — RAM Pressure & USB SSD Stutter

## Gejala
- Laptop sering **freeze** (UI not responding, kadang sampai perlu restart paksa).
- Freeze random, bukan pas beban CPU tinggi.

## Penyebab (hasil diagnosa 23 Okt 2026)
1. **RAM pressure** — OOM killer kejadian berulang di journal: 1 Sep (7 proses), 2, 4, 5, 7 Sep, terakhir 3 Okt (korban: claude-desktop, Isolated Web Co). RAM 12GB + Firefox banyak tab + Electron apps mepet.
2. **Gak ada protector OOM** — earlyoom/oomd mati. Sebelum kernel nyembelih, sistem thrash dulu = freeze berasa total.
3. **Stall I/O ~2% konstan** (PSI) — root di SSD via **USB enclosure JMicron** (kabel SATA putus, lihat [[Hardware Repair SATA dan Repasting]]). Scheduler default **bfq** bikin stutter tambahan; optimalnya mq-deadline buat SSD USB.

## Yang TIDAK bersalah
- Suhu aman (idle 45–50°C, throttle di 87°C) — repasting masih efektif.
- Zero I/O error di SSD (UAS, USB 3.0 5Gbps). Error USB `err=-71` punya hub/receiver lain.
- Boot 16/31 detik di journal = shutdown normal, bukan crash.
- zram + swappiness 10 udah bagus.

## Fix
- **earlyoom terpasang + enabled** (`sudo pacman -S earlyoom; sudo systemctl enable --now earlyoom`).
  - SIGTERM di mem avail ≤10%, SIGKILL ≤5%, nice -20, proteksi init/systemd/Xorg.

## Pencegahan / To-do
- [ ] Ganti scheduler sda → **mq-deadline** permanen (udev rule) — belum dikerjain.
- [ ] Firefox: aktifin `browser.tabs.unloadOnLowMemory` + disiplin tab pas multitask berat.
- [ ] Kalau freeze masih sering: pantau `journalctl --grep 'earlyoom'` buat lihat korban berikutnya.

## Terhubung ke
- [[Spek HP Pavilion g4]]
- [[Hardware Repair SATA dan Repasting]]

---
#linux #diagnosa #performance
[[Index - Linux]]
