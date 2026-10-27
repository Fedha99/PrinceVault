---
judul: 15 Perintah Dasar Linux untuk Terminal
sumber: https://tecotechno.com/15-perintah-dasar-linux-yang-wajib-lo-kuasai/
tanggal: 2026-10-09
tags: [tecotechno, knowledge, linux, terminal, command-line]
---
## Ringkasan
Artikel mengenalkan perintah terminal Linux untuk menavigasi direktori, mengelola file, membaca dan mencari isi, mengatur izin, memasang perangkat lunak, serta memantau proses dan jaringan. Contoh dapat berbeda antar-distribusi, khususnya package manager dan jalur log.

## Poin Penting
- Navigasi: `pwd`, `ls`, `cd`; direktori: `mkdir`; file: `touch`, `cp`, `mv`, `rm`.
- Baca/edit/cari: `cat`, `less`, `head`, `tail`, `nano`, `grep`, `find`.
- Izin dan administrasi: `chmod`, `chown`, `sudo`; pengelola paket bergantung distro, misalnya `apt` atau `pacman`.
- Proses dan jaringan: `ps`, `top`/`htop`, `kill`, `ping`, `ip`.
- `rm` tidak memindahkan file ke Trash secara default. Periksa `pwd` dan target sebelum memakai `rm -r`; `sudo` menjalankan perintah dengan hak istimewa.

## Langkah / Cara Kerja
1. Jalankan `pwd` untuk memastikan lokasi kerja, lalu `ls` untuk memeriksa isinya.
2. Gunakan `cd` untuk berpindah; buat direktori dengan `mkdir -p`.
3. Salin dengan `cp`, pindahkan atau ubah nama dengan `mv`.
4. Baca log panjang menggunakan `less`; gunakan `tail -f` untuk memantau perubahan.
5. Cari isi dengan `grep` dan nama file dengan `find`.
6. Periksa proses dengan `ps` atau `top`; gunakan hak admin hanya saat dibutuhkan.

## Istilah & Tools
- [[Linux]]

## Terkait
- [[Index - Tecotechno Knowledge]]
- [[Index - Linux]]
- [[TT - BlackArch Repo Fix 5 Langkah]]
- [[TT - Laptop Linux 7 Rekomendasi]]
