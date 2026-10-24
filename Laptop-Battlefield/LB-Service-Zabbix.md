---
title: LB-Service-Zabbix
type: service
tags: [#type/service, #laptop-battlefield, #zabbix, #monitoring, #inferred]
last_verified: 2026-10-24
confidence: INFERRED
---

# LB-Service-Zabbix — Zabbix Monitoring Stack (INFERRED)

> Recon read-only 2026-10-24. **Tidak ada container/image Zabbix terdeteksi**. Data dari vault existing notes & folder kosong `~/labs/monitoring/zabbix/`.

---

## Status: NOT DEPLOYED

| Bidang | Nilai |
|--------|-------|
| **Container** | Tidak ada |
| **Image** | Tidak terpull |
| **Folder** | `~/labs/monitoring/zabbix/` — KOSONG |
| **Network Bridge** | `br-db1d13c7f3b8` (DOWN) — kemungkinan untuk Zabbix DB |
| **Status** | **Planned / Diganti MCC** |

---

## Vault Existing References

- [[Zabbix n8n Telegram Pipeline]] — Note di MikroTik folder
- [[Project Baru - Web Integrasi MikroTik RADIUS Zabbix]] — PKL project mention Zabbix
- [[Dokumentasi Instalasi web-monitor]] — Perbandingan dengan Zabbix

---

## Arsitektur Zabbix Standar (INFERRED)

Kalau dideploy, butuh:
```
zabbix-server (postgres/mysql backend)
  ↓
zabbix-web (frontend PHP)
  ↓
zabbix-agent (di target device: RouterOS, Linux)
  ↓
Telegram/n8n notification pipeline
```

---

## Kenapa Belum Deploy?

1. **MCC (monitoring-laravel) jadi replacement** — Custom dashboard + polling RouterOS
2. **Resource constraint** — RAM 11GiB, Zabbix server + DB + proxy butuh memori signifikan
3. **Priority PKL** — Focus ke web-monitor/MCC untuk delivery

---

## Rencana (INFERRED)

- **Option A**: Deploy Zabbix minimal (server + agent) untuk monitoring infrastructure
- **Option B**: Full custom via MCC (monitoring-laravel-prototype dashboard)
- **Option C**: Hybrid — Zabbix untuk infra, MCC untuk business logic

---

## Terhubung ke

- [[LB-Project-Monitoring-Laravel-Prototype]] — MCC dashboard replacement
- [[LB-Project-Monitoring-Laravel-1]] — MCC backend
- [[LB-Service-RouterOS]] — Target monitoring
- [[LB-Project-GNS3-Labs]] — Simulasi target
- [[Zabbix n8n Telegram Pipeline]] — Vault note
- [[Project Baru - Web Integrasi MikroTik RADIUS Zabbix]] — PKL project

---

#laptop-battlefield #service #zabbix #inferred
[[Home-Laptop-Battlefield]]