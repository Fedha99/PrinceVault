---
judul: Routing MikroTik CHR 7 Langkah Static Routing Winbox GNS3 Plus Drama Typo
sumber: https://tecotechno.com/routing-mikrotik-chr-5-langkah-routing-mikrotik/
tanggal: 2026-07-23
tags: [tecotechno, knowledge, mikrotik, chr, gns3, static-routing, winbox, troubleshooting, typo]
---
## Ringkasan
Tutorial static routing MikroTik CHR di GNS3 via Winbox: topologi 2 router (CHR1, CHR2) + 2 PC (VPCS), tabel IP, langkah IP address router, static route (CHR1: dst 192.168.20.0/24 gw 10.10.10.2; CHR2: dst 192.168.10.0/24 gw 10.10.10.1), config VPCS, drama troubleshooting typo IP (192.168.20.10 vs 192.168.20.1), verifikasi ping & traceroute, checklist verifikasi (routing table active flag A, cek IP interface, test link down).

## Poin Penting
- Static routing = fondasi sebelum OSPF/BGP; papan petunjuk jalan router
- Lab gratis: GNS3 + CHR + Winbox + VPCS (tanpa hardware fisik)
- Tabel IP konsisten kritis: typo 1 digit (20.10 vs 20.1) bikin subnet salah total → ping timeout
- Verifikasi: ping antar PC + traceroute (lihat jalur lewat CHR1→CHR2)
- Checklist: Routing Table flag A=active, cek ulang IP Address tiap interface, test link down

## Langkah / Cara Kerja
1. GNS3: 2x CHR (CHR1, CHR2) + 2x VPCS (PC1, PC2) → kabel sesuai topologi
2. Winbox CHR1: IP → Addresses → + → 10.10.10.1/30 ether1, 192.168.10.1/24 ether2
3. Winbox CHR2: IP → Addresses → + → 10.10.10.2/30 ether1, 192.168.20.1/24 ether2
4. CHR1: IP → Routes → + → Dst 192.168.20.0/24, Gateway 10.10.10.2
5. CHR2: IP → Routes → + → Dst 192.168.10.0/24, Gateway 10.10.10.1
6. VPCS PC1: `ip 192.168.10.10/24 192.168.10.1` ; PC2: `ip 192.168.20.10/24 192.168.20.1`
7. Test: PC1 `ping 192.168.20.10` → `trace 192.168.20.10` → verifikasi jalur

## Istilah & Tools
- [[Static Routing]]
- [[Routing Table]]
- [[Default Gateway]]
- [[VPCS]]
- [[CHR]]
- [[GNS3]]
- [[MTCNA Materi]]

## Terkait
- [[Index - Tecotechno Knowledge]]
- [[Index - MikroTik]]
- [[MTCNA Materi]]
- [[TT - Perintah Dasar MikroTik]]
- [[TT - GNS3 Linux Tutorial]]
- [[TT - Pelajari GNS3 7 Hal Penting]]
- [[TT - Routing OSPF GNS3 MikroTik]]
