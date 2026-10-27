---
judul: Routing OSPF GNS3 MikroTik Panduan Lengkap Single Area 15 Langkah
sumber: https://tecotechno.com/routing-ospf-gns3-mikrotik-routeros-v7-panduan-easy/
tanggal: 2026-07-30
tags: [tecotechno, knowledge, ospf, routing, mikrotik, chr, gns3, routeros-v7, dynamic-routing]
---
## Ringkasan
Panduan lengkap OSPF Single Area (Area 0.0.0.0) di GNS3 pakai 10 MikroTik CHR RouterOS v7. Mencakup: konsep OSPF link-state vs distance vector, neighbor state machine (Down→Full), LSA/LSDB/SPF Dijkstra, cost-based routing & ECMP, keunggulan OSPF (convergence cepat, skalabilitas, failover otomatis, kompatibel luas), topologi 10 router (2 jalur utama + cabang), tabel IP lengkap, 15 langkah konfigurasi (persiapan, install CHR, mapping interface, IP address, Router ID loopback, OSPF instance, Area, Interface Template passive/network, Network, redistribute connected, verifikasi neighbor/routing table, test ping/traceroute, simulasi link down failover), 20 best practice, FAQ.

## Poin Penting
- OSPF link-state: tiap router punya topologi lengkap area (LSDB) → SPF Dijkstra hitung jalur terpendek
- Neighbor states: Down → Init → 2-Way → ExStart → Exchange → Loading → Full (adjacency full = siap tukar LSA)
- Cost = reference bandwidth / interface bandwidth → interface cepat = cost kecil = prioritas
- ECMP: cost sama → load balance otomatis multi-path
- Single area cukup untuk router < beberapa puluhan; multi-area kalau LSDB/SPF berat
- RouterOS v7: sistem instance + interface-template (beda v6 simpel tapi kurang fleksibel)
- Router ID manual via loopback (selalu up) > auto-detect IP fisik (bisa down)

## Langkah / Cara Kerja
1. GNS3: install CHR v7 image qcow2 → 10 instance RAM 128MB+ → kabel sesuai topologi
2. `/interface print` → mapping interface fisik ke topologi
3. `/ip address add` per tabel IP (30 subnet link, 24 LAN, DHCP untuk cabang)
4. Loopback: `/interface bridge add name=lo` → `/ip address add address=1.1.1.1/32 interface=lo` → `/routing id add address=1.1.1.1` (ulangi CHR1-10 dengan ID unik)
5. `/routing ospf instance add name=ospf router-id=1.1.1.1` (semua router name=ospf)
6. `/routing ospf area add name=backbone instance=ospf area-id=0.0.0.0`
7. `/routing ospf interface-template add name=passive interfaces=lo area=backbone type=passive`
8. `/routing ospf interface-template add name=network interfaces=ether* area=backbone type=default`
9. `/routing ospf network add network=10.0.0.0/8 area=backbone` (cover semua subnet link)
10. `/routing ospf instance set ospf redistribute=connected` (optional, untuk LAN)
11. Verifikasi: `/routing ospf neighbor print` (state=Full) → `/ip route print` (flag O=OSPF)
12. Test: PC1 ping PC2 → traceroute validasi jalur
13. Simulasi link down: putus kabel virtual GNS3 → amati failover otomatis converge <10 detik

## Istilah & Tools
- [[OSPF]]
- [[Link State]]
- [[LSA]]
- [[LSDB]]
- [[SPF Algorithm]]
- [[ECMP]]
- [[Router ID]]
- [[Loopback]]
- [[RouterOS v7]]
- [[MTCNA Materi]]

## Terkait
- [[Index - Tecotechno Knowledge]]
- [[Index - MikroTik]]
- [[MTCNA Materi]]
- [[TT - GNS3 Linux Tutorial 5 Langkah]]
- [[TT - Pelajari GNS3 7 Hal Penting]]
- [[TT - Routing MikroTik CHR Static Routing]]
- [[TT - RIP Networking Guide]]
