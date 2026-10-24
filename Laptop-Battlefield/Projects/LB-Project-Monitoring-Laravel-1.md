---
title: LB-Project-Monitoring-Laravel-1
type: project
tags: [#type/project, #laptop-battlefield, #laravel, #monitoring, #mcc]
last_verified: 2026-10-24
confidence: VERIFIED
---

# LB-Project-Monitoring-Laravel-1 — MCC M1 Auth/Role + CRUD Device

> Recon read-only 2026-10-24. Data dari git log, status, remote, direktori project. Mono-repo root: `~/labs/monitoring`.

---

## Identitas Project

| Bidang | Nilai |
|--------|-------|
| **Path** | `/home/princeannakhla/labs/monitoring/monitoring-laravel-1` |
| **Repo** | Sub-folder mono-repo (origin: Fedha99/monitoring-laravel) |
| **Branch aktif** | `main` (2631bfa) |
| **Remote** | https://github.com/Fedha99/monitoring-laravel.git |
| **Framework** | Laravel 13.x (v13.34.0) |
| **Stack** | PHP 8.5, MariaDB 11 (container), Filament (UI), Docker |

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

---

## Status Working Tree (Uncommitted)

```
 M .env.example
 M composer.lock
 M package-lock.json
?? .claude/
?? .cursor/
?? .hermes/
?? AGENTS.md
?? CLAUDE.md
?? mcc/
?? opencode.jsonc
```

**Artinya**:
- `.env.example`, `composer.lock`, `package-lock.json` — modified tapi belum commit
- `.claude/`, `.cursor/`, `.hermes/` — config AI agents (untracked, lokal)
- `AGENTS.md`, `CLAUDE.md` — dokumentasi agent (untracked)
- `mcc/` — folder baru (untracked), kemungkinan module MCC
- `opencode.jsonc` — CodeGraph MCP config (untracked)

---

## Fitur Terverifikasi (dari commit + struktur)

| Fitur | Status | Bukti |
|-------|--------|-------|
| M1: Fondasi MCC | ✅ Done | Commit "M1: fondasi aplikasi MCC" |
| Auth + Role | ✅ Done | Termasuk di M1 |
| CRUD Device | ✅ Done | Commit "FR-002: UI manajemen perangkat (CRUD)" |
| Polling Worker RouterOS | ❌ Belum | D-014 threshold/stale pending |
| DHCP Management | ❌ Belum | D-013 pending |
| Dashboard Livewire | ❌ Belum | Ada di prototype, bukan di sini |
| DeviceLatestPoll table | ❌ Belum | Ada di prototype |
| Tests | ❓ UNKNOWN | Tidak terlihat di status |

---

## Database (INFERRED)

- **Production**: MariaDB 11 via Docker (container `mcc-mariadb`, image `mariadb:11`, exited 6 hari lalu)
- **Connection**: `DB_CONNECTION=pgsql` di `.env.example` tapi container pakai MariaDB — **perlu verifikasi**
- **Migration**: Belum terlihat file migration baru setelah M1

---

## AI Agent Config (Project-Local)

| File | Isi |
|------|-----|
| `.claude/` | Claude Desktop/Code config (untracked) |
| `.cursor/` | Cursor IDE config (untracked) |
| `.hermes/` | Hermes profile/project config (untracked) |
| `AGENTS.md` | CodeGraph usage guide (untracked) |
| `CLAUDE.md` | Project instructions untuk Claude (untracked) |
| `opencode.jsonc` | CodeGraph MCP config (untracked) |

---

## Perbedaan dengan Prototype

| Aspek | monitoring-laravel-1 | monitoring-laravel-prototype |
|-------|----------------------|------------------------------|
| **Fokus** | Backend M1 + CRUD Device | UI Dashboard + Livewire + DeviceLatestPoll |
| **DeviceLatestPoll** | ❌ | ✅ (migration + model + seeder) |
| **Livewire Panel** | ❌ | ✅ (DeviceInterfacePanel, MccDashboard) |
| **Topology JS** | ❌ | ✅ (resources/js/topology.js) |
| **Tests** | ❓ | ✅ (MonitoringDashboardTest.php) |
| **Seeder** | ❓ | ✅ (DummyMonitoringSeeder) |
| **No-data notice** | ❌ | ✅ (component) |

> **Kesimpulan**: `monitoring-laravel-prototype` adalah **active UI development target**, `monitoring-laravel-1` adalah backend foundation.

---

## Masalah Terbuka

1. **Uncommitted config files** — `.env.example`, lock files, agent configs perlu review & commit
2. **mcc/ folder untracked** — apa isinya? module baru?
3. **MariaDB vs PostgreSQL** — `.env.example` bilang pgsql, container mariadb
4. **Polling worker belum ada** — D-014, D-013 pending
5. **Container mcc-mariadb exited** — butuh restart untuk dev

---

## Terhubung ke

- [[LB-Project-Monitoring-Laravel-Prototype]] — UI active development
- [[LB-Project-Web-Monitor]] — project lama (web-monitor) sudah dihapus dari mono-repo
- [[LB-Development-Toolchain]] — PHP, Composer, Docker, MariaDB
- [[LB-Network]] — Docker bridge br-db1d13c7f3b8 (mariadb)
- [[LB-Service-MariaDB]] — database service
- [[Project Baru - Web Integrasi MikroTik RADIUS Zabbix]] — project PKL parent
- [[Log Kerja Hermes - web-monitor]] — log setup awal

---

#laptop-battlefield #project #laravel #monitoring #mcc
[[Home-Laptop-Battlefield]]