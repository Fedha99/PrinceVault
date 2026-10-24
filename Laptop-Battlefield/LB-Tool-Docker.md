---
title: LB-Tool-Docker
type: tool
tags: [#type/tool, #laptop-battlefield, #docker]
last_verified: 2026-10-24
confidence: VERIFIED
---

# LB-Tool-Docker — Docker Engine & Containerd

> Recon read-only 2026-10-24. Data dari `docker --version`, `docker ps`, `docker images`, `ctr --version`.

---

## Versi & Binary

| Komponen | Versi | Path |
|----------|-------|------|
| Docker Engine | 29.9.2 | /usr/bin/docker |
| Docker Compose | v2 (plugin) + standalone 5.5.1 | /usr/bin/docker-compose |
| containerd | v2.4.2 | /usr/bin/ctr |

**Backend**: Docker menggunakan containerd sebagai container runtime.

---

## Daemon & Service

- **Daemon mode**: Manual start (`sudo systemctl start docker`) — tidak auto-start boot
- **Rootless**: Tidak dipakai (root daemon)
- **Storage driver**: overlay2 (default)
- **Cgroup driver**: systemd (via containerd)

---

## Images (docker images)

| Repository | Tag | Size | Status |
|------------|-----|------|--------|
| ghcr.io/davidmonterocrespo24/velxio | master | 7.13 GB | **Large** — unknown purpose |
| mariadb | 11 | 458 MB | Untuk mcc-mariadb |
| php | 8.5-cli | 797 MB | Untuk web-monitor-app |
| postgres | 17 | 646 MB | Untuk web-monitor-db |

---

## Containers (docker ps -a)

| Name | Image | Status | Ports | Network |
|------|-------|--------|-------|---------|
| velxio | velxio:master | Up 30 min | 3080→80 (DNAT) | docker0 |
| mcc-mariadb | mariadb:11 | Exited (0) 6 days ago | - | br-db1d13c7f3b8 |
| web-monitor-app | php:8.5-cli | Exited (137) 3 weeks ago | - | br-e12f3b561011 |
| web-monitor-db | postgres:17 | Exited (0) 3 weeks ago | - | br-e12f3b561011 |

**Catatan**:
- `velxio` — container misterius 7.13GB, running, port 3080 DNAT ke 80
- `mcc-mariadb` — MariaDB untuk monitoring-laravel-1, exited
- `web-monitor-app` — Exited 137 = **OOM killed** (memory limit)
- `web-monitor-db` — PostgreSQL untuk web-monitor (historical), exited clean

---

## Networks (Bridge)

| Bridge | Subnet | Status | Containers |
|--------|--------|--------|------------|
| docker0 | 172.17.0.0/16 | UP | velxio |
| br-e12f3b561011 | 172.18.0.0/16 | DOWN | web-monitor-app, web-monitor-db |
| br-db1d13c7f3b8 | 172.19.0.0/16 | DOWN | mcc-mariadb |

---

## Firewall Integration (nftables)

Docker mengelola sendiri chain `DOCKER`, `DOCKER-FORWARD`, `DOCKER-USER` di tabel `ip nat`, `ip filter`, `ip6 nat`, `ip6 filter`, `ip raw`.

**Key rules**:
- DNAT port 3080 → 172.17.0.2:80 (velxio)
- MASQUERADE untuk 172.17/18/19.0.0/16
- Default FORWARD DROP, hanya Docker chains yang allow

---

## Project Usage

| Project | Compose File | Services | Status |
|---------|--------------|----------|--------|
| monitoring-laravel-1 | Tidak terlihat | mariadb (mcc-mariadb) | Container exited |
| monitoring-laravel-prototype | Tidak terlihat | postgres (web-monitor-db) | Container exited |
| web-monitor (historical) | docker-compose.yml | app + db | Deleted, container exited |
| velxio | UNKNOWN | Single container | **Running** |

---

## Resource Constraints (Hardware)

- **RAM 11 GiB** — container memory limit kritis (web-monitor-app OOM killed)
- **CPU 8 threads** — cukup untuk multi-container
- **SSD USB** — I/O latency untuk overlayfs (lihat [[LB-Storage]])

---

## Terhubung ke Project

- [[LB-Project-Monitoring-Laravel-1]] — butuh mariadb container running
- [[LB-Project-Monitoring-Laravel-Prototype]] — butuh postgres container running
- [[LB-Project-Web-Monitor]] — historical, docker-compose setup documented
- [[LB-Project-GNS3-Labs]] — butuh Docker untuk VM images (INFERRED)
- [[LB-Service-MariaDB]] — service definition
- [[LB-Service-PostgreSQL]] — service definition
- [[LB-Network]] — bridge networks detail
- [[LB-Development-Toolchain]] — toolchain overview

---

#laptop-battlefield #tool #docker
[[Home-Laptop-Battlefield]]