---
title: LB-Development-Toolchain
type: system
tags: [#type/system, #laptop-battlefield, #toolchain]
last_verified: 2026-10-24
confidence: VERIFIED
---

# LB-Development-Toolchain — Git, Compiler, Runtime, Docker, Database, Editor

> Recon read-only 2026-10-24. Data dari `which`, `--version`, `docker ps`, `pacman -Q`, direktori config.

---

## Version Control

| Tool | Versi | Path |
|------|-------|------|
| git | 2.56.0 | /usr/bin/git |

---

## Compiler & Build

| Tool | Versi | Path |
|------|-------|------|
| gcc | 16.2.1 (20260810) | /usr/bin/gcc |
| g++ | 16.2.1 | /usr/bin/g++ |
| make | 4.4.1 | /usr/bin/make |
| cmake | 4.0.3 | /usr/bin/cmake |

**Catatan**: GCC 16 sangat baru (bleeding edge Arch). Cocok untuk C++20/23, tapi bisa break project lama butuh flag kompatibilitas.

---

## Runtime & Language

| Runtime | Versi | Path | Catatan |
|---------|-------|------|---------|
| Python | 3.14.8 | /usr/bin/python3 | **3.14 alpha/beta** — Arch rolling. Pip 26.2.2. `pip` module tidak tersedia via `python3 -m pip` (PEP 668), gunakan `pip` binary atau `uv`. |
| Node.js | v20.20.2 | /usr/bin/node | LTS (Iron). npm 12.2.1. |
| PHP | 8.5.12 (cli) | /usr/bin/php | NTS. Extension `pdo_pgsql`, `pdo_sqlite`, `sqlite3` butuh enable manual di `/etc/php/conf.d/` (lihat [[LB-Incident-SQLite-Driver-Missing]]). |
| Composer | 2.10.3 | /usr/bin/composer | Global. |

---

## Container & Orchestration

| Tool | Versi | Path | Status |
|------|-------|------|--------|
| Docker Engine | 29.9.2 | /usr/bin/docker | Daemon manual (systemctl start docker) |
| Docker Compose | v2 (plugin) / standalone | /usr/bin/docker-compose | Standalone 5.5.1 juga terinstall |
| containerd | v2.4.2 | /usr/bin/ctr | Docker pakai containerd backend |
| Podman | - | - | Tidak terinstall |

**Container Running**:
- `velxio` (ghcr.io/davidmonterocrespo24/velxio:master) — Up 30 min, port 3080→80 (DNAT firewall)

**Container Exited**:
- `mcc-mariadb` (mariadb:11) — Exited 6 hari lalu
- `web-monitor-app` (php:8.5-cli) — Exited 137 (OOM) 3 minggu lalu
- `web-monitor-db` (postgres:17) — Exited 0 3 minggu lalu

**Images**: velxio (7.13GB), mariadb:11 (458MB), php:8.5-cli (797MB), postgres:17 (646MB)

---

## Database Clients (Host)

| Client | Versi | Path |
|--------|-------|------|
| sqlite3 | 3.46.x | /usr/bin/sqlite3 |
| psql (PostgreSQL) | 17.x | /usr/bin/psql |
| mariadb / mysql | 11.x | /usr/bin/mariadb |
| redis-cli | - | Tidak ditemukan (redis-server tidak terinstall host) |

---

## Editors & LSP

| Editor | Path | Catatan |
|--------|------|---------|
| helix (hx) | /usr/bin/helix | Modern, built-in LSP |
| nvim (Neovim) | /usr/bin/nvim | Config di ~/.config/nvim |
| vim | /usr/bin/vim | Vi improved |
| cursor | /usr/bin/cursor | Electron-based, AI integration |
| code (VS Code) | - | Tidak ditemukan |
| zed | - | Tidak ditemukan |

---

## Virtualization

| Tool | Path | Status |
|------|------|--------|
| qemu-system-x86_64 | /usr/bin/qemu-system-x86_64 | Terinstall |
| virsh | - | Tidak ditemukan |
| virt-manager | - | Tidak ditemukan |
| libvirtd | - | Inactive (systemd) |

---

## AI Agent Stack (CLI / Desktop)

| Agent | Type | Path / Config | Status |
|-------|------|---------------|--------|
| Hermes | CLI/daemon | ~/.local/bin/hermes, ~/.hermes/ | Aktif (profile default) |
| Claude Desktop | Desktop | ~/.config/claude-desktop/ | Terinstall, cache aktif |
| Cursor | Desktop | ~/.config/Cursor/ | Terinstall, extension cache |
| opencode | CLI | /usr/bin/opencode, ~/labs/monitoring/opencode.jsonc | CodeGraph MCP configured |
| Codex | CLI | ~/.codex/ | Terinstall, daemon + history aktif |

**Detail per agent** lihat [[LB-AI-Agents]].

---

## CodeGraph MCP (Project monitoring)

File: `/home/princeannakhla/labs/monitoring/opencode.jsonc`
```json
{
  "mcp": {
    "codegraph": {
      "command": ["/usr/bin/codegraph", "serve", "--mcp", "--path", "/home/princeannakhla/labs/monitoring"],
      "enabled": true,
      "type": "local"
    }
  }
}
```
- Binary: `/usr/bin/codegraph`
- Workspace: `~/labs/monitoring` (mono-repo)
- Index: `.codegraph/` (perlu `codegraph init -i` kalau belum ada)

---

## Shell & Dotfiles

- Shell: bash (default), zsh terinstall tapi tidak default
- Dotfiles repo: `~/dotfiles` (git tracked)
- Fastfetch config: `~/.config/fastfetch` + `~/dotfiles/home/.openclaude.json`, `.claude.json`
- Hyprland config: `~/.config/hypr/hyprland.lua` (Lua-based)
- Kitty config: `~/.config/kitty/kitty.conf`

---

## Direktori Kerja Utama

| Path | Deskripsi | Git |
|------|-----------|-----|
| ~/labs/monitoring | Mono-repo: monitoring-laravel-1, monitoring-laravel-prototype | ✅ (origin GitHub) |
| ~/labs/monitoring/monitoring-laravel-1 | MCC M1 + CRUD Device | ✅ |
| ~/labs/monitoring/monitoring-laravel-prototype | MCC + Livewire dashboard + DeviceLatestPoll | ✅ |
| ~/labs/Learning/PrinceVault | Obsidian vault (65+ notes) | ✅ |
| ~/labs/Learning/Coding | Project coding lama | ✅ |
| ~/.minecraft | Minecraft instance (NeoForge 1.21.1 modpack) | ❌ |
| ~/GNS3/projects | Simulasi routing (file .gns3 baru diubah) | ❌ |

---

## Terhubung ke

- [[LB-Operating-System]] — OS yang menyediakan toolchain ini
- [[LB-AI-Agents]] — detail konfigurasi AI agents
- [[LB-Project-Monitoring-Laravel-1]] — project Laravel pakai PHP/Composer/Docker ini
- [[LB-Project-Monitoring-Laravel-Prototype]] — project Laravel pakai toolchain ini
- [[LB-Tool-Docker]] — Docker detail
- [[LB-Tool-CodeGraph]] — CodeGraph detail
- [[LB-Tool-Hermes]] — Hermes detail
- [[LB-Tool-Obsidian]] — Obsidian detail

---

#laptop-battlefield #toolchain #system
[[Home-Laptop-Battlefield]]