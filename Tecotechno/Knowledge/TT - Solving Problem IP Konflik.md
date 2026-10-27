---
judul: Solving Problem IP 5 Cara Mengatasi Konflik IP Address MikroTik
sumber: https://tecotechno.com/solving-problem-ip-5-cara-mengatasi-konflik-ip/
tanggal: 2026-07-21
tags: [tecotechno, knowledge, mikrotik, ip-conflict, arp, dhcp-static-lease, arp-reply-only, winbox]
---
## Ringkasan
Mencegah konflik IP permanen di MikroTik: (1) Deteksi lewat ARP table & DHCP Leases (IP sama, MAC beda), (2) DHCP Static Lease (Make Static) kunci IP ke MAC, (3) Interface ARP Reply-Only (hanya respons ARP terdaftar), (4) DHCP Server Add ARP For Leases (auto ARP entry), (5) Client Windows set Obtain IP Automatically. Studi kasus lab SMK ujian praktek. Best practice: dokumentasi MAC-IP binding, VLAN segmentasi, monitoring berkala, edukasi user.

## Poin Penting
- Konflik IP: 2 device MAC beda klaim IP sama → ARP table show duplicate
- Penyebab: user set IP static manual + DHCP range tumpang tindih
- Static Lease: IP → DHCP Server → Leases → double-click → Make Static
- ARP Reply-Only: Interfaces → double-click LAN → ARP=reply-only (wajib: device legit sudah di ARP table!)
- Add ARP For Leases: IP → DHCP Server → edit → centang Add ARP For Leases
- Kombinasi Reply-Only + Add ARP For Leases = benteng utuh anti IP liar

## Langkah / Cara Kerja
1. Winbox: IP → ARP → cek IP dengan >1 MAC berbeda; IP → DHCP Server → Leases → bandingkan
2. IP → DHCP Server → Leases → double-click device penting → Make Static (ulangi semua device)
3. Interfaces → double-click LAN interface → ARP → reply-only → Apply
4. IP → DHCP Server → double-click server aktif → centang Add ARP For Leases → OK
5. Client Windows: Control Panel → Network → Adapter → Properties → IPv4 → Obtain automatically

## Istilah & Tools
- [[IP Conflict]]
- [[ARP Table]]
- [[DHCP Static Lease]]
- [[ARP Reply-Only]]
- [[Add ARP For Leases]]
- [[MTCNA Materi]]

## Terkait
- [[Index - Tecotechno Knowledge]]
- [[Index - MikroTik]]
- [[MTCNA Materi]]
- [[TT - Konfigurasi DHCP Server MikroTik]]
- [[TT - Amankan Router MikroTik]]
- [[TT - Cara Konfigurasi VLAN MikroTik]]
