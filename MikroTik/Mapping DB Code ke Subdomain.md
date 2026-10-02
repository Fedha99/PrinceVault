> Related: [[Index]]

# Mapping DB Code ke Subdomain (masjidku.web.id)

Hasil audit `siteurl` di 127 dump SQL lokal (`~/Downloads/database/index-masjid/db/`) vs nama file DB. Tujuan: cegah salah pilih database pas kerjain migrasi/import ke cPanel.

Generated via opencode, tanggal: 2026-09-12.

## Ringkasan
- Total file diproses: 127
- Self-match (kode = slug): 4 (demo2, demo3, demo5, ekantin)
- Mapping normal (kode ≠ slug, WAJAR — short vault code vs full slug): 122
- Error (siteurl tidak ditemukan): 1 (`smknbang_hilojs217`)

## ⚠️ Perlu Perhatian Khusus
| DB Code | Isu |
|---|---|
| smknbang_hilojs217 | Tidak ada baris `siteurl` sama sekali — cek manual, kemungkinan dump corrupt/kepotong |
| smknbang_wp001 | siteurl pakai `http://` (bukan https), subdomain ada `.master.` — kemungkinan dump lama/staging |
| smknbang_rhd521 | siteurl → rahadstore.id (domain di luar masjidku.web.id sama sekali) |
| smknbang_wp358 | siteurl → bahasaarab.org (domain luar) |
| smknbang_wp683 | siteurl → podcast.web.id (domain luar) |
| smknbang_msdemo | siteurl cuma "demo" doang, beda pola dari demo2/3/5 |

## Tabel Mapping Lengkap

