---
judul: Amankan Router Anda 7 Cara Mengamankan MikroTik Hacker CPU 100
sumber: https://tecotechno.com/amankan-router-anda-7-cara-mengamankan-mikrotik/
tanggal: 2026-07-22
tags: [tecotechno, knowledge, mikrotik, security, hardening, brute-force, firewall, winbox, ssh]
---
## Ringkasan
7 langkah hardening MikroTik anti brute force & CPU 100%: (1) Ganti username admin default + password kuat 12+ char, (2) Ubah port default Winbox (8291→18291), SSH (22→custom), WWW, API, (3) Disable service tidak pakai (Telnet, FTP, www-ssl, api, api-ssl), (4) Allowed Address pada user (batasi IP management), (5) Firewall rule anti brute force (add src to address-list → drop), (6) Neighbor Discovery filter interface publik, (7) Tutup open DNS resolver. Studi kasus lab sekolah CPU 100% brute force SSH.

## Poin Penting
- Popularitas MikroTik = target bot scan 24/7 cari default config
- Gejala serangan: CPU 100%, internet putus-putus, Winbox lambat, log login gagal massal
- Langkah 1: System → Users → add user unik full permission → hapus/disable admin default
- Langkah 2: IP → Services → ubah port winbox/ssh/www/api ke custom
- Langkah 3: Disable Telnet (plaintext), FTP, www-ssl, api, api-ssl
- Langkah 4: System → Users → Allowed Address = IP kantor/VPN internal
- Langkah 5: IP → Firewall → Filter Rules → Chain=input, Proto=tcp, Dst.Port=custom → Action=add src to address-list (timeout 1d) → Rule 2: Src.Address List=brute-force → Action=drop
- Langkah 6: IP → Neighbors → Discovery Interfaces → disable di interface publik
- Langkah 7: IP → DNS → Allow Remote Requests=no (tutup open resolver)

## Langkah / Cara Kerja
1. System → Users → + → name=adminbaru, password=kuat12char+, group=full → login baru → disable admin lama
2. IP → Services → winbox: port=18291; ssh: port=2222; www: port=8080; api: disable
3. IP → Services → Telnet/FTP/www-ssl/api/api-ssl → Disable
4. System → Users → edit user aktif → Allowed Address=192.168.x.x/24 (kantor) atau IP VPN
5. IP → Firewall → Filter Rules → + → Chain=input, Protocol=tcp, Dst.Port=2222/18291, Connection State=new → Action=add src to address-list name=brute-force timeout=1d → + → Src.Address List=brute-force → Action=drop
6. IP → Neighbors → Discovery Interfaces → interface=ether1 (publik) → Discovery=disable
7. IP → DNS → Allow Remote Requests=no → Apply

## Istilah & Tools
- [[Router Hardening]]
- [[Brute Force]]
- [[Address List]]
- [[Neighbor Discovery]]
- [[Open DNS Resolver]]
- [[MTCNA Materi]]

## Terkait
- [[Index - Tecotechno Knowledge]]
- [[Index - MikroTik]]
- [[MTCNA Materi]]
- [[TT - Perintah Dasar MikroTik]]
- [[TT - Zabbix Security Setup 6 Cara]]
- [[TT - Problem Hotspot MikroTik]]
