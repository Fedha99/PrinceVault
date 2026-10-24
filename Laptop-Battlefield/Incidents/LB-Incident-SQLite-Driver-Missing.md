---
title: LB-Incident-SQLite-Driver-Missing
type: incident
tags: [#type/incident, #laptop-battlefield, #php, #sqlite, #laravel, #arch]
last_verified: 2026-10-24
confidence: VERIFIED
---

# LB-Incident-SQLite-Driver-Missing — PHP Arch Shared Extension Tidak Diaktifkan

> Recon read-only 2026-10-24. Data dari vault existing notes (MikroTik folder) + verifikasi sistem. Terjadi 2026-10-03 saat setup `web-monitor`.

---

## Ringkasan

**Gejala**: `php artisan migrate` gagal dengan error:
```
WARN could not find driver (Connection: sqlite, Database: database/database.sqlite, SQL: select exists ...)
```

**Penyebab**: PHP 8.5 di Arch/Artix dikompilasi dengan `--with-pdo-sqlite=shared` dan `--with-sqlite3=shared`. Ekstensi dikompilasi sebagai file `.so` terpisah (`pdo_sqlite.so`, `sqlite3.so` di `/usr/lib/php/modules/`) tapi **tidak diaktifkan otomatis** di `php.ini`.

**Fix**: Buat file `/etc/php/conf.d/sqlite.ini` dengan isi:
```ini
extension=pdo_sqlite
extension=sqlite3
```

**Verifikasi**: `php -m | grep sqlite` → muncul `pdo_sqlite` dan `sqlite3`. Migration SQLite berhasil jalan.

---

## Detail Diagnosa (Terverifikasi 3 Okt 2026)

| Langkah | Perintah | Hasil | Kesimpulan |
|---------|----------|-------|------------|
| 1 | `php -m | grep sqlite` | Kosong | Extension tidak terload |
| 2 | `php -i | grep sqlite` | Muncul di Configure Command sebagai `shared` | Dikompilasi tapi shared |
| 3 | `find /usr/lib/php -name "*sqlite*"` | `/usr/lib/php/modules/pdo_sqlite.so`, `sqlite3.so` | File .so ada |
| 4 | `grep pdo_sqlite /etc/php/php.ini` | `;extension=pdo_sqlite` (dikomentari) | Tidak aktif default |
| 5 | `ls /etc/php/conf.d/` | Kosong | Tidak ada file .ini tambahan |

---

## Root Cause (Arch/Artix Specific)

Di distribusi berbasis Arch, PHP dikompilasi dengan banyak ekstensi sebagai **shared modules** (`.so`). Berbeda dengan Debian/Ubuntu yang biasanya enable default, Arch **memerlukan file `.ini` di `/etc/php/conf.d/`** untuk mengaktifkan setiap ekstensi shared.

Ini **tidak tercakup** di dokumentasi resmi Laravel (yang asumsikan PHP standard dengan ekstensi built-in atau auto-loaded).

---

## Fix yang Diterapkan (3 Okt 2026)

```bash
sudo sh -c 'echo "extension=pdo_sqlite" > /etc/php/conf.d/sqlite.ini && echo "extension=sqlite3" >> /etc/php/conf.d/sqlite.ini'
```

**Catatan**: Butuh `sudo` (system-wide). Untuk project-only, bisa pakai `php -d extension=pdo_sqlite -d extension=sqlite3 artisan migrate` tapi tidak persist.

---

## Verifikasi Pasca-Fix

```bash
$ php -m | grep sqlite
pdo_sqlite
sqlite3

$ php artisan migrate --graceful
# Migration berhasil jalan
```

---

## Pencegahan ke Depan

1. **Setelah install PHP baru**: Selalu cek `php -m` untuk ekstensi critical (pdo_pgsql, pdo_mysql, pdo_sqlite, sqlite3, redis, gd, intl, zip, bcmath).
2. **Project Laravel**: SQLite cuma fallback (testing/local). Production pakai **PostgreSQL via Docker** (sudah setup di web-monitor & monitoring-laravel).
3. **Docker container**: Base image `php:8.5-cli` sudah include ekstensi umum, tapi perlu `docker-php-ext-install pdo_pgsql` di Dockerfile (sudah dilakukan di web-monitor).
4. **Documentation**: Catat di project README / LEARNING_NOTES.md agar tidak lupa.

---

## Terhubung ke

- [[Log Kerja Hermes - web-monitor]] — Log asli 3 Okt (entri SQLite Fix)
- [[Dokumentasi Instalasi web-monitor]] — Dokumentasi lengkap instalasi
- [[Error - could not find driver SQLite]] — Note error vault existing
- [[LB-Project-Web-Monitor]] — Project tempat insiden terjadi
- [[LB-Development-Toolchain]] — PHP 8.5.12 di Arch
- [[LB-Service-PostgreSQL]] — Production DB alternative

---

#laptop-battlefield #incident #php #sqlite #laravel #arch
[[Home-Laptop-Battlefield]]