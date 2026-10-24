---
tags: [mikrotik, pkl, laravel, docker, filament, web-monitor, dokumentasi, perbandingan]
---
# Dokumentasi Instalasi web-monitor + Perbandingan dengan Dokumentasi Resmi Laravel 13

> Project: [[Project Baru - Web Integrasi MikroTik RADIUS Zabbix]]
> Log kerja: [[Log Kerja Hermes - web-monitor]]

---

## 1. Lingkungan (Environment)

| Komponen | Versi yang Dipakai | Catatan |
|----------|-------------------|---------|
| **OS** | Artix Linux (Arch-based, OpenRC) | Kernel Zen 7.2.6 |
| **PHP** | 8.5.10 (cli) | Dari repo Arch official, compiled dengan `--with-pdo-pgsql=shared` dll |
| **Composer** | 2.10.3 | Host binary, juga di-install ulang di container via curl |
| **Docker** | 29.8.1 | Engine only, daemon manual start (`systemctl start docker`) |
| **Docker Compose** | 5.5.1 (standalone `docker-compose` binary) | Plugin `docker compose` TIDAK tersedia di Arch default |
| **PostgreSQL** | 17 (image `postgres:17`) | Di container, bukan host |
| **Laravel** | 13.x (v13.34.0 framework) | Via `composer create-project laravel/laravel` |

**Sumber verifikasi:**
- `php -v`, `composer -V`, `docker --version`, `docker-compose --version`
- `php -i | grep configure` → configure command flags
- `docker-compose.yml` file content

---

## 2. Langkah Instalasi (Berurutan + Alasan)

