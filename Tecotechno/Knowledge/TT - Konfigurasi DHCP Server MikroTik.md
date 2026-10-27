---
judul: Cara Mudah Konfigurasi DHCP Server MikroTik dalam 5 Langkah Ampuh
sumber: https://tecotechno.com/konfigurasi-dhcp-server-mikrotik/
tanggal: 2026-07-13
tags: [tecotechno, knowledge, mikrotik, dhcp, networking, mtcna, ip-pool, lease]
---
## Ringkasan
Tutorial setup DHCP Server MikroTik 5 langkah: buat IP pool, setup DHCP server, tambah network, verifikasi lease, testing client. Mencakup konsep DHCP, kelebihan MikroTik (Winbox cepat, custom lease time, static reservation, monitoring lease, harga terjangkau), persiapan, dan troubleshooting IP conflict.

## Poin Penting
- DHCP = Dynamic Host Configuration Protocol, bagi IP otomatis ke client
- 3 langkah inti: IP Pool → DHCP Server → Network
- MikroTik unggul: Winbox simpel, lease time custom, static reservation (printer/server), monitoring lease mudah, harga terjangkau
- IP Pool: `/ip pool add name=dhcp-pool ranges=192.168.1.10-192.168.1.100`
- DHCP Server: `/ip dhcp-server add interface=ether2 address-pool=dhcp-pool`
- Network: `/ip dhcp-server network add address=192.168.1.0/24 gateway=192.168.1.1`

## Langkah / Cara Kerja
1. Buat IP Pool di Winbox: IP → Pool → + → name=dhcp-pool, ranges=192.168.1.10-192.168.1.100
2. Setup DHCP Server: IP → DHCP Server → + → interface=ether2, address-pool=dhcp-pool
3. Tambah Network: IP → DHCP Server → Networks → + → address=192.168.1.0/24, gateway=192.168.1.1
4. Verifikasi: IP → DHCP Server → Leases (cek client dapat IP)
5. Test di client: set Obtain IP Automatically → cek ipconfig/ip a

## Istilah & Tools
- [[DHCP Server]]
- [[IP Pool]]
- [[Lease Time]]
- [[Static Lease]]
- [[MTCNA Materi]]

## Terkait
- [[Index - Tecotechno Knowledge]]
- [[Index - MikroTik]]
- [[MTCNA Materi]]
- [[TT - Perintah Dasar MikroTik]]
- [[TT - Solving Problem IP Konflik]]
- [[TT - Cara Konfigurasi VLAN MikroTik]]
