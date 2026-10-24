---
title: LB-Project-Web-Monitor
type: project
tags: [#type/project, #laptop-battlefield, #laravel, #filament, #postgresql, #historical]
last_verified: 2026-10-24
confidence: VERIFIED
---

# LB-Project-Web-Monitor — Laravel 13 + Filament + PostgreSQL (History Only)

> Recon read-only 2026-10-24. Project **sudah dihapus** dari mono-repo `~/labs/monitoring` (tracked sebagai regular folder lalu dihapus). Hanya history di git log & vault existing.

---

## Identitas Project (Historical)

| Bidang | Nilai |
|--------|-------|
| **Path (lama)** | `~/labs/monitoring/web-monitor` |
| **Repo** | Mono-repo parent `~/labs/monitoring` (commit history) |
| **Framework** | Laravel 13.x (v13.34.0) |
| **UI** | Filament 3.x |
| **Database** | PostgreSQL 17 (container) + SQLite fallback |
| **Stack** | PHP 8.5, Docker Compose, Nginx/FrankenPHP (INFERRED) |

---

## Git History (dari mono-repo parent)

```
2026-10-03 chore: add web-monitor Laravel project files to mono-repo
2026-10-03 chore: ignore web-monitor/.git to treat as regular folder in mono-repo
2026-10-03 chore: init parent repo with gitignore for mono-repo structure
2026-10-12 chore: hapus web-monitor/ (versi lama tanpa M1) + bersihkan ignore
```

**Timeline**:
- 3 Okt: Ditambah ke mono-repo, nested `.git` dihapus, track sebagai folder biasa
- 12 Okt: **Dihapus** dari mono-repo (commit "hapus web-monitor/ (versi lama tanpa M1)")

---

## Setup yang Pernah Dikerjakan (dari vault existing)

### 1. Laravel Project Created
```bash
cd ~/labs/monitoring/web-monitor
composer create-project laravel/laravel . --prefer-dist
```

### 2. SQLite Driver Fix (Arch/Artix Specific)
**Gejala**: `php artisan migrate` → `could not find driver (Connection: sqlite)`
**Penyebab**: PHP Arch dikompilasi `--with-pdo-sqlite=shared`, ekstensi tidak diaktifkan default
**Fix**:
```bash
sudo sh -c 'echo "extension=pdo_sqlite" > /etc/php/conf.d/sqlite.ini && echo "extension=sqlite3" >> /etc/php/conf.d/sqlite.ini'
```
**Verifikasi**: `php -m | grep sqlite` → `pdo_sqlite` + `sqlite3` muncul

Lihat detail: [[LB-Incident-SQLite-Driver-Missing]]

### 3. Docker Compose + PostgreSQL
**docker-compose.yml**: 2 service
- `db`: `postgres:17` (volume `db_data`)
- `app`: `php:8.5-cli` (install composer, libpq-dev, compile pdo_pgsql)

**Masalah & Fix**:
- Missing `docker-compose` standalone → `sudo pacman -S docker-compose`
- Credential error → hapus `credsStore: "desktop"` dari `~/.docker/config.json`
- Composer not found in container → install via curl di startup command
- Apt install lambat (first run compile pdo_pgsql)

### 4. Status Akhir (3 Okt)
- ✅ 2 container running: `web-monitor-db` (healthy), `web-monitor-app` (port 8000)
- ✅ PostgreSQL migration berhasil (3 tabel)
- ✅ Laravel welcome page accessible di http://localhost:8000
- ✅ Volume `db_data` persist data

---

## Kenapa Dihapus?

Commit message: `"hapus web-monitor/ (versi lama tanpa M1) + bersihkan ignore"`

**Interpretasi**: Project ini adalah **versi awal (pre-M1)** untuk web-monitor. Setelah MCC (Monitoring Control Center) mulai dikembangkan di `monitoring-laravel-1` & `prototype`, web-monitor versi lama tidak dipakai lagi.

---

## File Vault Existing Terkait

- [[Log Kerja Hermes - web-monitor]] — Log kerja detail 3 Okt (setup, SQLite fix, Docker)
- [[Dokumentasi Instalasi web-monitor]] — Dokumentasi lengkap instalasi + perbandingan resmi Laravel 13
- [[Error - could not find driver SQLite]] — Note error & fix SQLite driver
- [[Project Baru - Web Integrasi MikroTik RADIUS Zabbix]] — Project PKL parent

---

## Artifacts Tersisa

- Docker images: `php:8.5-cli` (797MB), `postgres:17` (646MB) — masih ada di `docker images`
- Container: `web-monitor-app` (Exited 137 = OOM), `web-monitor-db` (Exited 0) — 3 minggu lalu
- Network bridge: `br-e12f3b561011` (172.18.0.0/16) — DOWN

---

## Terhubung ke

- [[LB-Project-Monitoring-Laravel-1]] — MCC M1 replacement
- [[LB-Project-Monitoring-Laravel-Prototype]] — Active UI development
- [[LB-Incident-SQLite-Driver-Missing]] — SQLite fix detail
- [[Log Kerja Hermes - web-monitor]] — Vault log
- [[Dokumentasi Instalasi web-monitor]] — Vault doc
- [[Project Baru - Web Integrasi MikroTik RADIUS Zabbix]] — PKL project

---

#laptop-battlefield #project #laravel #filament #postgresql #historical
[[Home-Laptop-Battlefield]]