---
judul: BlackArch Repo Fix: 5 Langkah Fix BlackArch Repo yang Rusak Total Pakai Script Sendiri
sumber: https://tecotechno.com/blackarch-repo-fix-5-langkah-fix-blackarch-repo/
tanggal: 2026-08-21
tags: [tecotechno, knowledge, linux, blackarch, pemeliharaan]
---
## Ringkasan
Artikel menjelaskan urutan pemulihan BlackArch ketika mirror, keyring, atau library inti rusak: masuk root, perbaiki repositori, pulihkan library bila perlu, lakukan upgrade penuh, lalu regenerasi initramfs dan reboot. Penulis menyediakan skrip Bash di GitHub dan menyebut skrip membuat cadangan konfigurasi sebelum mengubahnya. Karena skrip berjalan dengan hak root dan dapat menimpa paket, tinjau isi serta sumbernya dan gunakan snapshot/backup sebelum menjalankannya.

## Poin Penting
- Penyebab yang dibahas meliputi mirror tidak aktif, keyring PGP bermasalah, konflik berkas `libgcc`/`libstdc++`, dan upgrade yang terputus.
- Repo BlackArch terpisah dari repo inti Arch; kegagalan sinkronisasi tidak selalu berarti sistem perlu dipasang ulang.
- Urutan eksekusi penting. Skrip yang dirujuk: [Fedha99/blackarch-fixing](https://github.com/Fedha99/blackarch-fixing).
- Artikel menyarankan backup konfigurasi, snapshot VM bila tersedia, koneksi stabil, dan pemeliharaan berkala. Perintah `pacman -Sy` saja dapat menghasilkan partial upgrade; pada sistem Arch turunan, ikuti dokumentasi resmi dan gunakan upgrade penuh yang sesuai.

## Langkah / Cara Kerja
1. Pastikan cadangan/snapshot tersedia dan baca skrip yang akan dijalankan.
2. Masuk root dengan `su` jika `sudo` tidak berfungsi.
3. Jalankan `bash blackarch-fix-repos.sh` untuk menangani mirrorlist dan keyring.
4. Jika ada error PAM atau `libgcc_s.so.1`, jalankan `bash blackarch-fix-libgcc.sh`.
5. Jalankan `bash blackarch-force-update.sh` untuk upgrade penuh dan penanganan konflik paket.
6. Setelah upgrade, jalankan `mkinitcpio -P`, lalu reboot.

## Istilah & Tools
- [[Linux]]
- [[GRUB]]

## Terkait
- [[Index - Tecotechno Knowledge]]
- [[Index - Linux]]
- [[Index - Cybersecurity]]
- [[TT - Perintah Dasar Linux 15]]
- [[TT - Grub Rescue 9 Cara Mengatasi]]
