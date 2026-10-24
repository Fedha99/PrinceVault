# Error - ParseError Kutip Nyasar di String PHP

> Project: MCC prototype (monitoring-laravel-prototype)
> Tanggal: 19 Oktober 2026
> Terkait: [[Log Kerja Hermes - web-monitor]], [[Project Baru - Web Integrasi MikroTik RADIUS Zabbix]]

## Gejala

- PHPUnit: `ParseError: syntax error, unexpected string content "))." (dari {$total})";", expecting ")"` di `app/Support/Format.php:123`.
- Empat test feature dashboard/panel tiba-tiba 500, padahal sebelumnya 3 test pertama lolos.
- `php -l` konfirmasi parse error di baris yang kelihatan "normal" saat dibaca.

## Penyebab

Typo satu kutip nyasar: `$parts'))." (dari {$total})"` — `$parts` diikuti `'` lalu `))`.
Parser PHP nganggap kutip itu mulai string baru, jadi `\'))` dianggap string,
dan `." (dari {$total})"` jadi sisa token tanpa pasangan.

Sempat salah diagnosis: dikira karakter Unicode `·` (middle dot) di `implode(' · ', ...)`
yang bikin parse error — terbukti salah lewat eksperimen kecil: file test berisi
`implode(" · ", ...)` lolos `php -l`. Kesimpulan: karakter non-ASCII di dalam kutip
tidak merusak sintaks PHP.

## Diagnosis

`sed -n '123p' file | xxd` buat lihat byte asli (read_file merapikan tampilan,
jadi typo kutip nggak kelihatan). Byte: `70 61 72 74 73 27 29 29` = `parts'))`.
File test /tmp dengan karakter yang dicurigai lolos lint → karakter bukan penyebab.

## Fix

Hapus kutip nyasar: `$parts')).` → `$parts)).` lewat patch. `php -l` bersih,
7 test feature lolos (27 assertions).

## Pencegahan

- Kalau parse error nunjuk baris yang "kelihatan benar", jangan buru-buru tuduh
  karakter Unicode — cek dulu byte aslinya dengan `xxd`, terutama sekitar tanda kutip.
- Jalankan `php -l` (atau test cepat) SEBELUM commit langkah besar — error ini
  kelewat karena 3 file ditulis berturut-turut tanpa lint per file.
- write_file tidak selalu menjalankan linter PHP, jadi verifikasi manual perlu.
