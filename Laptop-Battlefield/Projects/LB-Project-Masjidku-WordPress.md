---
title: LB-Project-Masjidku-WordPress
type: project
tags: [#type/project, #laptop-battlefield, #wordpress, #cpanel, #pkl, #masjidku]
last_verified: 2026-10-24
confidence: VERIFIED
---

# LB-Project-Masjidku-WordPress — 127 Subdomain, cPanel Migration

> Recon read-only 2026-10-24. Data dari vault existing notes (MikroTik folder). Project ini bagian dari PKL di masjidku.web.id.

---

## Identitas Project

| Bidang | Nilai |
|--------|-------|
| **Domain** | masjidku.web.id |
| **Subdomain** | 127 subdomain (multi-site / multi-tenant) |
| **Hosting** | cPanel di `kenari.superserver.co.id` |
| **Platform** | WordPress (Multi-site atau multiple install) |
| **Status** | Deployment / Migrasi (DNS pending per vault) |
| **Kategori** | PKL (Prakerin) di bawah Pak Shobi |

---

## Vault Existing Notes (Sumber Utama)

| Note | Path | Isi Kunci |
|------|------|-----------|
| **Masjidku WordPress Deployment** | `MikroTik/Masjidku WordPress Deployment.md` | DNS pending 🔴, deployment target |
| **Checklist Migrasi Masjidku** | `MikroTik/Checklist Migrasi Masjidku.md` | Langkah migrasi |
| **Checklist Domain Masjidku - Multi Subdomain** | `MikroTik/Checklist Domain Masjidku - Multi Subdomain.md` | 127 subdomain list |
| **Checklist Import Masjid-Zip ke cPanel** | `MikroTik/Checklist Import Masjid-Zip ke cPanel.md` | Import backup zip ke cPanel |
| **Mapping DB Code ke Subdomain** | `MikroTik/Mapping DB Code ke Subdomain.md` | Mapping database per subdomain |
| **Status Check - Struktur WP dan HTTP 2026-10-01** | `MikroTik/Status Check - Struktur WP dan HTTP 2026-10-01.md` | Cek struktur WP & HTTP |

---

## Detail dari Vault (Ringkasan)

### Deployment Target
- **Server**: cPanel `kenari.superserver.co.id`
- **Akses**: cPanel login (credential REDACTED)
- **DNS**: Masih pending propagation / update NS

### Struktur Multi-Subdomain
- 127 subdomain → kemungkinan **WordPress Multisite** (subdomain install) atau **multiple single-site** dengan wildcard subdomain
- Mapping database per subdomain terdokumentasi di `Mapping DB Code ke Subdomain.md`

### Migrasi
- Sumber: Backup zip (Masjid-Zip)
- Target: cPanel File Manager + Database Import
- Checklist: Import zip, restore DB, fix wp-config, update URL, SSL, DNS

### Status Terakhir (1 Okt 2026)
- HTTP structure check done
- DNS pending → **blocker utama**

---

## Keterkaitan Teknis

| Komponen | Detail |
|----------|--------|
| **Web Server** | Apache/LiteSpeed (cPanel default) |
| **PHP** | Versi cPanel (pilih via MultiPHP Manager) |
| **Database** | MariaDB/MySQL per subdomain (prefix mapping) |
| **SSL** | AutoSSL cPanel (Let's Encrypt / Sectigo) |
| **DNS** | Nameserver `kenari.superserver.co.id` atau custom NS |
| **Backup** | JetBackup / cPanel backup / manual zip |

---

## Risiko & Blocker

| Risiko | Status | Mitigasi |
|--------|--------|----------|
| DNS propagation | 🔴 Pending | Cek `dig @NS masjidku.web.id`, flush cache |
| 127 subdomain SSL | ⚠️ AutoSSL limit | Batch request, cek rate limit |
| DB import 127x | ⚠️ Manual lambat | Script automation / WP-CLI |
| wp-config per site | ⚠️ Error prone | Template + script generate |

---

## Terhubung ke

- [[Masjidku WordPress Deployment]] — Vault note utama
- [[Checklist Migrasi Masjidku]] — Checklist detail
- [[Checklist Domain Masjidku - Multi Subdomain]] — Daftar subdomain
- [[Checklist Import Masjid-Zip ke cPanel]] — Import procedure
- [[Mapping DB Code ke Subdomain]] — DB mapping
- [[Status Check - Struktur WP dan HTTP 2026-10-01]] — HTTP check
- [[Project Baru - Web Integrasi MikroTik RADIUS Zabbix]] — PKL parent project
- [[PKL Overview]] — Overview PKL

---

#laptop-battlefield #project #wordpress #cpanel #pkl #masjidku
[[Home-Laptop-Battlefield]]