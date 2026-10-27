---
judul: Cara Konfigurasi VLAN MikroTik 7 Langkah Ampuh Pisahkan Jaringan 1 Kabel
sumber: https://tecotechno.com/cara-konfigurasi-vlan-mikrotik-7-langkah-mudah/
tanggal: 2026-07-14
tags: [tecotechno, knowledge, mikrotik, vlan, networking, mtcna, trunk, access-port]
---
## Ringkasan
Tutorial konfigurasi VLAN MikroTik untuk memisahkan jaringan siswa (VLAN 10) dan guru (VLAN 20) lewat 1 kabel fisik. Mencakup konsep VLAN, keuntungan vs tradisional, 7 langkah setup (bridge, VLAN interface, IP, DHCP, trunk port, access port, firewall), testing dari client Linux, dan integrasi dengan CAPsMAN.

## Poin Penting
- VLAN = Virtual LAN, pisahkan broadcast domain di infrastruktur fisik sama
- VLAN ID (10, 20) sebagai penanda jaringan virtual
- Keuntungan: broadcast terpisah, keamanan naik, hemat biaya (no switch manageable), manajemen bandwidth per grup
- Bridge sebagai switch virtual; VLAN interface di atas bridge; trunk port tagged, access port untagged
- Firewall filter antar VLAN untuk isolasi total

## Langkah / Cara Kerja
1. Buat bridge: `/interface bridge add name=bridge-vlan`
2. Buat VLAN interface: `/interface vlan add name=vlan10-siswa interface=bridge-vlan vlan-id=10` dan vlan20-guru
3. Set IP di VLAN interface: `/ip address add address=192.168.10.1/24 interface=vlan10-siswa`
4. Setup DHCP per VLAN: pool, server, network
5. Konfigurasi trunk port (ether3): `/interface bridge port add bridge=bridge-vlan interface=ether3` + set VLAN tagging
6. Konfigurasi access port: `/interface bridge port add bridge=bridge-vlan interface=ether4` + set pvid=10 (untagged)
7. Firewall filter: drop forwarding antar VLAN 10 & 20

## Istilah & Tools
- [[VLAN]]
- [[Bridge MikroTik]]
- [[Trunk Port]]
- [[Access Port]]
- [[PVID]]
- [[MTCNA Materi]]

## Terkait
- [[Index - Tecotechno Knowledge]]
- [[Index - MikroTik]]
- [[MTCNA Materi]]
- [[TT - Perintah Dasar MikroTik]]
- [[TT - Konfigurasi DHCP Server MikroTik]]
- [[TT - Setup Mikrotik Wifi 7 Rahasia]]
