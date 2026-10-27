---
judul: 5 Langkah Mudah Install Ulang MikroTik Lewat Netinstall-CLI Linux
sumber: https://tecotechno.com/5-langkah-mudah-install-ulang-mikrotik-linux/
tanggal: 2026-07-13
tags: [tecotechno, knowledge, mikrotik, netinstall, cli, linux, routeros, recovery]
---
## Ringkasan
Panduan install ulang MikroTik via Netinstall-CLI di Linux (headless/terminal only). Cocok untuk server tanpa GUI, otomatisasi mass flashing, dan recovery routerboard kernel panic/boot failure. Mencakup persiapan Linux, download/ekstrak binary netinstall-cli, izin eksekusi, deteksi device, dan flashing.

## Poin Penting
- Netinstall-CLI: versi terminal-only dari Netinstall GUI, lebih ringan, scriptable
- Butuh: distro Linux, kabel ethernet bagus, binary netinstall-cli dari mikrotik.com/download
- `chmod +x netinstall-cli` untuk izin eksekusi
- Deteksi device: `./netinstall-cli -l` → flash: `./netinstall-cli -i /dev/sdX routeros-x.x.x.npk`
- Lebih efisien untuk banyak routerboard sekaligus

## Langkah / Cara Kerja
1. Siapkan laptop/PC Linux + kabel ethernet ke port 1 router
2. Download & ekstrak netinstall-cli.tar.gz dari MikroTik
3. `chmod +x netinstall-cli`
4. Cek device: `./netinstall-cli -l` (harus detect routerboard)
5. Flash: `./netinstall-cli -i /dev/sdX routeros-versi.npk` (ganti sdX & versi)
6. Tunggu selesai → router reboot otomatis

## Istilah & Tools
- [[Netinstall]]
- [[RouterBOARD]]
- [[RouterOS]]
- [[Kernel Panic]]
- [[MTCNA Materi]]

## Terkait
- [[Index - Tecotechno Knowledge]]
- [[Index - MikroTik]]
- [[MTCNA Materi]]
- [[TT - Perintah Dasar MikroTik]]
- [[TT - Apa Itu MikroTik 10 Cara Belajar]]