### 2.1 Persiapan Host
```bash
# Pastikan PHP, Composer, Docker sudah terinstall
php -v && composer -V && docker --version
```
**Alasan:** Prasyarat Laravel 13 (dokumen resmi: [Installation](https://laravel.com/docs/13.x/installation) butuh PHP, Composer).

### 2.2 Buat Project Laravel
```bash
cd ~/labs/monitoring/web-monitor
composer create-project laravel/laravel . --prefer-dist
```
**Alasan:** Cara standar dokumen resmi (bagian "Creating an Application" di halaman Installation). Output: Laravel 13 + vendor + `.env.example` → `.env` + `APP_KEY` generate otomatis.

### 2.3 Fix SQLite Driver (Artix/Arch Specific)
**Gejala:** `php artisan migrate` → `could not find driver (Connection: sqlite)`
**Penyebab:** PHP Arch dikompilasi `--with-pdo-sqlite=shared`, ekstensi `.so` ada tapi TIDAK diaktifkan di `php.ini` default.
**Fix:**
```bash
sudo -S -p '' sh -c 'echo "extension=pdo_sqlite" > /etc/php/conf.d/sqlite.ini && echo "extension=sqlite3" >> /etc/php/conf.d/sqlite.ini'
```
**Verifikasi:** `php -m | grep sqlite` → `pdo_sqlite` + `sqlite3` muncul.
**Catatan:** Ini **spesifik Arch/Artix**, tidak dicakup dokumen resmi Laravel. SQLite cuma fallback, production pakai PostgreSQL.

### 2.4 Git Mono-repo Setup (Parent Folder)
```bash
cd ~/labs/monitoring
git init
# .gitignore parent dibuat (exclude .env, vendor, node_modules, web-monitor/.git)
# web-monitor/.git dihapus (nested repo)
git add web-monitor/
git commit -m "chore: add web-monitor Laravel project files to mono-repo"
```
**Alasan:** Project Pak Shobi butuh 1 repo untuk `server_home`, `web-monitor`, `zabbix`. Dokumen resmi Laravel **tidak mengatur struktur git mono-repo**.

### 2.5 Docker Compose + PostgreSQL (Custom, BUKAN Laravel Sail)
**File:** `docker-compose.yml` (2 service: `db` + `app`)

**db service:**
- Image: `postgres:17`
- Env: `POSTGRES_DB=web_monitor`, `POSTGRES_USER=web_monitor`, `POSTGRES_PASSWORD=secret`
- Volume: `db_data` persist
- Healthcheck: `pg_isready -U web_monitor -d web_monitor`
- Port: `5432:5432` (expose ke host)

**app service:**
- Image: `php:8.5-cli` (BUKAN image Laravel Sail `laravelsail/php85-composer`)
- Working dir: `/var/www/html`
- Mount: `./:/var/www/html` (bind mount project host)
- Env: `DB_CONNECTION=pgsql`, `DB_HOST=db`, `DB_PORT=5432`, dll
- Depends on: `db` dengan `condition: service_healthy`
- Command: install deps → install Composer → install PHP ext → migrate → serve

**Alasan pakai custom bukan Sail:**
- Pak Shobi minta PostgreSQL + Docker manual
- Ingin belajar cara kerja container "dari bawah" (bukan abstraction Sail)
- Sail default pakai MySQL, kita butuh PostgreSQL 17 spesifik
- Sail butuh `composer require laravel/sail --dev` + `php artisan sail:install` → menambah layer abstraksi

### 2.6 Update .env untuk PostgreSQL
```env
DB_CONNECTION=pgsql
DB_HOST=db
DB_PORT=5432
DB_DATABASE=web_monitor
DB_USERNAME=web_monitor
DB_PASSWORD=secret
```
**Alasan:** Laravel default `DB_CONNECTION=sqlite`. Perlu diubah agar pakai PostgreSQL di container `db`. Sesuai dokumen [Database Configuration](https://laravel.com/docs/13.x/database#configuration) — env-driven config.

### 2.7 Jalankan Container
```bash
docker-compose up -d
```
**Proses di container app:**
1. `apt-get update && apt-get install -y libpq-dev git unzip curl`
2. `docker-php-ext-install pdo pdo_pgsql` (compile ekstensi PostgreSQL)
3. `curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer`
4. `composer install --no-interaction`
5. `php artisan migrate --force`
6. `php artisan serve --host=0.0.0.0 --port=8000`

**Verifikasi:**
- `docker-compose ps` → 2 container Up (db healthy)
- `curl http://localhost:8000` → Laravel welcome page HTML

---

## 3. Tabel Perbandingan: Dokumen Resmi vs Implementasi Kita

| Langkah / Komponen | Dokumentasi Resmi Laravel 13 | Yang Gue Lakuin | Beda atau Sama? | Kenapa Beda |
|---|---|---|---|---|
| **Bikin project** | `laravel new example-app` ATAU `composer create-project laravel/laravel` ([Installation](https://laravel.com/docs/13.x/installation#creating-an-application)) | `composer create-project laravel/laravel .` | **SAMA** | Pilih `composer` karena sudah ada di host, nggak butuh `laravel/installer` global |
| **Database default** | SQLite (`DB_CONNECTION=sqlite`, `DB_DATABASE=database/database.sqlite`) — [Database: Getting Started](https://laravel.com/docs/13.x/database#sqlite-configuration) | SQLite awal (default Laravel), Lalu **diubah ke PostgreSQL** via `.env` + Docker | **BEDA** | Production butuh PostgreSQL; Sail support Postgres tapi kita pakai custom compose |
| **Setup Docker** | **Laravel Sail**: `composer require laravel/sail --dev` → `php artisan sail:install` → publish `compose.yaml` + `sail` script ([Sail Installation](https://laravel.com/docs/13.x/sail#installation)) | **Custom `docker-compose.yml`** manual: 2 service (`db` + `app`), image `php:8.5-cli` + `postgres:17` | **BEDA** | Mau belajar Docker native, kontrol penuh image/version, nggak mau abstraction Sail |
| **Aktivasi ekstensi PHP (pdo_pgsql)** | Sail: otomatis via `build.args` di `compose.yaml` atau `php.ini` di image Sail ([Sail PHP Extensions](https://laravel.com/docs/13.x/sail#sail-php-extensions)) | Manual di `docker-compose.yml` command: `docker-php-ext-install pdo pdo_pgsql` setelah `apt-get install libpq-dev` | **BEDA** | Image `php:8.5-cli` minimal, ekstensi butuh compile manual. Sail image sudah include. |
| **Install Composer di container** | Sail: image `laravelsail/php85-composer` sudah include Composer | `curl -sS https://getcomposer.org/installer \| php -- --install-dir=/usr/local/bin --filename=composer` | **BEDA** | Image `php:8.5-cli` resmi Docker Hub TIDAK include Composer |
| **Jalankan server dev** | `composer run dev` (runs `php artisan serve` + queue + Vite via `concurrently`) ATAU `php artisan serve` ([Starter Kits](https://laravel.com/docs/13.x/starter-kits#creating-an-application-using-a-starter-kit)) | `php artisan serve --host=0.0.0.0 --port=8000` di container command | **SEDANG SAMA** (perintah `serve` sama), tapi **BEDA** cara jalanin: kita di container command, resmi di host via `composer run dev` |
| **Penanganan .env & APP_KEY** | `.env` dari `.env.example`, `APP_KEY` generate otomatis saat `laravel new` / `create-project` ([Installation](https://laravel.com/docs/13.x/installation#initial-configuration)) | Sama: `.env` copy dari `.env.example`, `APP_KEY` sudah ada dari `create-project` | **SAMA** | Ikut default Laravel |
| **Migrasi database** | `php artisan migrate` (host) ATAU `sail artisan migrate` (Sail) | `php artisan migrate --force` di **container command** (otomatis saat container start) | **BEDA** | `--force` non-interactive untuk CI/container; resmi asumsikan interactive host |

---

## 4. Penyimpangan Keamanan (Security Deviations)

| Titik | Kondisi Saat Ini | Praktik Direkomendasikan (Resmi/Umum) | Status |
|-------|------------------|----------------------------------------|--------|
| **Password DB hardcoded** | `POSTGRES_PASSWORD=secret` di `docker-compose.yml` | Gunakan `.env` file + `env_file:` di compose, ATAU Docker Secrets (Swarm) | ❌ **BELUM DIPERBAIKI** — masih plain text di file yg di-commit |
| **Port DB expose ke host** | `ports: - "5432:5432"` di service `db` | Jangan expose DB port ke host; gunakan internal network only. Akses via `db` hostname di container app | ❌ **BELUM DIPERBAIKI** |
| **Port app expose ke host** | `ports: - "8000:8000"` | OK untuk dev lokal, tapi production butuh reverse proxy (nginx) + TLS | ⚠️ **DEV ONLY** — acceptable untuk development |
| **User container root** | Image `php:8.5-cli` jalan sebagai `root` (default) | Buat user non-root di Dockerfile, `USER` directive | ❌ **BELUM DIPERBAIKI** |
| **`curl \| php` install Composer** | `curl -sS https://getcomposer.org/installer \| php -- ...` | Verifikasi checksum installer, ATAU pakai image yang sudah ada Composer (`composer:latest` multi-stage) | ⚠️ **RISIKO MENENGAH** — common practice tapi bukan best practice |
| **`--force` pada migrasi** | `php artisan migrate --force` | Hanya untuk non-interactive (CI/CD). Dev sebaiknya tanpa `--force` biar bisa konfirmasi | ⚠️ **OK UNTUK CONTAINER** tapi risky kalau schema salah |
| **Tidak ada TLS/SSL** | HTTP plain di port 8000 | Production: HTTPS via reverse proxy (nginx/Caddy) + Let's Encrypt | ❌ **BELUM DIPERBAIKI** — dev only |
| **`.env` di docker-compose.yml** | Env DB di-hardcode di `docker-compose.yml` (duplicate dengan `.env`) | Single source of truth: `.env` file + `env_file:` di compose | ❌ **BELUM DIPERBAIKI** — duplicate config |
| **Docker credential store** | `credsStore: "desktop"` di `~/.docker/config.json` (hapus manual) | Hapus jika nggak pakai Docker Desktop; gunakan `docker login` manual | ✅ **SUDAH DIPERBAIKI** |

---

## 5. Yang Belum Pasti (Unverified / Unknown)

| Topik | Status | Catatan |
|-------|--------|---------|
| **Struktur `compose.yaml` Laravel Sail untuk PostgreSQL 17** | **Tidak terverifikasi** | Dokumen [Sail](https://laravel.com/docs/13.x/sail) menyebut `sail:install` pilih database, tapi detail `compose.yaml` hasil generate untuk Postgres 17 tidak dibuka/verifikasi. |
| **Apakah Sail image `laravelsail/php85-composer` support `pdo_pgsql` out-of-the-box** | **Tidak terverifikasi** | Sail docs bilang "Additional PHP Extensions" bisa dikonfigurasi, tapi default-nya apa saja tidak eksplisit di halaman yang dibaca. |
| **Performa `php:8.5-cli` vs `laravelsail/php85-composer`** | **Tidak terverifikasi** | Tidak dibandingkan. Sail image include supervisor, Xdebug config, dll. Kita pakai minimal CLI. |
| **Apakah `docker-php-ext-install pdo pdo_pgsql` cara yang benar untuk PHP 8.5** | **Tidak terverifikasi** | Bekerja di testing, tapi dokumentasi resmi PHP/Docker untuk versi 8.5 spesifik tidak dicek. |
| **Healthcheck `pg_isready` interval/timeout optimal** | **Tidak terverifikasi** | Pakai nilai default yang umum (5s/5s/5 retries), tidak dibandingkan dengan best practice PostgreSQL. |
| **Volume `db_data` permission di host Artix** | **Tidak terverifikasi** | Container jalan sebagai root, volume mount permission di host belum dicek untuk multi-user scenario. |
| **Apakah `composer install` di container setiap restart (rebuild) perlu** | **Tidak terverifikasi** | Saat ini `command` jalan setiap `up`, `composer install` ulang. Bisa dioptimasi dengan volume `vendor` atau multi-stage build. |
| **Konfigurasi `config/database.php` untuk `pgsql` pool/read-write** | **Tidak terverifikasi** | Default Laravel config dipakai, fitur [Pooled PostgreSQL](https://laravel.com/docs/13.x/database#pooled-postgresql-connections) tidak dievaluasi. |

---

## 6. Ringkasan Posisi vs Roadmap

```
FOUNDATION + DATABASE/INFRA: ✅ SELESAI (~28%)
├── Laravel 13 project
├── SQLite fix (Arch-specific)
├── Git mono-repo
├── Docker Compose custom + PostgreSQL 17
└── Migration + server running di container

BACKEND CORE (Filament + Panel): ⏳ NEXT
├── composer require filament/filament
├── php artisan filament:install --panels
├── Buat user admin + resource CRUD
└── ...

INTEGRATION LAYER: ⬜ BELUM
PRODUCTION READY: ⬜ BELUM
```

---

## 7. Referensi Dokumen Resmi yang Dibaca

1. **Installation** — https://laravel.com/docs/13.x/installation
   - Creating an Application, Initial Configuration, Environment Based Configuration
2. **Database: Getting Started** — https://laravel.com/docs/13.x/database
   - Configuration, SQLite Configuration, PostgreSQL support
3. **Laravel Sail** — https://laravel.com/docs/13.x/sail
   - Introduction, Installation and Setup, Executing Commands, PHP Versions, Customization
4. **Starter Kits** — https://laravel.com/docs/13.x/starter-kits
   - `composer run dev` workflow
5. **Config/database.php** — File lokal project (source of truth untuk default config)

> Catatan: Semua referensi resmi berdasarkan versi **13.x** (sesuai `laravel/framework` v13.34.0 di `composer.lock`). Tidak menggunakan memori atau versi lama.

---

*File ini dibuat otomatis berdasarkan riwayat commit, LEARNING_NOTES.md, Log Kerja Hermes, dan verifikasi file aktual di repo. Tidak ada klaim yang tidak dibackup bukti.*
