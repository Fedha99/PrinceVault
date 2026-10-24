---
tags: [mikrotik, pkl, laravel, docker, filament, web-monitor, log]
---

# Log Kerja Hermes - web-monitor

> Project: [[Project Baru - Web Integrasi MikroTik RADIUS Zabbix]]
> Catatan belajar terpisah link di bawah per entri.

## 2026-10-03 — Setup Awal & SQLite Fix

**Tugas:** Setup environment Laravel 13 + Filament + PostgreSQL di `~/labs/monitoring/web-monitor`

### Yang dikerjakan:
1. **Laravel project created** — `composer create-project laravel/laravel .` di folder `web-monitor`
2. **SQLite driver error** — `php artisan migrate` gagal: `could not find driver`
   - **Catatan belajar:** [[Error - could not find driver SQLite]]
   - **Fix:** Enable `pdo_sqlite` + `sqlite3` di `/etc/php/conf.d/sqlite.ini`
   - **Verifikasi:** Migration SQLite berhasil jalan
3. **Mono-repo git init** — Parent repo di `~/labs/monitoring` track 3 folder
   - `web-monitor` punya nested `.git` → dihapus, parent track semua file (58 files)
   - `.gitignore` parent exclude `.env`, `vendor`, `node_modules`, `web-monitor/.git`
4. **LEARNING_NOTES.md** dibuat di parent folder

### Status akhir:
- Laravel 13 installed, `vendor/` ready
- SQLite fallback working
- Parent git clean, `web-monitor/` tracked as regular folder
- Docker daemon running (`DOCKER_HOST=unix:///var/run/docker.sock`)

### Next:
- Docker Compose + PostgreSQL
- Filament install
- Migration ke PostgreSQL

## 2026-10-03 — Docker Compose + PostgreSQL

**Tugas:** Setup Docker Compose dengan PostgreSQL 17 untuk web-monitor

### Yang dikerjakan:
1. **docker-compose.yml created** — 2 service: `db` (postgres:17) + `app` (php:8.5-cli)
2. **docker-compose install** — `sudo pacman -S docker-compose` (plugin bawaan nggak ada)
3. **Docker credential fix** — hapus `credsStore: "desktop"` dari `~/.docker/config.json`
4. **Composer install di container** — tambah `curl` + installer script di command app
5. **.env updated** — `DB_CONNECTION=pgsql`, `DB_HOST=db`, `DB_DATABASE=web_monitor`, dll
6. **Container up** — `docker-compose up -d` berhasil

### Masalah & Fix:
- **Missing docker-compose** → install standalone package
- **Credential error** → config.json cleanup
- **Composer not found** → install via curl di container startup
- **Apt install lambat** → first run butuh install libpq-dev, git, unzip, curl + compile pdo_pgsql

### Status akhir:
- ✅ 2 container running: `web-monitor-db` (healthy), `web-monitor-app` (serving di port 8000)
- ✅ PostgreSQL migration berhasil (3 tabel)
- ✅ Laravel welcome page accessible di http://localhost:8000
- ✅ Volume `db_data` persist data PostgreSQL

### Next:
- Install Filament v4
- Setup Panel Admin
- Buat resource CRUD untuk MikroTik/RADIUS/Zabbix
