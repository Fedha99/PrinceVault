---
title: LB-Project-Monitoring-Laravel-Prototype
type: project
tags: [#type/project, #laptop-battlefield, #laravel, #monitoring, #mcc, #livewire]
last_verified: 2026-10-24
confidence: VERIFIED
---

# LB-Project-Monitoring-Laravel-Prototype — MCC + Livewire Dashboard + DeviceLatestPoll

> Recon read-only 2026-10-24. Data dari git log, status, remote, struktur file. Mono-repo root: `~/labs/monitoring`.

---

## Identitas Project

| Bidang | Nilai |
|--------|-------|
| **Path** | `/home/princeannakhla/labs/monitoring/monitoring-laravel-prototype` |
| **Repo** | Sub-folder mono-repo (origin: Fedha99/monitoring-laravel) |
| **Branch aktif** | `main` (2631bfa) |
| **Remote** | https://github.com/Fedha99/monitoring-laravel.git |
| **Framework** | Laravel 13.x + Livewire 3 + Filament |
| **Stack** | PHP 8.5, PostgreSQL 17 (container), Docker |

---

## Git History (90 hari terakhir)

```
2026-10-12 FR-002: UI manajemen perangkat (CRUD)
2026-10-12 chore: hapus web-monitor/ (versi lama tanpa M1) + bersihkan ignore
2026-10-12 M1: fondasi aplikasi MCC
2026-10-03 Rename LEARNING_NOTES.md to README.md
2026-10-03 chore: add web-monitor Laravel project files to mono-repo
2026-10-03 chore: ignore web-monitor/.git to treat as regular folder in mono-repo
2026-10-03 chore: init parent repo with gitignore for mono-repo structure
```

> Sama dengan `monitoring-laravel-1` hingga commit M1. Divergen setelah itu.

---

## Status Working Tree (Uncommitted)

```
 M .env.example
 M app/Models/Device.php
 M composer.lock
 M package-lock.json
 M resources/css/app.css
 M resources/js/app.js
 M resources/views/components/layouts/app/sidebar.blade.php
 M resources/views/dashboard.blade.php
 M routes/web.php
?? .claude/
?? .cursor/
?? .hermes/
?? AGENTS.md
?? CLAUDE.md
?? app/Models/DeviceLatestPoll.php
?? app/Support/
?? database/migrations/2026_10_12_000003_create_device_latest_polls_table.php
?? database/seeders/DummyMonitoringSeeder.php
?? mcc/
?? opencode.jsonc
?? resources/js/topology.js
?? resources/views/components/no-data-notice.blade.php
?? resources/views/livewire/device-interface-panel.blade.php
?? resources/views/livewire/mcc-dashboard.blade.php
?? resources/views/topology/
?? tests/Feature/MonitoringDashboardTest.php
```

**File baru (untracked) — UI & Data Layer**:
- `app/Models/DeviceLatestPoll.php` — Model untuk tabel polling terbaru
- `database/migrations/2026_10_12_000003_create_device_latest_polls_table.php` — Migration tabel polling
- `database/seeders/DummyMonitoringSeeder.php` — Seeder data dummy
- `resources/views/livewire/device-interface-panel.blade.php` — Panel interface device
- `resources/views/livewire/mcc-dashboard.blade.php` — Dashboard utama MCC
- `resources/views/components/no-data-notice.blade.php` — Component empty state
- `resources/js/topology.js` — Visualisasi topologi jaringan
- `resources/views/topology/` — Folder view topologi
- `tests/Feature/MonitoringDashboardTest.php` — Test dashboard

**File modified**:
- `Device.php` — Relasi ke DeviceLatestPoll?
- `dashboard.blade.php`, `sidebar.blade.php` — Layout dashboard
- `routes/web.php` — Route baru untuk Livewire
- `app.css`, `app.js` — Asset build

---

## Fitur Terverifikasi (dari file untracked + commit)

| Fitur | Status | Bukti |
|-------|--------|-------|
| M1: Fondasi MCC | ✅ Done | Commit "M1: fondasi aplikasi MCC" |
| Auth + Role | ✅ Done | Termasuk di M1 |
| CRUD Device | ✅ Done | Commit FR-002 |
| **DeviceLatestPoll Model** | ✅ Code exists | `app/Models/DeviceLatestPoll.php` (untracked) |
| **Migration DeviceLatestPoll** | ✅ Code exists | Migration file (untracked) |
| **DummyMonitoringSeeder** | ✅ Code exists | Seeder file (untracked) |
| **Livewire DeviceInterfacePanel** | ✅ Code exists | Blade component (untracked) |
| **Livewire MccDashboard** | ✅ Code exists | Blade component (untracked) |
| **Topology Visualization** | ✅ Code exists | `topology.js` + views (untracked) |
| **No-Data Notice Component** | ✅ Code exists | Component (untracked) |
| **Dashboard Test** | ✅ Code exists | `MonitoringDashboardTest.php` (untracked) |
| Polling Worker RouterOS | ❌ Belum | D-014 pending |
| DHCP Management | ❌ Belum | D-013 pending |

---

## Database (INFERRED)

- **Production**: PostgreSQL 17 via Docker (container `web-monitor-db`, image `postgres:17`, exited 3 minggu lalu)
- **Connection**: `DB_CONNECTION=pgsql` di `.env.example` — konsisten dengan container
- **Migration baru**: `create_device_latest_polls_table` — tabel untuk menyimpan hasil polling terbaru per device

---

## Arsitektur Data (INFERRED dari nama file)

```
Device (1) ───< (has many) >─── DeviceLatestPoll
    │
    └── DeviceInterfacePanel → menampilkan interface per device
    └── MccDashboard → agregasi status semua device
    └── Topology → visualisasi jaringan (JS)
```

---

## Perbedaan dengan monitoring-laravel-1

| Aspek | monitoring-laravel-1 | monitoring-laravel-prototype |
|-------|----------------------|------------------------------|
| **Fokus** | Backend M1 + CRUD Device | **UI Dashboard + Livewire + DeviceLatestPoll** |
| **DeviceLatestPoll** | ❌ | ✅ (model + migration + seeder) |
| **Livewire Panel** | ❌ | ✅ (DeviceInterfacePanel, MccDashboard) |
| **Topology JS** | ❌ | ✅ (`resources/js/topology.js`) |
| **Tests** | ❓ | ✅ (`MonitoringDashboardTest.php`) |
| **Seeder** | ❓ | ✅ (`DummyMonitoringSeeder`) |
| **No-data notice** | ❌ | ✅ (component) |
| **Target** | Backend foundation | **Active UI development** |

---

## Masalah Terbuka

1. **Semua file UI baru untracked** — perlu `git add` + commit
2. **Uncommitted modifications** — `.env.example`, `Device.php`, lock files, assets, routes
3. **Container PostgreSQL exited** — butuh `docker-compose up -d` untuk dev
4. **Polling worker belum ada** — D-014 threshold/stale, D-013 DHCP pending
5. **mcc/ folder untracked** — apa isinya? sama di kedua project?

---

## Terhubung ke

- [[LB-Project-Monitoring-Laravel-1]] — backend foundation (sama M1)
- [[LB-Project-Web-Monitor]] — project lama (web-monitor) sudah dihapus
- [[LB-Development-Toolchain]] — PHP, Composer, Docker, PostgreSQL, Node/Vite
- [[LB-Network]] — Docker bridge br-e12f3b561011 (PostgreSQL)
- [[LB-Service-PostgreSQL]] — database service
- [[Project Baru - Web Integrasi MikroTik RADIUS Zabbix]] — project PKL parent
- [[Log Kerja Hermes - web-monitor]] — log setup awal

---

#laptop-battlefield #project #laravel #monitoring #mcc #livewire
[[Home-Laptop-Battlefield]]