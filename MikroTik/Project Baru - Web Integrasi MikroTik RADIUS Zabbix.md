---
tags: [mikrotik, pkl, laravel, filament, radius, zabbix, project-baru]
---

# Project Baru dari Pak Shobi — Web Integrasi MikroTik + RADIUS + Zabbix (2026-10-01)

Status: **baru di-assign, scope belum jelas** — belum ada nama project resmi, belum ada deadline, belum ada detail requirement lengkap. Catatan ini dari chat WhatsApp sama Pak Shobi tanggal 1 Okt 2026.

## Brief dari Pak Shobi (verbatim summary)

> Buatkan aplikasi web buat baca API MikroTik, dikombinasikan sama RADIUS dan Zabbix — databasenya Postgres, pakai framework Laravel. 1 web bisa nangani MikroTik, RADIUS server (free RADIUS), dan Zabbix. Pakai Filament buat adminnya.

Konsepnya: kayak bikin Winbox sendiri tapi versi terintegrasi, dan dalam bentuk PWA (progressive web app) — bukan native desktop app.

## Spesifikasi teknis yang udah fix dari Pak Shobi

- **Framework:** Laravel
- **Admin panel:** Filament
- **Database:** PostgreSQL
- **Scope integrasi:** 1 aplikasi web nangani 3 hal sekaligus:
  1. MikroTik API (baca data dari router, mirip fungsi Winbox)
  2. RADIUS server — pakai FreeRADIUS
  3. Zabbix — integrasi database monitoring yang udah ada
- **Bentuk aplikasi:** PWA (Progressive Web App), bukan aplikasi desktop

## Yang masih belum jelas / perlu ditanyain ke Pak Shobi

- [ ] Nama/judul project resmi
- [ ] Deadline atau timeline pengerjaan
- [ ] Fitur spesifik apa aja yang harus ada di tiap modul (MikroTik/RADIUS/Zabbix)
- [ ] Siapa target user aplikasi ini (internal PKL doang, atau buat dipakai beneran di infrastruktur yang ada?)
- [ ] Apakah ini nyambung ke infrastruktur MikroTik/Zabbix yang udah ada dari project sebelumnya ([[masjidku-migration]] pipeline Zabbix->n8n->Telegram->Google Sheets), atau project terpisah total
- [ ] Server/environment buat development dan deployment-nya di mana

## Next steps

- [ ] Mulai belajar/setup Laravel + Filament kalau belum familiar
- [ ] Riset integrasi Laravel dengan MikroTik API (RouterOS API client untuk PHP)
- [ ] Riset integrasi FreeRADIUS dengan Laravel/Postgres
- [ ] Tanya detail scope ke Pak Shobi di sesi berikutnya

## Roadmap belajar & pengerjaan (2026-10-02)

Urutan linear, jangan loncat-loncat biar gak overwhelmed:

1. **Setup environment** — install Laravel + Filament, setup PostgreSQL lokal buat dev
2. **Belajar Laravel dasar** — paham struktur folder (routes, controllers, models) sebelum sentuh fitur apapun
3. Pecah ke **3 jalur paralel**, validasi satu-satu secara terpisah:
   - **Koneksi MikroTik** — lewat RouterOS API client buat PHP, target: bisa tarik data basic (interface list, resource usage) dari 1 router test
   - **Setup FreeRADIUS** — konfigurasi pakai PostgreSQL sebagai backend, validasi auth test user lewat `radtest` dari command line dulu sebelum nyambungin ke Laravel
   - **Integrasi Zabbix** — lewat REST API (JSON-RPC) resmi Zabbix, cek apakah credential dari pipeline Zabbix->n8n->Telegram yang lama bisa dipakai ulang
4. **Desain schema Postgres** — baru setelah 3 koneksi di atas tervalidasi, gabungkan jadi schema: tabel router/device, tabel user RADIUS, tabel mapping ke host Zabbix
5. **Admin panel Filament** — generate resource CRUD dari model Eloquent, mulai dari 1 resource paling simple
6. **Build fitur bertahap** — prioritaskan fitur read-only (liat status router, user RADIUS aktif, alert Zabbix) sebelum fitur yang bisa ubah konfigurasi router dari web

Catatan: sebelum mulai Laravel, pertanyaan scope ke Pak Shobi (lihat checklist "Yang masih belum jelas" di atas) sebaiknya udah dijawab dulu — terutama soal apakah project ini nyambung ke infrastruktur Zabbix yang lama atau berdiri sendiri, karena itu ngubah keputusan di step 3 dan 4.

- [[Log Kerja Hermes - web-monitor]]
