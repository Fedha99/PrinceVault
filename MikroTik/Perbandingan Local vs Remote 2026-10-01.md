---
tags: [mikrotik, masjidku, pkl, wordpress, backup, checklist]
---

# Perbandingan Local backup-fixed/ vs Remote cPanel (2026-10-01)

Lanjutan dari [[Status Check - Struktur WP dan HTTP 2026-10-01]]. Compare folder lokal di `/home/princeannakhla/Downloads/database/backup-fixed/` (96 folder) dengan hasil `SubDomain::listsubdomains` di cPanel (108 subdomain).

## Ringkasan

| Set | Jumlah |
|---|---|
| Remote (cPanel) | 108, semua unique |
| Local (backup-fixed) | 96, semua unique |
| Cocok di keduanya | 94 |
| Remote tapi TIDAK ada backup lokal | 14 |
| Local tapi TIDAK ada di remote | 2 |

**Koreksi catatan sebelumnya:** dugaan duplikat fqdn (alislah/sabilillah/serambibaiturrahman22 muncul di 2 bucket HTTP status) ternyata salah baca output sendiri, bukan bug di cPanel. Remote 108 subdomain semuanya unique — 1 doc root per subdomain, 0 duplikat.

## 14 site remote tanpa backup lokal

aha, alikhlasbajo, alimansumberejo, aluswah, arrahmah, assalam, assyahid, baitulakbar, ekantin, hafizhiin, hidayaturrahman, jannatulmakwa, masjidjamidarussalam, ulilalbab

**Penting:** 12 dari 14 ini overlap dengan grup "18 site missing wp-config" dari audit struktur WP sebelumnya. 6 di antaranya (alimansumberejo, ekantin, hafizhiin, hidayaturrahman, jannatulmakwa, masjidjamidarussalam) docroot-nya emang kosong — wajar gak ada backup. Sisanya (aha, alikhlasbajo, aluswah, arrahmah, assalam, assyahid, baitulakbar, ulilalbab) punya wp-content doang tanpa core — berarti deployment gagal DAN gak ada cadangan lokal buat restore.

Dua pengecualian menarik: `alawwabin` dan `markazdakwahdigital` justru PUNYA backup lokal meski status strukturnya bermasalah — jadi bisa langsung dipakai buat redeploy.

## 2 site local tanpa pasangan di remote

- `smkmambaululumpandaan.sch.id` — rootdomain beda (.sch.id), di luar scope token masjidku
- `ulilalbab.smkn1bangil.sch.id` — rootdomain beda juga

**Perlu klarifikasi:** `ulilalbab` ADA versi `.masjidku.web.id` di remote (termasuk dalam 14 "no backup" di atas). Kemungkinan: (a) dua site beda yang kebetulan sama nama, atau (b) backup lokal kesalah folder rootdomain dan harusnya itu backup buat `ulilalbab.masjidku.web.id`. Belum diverifikasi isinya.

## Open items tambahan

- [ ] Klarifikasi `ulilalbab` — cek isi folder `ulilalbab.smkn1bangil.sch.id` di local, apakah ini salah taruh dan harusnya untuk `ulilalbab.masjidku.web.id`
- [ ] 8 site tanpa backup DAN WP-nya rusak (aha, alikhlasbajo, aluswah, arrahmah, assalam, assyahid, baitulakbar, ulilalbab) — ini prioritas tertinggi karena gak ada fallback restore, harus deploy WP baru dari awal
- [ ] `alawwabin` dan `markazdakwahdigital` — ada backup lokal, bisa langsung redeploy dari situ

## Catatan metode
- Diambil fresh via SubDomain::listsubdomains, field `domain` dipakai sebagai fqdn lengkap
- Fields lain yang tersedia per entry: basedir, dir, domainkey, reldir, rootdomain, status, subdomain, web_subdomain_aliases
- Semua 108 remote subdomain share rootdomain yang sama: masjidku.web.id
- Read-only, 1 GET call
