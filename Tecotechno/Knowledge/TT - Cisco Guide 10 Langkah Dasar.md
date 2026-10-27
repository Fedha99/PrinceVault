---
judul: Cisco Guide 10 Langkah Menguasai Dasar Cisco untuk Pemula Pelajar
sumber: https://tecotechno.com/cisco-guide-10-langkah-menguasai-dasar-cisco-mudah/
tanggal: 2026-07-28
tags: [tecotechno, knowledge, cisco, ios, cli, ccna, ccie, networking, enterprise]
---
## Ringkasan
Panduan dasar Cisco untuk pemula: kenapa enterprise pakai Cisco (stabilitas IOS, TAC 24/7, sertifikasi global CCNA/CCCIE, interoperabilitas), 10 langkah menguasai: (1) Kenal mode CLI (user/privileged/global config/interface), (2) Dasar addressing (IP, subnet, VLSM), (3) VLAN & trunking (802.1Q), (4) Static routing & default route, (5) Dynamic routing (RIP, OSPF, EIGRP), (6) ACL (standard/extended), (7) NAT/PAT, (8) SSH hardening, (9) Monitoring (SNMP, syslog, NetFlow), (10) Labs GNS3/Packet Tracer. Studi kasus setup kantor cabang. Tips: hafal shortcut, `do` di config mode, `show run | include`.

## Poin Penting
- Cisco IOS: mode hierarki (user > enable > config t > interface/routing/line)
- `do` jalankan privileged command dari config mode
- `show run | include` filter output
- VLAN: `switchport mode access/trunk`, `switchport access vlan X`, `switchport trunk allowed vlan`
- OSPF Cisco: `router ospf 1` → `network 192.168.1.0 0.0.0.255 area 0`
- ACL extended: `access-list 100 permit tcp any host 192.168.1.10 eq 80`
- SSH: `ip domain-name x` → `crypto key generate rsa` → `ip ssh version 2` → `line vty 0 4` → `transport input ssh`
- GNS3 + Cisco IOS image untuk lab gratis

## Langkah / Cara Kerja
1. Login → `enable` → `config t` → masuk global config
2. Interface: `interface g0/0` → `ip address 192.168.1.1 255.255.255.0` → `no shutdown`
3. VLAN: `vlan 10` → `name staff` → `interface g0/1` → `switchport mode access` → `switchport access vlan 10`
4. Static route: `ip route 0.0.0.0 0.0.0.0 192.168.1.254`
5. OSPF: `router ospf 1` → `network 192.168.1.0 0.0.0.255 area 0`
6. ACL: `access-list 100 permit tcp any any eq 80` → `interface g0/0` → `ip access-group 100 in`
7. NAT: `ip nat inside source list 1 interface g0/0 overload`
8. SSH: `crypto key generate rsa modulus 2048` → `ip ssh version 2`
9. Verifikasi: `show ip route`, `show ip ospf neighbor`, `show access-lists`
10. Lab: GNS3 (Cisco IOS qemu) atau Packet Tracer

## Istilah & Tools
- [[Cisco IOS]]
- [[CLI Modes]]
- [[VLAN]]
- [[Trunking 802.1Q]]
- [[OSPF]]
- [[ACL]]
- [[NAT PAT]]
- [[SSH Hardening]]
- [[GNS3]]
- [[Packet Tracer]]
- [[CCNA]]
- [[CCIE]]

## Terkait
- [[Index - Tecotechno Knowledge]]
- [[Index - MikroTik]]
- [[TT - Routing OSPF GNS3 MikroTik]]
- [[TT - RIP Networking Guide]]
