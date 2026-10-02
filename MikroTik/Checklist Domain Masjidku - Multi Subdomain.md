# Checklist Domain Masjidku — Multi Subdomain (127 DB)

> Client: Masjidku.web.id (PKL, Supervisor: Pak Shobi)
> Sumber: `/home/princeannakhla/Downloads/database/db/` (127 file `.sql`)
> Terkait: [[Checklist Migrasi Masjidku]]

## ⚠️ Catatan Penting Penamaan
Prefix asli semua database & subdomain di hosting adalah **`smknbang_`** (akun hosting sekolah yang dipakai bareng banyak client, sudah dicatat di [[Checklist Migrasi Masjidku]]).

Kolom **Subdomain (Vault)** ditulis pakai prefix **`masjidku_`** — **HANYA di catatan Obsidian ini**. Kolom **Nama Subdomain Asli** diambil dari isi SQL (`wp_options` → `siteurl`/`home`), ini yang beneran dipakai di production. **File `.sql` fisik dan database di server TETAP pakai `smknbang_`** — jangan diubah.

```
Dokumentasi (MD ini)     →  masjidku_xxxx           (label biar gampang dibaca)
File fisik (.sql)        →  smknbang_xxxx.sql       (JANGAN diubah)
Database di server       →  smknbang_xxxx           (JANGAN diubah)
Subdomain asli production → diambil dari siteurl di SQL (kolom baru)
```

## Cara Baca Kolom "Nama Subdomain Asli"
- **Terisi** = sudah di-extract langsung dari isi SQL (`grep siteurl`), akurat 100%
- **`(belum di-extract)`** = belum di-scan, masih pakai kode file sebagai penanda sementara

## Cara Isi Sisa Tabel
Field **Username / Password / Email / DB User / DB Pass** isi manual cross-check ke `cred.txt` / panel hosting. Kolom **Status**: `+` kalau udah beres dicek/migrasi, `-` kalau belum.

## Metode Automasi (mulai 5 Sep 2026)
Migrasi 5 site terbaru (as644, as875, asysyh575, at735, atc439) pakai automasi cPanel UAPI + Hermes Agent:
1. Create subdomain (`SubDomain/addsubdomain`, dir = `Masjid/<nama-subdomain-asli>`)
2. Create database + user + privileges (`Mysql/create_database`, `create_user`, `set_privileges_on_database`)
3. Upload dump SQL ke server (`Fileman/save_file_content`)
4. Deploy PHP import-script self-deleting (token-protected, one-time use) → trigger via HTTPS POST → auto-hapus abis sukses
5. Buat `wp-config.php` dengan DB credentials + table prefix yang terdeteksi (`wpmj`, konsisten di semua site)

Directory naming: `Masjid/<nama-subdomain-asli>` (bukan kode file internal, misal `Masjid/assalam` bukan `Masjid/as644`).

**Catatan keamanan**: password DB row `as644` sempat di-generate ulang beberapa kali karena session automation sempat error/reset — kalau mau connect langsung ke site itu, disaranin re-verify password aktualnya di cPanel dulu (kemungkinan berbeda dari yang tercatat pertama kali).

## Tabel Checklist

