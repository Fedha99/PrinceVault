---
title: LB-Tool-Hermes
type: tool
tags: [#type/tool, #laptop-battlefield, #hermes, #orchestrator]
last_verified: 2026-10-24
confidence: VERIFIED
---

# LB-Tool-Hermes — AI Orchestrator & Delegator

> Recon read-only 2026-10-24. Data dari `~/.hermes/`, binary location, config structure.

---

## Versi & Binary

| Komponen | Detail |
|----------|--------|
| Binary | `~/.local/bin/hermes` (user install) |
| Config Dir | `~/.hermes/` |
| Profile Aktif | `default` |
| Profile Path | `~/.hermes/profiles/default/` |

---

## Profile Structure (default)

```
~/.hermes/profiles/default/
├── skills/           # Custom skills (hermes-agent-skill-authoring)
├── plugins/          # Plugin directory
├── cron/             # Scheduled jobs (cronjob tool)
├── memories/         # Persistent memory (user + agent)
```

**Global**: `~/.hermes/skills/` — built-in + custom skills  
**Config**: `~/.hermes/config.yaml` — model, provider, TTS, tools, delegation

---

## Capabilities

| Fitur | Deskripsi |
|-------|-----------|
| **Delegasi Coding** | Spawn Claude Code, Codex, opencode untuk feature/PR |
| **Computer Use** | Drive desktop via cua-driver (background-first) |
| **Cron Jobs** | Scheduled tasks dengan monitor/continuity |
| **Skill Authoring** | Buat/edit skill di `~/.hermes/skills/` |
| **Memory Persistence** | File-based memory di `memories/` (user + agent) |
| **MCP Support** | Via skills (codegraph, obsidian, github, dll) |
| **Multi-profile** | Isolated profiles di `profiles/<name>/` |

---

## Delegation Targets (Configured)

| Agent | Binary | Use Case |
|-------|--------|----------|
| Claude Code | `claude` | Feature branch, PR, review |
| Codex | `codex` | Feature, spike, exploration |
| opencode | `opencode` | CodeGraph MCP, structural query |
| Computer Use | `cua-driver` | Desktop automation |

---

## Project Config

`~/labs/monitoring/.hermes/` — per-project override (skills, cron, memories)

---

## Cron Jobs (Active)

Tidak diverifikasi (butuh `hermes cronjob list`). **UNKNOWN** active jobs.

---

## Memory (Persistent)

- `~/.hermes/profiles/default/memories/user/` — user preferences, facts
- `~/.hermes/profiles/default/memories/agent/` — agent working notes

---

## Terhubung ke

- [[LB-Development-Toolchain]] — toolchain overview
- [[LB-AI-Agents]] — agent stack comparison
- [[LB-Tool-CodeGraph]] — CodeGraph via Hermes skill
- [[LB-Tool-Obsidian]] — Obsidian MCP via skill
- [[Home-Laptop-Battlefield]] — hub

---

#laptop-battlefield #tool #hermes
[[Home-Laptop-Battlefield]]