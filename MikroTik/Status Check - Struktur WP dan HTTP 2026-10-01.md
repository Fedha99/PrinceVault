---
tags: [mikrotik, masjidku, pkl, wordpress, checklist]
---

# Status Check Masjidku — Struktur WP & HTTP (2026-10-01)

Hasil audit via cPanel UAPI (Fileman + SubDomain) dan HTTP status check langsung ke 108 subdomain masjidku.web.id. Token dipake: masjidku API token (fresh, generated hari ini). Semua pengecekan read-only, gak ada write/create/delete di sisi cPanel.

## 1. Struktur WordPress (via Fileman::list_files)

| Status | Jumlah |
|---|---|
| OK — ada wp-config.php + wp-content | 90 |
| MISSING wp-config.php | 18 |
| MISSING wp-content | 0 |
| Doc root gak ketemu | 0 |

### 18 site kurang wp-config, dibagi 3 kategori:

**Doc root kosong (7)** — subdomain terdaftar tapi belum pernah di-deploy:
- alimansumberejo, ekantin, hafizhiin, hidayaturrahman, jannatulmakwa, masjidjamidarussalam

**WP setengah jadi (8)** — cuma ada wp-content doang, core files gak ada:
- aha, alikhlasbajo, arrahmah, assalam, assyahid, baitulakbar, ulilalbab
- aluswah — struktur nonstandar (ada folder `wp/`)
- **alawwabin** — paling mendekati: full WP core + wp-config-sample.php ada, tapi wp-config.php belum di-generate dari sample-nya. Kemungkinan deployment gagal di step terakhir.

**Bukan WP sama sekali (3)** — cuma ada cgi-bin/php.ini/error_log, default docroot cPanel kosong:
- markazdakwahdigital, masjidbaiturrahman, masjidjamiatulhuda

## 2. HTTP Status Check (108/108, curl -L --max-redirs 0, timeout 15s)

| Bucket | Jumlah |
|---|---|
| 200 OK | 70 |
| 3xx redirect | 2 |
| 5xx | 5 |
| 000 (timeout/conn-fail) | 31 |
| 4xx | 0 |

### 302 redirect (2)
- demo2.masjidku.web.id
- dkmjamialfurqon.masjidku.web.id

### 500 Internal Server Error (5)
- alawwabin.masjidku.web.id (cocok sama temuan no-wp-config di atas)
- alakrom.masjidku.web.id (WP lengkap di disk — perlu investigasi lebih lanjut)
- baituttaqwa.masjidku.web.id (WP lengkap di disk)
- masjidnurulhikmah.masjidku.web.id (WP lengkap di disk — ini yang sebelumnya kecatat "alhikmah 503", sekarang 500)
- masjidnurulhuda.masjidku.web.id (WP lengkap di disk)

### 000 — timeout/connection failed (31)
al-ikhlastegalrejo, ahmadmaryam, alatief, alfath, alhadi, alhikmah, alikhlas, alislah, almuhajirin, attamsir23, baitulmuttaqinbiting, baiturrahman, baiturrohman, darulmustaqim, darulmuttaqin, darussalam, demo, demo3, demo4, demo5, dkmalfadhilah, formasbaitulmubarok, jamiatulhuda, masjidalkautsarsawitraya, muhajirinafd2, mushollaalaminkulonraya, mushollanurulhidayah, nurulislam, sabilillah, sabilillahgendol, serambibaiturrahman22, shuhbatussunnahindonesia

**Penting:** semua 31 site di atas punya struktur WP LENGKAP di disk (wp-config.php + wp-content ada). Jadi ini bukan masalah deployment — kemungkinan DNS belum propagate, vhost belum di-bind, port kefirewall, atau TLS cert belum ada. Perlu di-breakdown lagi per-penyebab (NXDOMAIN vs connection refused vs TLS fail) — curl -w %{http_code} doang gak bisa bedain ini.

## 3. Cross-reference penting

- **17 dari 18 site "missing wp-config" itu justru HTTP 200** — tapi itu bukan site masjid asli, itu placeholder page default cPanel. Jadi 200 OK sendirian BUKAN sinyal valid buat "site udah live dan benar".
- **31 site dengan WP lengkap malah gak bisa diakses sama sekali (000)** — prioritas investigasi berikutnya, karena deploymentnya udah selesai tapi user gak bisa akses.

## Open items (update dari sebelumnya)

- [ ] alawwabin — generate wp-config.php dari wp-config-sample.php (root cause udah ketemu)
- [ ] alakrom, baituttaqwa, masjidnurulhikmah, masjidnurulhuda — investigasi kenapa 500 padahal WP lengkap (cek error_log, permission, db connection)
- [ ] 31 site 000 — breakdown DNS vs vhost vs firewall vs TLS, baru bisa ditentukan fix-nya
- [ ] 8 site WP setengah jadi (aha, alikhlasbajo, arrahmah, assalam, assyahid, baitulakbar, ulilalbab, aluswah) — perlu deploy ulang core WP
- [ ] 7 doc root kosong — perlu deploy dari awal
- [ ] 3 site bukan WP (markazdakwahdigital, masjidbaiturrahman, masjidjamiatulhuda) — klarifikasi apakah emang belum digarap atau salah subdomain

## Catatan metode
- Fileman UAPI ternyata TIDAK disabled (koreksi dari catatan lama) — yang bener cuma salah nama fungsi (`list_file` → `list_files`, plural)
- `DomainInfo::domains`, `CRMVersion`, `ModuleInfo` gak ada/gak keinstall di host ini — jangan dipake lagi buat probe
- Semua check di atas read-only, 0 write/create/delete UAPI call
