---
judul: Perintah Dasar MikroTik : 15 Command Ampuh untuk Manajemen Jaringan
sumber: https://tecotechno.com/perintah-dasar-mikrotik/
tanggal: 2026-07-11
tags: [tecotechno, knowledge, mikrotik, cli, networking, mtcna]
---
## Ringkasan
Artikel ini menjelaskan 15 perintah dasar MikroTik (RouterOS CLI) yang wajib dikuasai untuk manajemen jaringan sehari-hari. Mencakup info sistem, setting IP, interface, DHCP, log, firewall, backup/restore, bandwidth queue, ping, routing, reset, user, wireless client, dan export konfigurasi. Disertai tabel ringkasan, tips praktis, dan kesalahan umum.

## Poin Penting
- CLI MikroTik lebih cepat dan powerful dibanding Winbox untuk otomatisasi dan remote SSH
- 15 command inti: `/system resource print`, `/ip address add`, `/interface print`, `/ip dhcp-server add`, `/log print`, `/ip firewall filter add`, `/system backup save/load`, `/queue simple add`, `/ping`, `/ip route print`, `/system reset-configuration`, `/user add`, `/interface wireless registration-table print`, `/export file=`
- Selalu backup sebelum perubahan besar; gunakan Tab untuk auto-complete; coba di lab dulu
- Kesalahan umum: lupa backup, salah subnet, reset tanpa backup, salah chain firewall, terlalu bergantung Winbox

## Langkah / Cara Kerja
1. Akses terminal via Winbox (menu Terminal), SSH (`ssh admin@IP`), WebFig, atau serial console
2. Eksekusi command sesuai kebutuhan (contoh: setting IP `/ip address add address=192.168.1.1/24 interface=ether1`)
3. Verifikasi output; gunakan `/ip address print` untuk cek
4. Backup rutin dengan `/system backup save name=backup-harian`
5. Export konfigurasi untuk dokumentasi: `/export file=konfigurasi-lengkap`

## Istilah & Tools
- [[RouterOS]]
- [[Winbox]]
- [[SSH]]
- [[DHCP Server]]
- [[Firewall MikroTik]]
- [[Simple Queue]]
- [[MTCNA Materi]]

## Terkait
- [[Index - Tecotechno Knowledge]]
- [[Index - MikroTik]]
- [[MTCNA Materi]]
- [[TT - Konfigurasi DHCP Server MikroTik]]
- [[TT - Apa Itu MikroTik 10 Cara Belajar]]
