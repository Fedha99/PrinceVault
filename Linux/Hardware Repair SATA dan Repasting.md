# Hardware Repair — SATA Cable & Repasting

## Repasting
- Thermal paste diganti pake **Thermalright TF7**.
- Hasil: idle temps confirmed **39–46°C** post-repair. Signifikan turun dari sebelumnya.

## SATA Cable Putus
- Root cause dari anomali benchmark xanmod (fileio score aneh rendah) — ternyata kabel SATA internal **severed** (putus).
- **Workaround:** SSD sekarang jalan via **USB enclosure**.
- Ini jadi confounding factor penting pas benchmarking kernel — harus diinget kalau ada I/O test yang hasilnya aneh.

## Terhubung ke
- [[Spek HP Pavilion g4]]
- [[Benchmark Kernel Zen CachyOS Xanmod]]

---
#linux #hardware #repair
[[Index - Linux]]
