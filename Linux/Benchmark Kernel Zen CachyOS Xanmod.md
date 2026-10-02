# Benchmark Kernel — Zen vs CachyOS-BORE vs Xanmod

Benchmark pake **sysbench**, tujuan cari kernel terbaik buat gaming Minecraft di [[Spek HP Pavilion g4]] (Intel HD 4000).

## Hasil
| Kernel | Catatan |
|---|---|
| **Zen** | 🏆 **Direkomendasikan** — performa paling seimbang buat workload JVM Minecraft |
| **CachyOS-BORE** | ~24–26% lebih rendah di test thread/fileio yang paling relevan buat Minecraft JVM |
| **Xanmod** | Fileio score anomali rendah — awalnya dikira masalah kernel, ternyata root cause-nya [[Hardware Repair SATA dan Repasting\|SATA cable putus]] + SSD lewat USB enclosure |

## Insight Penting
Anomali xanmod ngajarin buat selalu cross-check hardware confounds sebelum nyalahin software/kernel choice.

## Terhubung ke
- [[Spek HP Pavilion g4]]
- [[Hardware Repair SATA dan Repasting]]
- [[Constraint Intel HD 4000]]
- [[Modpack Forge 1.20.1 Overview]] (alasan awal butuh benchmark ini)

---
#linux #kernel #benchmark
[[Index - Linux]]
