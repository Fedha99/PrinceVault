---
title: LB-Service-PostgreSQL
type: service
tags: [#type/service, #laptop-battlefield, #postgresql, #database]
last_verified: 2026-10-24
confidence: VERIFIED
---

# LB-Service-PostgreSQL — PostgreSQL 17 Container

> Recon read-only 2026-10-24. Data dari `docker images`, `docker ps`, project config.

---

## Specifikasi

| Bidang | Nilai |
|--------|-------|
| **Image** | `postgres:17` |
| **Size** | 646 MB |
| **Container Name** | `web-monitor-db` (historical) |
| **Network** | `br-e12f3b561011` (172.18.0.0/16) |
| **Volume** | `db_data` (persist) |
| **Port** | 5432 (internal) |
| **Status** | Exited (0) 3 weeks ago |

---

## Project Usage

| Project | Database | Connection | Status |
|---------|----------|------------|--------|
| web-monitor (historical) | `web_monitor` | `DB_HOST=db`, `DB_CONNECTION=pgsql` | Container exited |
| monitoring-laravel-prototype | INFERRED | `.env.example` → `pgsql` | Container exited |

---

## Configuration (INFERRED dari web-monitor)

```yaml
# docker-compose.yml (web-monitor)
db:
  image: postgres:17
  environment:
    POSTGRES_DB: web_monitor
    POSTGRES_USER: sail
    POSTGRES_PASSWORD: password
  volumes:
    - db_data:/var/lib/postgresql/data
  networks:
    - monitoring
```

---

## Client Access

- **Host**: `psql` (v17) tersedia di `/usr/bin/psql`
- **Connection**: `psql -h 172.18.0.2 -U sail -d web_monitor` (kalau container running)
- **GUI**: Tidak terinstall (pgAdmin, DBeaver, dll)

---

## Terhubung ke

- [[LB-Tool-Docker]] — Docker engine & container
- [[LB-Project-Web-Monitor]] — historical project
- [[LB-Project-Monitoring-Laravel-Prototype]] — prototype target
- [[LB-Network]] — bridge br-e12f3b561011
- [[LB-Graph-Service-Dependencies]] — service graph

---

#laptop-battlefield #service #postgresql
[[Home-Laptop-Battlefield]]