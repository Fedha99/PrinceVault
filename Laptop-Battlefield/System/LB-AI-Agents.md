---
title: LB-AI-Agents
type: system
tags: [#type/system, #laptop-battlefield, #ai-agents]
last_verified: 2026-10-24
confidence: VERIFIED
---

# LB-AI-Agents — Hermes, Claude, Cursor, opencode, Codex

> Recon read-only 2026-10-24. Hanya lokasi & struktur config, **tidak isi konten sensitif** (token, API key, history penuh).

---

## Overview

| Agent | Role Utama | Binary / Path | Config Dir | Status |
|-------|------------|---------------|------------|--------|
| Hermes | Orchestrator / CLI daemon | ~/.local/bin/hermes | ~/.hermes/ | Aktif (profile default) |
| Claude Desktop | Desktop chat + coding | /usr/bin/claude | ~/.config/claude-desktop/ | Terinstall, cache aktif |
| Cursor | IDE + AI (Electron) | /usr/bin/cursor | ~/.config/Cursor/ | Terinstall, extension cache |
| opencode | CLI coding agent | /usr/bin/opencode | ~/labs/monitoring/opencode.jsonc | CodeGraph MCP configured |
| Codex | CLI coding agent (OpenAI) | ~/.codex/ | ~/.codex/ | Daemon + history aktif |

---

## Hermes

**Binary**: `~/.local/bin/hermes` (symlink ke installasi user)  
**Config dir**: `~/.hermes/`  
**Profile aktif**: `default`  
**Struktur ~/.hermes/**:
```
.hermes/
├── profiles/
│   └── default/
│       ├── skills/        # Custom skills (hermes-agent-skill-authoring)
│       ├── plugins/       # Plugin directory
│       ├── cron/          # Scheduled jobs
│       └── memories/      # Persistent memory (user + agent)
├── config.yaml            # Main config (model, provider, TTS, tools)
└── skills/                # Global skills (built-in + custom)
```

**Kemampuan**: Delegasi ke Claude Code, Codex, opencode; computer-use; cron jobs; skill authoring; memory persistence.

**Project config**: `~/labs/monitoring/.hermes/` (per-project override)

---

## Claude Desktop

**Config dir**: `~/.config/claude-desktop/`  
**Struktur terlihat**:
```
claude-desktop/
├── Backups/               # Auto-backup conversation
├── Cache/                 # Blob cache
├── CachedData/            # Cached API responses
├── CachedExtensionVSIXs/  # VSIX extensions
├── CachedProfilesData/    # Profile data
└── [file chromatium]      # Chromium config files
```

**Catatan**: Electron app, menyimpan session & cache lokal. Tidak ada file config JSON utama yang terbuka (binary preferences).

---

## Cursor

**Config dir**: `~/.config/Cursor/`  
**Struktur mirip VS Code**:
```
Cursor/
├── User/
│   ├── settings.json      # User settings
│   ├── keybindings.json
│   └── globalStorage/     # Extension state
├── extensions/            # Installed extensions (.vsix)
└── logs/                  # Renderer/main logs
```

**AI Features**: Tab completion, chat, composer, agent mode. Menggunakan OpenAI/Anthropic API via config.

---

## opencode + CodeGraph MCP

**Binary**: `/usr/bin/opencode`  
**Project config**: `~/labs/monitoring/opencode.jsonc`
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

**CodeGraph binary**: `/usr/bin/codegraph`  
**Workspace**: `~/labs/monitoring` (mono-repo)  
**Index dir**: `.codegraph/` (perlu `codegraph init -i` kalau belum ada)  
**MCP Server**: `codegraph serve --mcp --path <workspace>` — exposes `codegraph_search`, `codegraph_callers`, `codegraph_callees`, `codegraph_impact`, `codegraph_node`, `codegraph_context`, `codegraph_files`, `codegraph_status`

**AGENTS.md** di project root menjelaskan kapan pakai codegraph vs grep.

---

## Codex (OpenAI)

**Config dir**: `~/.codex/`  
**Struktur terlihat**:
```
.codex/
├── auth.json              # Credentials (REDACTED)
├── config.toml            # Config utama
├── history.jsonl          # Conversation history
├── session_index.jsonl    # Session index
├── goals_1.sqlite         # Goals database
├── memories_1.sqlite      # Memories database
├── queue_1.sqlite         # Task queue
├── logs_2.sqlite          # Logs
├── state_5.sqlite         # State
├── models_cache.json      # Model cache
├── version.json           # Version info
├── installation_id        # Install ID
├── app-server-daemon/     # Daemon logs & pid
├── cache/                 # Remote plugin cache
├── hooks.json             # Hooks config
├── skills/                # System skills
└── .tmp/plugins/          # Plugin temp
```

**Daemon**: `app-server-daemon/daemon.pid` aktif, log di `daemon.stderr.log`

---

## Perbandingan Cepat

| Fitur | Hermes | Claude Desktop | Cursor | opencode | Codex |
|-------|--------|----------------|--------|----------|-------|
| **Mode** | CLI orchestrator | Desktop chat | IDE + AI | CLI agent | CLI agent |
| **Delegasi** | ✅ (ke semua) | ❌ | ❌ | ❌ | ❌ |
| **Computer-use** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Cron/Scheduled** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **MCP Support** | Via skills | Built-in | Built-in | ✅ (CodeGraph) | Built-in |
| **Memory Persist** | ✅ (file-based) | Session only | Workspace | Project | ✅ (SQLite) |
| **Primary Use** | Planning, delegasi, ops | Chat, review, design | Coding, refactor | Coding, MCP tools | Coding, exploration |

---

## Rekomendasi Penggunaan (INFERRED dari setup)

| Tugas | Agent Utama | Alasan |
|-------|-------------|--------|
| Planning & delegasi multi-agent | **Hermes** | Bisa spawn Claude/Codex/opencode parallel |
| Coding feature branch + PR | **Claude Code** (via Hermes) atau **Codex** | Git integration, test loop |
| Refactor + code review | **Cursor** / **Claude Desktop** | IDE context, diff view |
| Structural code query (callers, impact) | **opencode + CodeGraph** | AST-based, sub-ms |
| Exploratory / spike | **Codex** | Cepat, sandboxed |
| Background monitoring / cron | **Hermes cronjob** | Persistent, no-agent mode |

---

## Terhubung ke

- [[LB-Development-Toolchain]] — toolchain yang dipakai agent ini
- [[LB-Tool-Hermes]] — detail Hermes
- [[LB-Tool-CodeGraph]] — detail CodeGraph
- [[LB-Tool-Obsidian]] — Obsidian MCP (kalau ada)
- [[LB-Project-Monitoring-Laravel-1]] — project pakai opencode/CodeGraph
- [[LB-Project-Monitoring-Laravel-Prototype]] — project pakai toolchain ini

---

#laptop-battlefield #ai-agents #system
[[Home-Laptop-Battlefield]]