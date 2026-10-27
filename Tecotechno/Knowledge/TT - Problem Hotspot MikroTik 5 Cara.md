---
judul: Problem Hotspot MikroTik 5 Cara Mengatasi Tidak Bisa Login HP Laptop
sumber: https://tecotechno.com/5-cara-mengatasi-problem-hotspot-mikrotik-wifi/
tanggal: 2026-07-22
tags: [tecotechno, knowledge, mikrotik, hotspot, captive-portal, doh, hsts, walled-garden, winbox]
---
## Ringkasan
Mengatasi captive portal hotspot tidak muncul di browser modern (Chrome/Firefox): penyebab utama DoH (DNS over HTTPS), HSTS (HTTPS forced), cache DNS. 5 solusi Winbox: (1) Cek IP Pool & Server Hotspot aktif, (2) Set DNS Name Hotspot (mis. princeaja.com), (3) Walled Garden bypass domain deteksi (connectivitycheck.gstatic.com, captive.apple.com, www.msftconnecttest.com, detectportal.firefox.com), (4) HTTPS Redirect + SSL cert, (5) Trik client manual (buka http://IP-gateway atau DNS name). Best practice: update RouterOS, sosialisasi trik user, review Walled Garden berkala.

## Poin Penting
- DoH (DNS over HTTPS) enkripsi query DNS → MikroTik tidak bisa intercept redirect
- HSTS memaksa HTTPS → redirect HTTP captive portal gagal
- Walled Garden: domain OS untuk deteksi captive portal harus bypass login
- Domain Walled Garden wajib: connectivitycheck.gstatic.com (Android), captive.apple.com (iOS/macOS), www.msftconnecttest.com (Windows), detectportal.firefox.com (Firefox)
- DNS Name Hotspot custom membantu konsistensi resolusi internal
- HTTPS redirect butuh SSL cert valid (self-signed untuk internal, CA untuk komersial)

## Langkah / Cara Kerja
1. IP → Hotspot → Server Profiles → cek IP Pool cukup, Server Active, Active users
2. Server Profiles → tab Login → DNS Name = princeaja.com (custom domain lokal)
3. IP → Hotspot → Walled Garden → + → dst-host=connectivitycheck.gstatic.com → + captive.apple.com → + www.msftconnecttest.com → + detectportal.firefox.com
4. Server Profiles → tab Login → centang HTTPS → pastikan SSL cert terpasang
5. Client manual: browser → `http://192.168.13.1` atau `http://princeaja.com`

## Istilah & Tools
- [[Captive Portal]]
- [[DNS over HTTPS DoH]]
- [[HSTS]]
- [[Walled Garden]]
- [[Hotspot MikroTik]]
- [[MTCNA Materi]]

## Terkait
- [[Index - Tecotechno Knowledge]]
- [[Index - MikroTik]]
- [[MTCNA Materi]]
- [[TT - Konfigurasi DHCP Server MikroTik]]
- [[TT - Amankan Router MikroTik]]
- [[TT - Setup Mikrotik Wifi 7 Rahasia]]
