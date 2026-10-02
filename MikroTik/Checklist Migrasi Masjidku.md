# Checklist Migrasi Masjidku.web.id

> Client: Masjidku.web.id (bukan proyek pribadi, ini punya client PKL)
> Subdomain testing: demo6.masjidku.web.id
> Folder server: /home/masjidku/Masjid/demo6/
> Supervisor: Pak Shobi

## Konteks
Situs lama kena masalah wp-content ke-replace. Pak Shobi minta migrasi pake fresh install dulu di subdomain testing sebelum sentuh situs live. Pola ini juga berlaku buat web lain (tiap web dapet folder sendiri di dalam struktur subdomain, sesuai SOP 5-langkah dari Pak Shobi -- lihat [[PKL Overview]]).

## File yang Dibutuhkan (sudah ada di lokal)
- [x] `wp-masjid-1.6.6.zip` (theme custom masjid, dikirim Pak Shobi)
- [x] `smknbang_masjid.sql.gz` (database lama, perlu di-extract)
- [x] `Masjidku.web.id.zip` (backup lengkap situs lama, buat ambil wp-content/uploads)
- [x] `cred.txt` (kredensial -- JANGAN commit ke git manapun)

## Checklist Step-by-Step

### Setup awal
- [ ] Subdomain `demo6.masjidku.web.id` dibuat di cPanel > Domains
- [ ] WordPress fresh install di `/Masjid/demo6/` (struktur folder dikonfirmasi Pak Shobi: "Yes, khusus masjid")
- [ ] Fix folder nested (kalau ada) -- pastikan wp-admin/wp-content/index.php langsung di root folder demo6, bukan bersarang

### DNS
- [x] Cek `nslookup demo6.masjidku.web.id` -- kalau NXDOMAIN, cek dulu apakah A record sudah ada di Zone Editor
- [x] Kalau record sudah ada tapi belum propagasi, tunggu atau pakai `/etc/hosts` buat testing lokal:
  ```
  echo "103.234.210.214 demo6.masjidku.web.id" | sudo tee -a /etc/hosts
  ```

### Theme
- [x] Login `demo6.masjidku.web.id/wp-admin`
- [x] Appearance > Themes > Add New Theme > Upload Theme > `wp-masjid-1.6.6.zip`
- [x] Install Now > Activate
- [x] Cek tampilan depan situs (boleh masih kosong kontennya, itu wajar)

### Database (RISIKO TINGGI -- hati-hati di sini)
- [ ] Extract `smknbang_masjid.sql.gz` jadi `.sql` polos
- [ ] Cek database WordPress fresh (`masjidku_demo6`) sudah ada
- [ ] Import `smknbang_masjid.sql` via phpMyAdmin
  - Kalau bentrok sama tabel WordPress fresh yang sudah ke-generate, mungkin perlu drop tabel dulu sebelum import
- [ ] Cek & samakan `$table_prefix` di `wp-config.php` dengan prefix yang ada di database yang baru di-import (WordPress fresh biasanya pakai prefix random, database lama kemungkinan pakai `wp_`)
- [ ] Test lagi setelah import: cek error "database connection" atau "table not found"

### Konten & Assets
- [ ] Pindahin `wp-content/uploads/` dari backup lama (`Masjidku.web.id.zip`) ke instalasi baru, biar gambar lama gak broken link

### Finalisasi
- [ ] Konfirmasi ke Pak Shobi: `demo6` ini mau jadi live final (replace situs utama) atau tetap staging permanen
- [ ] Kalau mau live: rencana cutover (kapan situs lama di-swap ke yang baru)

## Catatan Insiden yang Sudah Terjadi
- Sempat salah struktur folder (`Masjid/demo6/Masjid/demo6` -- nested), sudah difix dengan cara pindahin isi ke folder terluar dan hapus folder kosong nested.
- Sempat kena "server not found" -- ternyata bukan salah instalasi, tapi DNS `demo6` belum sempat dibuatkan A record / belum propagasi ke resolver publik walau sudah ada di nameserver otoritatif.
- Ditemukan waktu proses awal: akun hosting `smknbang` ternyata nampung 128 database berbeda (bukan cuma masjidku) -- kemungkinan besar akun hosting sekolah yang dipakai bareng buat banyak client/situs. Perlu hati-hati jangan sentuh database lain.

---
#mikrotik #pkl #wordpress #masjidku #checklist
[[Index - MikroTik]]
