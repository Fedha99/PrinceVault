---
title: LB-Project-MCC
type: project
tags: [#type/project, #laptop-battlefield, #mcc, #monitoring, #concept]
last_verified: 2026-10-24
confidence: VERIFIED
---

# LB-Project-MCC — Monitoring Control Center (Konsep Terpadu)

> Recon read-only 2026-10-24. MCC = konsep aplikasi monitoring terpadu yang dibagi jadi 2 repo: backend (monitoring-laravel-1) + UI prototype (monitoring-laravel-prototype).

---

## Arsitektur MCC (Dari Dua Repo)

```
┌─────────────────────────────────────────────────────────────┐
│                    MONITORING CONTROL CENTER                 │
├─────────────────────────────────────────────────────────────┤
│  BACKEND (monitoring-laravel-1)          │  UI PROTOTYPE     │
│  ├─ M1: Auth + Role + CRUD Device        │  ├─ DeviceLatestPoll     │
│  ├─ MariaDB (mcc-mariadb)                │  ├─ Livewire Panels      │
│  └─ Polling Worker (TODO: D-014, D-013)  │  ├─ Dashboard (MccDashboard)│
│                                           │  ├─ Topology (topology.js)│
│                                           │  ├─ Tests                │
│                                           │  └─ PostgreSQL (web-monitor-db)│
└─────────────────────────────────────────────────────────────┘
                              │
                    ┌─────────┴─────────┐
                    ▼                   ▼
            RouterOS Devices      GNS3 Simulasi
            (API/SSH/SNMP)        (CHR Lab)
```

---

## Fitur M1 (Done - di monitoring-laravel-1)

| Fitur | Status | Detail |
|-------|--------|--------|
| Auth + Role | ✅ | Laravel Breeze/Filament auth + role-based access |
| CRUD Device | ✅ | Create, Read, Update, Delete perangkat jaringan |
| Database | ✅ | MariaDB 11 via Docker |

---

## Fitur Prototype (Active - di monitoring-laravel-prototype)

| Fitur | Status | File/Component |
|-------|--------|----------------|
| DeviceLatestPoll Model | ✅ Code | `app/Models/DeviceLatestPoll.php` |
| Migration Polling Table | ✅ Code | `2026_10_12_000003_create_device_latest_polls_table.php` |
| DummyMonitoringSeeder | ✅ Code | `database/seeders/DummyMonitoringSeeder.php` |
| Livewire DeviceInterfacePanel | ✅ Code | `resources/views/livewire/device-interface-panel.blade.php` |
| Livewire MccDashboard | ✅ Code | `resources/views/livewire/mcc-dashboard.blade.php` |
| Topology Visualization | ✅ Code | `resources/js/topology.js` + views |
| No-Data Notice Component | ✅ Code | `resources/views/components/no-data-notice.blade.php` |
| Dashboard Test | ✅ Code | `tests/Feature/MonitoringDashboardTest.php` |
| Layout Updates | 🔄 Modified | `dashboard.blade.php`, `sidebar.blade.php`, `routes/web.php` |

---

## Open Work Items (Dari Vault & Recon)

| ID | Item | Status | Priority |
|----|------|--------|----------|
| D-014 | Polling Worker: threshold/stale detection | ❌ TODO | High |
| D-013 | DHCP Management (RouterOS) | ❌ TODO | High |
| - | Merge prototype UI ke monitoring-laravel-1 | 🔄 Planned | High |
| - | Polling scheduler (cron/queue) | ❌ TODO | Medium |
| - | Alert/Notification (Telegram/n8n) | ❌ TODO | Medium |
| - | Config Backup/Restore | ❌ TODO | Low |

---

## Database Schema (INFERRED)

```sql
-- devices (dari M1)
devices: id, name, ip, type, credentials_id, status, created_at, updated_at

-- device_latest_polls (dari prototype)
device_latest_polls: id, device_id, interface, rx_bytes, tx_bytes, 
                     cpu_usage, memory_usage, temperature, 
                     polled_at, created_at, updated_at

-- polling_logs (planned)
polling_logs: id, device_id, status, response_time, error_message, created_at
```

---

## Polling Architecture (PLANNED)

```
┌─────────────┐     Queue/Schedule      ┌──────────────┐
│  Scheduler  │ ─────────────────────▶  │  Worker      │
│  (cron/     │  Device list + creds    │  (API/SSH/   │
│   queue)    │                         │   SNMP)      │
└─────────────┘                         └──────┬───────┘
                                                │
                                                ▼
                                    ┌──────────────────┐
                                    │  DeviceLatestPoll │
                                    │  (upsert latest)  │
                                    └────────┬─────────┘
                                             │
                                             ▼
                                    ┌──────────────────┐
                                    │  Livewire Panel   │
                                    │  (real-time poll) │
                                    └──────────────────┘
```

---

## Terhubung ke

- [[LB-Project-Monitoring-Laravel-1]] — Backend M1
- [[LB-Project-Monitoring-Laravel-Prototype]] — UI Prototype active
- [[LB-Service-RouterOS]] — Target polling
- [[LB-Service-Zabbix]] — Alternative/legacy
- [[LB-Project-GNS3-Labs]] — Simulasi target
- [[Project Baru - Web Integrasi MikroTik RADIUS Zabbix]] — PKL parent
- [[LB-Graph-Service-Dependencies]] — Service graph
- [[LB-Graph-Project-Toolchain]] — Toolchain mapping

---

#laptop-battlefield #project #mcc #monitoring
[[Home-Laptop-Battlefield]]