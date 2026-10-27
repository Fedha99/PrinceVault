---
judul: 4 Cara Membuat Folder Tidak Bisa Diakses Pengguna Lain Windows Tanpa Software
sumber: https://tecotechno.com/cara-membuat-folder-tidak-bisa-diakses-pengguna-lain/
tanggal: 2026-07-09
tags: [tecotechno, knowledge, windows, ntfs-permissions, privacy, security, folder]
---
## Ringkasan
Cara membatasi akses folder di Windows menggunakan NTFS Permissions bawaan (tanpa software tambahan). Mencakup persiapan (admin account, user terpisah, NTFS drive), langkah Properties → Security → Edit → Deny permissions (Read & Execute, List Folder Contents, Read), tips keamanan, kesalahan umum (jangan blokir Administrators/SYSTEM), dan perbandingan kelebihan/kekurangan.

## Poin Penting
- Hanya bekerja di drive NTFS; butuh akun Administrator & user terpisah per orang
- Deny permissions: Read & Execute, List Folder Contents, Read (atau Full Control untuk total block)
- JANGAN Deny grup Administrators atau SYSTEM → kehilangan akses sendiri
- Tidak mengenkripsi data; untuk data sensitif kombinasikan BitLocker
- Tersedia di Windows Home & Pro

## Langkah / Cara Kerja
1. Klik kanan folder → Properties → tab Security → Edit
2. Pilih/tambah user yang dibatasi → centang Deny pada Read & Execute, List Folder Contents, Read
3. Apply → Yes → OK
4. User terbatas tidak bisa buka folder

## Istilah & Tools
- [[NTFS Permissions]]
- [[BitLocker]]
- [[Windows Security]]
- [[ACL]]

## Terkait
- [[Index - Tecotechno Knowledge]]
- [[Index - Linux]]
- [[TT - 7 Hal Penting Authentication]]
