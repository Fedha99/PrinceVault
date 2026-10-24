---
title: LB-Open-Questions
type: handoff
tags: [#type/handoff, #laptop-battlefield, #open-questions]
last_verified: 2026-10-24
confidence: VERIFIED
---

# LB-Open-Questions — Pertanyaan Terbuka dari Recon + Vault

> Dikumpulkan dari recon 2026-10-24 + vault existing conflicts. Butuh keputusan user.

---

## 1. Distro Switch: Artix → Arch

**Konteks**: Vault [[Spek HP Pavilion g4]] menyebut Artix Linux + OpenRC + kernel cachyos-bore. Live system: Arch Linux + systemd + kernel zen.
**Pertanyaan**: Kapan switch terjadi? Dokumentasikan dua era (Artix era + Arch era) atau update note lama ke current?
**Rekomendasi**: Buat note terpisah `LB-OS-History.md` untuk era Artix, update `Spek HP Pavilion g4` ke current.

---

## 2. MCC UI Target: Prototype vs monitoring-laravel-1

**Konteks**: `monitoring-laravel-prototype` punya Livewire dashboard, DeviceLatestPoll, topology, test — semua untracked. `monitoring-laravel-1` hanya backend M1 + CRUD.
**Pertanyaan**: Mana yang **production target**? Prototype untuk merge ke 1, atau prototype jadi main?
**Rekomendasi**: Prototype = active UI dev. Rencana: merge ke 1 setelah UI stable.

---

## 3. Polling Worker (D-014, D-013)

**Konteks**: Belum ada polling service untuk RouterOS / metrik. Vault mention D-014 threshold/stale, D-013 DHCP.
**Pertanyaan**: Prioritas sekarang? Butuh design doc dulu atau langsung implement di prototype?
**Rekomendasi**: Design doc dulu (threshold, interval, retry, alerting), lalu implement di prototype.

---

## 4. web-monitor Project Status

**Konteks**: Project Laravel 13 + Filament + PostgreSQL sudah dihapus dari mono-repo (12 Okt). Container exited 3 minggu lalu.
**Pertanyaan**: Abandoned atau pindah repo? Butuh archive atau delete images?
**Rekomendasi**: Archive note (done), cleanup docker images kalau tidak dipakai.

---

## 5. GNS3 & Zabbix Active?

**Konteks**: GNS3 project files modified recent (3 project). Zabbix folder kosong. Vault punya note Zabbix pipeline.
**Pertanyaan**: GNS3 aktif untuk PKL/OJM? Zabbix masih direncanakan atau diganti monitoring-laravel?
**Rekomendasi**: GNS3 = aktif (simulasi RouterOS). Zabbix = diganti MCC (monitoring-laravel).

---

## 6. Masjidku WordPress Deployment

**Konteks**: 127 subdomain, cPanel kenari.superserver.co.id. DNS pending (blocker).
**Pertanyaan**: Timeline deployment? Butuh bantuan script automation untuk 127 subdomain?
**Rekomendasi**: Fokus DNS dulu, lalu batch import via script/WP-CLI.

---

## 7. Minecraft Modpack

**Konteks**: Profile mention NeoForge 1.21.1 modpack. `~/.minecraft` ada tapi tidak di-scan.
**Pertanyaan**: Modpack work aktif? Butuh documentation di vault?
**Rekomendasi**: Kalau aktif, buat note `LB-Project-Minecraft-Modpack.md`.

---

## 8. Primary AI Agent untuk Coding

**Konteks**: Hermes, Claude, Cursor, opencode, Codex semua terinstall.
**Pertanyaan**: Mana primary untuk coding feature? Mana untuk review? Mana untuk planning?
**Rekomendasi**: Lihat [[LB-AI-Agents]] tabel rekomendasi. User pilih default.

---

## 9. Scheduler Fix (bfq → mq-deadline)

**Konteks**: SSD USB pakai `bfq`, stall I/O 2%. Udev rule siap tapi belum diterapkan.
**Pertanyaan**: Apply sekarang? Butuh reboot atau `udevadm trigger` cukup?
**Rekomendasi**: Apply via udev rule + `udevadm trigger` (no reboot needed).

---

## 10. Vault Structure: Laptop-Battlefield Naming

**Konteks**: Folder `Laptop-Battlefield/` dengan prefix `LB-` untuk semua note.
**Pertanyaan**: Naming convention OK? Atau pakai `LB Hardware` (spasi) vs `LB-Hardware` (dash)?
**Rekomendasi**: Dash (`LB-Hardware`) — konsisten, aman untuk wikilink, tidak butuh escaping.

---

## 11. Vault Existing Conflicts Resolution

| Note Existing | Conflict | Resolusi Usulan |
|---------------|----------|-----------------|
| Spek HP Pavilion g4 | OS/Init/Kernel/IP beda | Update ke Arch/systemd/zen, tambah history section |
| Diagnosis Freeze RAM dan USB SSD | Duplikat dengan LB-Incident-Freeze | Keep both, cross-link, mark LB- sebagai canonical |
| Hardware Repair SATA dan Repasting | Masih akurat | Keep, cross-link |

---

## 12. CodeGraph Index Status

**Konteks**: `opencode.jsonc` configured tapi `.codegraph/` belum diverifikasi ada.
**Pertanyaan**: Index sudah dibangun? Butuh `codegraph init -i`?
**Rekomendasi**: Jalankan `codegraph status` di monitoring repo.

---

## 13. MariaDB vs PostgreSQL di monitoring-laravel-1

**Konteks**: `.env.example` bilang `DB_CONNECTION=pgsql` tapi container `mcc-mariadb` pakai MariaDB.
**Pertanyaan**: Mana yang dipakai? Perlu update .env.example atau ganti container?
**Rekomendasi**: Konsistenkan — kalau MariaDB, update .env.example ke `mysql`/`mariadb`.

---

## 14. mcc/ Folder Untracked (Dua Project)

**Konteks**: `mcc/` folder muncul di status untracked di monitoring-laravel-1 DAN prototype.
**Pertanyaan**: Apa isinya? Sama atau beda? Perlu commit atau .gitignore?
**Rekomendasi**: Cek isi `mcc/` — kalau module shared, jadi submodule atau package.

---

## 15. Earlyoom Threshold Tuning

**Konteks**: Default SIGTERM 10%/10%, SIGKILL 5%/5%. RAM 11GiB → 10% = 1.1GiB.
**Pertanyaan**: Threshold cukup atau terlalu agresif? Butuh adjust untuk workload Firefox+Electron?
**Rekomendasi**: Monitor dulu 1 minggu via `journalctl -u earlyoom`, lalu adjust kalau terlalu sering kill.

---

#laptop-battlefield #open-questions
[[Home-Laptop-Battlefield]]