| DB Code | Subdomain Asli (dari siteurl) |
|---|---|
| smknbang_775 | masjid-jamie-attaubah |
| smknbang_a865 | alakrom |
| smknbang_ab129 | alikhlasbajo |
| smknbang_af721 | alfath |
| smknbang_ah214 | alhidayah |
| smknbang_ah532 | masjidalmadinahhabibah |
| smknbang_ah728 | alhadi |
| smknbang_ah812 | alhikmah |
| smknbang_aha126 | aha |
| smknbang_ahc765 | masjidal-hidayahcandu |
| smknbang_ai142 | alikhlas |
| smknbang_ai520 | alislah |
| smknbang_ait891 | al-ikhlastegalrejo |
| smknbang_aks734 | masjidalkautsarsawitraya |
| smknbang_al269 | aluswah |
| smknbang_al588 | alibinabithalib |
| smknbang_al925 | alatief |
| smknbang_ala344 | alawwabin |
| smknbang_albab23 | ulilalbab |
| smknbang_am87 | ahmadmaryam |
| smknbang_ap899 | masjidalistiqomahpaal4 |
| smknbang_ar864 | arrahmah |
| smknbang_as546 | assyahid |
| smknbang_as644 | assalam |
| smknbang_as875 | alimansumberejo |
| smknbang_asysyh575 | asysyahadah |
| smknbang_at735 | attalisman |
| smknbang_at784 | attamsir23 |
| smknbang_atc439 | attaqwacitra |
| smknbang_ba887 | baitulakbar |
| smknbang_bm893 | babulmaruf |
| smknbang_bmb241 | baitulmuttaqinbiting |
| smknbang_br896 | baiturrohman |
| smknbang_brl340 | baiturrahmanlawatan |
| smknbang_bs998 | baitussalam |
| smknbang_bt635 | baituttaqwa |
| smknbang_bt738 | baiturrahman ✅ RESOLVED — audit dump SQL asli (siteurl) confirm slug ini BENER, bukan masjidbaiturrahman. Ada file zip terpisah `masjidbaiturrahman.masjidku.web.id.zip` yang TIDAK punya kode vault sendiri (orphan, perlu kode baru kalau mau diproses). |
| smknbang_demo2 | demo2 |
| smknbang_demo3 | demo3 |
| smknbang_demo424 | demo4 |
| smknbang_demo5 | demo5 |
| smknbang_dkm426 | dkmjamialfurqon |
| smknbang_dkma483 | dkmalfadhilah |
| smknbang_dm429 | darulmustaqim |
| smknbang_dmt274 | darulmuttaqin |
| smknbang_ds462 | darussalam |
| smknbang_dtc131 | daruttaqwacurahjati |
| smknbang_ekantin | ❌ EXCLUDE dari project masjid — dicek ke folder `masjid-zip` (backup asli), TIDAK ADA file zip untuk ekantin. Kemungkinan app kasir sekolah yang numpang cPanel sama, bukan bagian dari 127 masjid. DB/subdomain terlanjur dibuat, dibiarkan nganggur, jangan diisi data. |
| smknbang_fbm555 | formasbaitulmubarok |
| smknbang_ha991 | masjidhasanatulabror |
| smknbang_hdy690 | nurulhidayah |
| smknbang_hdy884 | hidayaturrahman |
| smknbang_hfz894 | hafizhiin |
| smknbang_hilojs217 | ERROR - siteurl tidak ditemukan |
| smknbang_ht105 | hidayatulabror |
| smknbang_hyb699 | masjidhidayatulabror |
| smknbang_ja572 | masjidjamialmuttaqin |
| smknbang_jd | masjidjamidarussalam |
| smknbang_jh62 | jamiatulhuda ✅ RESOLVED — audit dump SQL asli (siteurl) confirm slug ini BENER, bukan masjidjamiatulhuda. Ada file zip terpisah `masjidjamiatulhuda.masjidku.web.id.zip` yang TIDAK punya kode vault sendiri (orphan, perlu kode baru kalau mau diproses). |
| smknbang_jm81 | jannatulmakwa |
| smknbang_jmf746 | jamimiftahulfalahganet |
| smknbang_jn842 | jabalnur |
| smknbang_jnf363 | masjidjaminurulfalah |
| smknbang_kj480 | khutbahjumat (domain luar: .my.id) |
| smknbang_kntn | kantin |
| smknbang_mabl28 | masjidalmubaroklemahbang |
| smknbang_maf52 | masjidalfattahurste |
| smknbang_mai120 | masjidalihsan |
| smknbang_mak156 | masjidalkarim |
| smknbang_makr120 | mushollaalaminkulonraya |
| smknbang_mam155 | masjidalmubarok |
| smknbang_mam416 | masjidalmadani |
| smknbang_mam57 | masjidalmuhajirin |
| smknbang_man28 | masjidannur |
| smknbang_manarul | manarulislambangil |
| smknbang_masjid | masjidku (root/demo) |
| smknbang_mat646 | masjidattaubah |
| smknbang_mb734 | miftahulummahbantarjaya |
| smknbang_mbm511 | mabesalmukhlashin |
| smknbang_mbm798 | masjidbaitulmuttaqin |
| smknbang_mbs205 | masjidbaitussalam |
| smknbang_mbswa26 | masjidbaitussalamwatuagung |
| smknbang_md297 | masjidaliman |
| smknbang_mg265 | masjidmergasana |
| smknbang_mh332 | mujahidin |
| smknbang_mh40 | masjidhabibah |
| smknbang_mhbjtb933 | masjidhijrahbjtb |
| smknbang_mhj522 | almuhajirin |
| smknbang_mhj951 | muhajirinafd2 |
| smknbang_mj702 | mushollajamaludin |
| smknbang_mj979 | mjpolsektajebres |
| smknbang_mja19 | masjidjamikalmubarok |
| smknbang_mjabk298 | masjidjamialbarokahkemayoran |
| smknbang_mji576 | masjidjamikismail |
| smknbang_mk758 | masjidkampung |
| smknbang_mm324 | mabesalmukhlasin |
| smknbang_mnh227 | masjidnurulhuda |
| smknbang_mnh894 | mushollanurulhidayah |
| smknbang_msdemo | demo (beda pola, cek manual) |
| smknbang_msp124 | attaubah-swadayapos |
| smknbang_mt573 | manarulfikritelkommojokerto |
| smknbang_mtw450 | masjidattaqwa |
| smknbang_nats95 | nurulamalts |
| smknbang_nh369 | nurulhuda |
| smknbang_nh570 | masjidnurulhikmah |
| smknbang_nh611 | masjidjaminurhasanah |
| smknbang_ni473 | nurulislam |
| smknbang_ni595 | nuruliman |
| smknbang_ni839 | nurulikhlas012 |
| smknbang_nikh745 | nurulikhlas |
| smknbang_njs707 | nuruljamalsiliwangi |
| smknbang_ppm265 | ppm-daarussalaam |
| smknbang_rhd521 | rahadstore.id (domain luar, bukan masjidku) |
| smknbang_sb936 | sabilillah |
| smknbang_sg274 | sabilillahgendol |
| smknbang_sh723 | shuhbatussunnahindonesia |
| smknbang_sn883 | senaassalamm |
| smknbang_srmbbtrhmn773 | serambibaiturrahman22 |
| smknbang_sw875 | syahidwariyono |
| smknbang_wp001 | alghofuri (http://, subdomain .master.) |
| smknbang_wp358 | bahasaarab.org (domain luar) |
| smknbang_wp487 | abdullahalhamudi |
| smknbang_wp64 | al-muhajirin |
| smknbang_wp683 | podcast.web.id (domain luar) |
| smknbang_wp947 | masjidrahmatullah |
| smknbang_wp951 | masjidannurpamulangpermai1 |
| smknbang_wp958 | masjidrayakasangmungkal |

## Catatan
- Sumber data: dump SQL lokal, bukan query live server (aman, gak nge-hit cPanel/DB production)
- Nama file DB pola: `smknbang_<kode>` — kode ini short vault code, BUKAN diharapkan sama dengan slug subdomain
- File `hilojs217` butuh investigasi manual sebelum dipakai di proses import/migrasi

## 📊 Status Migrasi Live (audit cPanel, 23 Sep 2026)

> ⚠️ Angka di section ini snapshot 23 Sep dan sudah usang (43 subdomain baru dibuat 28 Sep, DB sudah di-import). Status terbaru ada di section **"Update Live 29 Sep 2026"** di bagian paling bawah note ini.

Audit langsung ke `DomainInfo/domains_data` + `Mysql/list_databases` di server. Prefix DB production = `masjidku_<kode>` (BEDA dari prefix vault `smknbang_<kode>` di atas — itu cuma penamaan lokal pas audit dump).

**Ringkasan: 62 fully done | 4 partial | 1 db-only-mismatch | 55 belum mulai | 1 flagged (jh62, resolved) | 1 error (hilojs217) | 3 external (skip)**

### ✅ Fully Done (62) — subdomain + database sudah ada
ab129, af721, ah214, ah532, ah728, ah812, aha126, ahc765, ai142, ai520, ait891, aks734, al269, al588, al925, ala344, albab23, am87, ap899, ar864, as546, as644, as875, asysyh575, at735, at784, atc439, ba887, bm893, bmb241, br896, brl340, bs998, bt635, bt738, demo3, demo424, demo5, dkm426, dkma483, dm429, dmt274, ds462, dtc131, ekantin(⚠️ exclude, lihat catatan di atas), fbm555, ha991, hdy690, hdy884, hfz894, ht105, hyb699, ja572, jd, jm81, jmf746, jn842, jnf363, mabl28, maf52, mhj522, msp124

### ⚠️ Partial — subdomain ada, DATABASE BELUM (4)
| Kode | Slug | Catatan |
|---|---|---|
| a865 | alakrom | Existing db `masjidku_a856` (typo/nyasar) — **Prince fix manual, JANGAN disentuh** |
| demo2 | demo2 | Belum ada DB |
| masjid | masjidku (root) | Root domain, mungkin gak perlu DB terpisah |
| msdemo | demo | Belum ada DB |

### ⚠️ DB ada tapi kepotong/nyasar (1)
| Kode | Slug | Catatan |
|---|---|---|
| 775 | masjid-jamie-attaubah | Subdomain belum ada, tapi ada DB `masjidku_a856` yang kemungkinan nyasar dari sini juga — cek bareng sama kasus a865 |

### ❌ Belum Mulai Sama Sekali (55)
mai120, mak156, makr120, mam155, mam416, mam57, man28, manarul, mat646, mb734, mbm511, mbm798, mbs205, mbswa26, md297, mg265, mh332, mh40, mhbjtb933, mhj951, mj702, mj979, mja19, mjabk298, mji576, mk758, mm324, mnh227, mnh894, mt573, mtw450, nats95, nh369, nh570, nh611, ni473, ni595, ni839, nikh745, njs707, ppm265, sb936, sg274, sh723, sn883, srmbbtrhmn773, sw875, wp001(staging/http, cek dulu), wp487, wp64, wp947, wp951, wp958, kj480(domain luar), kntn(domain luar)

### 🌐 Domain Eksternal — SKIP dari migrasi masjidku.web.id (3)
rhd521 (rahadstore.id), wp358 (bahasaarab.org), wp683 (podcast.web.id)

### ❌ Error (1)
hilojs217 — dump SQL gak ada baris siteurl, kemungkinan corrupt

### 🆕 Orphan — ada file zip, TAPI TIDAK ADA kode di vault (3)
| File zip | Catatan |
|---|---|
| masjidbaiturrahman.masjidku.web.id.zip | Beda dari bt738=baiturrahman, kemungkinan masjid berbeda, perlu kode baru |
| masjidjamiatulhuda.masjidku.web.id.zip | Beda dari jh62=jamiatulhuda, kemungkinan masjid berbeda, perlu kode baru |
| markazdakwahdigital.masjidku.web.id.zip | Gak ada kode sama sekali di vault, perlu kode baru |

## 📊 Update Live 29 Sep 2026 — Cek HTTP setelah Import DB

Cek langsung ke semua subdomain aktif setelah database di-import. Tujuan: tau site mana yang masih redirect ke `install.php` dan mana yang error.

**Metode:** HTTP GET ke `/` tiap subdomain (hostname polos tanpa `www.`), tanpa follow redirect, `--max-time` 15 dtk (re-check yang timeout pakai 30 dtk). Daftar host ditarik dari cPanel `DomainInfo/domains_data` (109 entri; 1 entri bukan site = `masjidku.web.id` + `mail.masjidku.web.id`, jadi **108 site** dicek). Dijalankan lewat opencode, read-only, sequential/parallel maks 3.

**Ringkasan 108 site:**

| Status | Jumlah |
|---|---|
| ✅ 200 OK | 95 (4 di antaranya lemot 11–22 dtk) |
| 🔴 Masih redirect ke `install.php` | 2 |
| 🔴 HTTP 500 | 6 |
| 🟠 HTTP 503 | 5 |
| Redirect jenis lain | 0 |

### 🔴 Perlu ditangani

| Site | Status | Catatan |
|---|---|---|
| demo2 | 302 → install.php | cek import DB + wp-config (prefix `wpmj`), belum diinvestigasi |
| dkmjamialfurqon | 302 → install.php | sama seperti demo2 |
| alakrom | 500 | DB a865 masih fix manual oleh Prince, jangan disentuh |
| alawwabin | 500 | belum diinvestigasi |
| baituttaqwa | 500 | belum diinvestigasi |
| jamiatulhuda | 500 | belum diinvestigasi; di Sheet masih tercatat "Belum Mulai" |
| masjidnurulhikmah | 500 | kode nh570 (sebelumnya termasuk 2 site yang privilege DB-nya belum beres) |
| masjidnurulhuda | 500 | kode mnh227 (sama, privilege DB belum beres) |
| mushollajamaludin | 503 | respon cepat (~1 dtk), penyebab belum diketahui, cek error log |
| nurulhuda | 503 | sama |
| nurulislam | 503 | sama |
| serambibaiturrahman22 | 503 | sama |
| shuhbatussunnahindonesia | 503 | sama (sebelumnya 302 → install.php) |

**200 tapi lemot** (kemungkinan cold cache pasca-import, re-check nanti): mushollanurulhidayah (21,6 dtk), nurulikhlas (14,0 dtk), ppm-daarussalaam (12,7 dtk), sabilillah (11,7 dtk).

Catatan: `alhikmah` yang sebelumnya 503 sekarang 200.

### Catatan teknis
- Hostname `www.<nama>.masjidku.web.id` gagal SSL (curl exit 35), hostname polos normal → pakai hostname polos buat semua cek. Penyebab pasti (cert / edge Cloudflare) belum dibuktikan.
- **HTTP 200 ≠ WordPress sehat.** 3 site orphan (`markazdakwahdigital`, `masjidbaiturrahman`, `masjidjamiatulhuda`) dulu gak punya `wp-config.php` tapi balas 200, belum dicek isinya.
- Cek ini cuma status `/`. Belum cek konten, versi plugin, atau kesehatan DB.

### 🔒 Versi WordPress & CVE
- WP 7.1.2 (rilis 22 Sep 2026) nutup **CVE-2026-87902** (unauthenticated LFI → RCE, CVSS 9.2, kena semua rilis 4.7.0–7.1.1; syarat server + tema tertentu). Fix juga di-backport ke branch lama.
- Sampel 10 site pertama: 7 di 7.1.2 (aman), **1 di 6.9.4 (`masjidalmubaroklemahbang`, perlu update)**, 2 belum kebaca waktu itu (`shuhbatussunnahindonesia`, `nurulikhlas`, masih 302).
- Belum ada inventaris versi untuk sisa site, dan belum ada inventaris plugin (mis. Elementor Pro ≤ 4.2.1, CVE-2026-32475, hanya relevan kalau plugin itu dipakai).

### Sinkron ke Google Sheet
- Kolom baru **L** (HTTP Live) dan **M** (Catatan Cek Live) untuk 103 baris yang cocok.
- Kolom G/H/J disinkronkan (Y/Y, "Sudah Sync") untuk 39 baris yang tadinya "Belum Mulai" padahal subdomain-nya sudah hidup. Baris `alakrom`, `demo`, `demo2`, `jamiatulhuda` sengaja tidak disentuh.
- 5 site yang dicek tapi tidak nyambung ke baris manapun: `ekantin`, `ulilalbab` (di Sheet tercatat domain smkn1bangil.sch.id), serta orphan `markazdakwahdigital`, `masjidbaiturrahman`, `masjidjamiatulhuda`.

### TODO
- [ ] Baca error log 11 site (6× 500, 5× 503)
- [ ] 2 site install redirect (demo2, dkmjamialfurqon)
- [ ] Patch `masjidalmubaroklemahbang` (WP 6.9.4)
- [ ] Inventaris versi WP + plugin semua site
- [ ] Re-check 4 site yang lemot
- [ ] Revoke token cPanel sementara setelah semua selesai

