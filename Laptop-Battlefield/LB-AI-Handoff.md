---
title: LB-AI-Handoff
type: handoff
tags: [#type/handoff, #laptop-battlefield, #ai-handoff]
last_verified: 2026-10-24
confidence: VERIFIED
---

# LB-AI-Handoff — Orientasi Cepat untuk Sesi AI Berikutnya

> Maks 40 baris. Dibaca oleh AI agent baru untuk konteks instan.

---

## Mesin & OS
- **HP Pavilion g4** (i7-3612QM, 11GiB RAM, Intel HD 4000)
- **Arch Linux** + systemd + kernel 7.2.11-zen + Hyprland Wayland
- **Root di SSD USB** (JMicron enclosure, kabel SATA putus) → scheduler `bfq` suboptimal

---

## Project Aktif (Priority)

1. **monitoring-laravel-prototype** — **UI ACTIVE**
   - Livewire: DeviceInterfacePanel, MccDashboard
   - DeviceLatestPoll model + migration + seeder
   - Topology.js, test dashboard
   - Semua file baru **untracked** — perlu commit

2. **monitoring-laravel-1** — Backend foundation (M1 done)
   - Auth/Role + CRUD Device
   - Uncommitted: .env.example, lock files, mcc/ folder

3. **Masjidku WordPress** — PKL deployment (127 subdomain, cPanel kenari.superserver.co.id)
   - Blocker: DNS pending

---

## Constraints Kritis

- **RAM 11GiB** — mepet. earlyoom aktif (SIGTERM ≤10%, SIGKILL ≤5%).
- **GPU Intel HD 4000** — no Vulkan, no HW encode. Hyprland pakai software fallback.
- **SSD USB + bfq** — I/O stall ~2%. Ganti ke `mq-deadline` (udev rule).
- **PHP Arch shared ext** — butuh `/etc/php/conf.d/*.ini` untuk pdo_pgsql, pdo_sqlite, dll.

---

## AI Stack (Gunakan Sesuai Kebutuhan)

| Tugas | Agent |
|-------|-------|
| Planning, delegasi, cron | **Hermes** (orchestrator) |
| Coding feature + PR | **Claude Code** (via Hermes) atau **Codex** |
| Refactor, review, IDE | **Cursor** |
| Structural query (callers, impact) | **opencode + CodeGraph** (MCP di monitoring) |
| Exploratory spike | **Codex** |

**CodeGraph**: `codegraph serve --mcp --path ~/labs/monitoring` — index di `.codegraph/`.

---

## Perintah Cepat (Read-Only)

```bash
# System status
lscpu && free -h && sensors
# Git status all projects
cd ~/labs/monitoring && git status && cd monitoring-laravel-prototype && git status
# Earlyoom check
journalctl -u earlyoom -f
# PSI stall
cat /proc/pressure/io
# Docker
docker ps -a
```

---

## Jangan Lakukan

- ❌ Edit file tanpa git commit plan
- ❌ Install package tanpa user approve
- ❌ Jalankan container/database baru tanpa cleanup yang lama
- ❌ Ubah config AI agents (.hermes, .claude, .cursor, opencode.jsonc) tanpa alasan

---

## Vault Key Notes

- [[Home-Laptop-Battlefield]] — Hub utama
- [[LB-Project-Monitoring-Laravel-Prototype]] — UI active
- [[LB-Incident-Freeze-RAM-USB-SSD]] — Freeze fix status
- [[LB-Development-Toolchain]] — Toolchain lengkap

---

#laptop-battlefield #handoff
[[Home-Laptop-Battlefield]]