| No  | Subdomain (Vault)      | Nama Subdomain Asli (dari SQL)               | File SQL Asli              | Size      | Username       | Password         | Email                                          | DB User                 | DB Pass              | Status |
| --- | ---------------------- | -------------------------------------------- | -------------------------- | --------- | -------------- | ---------------- | ---------------------------------------------- | ----------------------- | -------------------- | ------ |
| 1   | masjidku_775           | masjid-jamie-attaubah.masjidku.web.id        | smknbang_775.sql           | 254.42 KB | attaubah       | E7x{R*SYSfj!G0R% | admin@masjid-jamie-attaubah.masjidku.web.id    | masjidku_775_user       | McwU+kbnJJFZcb6@     | +      |
| 2   | masjidku_a865          | alakrom.masjidku.web.id                      | smknbang_a865.sql          | 1.42 MB   | Nesabatechno   | tQf_niNRa_8i0E4z | admin@demo.masjidku.web.id                     | masjidku_a685_user      | @{IJ5ZkB)onnd!CS     | +      |
| 3   | masjidku_ab129         | alikhlasbajo.masjidku.web.id                 | smknbang_ab129.sql         | 417.47 KB | alikhlasbajo   | ---              | admin@masjidrahmatullah.masjidku.web.id        | masjidku_ab129_user     | .X;&Re3f;X(1[76;     | +      |
| 4   | masjidku_af721         | alfath.masjidku.web.id                       | smknbang_af721.sql         | 1.42 MB   | Nesabatechno   | ---              | admin@demo.masjidku.web.id                     | masjidku_af721_user     | m2_#!y]x2vAcR0t&     | +      |
| 5   | masjidku_ah214         | alhidayah.masjidku.web.id                    | smknbang_ah214.sql         | 264.43 KB | masjidsukorejo | WIyNipweu9vq38!_ | admin@masjidrahmatullah.masjidku.web.id        | masjidku_ah214_user     | !tLXlP~HTdZrfV.a     | +      |
| 6   | masjidku_ah532         | masjidalmadinahhabibah.masjidku.web.id       | smknbang_ah532.sql         | 1.41 MB   | Nesabatechno   | tQf_niNRa_8i0E4z | admin@demo.masjidku.web.id                     | masjidku_ah532_user     | K(,af54F9uY@r?JW     | +      |
| 7   | masjidku_ah728         | alhadi.masjidku.web.id                       | smknbang_ah728.sql         | 251.48 KB | masjidsukorejo | oumjMa2xyi48DD_! | admin@alhadi.masjidku.web.id                   | masjidku_ah728_user     | cIho~ue4&q}a8d%k     | +      |
| 8   | masjidku_ah812         | alhikmah.masjidku.web.id                     | smknbang_ah812.sql         | 436.24 KB | adminAlhikmah  | EEZraelyq9_~l94f | admin@alhikmah.masjidku.web.id                 | masjidku_ah812_user     | e=WoK,JWfl%Qcj7t     | +      |
| 9   | masjidku_aha126        | aha.masjidku.web.id                          | smknbang_aha126.sql        | 252.42 KB | Nesabatechno   | tQf_niNRa_8i0E4z | admin@aha.masjidku.web.id                      | masjidku_ah126_user     | )!.g(w_{x+OUTa9&     | +      |
| 10  | masjidku_ahc765        | masjidal-hidayahcandu.masjidku.web.id        | smknbang_ahc765.sql        | 1.43 MB   | Nesabatechno   | tQf_niNRa_8i0E4z | admin@masjidal-hidayahcandu.masjidku.web.id    | masjidku_ahc765_user    | jBf#;3yCNY+DfGd5     | +      |
| 11  | masjidku_ai142         | alikhlas.masjidku.web.id                     | smknbang_ai142.sql         | 250.34 KB | Nesabahtechno  | tQf_niNRa_8i0E4z | admin@alikhlas.masjidku.web.id                 | masjidku_ai142_user     | e&=_If1K1aW+#5IG     | +      |
| 12  | masjidku_ai520         | alislah.masjidku.web.id                      | smknbang_ai520.sql         | 259.20 KB | Nesabahtechno  | tQf_niNRa_8i0E4z | admin@alislah.masjidku.web.id                  | masjidku_ai520_user     | xh.j6@O94-M8LIG.     | +      |
| 13  | masjidku_ait891        | al-ikhlastegalrejo.masjidku.web.id           | smknbang_ait891.sql        | 1.43 MB   | Nesabahtechno  | tQf_niNRa_8i0E4z | admin@al-ikhlastegalrejo.masjidku.web.id       | masjidku_ait891_user    | _7GA}OIMc}t?LMkh     | +      |
| 14  | masjidku_aks734        | masjidalkautsarsawitraya.masjidku.web.id     | smknbang_aks734.sql        | 1.40 MB   | Nesabatechno   | tQf_niNRa_8i0E4z | admin@masjidalkautsarsawitraya.masjidku.web.id | masjidku_aks734_user    | i~@$y6FNC-E%Ry1f     | +      |
| 15  | masjidku_al269         | aluswah.masjidku.web.id                      | smknbang_al269.sql         | 252.93 KB | takmiraluswah  | RiVapboz682!%tYy | admin@aluswah.masjidku.web.id                  | masjidku_al269_user     | B559X0$&H1N%!rUj     | +      |
| 16  | masjidku_al588         | alibinabithalib.masjidku.web.id              | smknbang_al588.sql         | 248.86 KB | adminali       | tQf_niNRa_8i0E4z | admin@alibinabithalib.masjidku.web.id          | masjidku_al588_user     | e,J2RUc#;.bSD+&w     | +      |
| 17  | masjidku_al925         | alatief.masjidku.web.id                      | smknbang_al925.sql         | 250.86 KB | alatief        | tQf_niNRa_8i0E4z | admin@alatief.masjidku.web.id                  | masjidku_al925_user     | $e3w,nA@%k#.xdRM     | +      |
| 18  | masjidku_ala344        | alawwabin.masjidku.web.id                    | smknbang_ala344.sql        | 301.08 KB | alawwabin      | tQf_niNRa_8i0E4z | admin@alawwabin.masjidku.web.id                | masjidku_ala344_user    | JI[A_}kW;6SCTkPj     | +      |
| 19  | masjidku_albab23       | https://ulilalbab.smkn1bangil.sch.id         | smknbang_albab23.sql       | 1.91 MB   |                |                  |                                                |                         |                      | -      |
| 20  | masjidku_am87          | ahmadmaryam.masjidku.web.id                  | smknbang_am87.sql          | 1.43 MB   | Nesabatechno   | tQf_niNRa_8i0E4z | admin@ahmadmaryam.masjidku.web.id              | masjidku_am87_user      | h-wUm.PoAGjp^QW.     | +      |
| 21  | masjidku_ap899         | masjidalistiqomahpaal4.masjidku.web.id       | smknbang_ap899.sql         | 1.41 MB   | Nesabatechno   | tQf_niNRa_8i0E4z | admin@masjidalistiqomahpaal4.masjidku.web.id   | masjidku_ap899_user     | WA^Z(9X{E3JW0D.9     | +      |
| 22  | masjidku_ar864         | arrahmah.masjidku.web.id                     | smknbang_ar864.sql         | 282.69 KB | desoleh        | tQf_niNRa_8i0E4z | admin@arrahmah.masjidku.web.id                 | masjidku_ar864_user     | v{UTmpNl,Q;03N!^     | +      |
| 23  | masjidku_as546         | assyahid.masjidku.web.id                     | smknbang_as546.sql         | 252.38 KB | muliadi        | tQf_niNRa_8i0E4z | admin@assyahid.masjidku.web.id                 | masjidku_as546_user     | hp,;26}X1s-=Te-)     | +      |
| 24  | masjidku_as644         | assalam.masjidku.web.id                      | smknbang_as644.sql         | 252.91 KB |                |                  |                                                | masjidku_as644_user     | XbG__=6b]sJDQuoj     | +      |
| 25  | masjidku_as875         | alimansumberejo.masjidku.web.id              | smknbang_as875.sql         | 252.52 KB |                |                  |                                                |                         |                      | +      |
| 26  | masjidku_asysyh575     | asysyahadah.masjidku.web.id                  | smknbang_asysyh575.sql     | 260.04 KB |                |                  |                                                | masjidku_asysyh575_user | =%9[xQ650)^#qg4m     | +      |
| 27  | masjidku_at735         | attalisman.masjidku.web.id                   | smknbang_at735.sql         | 270.40 KB |                |                  |                                                |                         | QR*y*-c%FWNqOhj&     | +      |
| 28  | masjidku_at784         | attamsir23.masjidku.web.id                   | smknbang_at784.sql         | 1.42 MB   |                |                  |                                                | masjidku_at784_user     | ruhkM4Wrcf1c64pkBHjx | +      |
| 29  | masjidku_atc439        | attaqwacitra.masjidku.web.id                 | smknbang_atc439.sql        | 247.77 KB |                |                  |                                                |                         | zR=6?!kd3ReLhC%4     | +      |
| 30  | masjidku_ba887         | baitulakbar.masjidku.web.id                  | smknbang_ba887.sql         | 259.84 KB | Baitulakbar    | tQf_niNRa_8i0E4z | admin@baitulakbar.masjidku.web.id              | masjidku_ba887_user     | B=,W(zBL=%N.E_;J     | +      |
| 31  | masjidku_bm893         | babulmaruf.masjidku.web.id                   | smknbang_bm893.sql         | 272.28 KB | Nesabatechno   | tQf_niNRa_8i0E4z | admin@babulmaruf.masjidku.web.id               | masjidku_bm893_user     | @8,3]B,j*cn&Q2vr     | +      |
| 32  | masjidku_bmb241        | baitulmuttaqinbiting.masjidku.web.id         | smknbang_bmb241.sql        | 1.41 MB   |                |                  |                                                | bmb241                  | iw@T@e2hZWoWV*wI     | +      |
| 33  | masjidku_br896         | baiturrohman.masjidku.web.id                 | smknbang_br896.sql         | 265.54 KB |                |                  |                                                | masjidku_br896_user     | nLsUBkiRVKqTXojEteGW | +      |
| 34  | masjidku_brl340        | baiturrahmanlawatan.masjidku.web.id          | smknbang_brl340.sql        | 262.89 KB |                |                  |                                                | masjidku_brl340_user    | Gq0KXOhdtZvFgS9gDxx6 | +      |
| 35  | masjidku_bs998         | baitussalam.masjidku.web.id                  | smknbang_bs998.sql         | 285.13 KB |                |                  |                                                |                         |                      | -+     |
| 36  | masjidku_bt635         | baituttaqwa.masjidku.web.id                  | smknbang_bt635.sql         | 264.82 KB |                |                  |                                                |                         |                      | -+     |
| 37  | masjidku_bt738         | baiturrahman.masjidku.web.id                 | smknbang_bt738.sql         | 1.40 MB   |                |                  |                                                | masjidku_bt738_user     | BfhE7FkBxXhmJhzlaQEZ | +      |
| 38  | masjidku_demo2         | demo2.masjidku.web.id                        | smknbang_demo2.sql         | 1.51 MB   |                |                  |                                                |                         |                      | -+     |
| 39  | masjidku_demo3         | demo3.masjidku.web.id                        | smknbang_demo3.sql         | 1.13 MB   |                |                  |                                                |                         |                      | -      |
| 40  | masjidku_demo424       | demo4.masjidku.web.id                        | smknbang_demo424.sql       | 254.16 KB |                |                  |                                                |                         |                      | -      |
| 41  | masjidku_demo5         | demo5.masjidku.web.id                        | smknbang_demo5.sql         | 260.27 KB |                |                  |                                                |                         |                      | -      |
| 42  | masjidku_dkm426        | dkmjamialfurqon.masjidku.web.id              | smknbang_dkm426.sql        | 1.40 MB   |                |                  |                                                | masjidku_dkm426_user    | 0ym4twp6hTXsI0ZG2xsj | +      |
| 43  | masjidku_dkma483       | dkmalfadhilah.masjidku.web.id                | smknbang_dkma483.sql       | 1.42 MB   |                |                  |                                                | masjidku_dkma483_user   | 1XYuf3vAdAH1gCiBWgim | +      |
| 44  | masjidku_dm429         | darulmustaqim.masjidku.web.id                | smknbang_dm429.sql         | 281.31 KB |                |                  |                                                | masjidku_dm429_user     | nAZKxnHxJcQOH3gA8Hg  | +      |
| 45  | masjidku_dmt274        | darulmuttaqin.masjidku.web.id                | smknbang_dmt274.sql        | 260.36 KB |                |                  |                                                | masjidku_dmt274_user    | E19D2ES1Af5fnBpftzTL | +      |
| 46  | masjidku_ds462         | darussalam.masjidku.web.id                   | smknbang_ds462.sql         | 252.79 KB |                |                  |                                                |                         |                      | -+     |
| 47  | masjidku_dtc131        | daruttaqwacurahjati.masjidku.web.id          | smknbang_dtc131.sql        | 341.59 KB |                |                  |                                                |                         |                      | -+     |
| 48  | masjidku_ekantin       | https://ekantin.smkn1bangil.sch.id           | smknbang_ekantin.sql       | 90.25 KB  |                |                  |                                                |                         |                      | -      |
| 49  | masjidku_fbm555        | formasbaitulmubarok.masjidku.web.id          | smknbang_fbm555.sql        | 1.43 MB   |                |                  |                                                |                         |                      | -      |
| 50  | masjidku_ha991         | masjidhasanatulabror.masjidku.web.id         | smknbang_ha991.sql         | 1.43 MB   |                |                  |                                                |                         |                      | -      |
| 51  | masjidku_hdy690        | nurulhidayah.masjidku.web.id                 | smknbang_hdy690.sql        | 257.53 KB |                |                  |                                                |                         |                      | -      |
| 52  | masjidku_hdy884        | hidayaturrahman.masjidku.web.id              | smknbang_hdy884.sql        | 260.14 KB |                |                  |                                                |                         |                      | -      |
| 53  | masjidku_hfz894        | hafizhiin.masjidku.web.id                    | smknbang_hfz894.sql        | 259.19 KB |                |                  |                                                |                         |                      | -      |
| 54  | masjidku_hilojs217     | NOT_FOUND                                    | smknbang_hilojs217.sql     | 1.32 MB   |                |                  |                                                |                         |                      | -      |
| 55  | masjidku_ht105         | hidayatulabror.masjidku.web.id               | smknbang_ht105.sql         | 264.36 KB |                |                  |                                                |                         |                      | -      |
| 56  | masjidku_hyb699        | masjidhidayatulabror.masjidku.web.id         | smknbang_hyb699.sql        | 250.90 KB |                |                  |                                                |                         |                      | -      |
| 57  | masjidku_ja572         | masjidjamialmuttaqin.masjidku.web.id         | smknbang_ja572.sql         | 1.43 MB   |                |                  |                                                |                         |                      | -      |
| 58  | masjidku_jd            | masjidjamidarussalam.masjidku.web.id         | smknbang_jd.sql            | 252.99 KB |                |                  |                                                |                         |                      | -      |
| 59  | masjidku_jh62          | jamiatulhuda.masjidku.web.id                 | smknbang_jh62.sql          | 253.19 KB |                |                  |                                                |                         |                      | -      |
| 60  | masjidku_jm81          | jannatulmakwa.masjidku.web.id                | smknbang_jm81.sql          | 252.76 KB |                |                  |                                                |                         |                      | -      |
| 61  | masjidku_jmf746        | jamimiftahulfalahganet.masjidku.web.id       | smknbang_jmf746.sql        | 1.45 MB   |                |                  |                                                |                         |                      | -      |
| 62  | masjidku_jn842         | jabalnur.masjidku.web.id                     | smknbang_jn842.sql         | 259.09 KB |                |                  |                                                |                         |                      | -      |
| 63  | masjidku_jnf363        | masjidjaminurulfalah.masjidku.web.id         | smknbang_jnf363.sql        | 1.43 MB   |                |                  |                                                |                         |                      | -      |
| 64  | masjidku_kj480         | https://khutbahjumat.my.id                   | smknbang_kj480.sql         | 13.23 MB  |                |                  |                                                |                         |                      | -      |
| 65  | masjidku_kntn          | https://kantin.smkn1bangil.sch.id            | smknbang_kntn.sql          | 90.11 KB  |                |                  |                                                |                         |                      | -      |
| 66  | masjidku_mabl28        | masjidalmubaroklemahbang.masjidku.web.id     | smknbang_mabl28.sql        | 253.98 KB |                |                  |                                                |                         |                      | -      |
| 67  | masjidku_maf52         | masjidalfattahurste.masjidku.web.id          | smknbang_maf52.sql         | 249.45 KB |                |                  |                                                |                         |                      | -      |
| 68  | masjidku_mai120        | masjidalihsan.masjidku.web.id                | smknbang_mai120.sql        | 260.20 KB |                |                  |                                                |                         |                      | -      |
| 69  | masjidku_mak156        | masjidalkarim.masjidku.web.id                | smknbang_mak156.sql        | 253.42 KB |                |                  |                                                |                         |                      | -      |
| 70  | masjidku_makr120       | mushollaalaminkulonraya.masjidku.web.id      | smknbang_makr120.sql       | 1.40 MB   |                |                  |                                                |                         |                      | -      |
| 71  | masjidku_mam155        | masjidalmubarok.masjidku.web.id              | smknbang_mam155.sql        | 406.98 KB |                |                  |                                                |                         |                      | -      |
| 72  | masjidku_mam416        | masjidalmadani.masjidku.web.id               | smknbang_mam416.sql        | 336.26 KB |                |                  |                                                |                         |                      | -      |
| 73  | masjidku_mam57         | masjidalmuhajirin.masjidku.web.id            | smknbang_mam57.sql         | 728.36 KB |                |                  |                                                |                         |                      | -      |
| 74  | masjidku_man28         | masjidannur.masjidku.web.id                  | smknbang_man28.sql         | 1.02 MB   |                |                  |                                                |                         |                      | -      |
| 75  | masjidku_manarul       | manarulislambangil.masjidku.web.id           | smknbang_manarul.sql       | 881.51 KB |                |                  |                                                |                         |                      | -      |
| 76  | masjidku_masjid        | masjidku.web.id                              | smknbang_masjid.sql        | 46.56 MB  |                |                  |                                                |                         |                      | -      |
| 77  | masjidku_mat646        | masjidattaubah.masjidku.web.id               | smknbang_mat646.sql        | 244.60 KB |                |                  |                                                |                         |                      | -      |
| 78  | masjidku_mb734         | miftahulummahbantarjaya.masjidku.web.id      | smknbang_mb734.sql         | 1.43 MB   |                |                  |                                                |                         |                      | -      |
| 79  | masjidku_mbm511        | mabesalmukhlashin.masjidku.web.id            | smknbang_mbm511.sql        | 264.82 KB |                |                  |                                                |                         |                      | -      |
| 80  | masjidku_mbm798        | masjidbaitulmuttaqin.masjidku.web.id         | smknbang_mbm798.sql        | 253.91 KB |                |                  |                                                |                         |                      | -      |
| 81  | masjidku_mbs205        | masjidbaitussalam.masjidku.web.id            | smknbang_mbs205.sql        | 253.94 KB |                |                  |                                                |                         |                      | -      |
| 82  | masjidku_mbswa26       | masjidbaitussalamwatuagung.masjidku.web.id   | smknbang_mbswa26.sql       | 264.32 KB |                |                  |                                                |                         |                      | -      |
| 83  | masjidku_md297         | masjidaliman.masjidku.web.id                 | smknbang_md297.sql         | 1.42 MB   |                |                  |                                                |                         |                      | -      |
| 84  | masjidku_mg265         | masjidmergasana.masjidku.web.id              | smknbang_mg265.sql         | 1.43 MB   |                |                  |                                                |                         |                      | -      |
| 85  | masjidku_mh332         | mujahidin.masjidku.web.id                    | smknbang_mh332.sql         | 261.01 KB |                |                  |                                                |                         |                      | -      |
| 86  | masjidku_mh40          | masjidhabibah.masjidku.web.id                | smknbang_mh40.sql          | 1.40 MB   |                |                  |                                                |                         |                      | -      |
| 87  | masjidku_mhbjtb933     | masjidhijrahbjtb.masjidku.web.id             | smknbang_mhbjtb933.sql     | 1.43 MB   |                |                  |                                                |                         |                      | -      |
| 88  | masjidku_mhj522        | almuhajirin.masjidku.web.id                  | smknbang_mhj522.sql        | 255.64 KB |                |                  |                                                | masjidku_mhj522         | DYC!$*f{x^CB61Sx     | +      |
| 89  | masjidku_mhj951        | muhajirinafd2.masjidku.web.id                | smknbang_mhj951.sql        | 255.69 KB |                |                  |                                                |                         |                      | -      |
| 90  | masjidku_mj702         | mushollajamaludin.masjidku.web.id            | smknbang_mj702.sql         | 1.42 MB   |                |                  |                                                |                         |                      | -      |
| 91  | masjidku_mj979         | mjpolsektajebres.masjidku.web.id             | smknbang_mj979.sql         | 1.43 MB   |                |                  |                                                |                         |                      | -      |
| 92  | masjidku_mja19         | masjidjamikalmubarok.masjidku.web.id         | smknbang_mja19.sql         | 260.74 KB |                |                  |                                                |                         |                      | -      |
| 93  | masjidku_mjabk298      | masjidjamialbarokahkemayoran.masjidku.web.id | smknbang_mjabk298.sql      | 269.39 KB |                |                  |                                                |                         |                      | -      |
| 94  | masjidku_mji576        | masjidjamikismail.masjidku.web.id            | smknbang_mji576.sql        | 300.38 KB |                |                  |                                                |                         |                      | -      |
| 95  | masjidku_mk758         | masjidkampung.masjidku.web.id                | smknbang_mk758.sql         | 250.70 KB |                |                  |                                                |                         |                      | -      |
| 96  | masjidku_mm324         | mabesalmukhlasin.masjidku.web.id             | smknbang_mm324.sql         | 258.64 KB |                |                  |                                                |                         |                      | -      |
| 97  | masjidku_mnh227        | masjidnurulhuda.masjidku.web.id              | smknbang_mnh227.sql        | 274.47 KB |                |                  |                                                |                         |                      | -      |
| 98  | masjidku_mnh894        | mushollanurulhidayah.masjidku.web.id         | smknbang_mnh894.sql        | 1.41 MB   |                |                  |                                                |                         |                      | -      |
| 99  | masjidku_msdemo        | demo.masjidku.web.id                         | smknbang_msdemo.sql        | 1.36 MB   |                |                  |                                                |                         |                      | -+     |
| 100 | masjidku_msp124        | attaubah-swadayapos.masjidku.web.id          | smknbang_msp124.sql        | 263.93 KB |                |                  |                                                | masjidku_msp124_user    | aQQ7OVEB8EUnWupwZPOl | +      |
| 101 | masjidku_mt573         | manarulfikritelkommojokerto.masjidku.web.id  | smknbang_mt573.sql         | 1.42 MB   |                |                  |                                                |                         |                      | -      |
| 102 | masjidku_mtw450        | masjidattaqwa.masjidku.web.id                | smknbang_mtw450.sql        | 262.10 KB |                |                  |                                                |                         |                      | -      |
| 103 | masjidku_nats95        | nurulamalts.masjidku.web.id                  | smknbang_nats95.sql        | 259.81 KB |                |                  |                                                |                         |                      | -      |
| 104 | masjidku_nh369         | nurulhuda.masjidku.web.id                    | smknbang_nh369.sql         | 253.29 KB |                |                  |                                                |                         |                      | -      |
| 105 | masjidku_nh570         | masjidnurulhikmah.masjidku.web.id            | smknbang_nh570.sql         | 1.40 MB   |                |                  |                                                |                         |                      | -      |
| 106 | masjidku_nh611         | masjidjaminurhasanah.masjidku.web.id         | smknbang_nh611.sql         | 1.43 MB   |                |                  |                                                |                         |                      | -      |
| 107 | masjidku_ni473         | nurulislam.masjidku.web.id                   | smknbang_ni473.sql         | 1.46 MB   |                |                  |                                                |                         |                      | -      |
| 108 | masjidku_ni595         | nuruliman.masjidku.web.id                    | smknbang_ni595.sql         | 215.52 KB |                |                  |                                                |                         |                      | -      |
| 109 | masjidku_ni839         | nurulikhlas012.masjidku.web.id               | smknbang_ni839.sql         | 283.31 KB |                |                  |                                                |                         |                      | -      |
| 110 | masjidku_nikh745       | nurulikhlas.masjidku.web.id                  | smknbang_nikh745.sql       | 274.83 KB |                |                  |                                                |                         |                      | -      |
| 111 | masjidku_njs707        | nuruljamalsiliwangi.masjidku.web.id          | smknbang_njs707.sql        | 253.87 KB |                |                  |                                                |                         |                      | -      |
| 112 | masjidku_ppm265        | ppm-daarussalaam.masjidku.web.id             | smknbang_ppm265.sql        | 1.43 MB   |                |                  |                                                |                         |                      | -      |
| 113 | masjidku_rhd521        | https://rahadstore.id                        | smknbang_rhd521.sql        | 1.72 MB   |                |                  |                                                |                         |                      | -      |
| 114 | masjidku_sb936         | sabilillah.masjidku.web.id                   | smknbang_sb936.sql         | 272.76 KB |                |                  |                                                |                         |                      | -      |
| 115 | masjidku_sg274         | sabilillahgendol.masjidku.web.id             | smknbang_sg274.sql         | 312.71 KB |                |                  |                                                |                         |                      | -      |
| 116 | masjidku_sh723         | shuhbatussunnahindonesia.masjidku.web.id     | smknbang_sh723.sql         | 1.43 MB   |                |                  |                                                |                         |                      | -      |
| 117 | masjidku_sn883         | senaassalamm.masjidku.web.id                 | smknbang_sn883.sql         | 253.60 KB |                |                  |                                                |                         |                      | -      |
| 118 | masjidku_srmbbtrhmn773 | serambibaiturrahman22.masjidku.web.id        | smknbang_srmbbtrhmn773.sql | 1.43 MB   |                |                  |                                                |                         |                      | -      |
| 119 | masjidku_sw875         | syahidwariyono.masjidku.web.id               | smknbang_sw875.sql         | 262.71 KB |                |                  |                                                |                         |                      | -      |
| 120 | masjidku_wp001         | http://alghofuri.master.masjidku.web.id      | smknbang_wp001.sql         | 413.65 KB |                |                  |                                                |                         |                      | -      |
| 121 | masjidku_wp358         | https://bahasaarab.org                       | smknbang_wp358.sql         | 4.47 MB   |                |                  |                                                |                         |                      | -      |
| 122 | masjidku_wp487         | abdullahalhamudi.masjidku.web.id             | smknbang_wp487.sql         | 277.50 KB |                |                  |                                                |                         |                      | -      |
| 123 | masjidku_wp64          | al-muhajirin.masjidku.web.id                 | smknbang_wp64.sql          | 255.54 KB |                |                  |                                                |                         |                      | -      |
| 124 | masjidku_wp683         | https://podcast.web.id                       | smknbang_wp683.sql         | 4.34 MB   |                |                  |                                                |                         |                      | -      |
| 125 | masjidku_wp947         | masjidrahmatullah.masjidku.web.id            | smknbang_wp947.sql         | 253.38 KB |                |                  |                                                |                         |                      | -      |
| 126 | masjidku_wp951         | masjidannurpamulangpermai1.masjidku.web.id   | smknbang_wp951.sql         | 6.05 MB   |                |                  |                                                |                         |                      | -      |
| 127 | masjidku_wp958         | masjidrayakasangmungkal.masjidku.web.id      | smknbang_wp958.sql         | 1.53 MB   |                |                  |                                                |                         |                      | -      |

## Progress Extraction Subdomain Asli
- Sudah di-extract: **127/127** ✅
- Metode: `grep siteurl`/`home` dari wp_options di setiap file SQL
- API Token ~/.api

## Progress Migrasi
- Total subdomain: 127
- Sudah dicek: **17/127** (12 sebelumnya + 5 hasil batch automation Hermes: as644, as875, asysyh575, at735, atc439)
- Table prefix konsisten: **wpmj** di semua site yang udah diproses via automation
- Prioritas: `masjidku_masjid` (46.56 MB, ini yang jadi subjek [[Checklist Migrasi Masjidku]])

## Audit Subdomain Aktif cPanel (17 Sep 2026)
- Live-check langsung ke `DomainInfo/list_domains` cPanel: **45 subdomain aktif** dari 127 target.
- Semua docroot udah dinormalisasi ke standar `$HOME/Masjid/<nama_subdomain_persis>.masjidku.web.id` (2 site lama `dkmjamialfurqon`, `dkmalfadhilah` + 2 site lain `baitulmuttaqinbiting`, `alimansumberejo` sempat salah format, sudah di-fix via delete+recreate subdomain).
- 2 subdomain sampah/test (`demo6`, `test`) — tidak ada di 127 daftar resmi — sudah dihapus dari cPanel.
- Status `+` di tabel di atas sekarang mencerminkan: **subdomain aktif DAN database sudah dibikin**. Status `-+` = subdomain aktif tapi database BELUM dibikin (butuh `Mysql/create_database` dkk). Status `-` polos = subdomain juga belum aktif sama sekali.
- Site dengan status `-+` yang masih perlu database: `bs998` (baitussalam), `bt635` (baituttaqwa), `demo2`, `ds462` (darussalam), `dtc131` (daruttaqwacurahjati), `msdemo` (demo).

## Cek Konten Live via Title Tag (17 Sep 2026)
HTTP 200 doang gak cukup buat mastiin situsnya udah beneran keisi — banyak yang cuma kosong ("Index of /", folder ada tapi belum di-import WordPress-nya). Hasil cek `<title>` tag tiap subdomain:

**✅ Ada konten WordPress (32 site)**: alikhlasbajo, alfath, alhidayah, masjidalmadinahhabibah, alhadi, alhikmah, aha, masjidal-hidayahcandu, alikhlas, alislah, al-ikhlastegalrejo, alibinabithalib, alatief, alawwabin, ahmadmaryam, masjidalistiqomahpaal4, arrahmah, assyahid, baitulakbar, babulmaruf, alakrom, asysyahadah, attalisman, attaqwacitra, baiturrohman, baiturrahmanlawatan, almuhajirin, attaubah-swadayapos, attamsir23, baiturrahman, baitulmuttaqinbiting

**⚠️ Anomali — konten mismatch, perlu re-check manual**: `masjidalkautsarsawitraya` — title-nya malah nampilin "Demo 2 Masjidku.web.id", kemungkinan salah import/ke-tuker sama site lain. `assalam` — title kosong, perlu dicek manual apa isinya beneran kosong atau cuma title-nya yang gak ke-set.

**❌ Kosong / "Index of /" — folder ada tapi WordPress belum di-import (13 site)**: aluswah, baitussalam, baituttaqwa, darulmustaqim, darulmuttaqin, darussalam, daruttaqwacurahjati, demo, demo2, dkmjamialfurqon, dkmalfadhilah, alimansumberejo

> Catatan: subdomain+database aktif TIDAK otomatis berarti kontennya udah beres — upload file WordPress + jalanin import SQL tetep harus dilakuin manual/via script terpisah buat 13 site kosong di atas.

## Verifikasi site_url via WP REST API (17 Sep 2026)
Cek `wp-json/` tiap site buat mastiin `siteurl` config WordPress-nya cocok sama nama subdomain di vault (bukan cuma nebak dari title doang):

**✅ CONFIRMED match persis (18 site)** — field `url` di REST API sama persis kayak subdomain-nya, gak ada mismatch: alfath, alhidayah, alhadi, alhikmah, alislah, alibinabithalib, alatief, babulmaruf, asysyahadah, attalisman, attaqwacitra, baiturrohman, baiturrahmanlawatan, almuhajirin, attaubah-swadayapos, attamsir23, baiturrahman, baitulmuttaqinbiting

**⚠️ Gak bisa diverifikasi (15 site)** — REST API `/wp-json/` return PARSE_FAILED (kemungkinan di-disable security plugin, BUKAN otomatis berarti salah): alikhlasbajo, masjidalmadinahhabibah, aha, masjidal-hidayahcandu, alikhlas, al-ikhlastegalrejo, alawwabin, ahmadmaryam, masjidalistiqomahpaal4, arrahmah, assyahid, baitulakbar, alakrom, **masjidalkautsarsawitraya**, **assalam**

> `masjidalkautsarsawitraya` dan `assalam` (2 site yang di-flag anomali sebelumnya) TERMASUK yang gagal di-verify REST API-nya — masih perlu cek manual browser buat mastiin konten/data-nya beneran bener atau ketuker.

---
#mikrotik #pkl #wordpress #masjidku #checklist #database
[[Checklist Migrasi Masjidku]]
[[Index - MikroTik]]
