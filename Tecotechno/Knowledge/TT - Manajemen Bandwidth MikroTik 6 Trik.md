---
judul: Manajemen Bandwidth MikroTik 6 Trik Simple Queue CIR MIR Adil
sumber: https://tecotechno.com/manajemen-bandwidth-mikrotik-6-trik-simple/
tanggal: 2026-07-15
tags: [tecotechno, knowledge, mikrotik, bandwidth, simple-queue, cir, mir, qos, winbox]
---
## Ringkasan
Manajemen bandwidth MikroTik pakai Simple Queue konsep CIR (Committed Information Rate = Limit At) dan MIR (Maximum Information Rate = Max Limit). 6 trik: CIR jaminan minimal, MIR batas atas pinjam bandwidth idle, Priority 1-8 untuk rebutan bandwidth ekstra, indikator warna ikon (hijau/kuning/merah), test via wget client Linux, troubleshooting & tips optimal (Parent Queue per divisi, nama deskriptif, sisakan bandwidth admin, PCQ untuk banyak client).

## Poin Penting
- CIR (Limit At): kecepatan minimal dijamin user, walau jaringan padat
- MIR (Max Limit): batas atas kecepatan kalau jaringan longgar (pinjam bandwidth idle)
- Limit At ≤ Max Limit (wajib)
- Priority: 1=tertinggi (server), 8=standar; berlaku saat kompetisi bandwidth idle
- Indikator Winbox: Hijau (<CIR), Kuning (CIR-MIR), Merah (=MIR)
- Test: `wget -O /dev/null http://speedtest.server/file.iso` → cek rate di Winbox
- PCQ (Per Connection Queue) untuk auto-split banyak client tanpa rule manual

## Langkah / Cara Kerja
1. Winbox → Queues → Simple Queue → +
2. Tab General: Name="Budi Bandwidth", Target=192.168.55.254/32, Max Limit Upload/Download=8M/8M (MIR)
3. Tab Advanced: Limit At Upload/Download=2M/2M (CIR), Priority=5 (standar)
4. Apply → OK → cek status aktif di list (ikon hijau/kuning/merah)
5. Test client Linux: `wget` file besar → amati Rate di Winbox

## Istilah & Tools
- [[CIR]]
- [[MIR]]
- [[Simple Queue]]
- [[PCQ]]
- [[Queue Tree]]
- [[MTCNA Materi]]

## Terkait
- [[Index - Tecotechno Knowledge]]
- [[Index - MikroTik]]
- [[MTCNA Materi]]
- [[TT - Perintah Dasar MikroTik]]
- [[TT - Konfigurasi DHCP Server MikroTik]]
- [[TT - Cara Konfigurasi VLAN MikroTik]]
