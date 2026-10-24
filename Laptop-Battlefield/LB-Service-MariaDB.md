---
title: LB-Service-MariaDB
type: service
tags: [#type/service, #laptop-battlefield, #mariadb, #database]
last_verified: 2026-10-24
confidence: VERIFIED
---

# LB-Service-MariaDB — MariaDB 11 Container

> Recon read-only 2026-10-24. Data dari `docker images`, `docker ps`, project config.

---

## Specifikasi

| Bidang | Nilai |
|--------|-------|
| **Image** | `mariadb:11` |
| **Size** | 458 MB |
| **Container Name** | `mcc-mariadb` |
| **Network** | `br-db1d13c7f3b8` (172.19.0.0/16) |
| **Volume** | Tidak terlihat (INFERRED named volume) |
| **Port** | 3306 (internal) |
| **Status** | Exited (0) 6 days ago |

---

## Project Usage

| Project | Database | Connection | Status |
|---------|----------|------------|--------|
| monitoring-laravel-1 | INFERRED `mcc` | `.env.example` → `DB_CONNECTION=pgsql` (KONFLIK) | Container exited |

**⚠️ KONFLIK**: `.env.example` di monitoring-laravel-1 bilang `DB_CONNECTION=pgsql` tapi container pakai MariaDB. Perlu konsistenkan.

---

## Configuration (INFERRED)

```yaml
# docker-compose.yml (INFERRED)
mcc-mariadb:
  image: mariadb:11
  environment:
    MYSQL_DATABASE: mcc
    MYSQL_USER: sail
    MYSQL_PASSWORD: password
    MYSQL_ROOT_PASSWORD: rootpassword
  volumes:
    - mcc_mariadb_data:/var/lib/mysql
  networks:
    - mcc-db
```

---

## Client Access

- **Host**: `mariadb` / `mysql` (v11) tersedia di `/usr/bin/mariadb`
- **Connection**: `mariadb -h 172.19.0.2 -u sail -p mcc` (kalau container running)
- **GUI**: Tidak terinstall

---

## Terhubung ke

- [[LB-Tool-Docker]] — Docker engine & container
- [[LB-Project-Monitoring-Laravel-1]] — project target (KONFLIK config)
- [[LB-Network]] — bridge br-db1d13c7f3b8
- [[LB-Graph-Service-Dependencies]] — service graph

---

#laptop-battlefield #service #mariadb
[[Home-Laptop-Battlefield]]