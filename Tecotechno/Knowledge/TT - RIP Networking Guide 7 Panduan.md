---
judul: RIP Networking Guide 7 Panduan Lengkap Konsep Sampai Konfigurasi MikroTik
sumber: https://tecotechno.com/rip-networking-5-langkah-konfigurasi-rip-network/
tanggal: 2026-07-29
tags: [tecotechno, knowledge, rip, routing, distance-vector, mikrotik, gns3, linux-tap]
---
## Ringkasan
Panduan RIP (Routing Information Protocol) distance vector: konsep dasar (hop count metric, max 15 hop), cara kerja (estafet info tetangga), kelebihan/kekurangan vs OSPF, studi kasus routing loop di lab GNS3, tutorial konfigurasi step-by-step MikroTik RouterOS & Linux TAP interface. RIP tetap relevan untuk belajar fundamental distance vector sebelum OSPF/BGP.

## Poin Penting
- RIP: protokol distance vector tertua (1988), metric = hop count (max 15)
- Setiap router hanya tahu info dari tetangga langsung (bukan topologi penuh)
- Update berkala (30 detik) → convergence lambat vs OSPF event-driven
- Routing loop risiko: split horizon, poison reverse, holddown timer mitigasi
- Cocok: jaringan kecil, lab training, demo cepat klien
- Konfigurasi MikroTik: `/routing rip instance add name=rip` → `/routing rip interface-template add instance=rip interfaces=ether* type=default` → `/routing rip network add network=192.168.0.0/16 instance=rip`

## Langkah / Cara Kerja
1. Paham konsep: distance vector, hop count, max 15 hop, update 30s
2. MikroTik: `/routing rip instance add name=rip`
3. Interface template: `/routing rip interface-template add instance=rip interfaces=ether* type=default`
4. Network: `/routing rip network add network=192.168.0.0/16 instance=rip`
5. Verifikasi: `/routing rip neighbor print` → `/ip route print` (flag R=RIP)
6. Linux TAP: buat interface TAP → assign IP → jalankan RIP daemon (quagga/frr)
7. Test ping antar network → cek routing table convergence

## Istilah & Tools
- [[RIP]]
- [[Distance Vector]]
- [[Hop Count]]
- [[Split Horizon]]
- [[Poison Reverse]]
- [[Holddown Timer]]
- [[Routing Loop]]
- [[MTCNA Materi]]

## Terkait
- [[Index - Tecotechno Knowledge]]
- [[Index - MikroTik]]
- [[MTCNA Materi]]
- [[TT - Routing OSPF GNS3 MikroTik]]
- [[TT - Routing MikroTik CHR Static Routing]]
