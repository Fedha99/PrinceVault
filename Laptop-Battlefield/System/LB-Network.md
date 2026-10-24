---
title: LB-Network
type: system
tags: [#type/system, #laptop-battlefield, #network]
last_verified: 2026-10-24
confidence: VERIFIED
---

# LB-Network — Interface, Bridge Docker, Socket, VPN

> Recon read-only 2026-10-24. Data dari `ip`, `ss`, `resolvectl`, `nmcli`, `nft` (read-only). Firewall rules butuh sudo → UNKNOWN detail selain Docker.

---

## Network Interfaces

| Interface | Type | State | IPv4 | IPv6 | Catatan |
|-----------|------|-------|------|------|---------|
| lo | loopback | UNKNOWN | 127.0.0.1/8 | ::1/128 | - |
| eno1 | Ethernet | UP | 192.168.23.253/24 | fe80::36ec:455e:f8bc:f1b9/64 | Kabel, DHCP, metric 100 |
| wlp1s0 | WiFi | UP | 192.168.1.9/24 | fe80::92b4:e2b3:62cb:1fc9/64 | Realtek RTL8821AE, DHCP, metric 300 |
| docker0 | bridge | UP | 172.17.0.1/16 | fe80::4003:b7ff:fe68:816d/64 | Docker default bridge |
| br-e12f3b561011 | bridge | DOWN | 172.18.0.1/16 | - | Docker network (web-monitor?) |
| br-db1d13c7f3b8 | bridge | DOWN | 172.19.0.1/16 | - | Docker network (zabbix?) |
| veth4eaf0e0@if2 | veth | UP | - | fe80::cc64:edff:fe0b:e047/64 | Container velxio |

**Default Route**: via 192.168.23.1 dev eno1 (ethernet prioritas lebih tinggi).

---

## DNS

`resolvectl status` tidak menampilkan detail (permission/user scope). `/etc/resolv.conf` tidak dibaca (read-only policy). **UNKNOWN** resolver detail.

---

## Listening Sockets (ss -tulpn, ringkasan)

Proses **python3 (PID 7214)** membuka banyak UDP socket di **semua interface** (termasuk docker bridges):

| Port | Protokol | Interface | Proses | Kemungkinan |
|------|----------|-----------|--------|-------------|
| 5353 | UDP | lo, docker0, veth, eno1, wlp1s0 | spotifyd (841), python3 (7214) | mDNS / Avahi |
| 3702 | UDP | semua interface (IPv4/IPv6) | python3 (7214) | WS-Discovery (SSDP) |
| 47880, 40486, 58997, 52282, 3702, 46047, 47926, 39848, 546, 42222 | UDP | berbagai bridge/iface | python3 (7214) | Ephemeral / service discovery |

**Tidak ada TCP listening** pada port standar (80, 443, 3306, 5432, 6379, dll) dari proses user — database & service berjalan di container Docker.

---

## Docker Networks (dari bridge interface)

| Bridge | Subnet | Status | Kemungkinan Project |
|--------|--------|--------|---------------------|
| docker0 | 172.17.0.0/16 | UP | Default (velxio container) |
| br-e12f3b561011 | 172.18.0.0/16 | DOWN | web-monitor (PostgreSQL + app) |
| br-db1d13c7f3b8 | 172.19.0.0/16 | DOWN | zabbix / monitoring DB |

Container **velxio** (ghcr.io/davidmonterocrespo24/velxio:master) sedang **running** di docker0.

---

## VPN / Tunnel Tools (tersedia)

| Tool | Path | Status |
|------|------|--------|
| openvpn | /usr/bin/openvpn | Terinstall |
| wireguard (wg) | /usr/bin/wg | Terinstall |
| nmcli | /usr/bin/nmcli | Terinstall (NetworkManager) |
| tailscale | - | Tidak ditemukan |
| zerotier | - | Tidak ditemukan |

---

## Firewall (nftables / iptables-nft)

**Ruleset lengkap** sudah diverifikasi via `nft list ruleset` (output sebelumnya). Ringkasan:

- **Tables**: `ip nat`, `ip filter`, `ip6 nat`, `ip6 filter`, `ip raw`
- **Management**: Semua table dikelola `iptables-nft` (warning: "do not touch!")
- **Default policy**:
  - IPv4 FORWARD: **DROP** (kecuali Docker chains)
  - IPv6 FORWARD: **ACCEPT**
  - INPUT/OUTPUT: ACCEPT
- **Docker chains**:
  - `DOCKER-USER` — user rules (kosong)
  - `DOCKER-FORWARD` — forward ke container
  - `DOCKER-CT` — connection tracking established/related
  - `DOCKER-BRIDGE` — per-bridge rules
  - `PREROUTING` DNAT → port 3080 ke 172.17.0.2:80 (velxio?)
  - `POSTROUTING` MASQUERADE untuk 172.17/18/19.0.0/16

**Detail lengkap**: Lihat output `nft list ruleset` di recon log (tersimpan di sesi).

---

## VPN / Remote Access History (dari shell history)

- SSH ke `192.168.23.1` port 65535/65536 (router/gateway?)
- `playit` agent (systemd unit gagal) — tunneling service
- WireGuard/OpenVPN config **UNKNOWN** (butuh sudo baca /etc/wireguard, /etc/openvpn)

---

## Terhubung ke

- [[LB-Operating-System]] — systemd-networkd/NetworkManager context
- [[LB-Development-Toolchain]] — Docker, container networking
- [[LB-Project-Monitoring-Laravel-1]] — monitoring stack butuh network ke RouterOS
- [[LB-Project-Monitoring-Laravel-Prototype]] — dashboard akses jaringan
- [[LB-Service-PostgreSQL]] — DB di container br-e12f3b561011
- [[LB-Service-MariaDB]] — DB di container br-db1d13c7f3b8 (mcc-mariadb)
- [[LB-Service-Zabbix]] — Zabbix stack (INFERRED, bridge DOWN)
- [[LB-Service-RouterOS]] — target monitoring (INFERRED)

---

#laptop-battlefield #network #system
[[Home-Laptop-Battlefield]]