---
title: LB-Tool-CodeGraph
type: tool
tags: [#type/tool, #laptop-battlefield, #codegraph, #mcp]
last_verified: 2026-10-24
confidence: VERIFIED
---

# LB-Tool-CodeGraph — AST-based Code Knowledge Graph

> Recon read-only 2026-10-24. Data dari `opencode.jsonc`, `codegraph` binary, AGENTS.md.

---

## Versi & Binary

| Komponen | Detail |
|----------|--------|
| Binary | `/usr/bin/codegraph` |
| MCP Server | `codegraph serve --mcp --path <workspace>` |
| Workspace | `/home/princeannakhla/labs/monitoring` (mono-repo) |
| Index Dir | `.codegraph/` (perlu `codegraph init -i` kalau belum ada) |

---

## Konfigurasi (opencode.jsonc)

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

---

## Capabilities (MCP Tools)

| Tool | Fungsi |
|------|--------|
| `codegraph_search` | Cari simbol by name (function, class, method, variable) |
| `codegraph_callers` | Siapa yang memanggil simbol X |
| `codegraph_callees` | Apa yang dipanggil simbol X |
| `codegraph_impact` | Apa yang break kalau ubah simbol X |
| `codegraph_node` | Signature & source code simbol X |
| `codegraph_context` | Konteks fokus untuk task (one call) |
| `codegraph_files` | List file di path |
| `codegraph_status` | Health check index |

---

## Kapan Pakai CodeGraph vs Grep

| Pertanyaan | Tool |
|------------|------|
| "Di mana X didefinisikan?" | `codegraph_search` |
| "Siapa yang memanggil Y?" | `codegraph_callers` |
| "Y memanggil apa?" | `codegraph_callees` |
| "Apa yang break kalau ubah Z?" | `codegraph_impact` |
| "Tunjukkan signature/source Y" | `codegraph_node` |
| "Konteks fokus untuk task" | `codegraph_context` |
| "File apa saja di path/?" | `codegraph_files` |
| "Index sehat?" | `codegraph_status` |
| Literal text search | `grep` / `rg` |

---

## Rules of Thumb (dari AGENTS.md)

1. **Trust codegraph results** — berasal dari full AST parse, jangan re-verify dengan grep
2. **Don't grep first** untuk symbol lookup by name
3. **`codegraph_context` is one call** — jangan chain search + node manual

---

## Status Index (UNKNOWN)

- `.codegraph/` directory tidak diverifikasi exists
- Kalau MCP return "not initialized" → jalankan `codegraph init -i` di workspace root

---

## Project Usage

| Project | Configured | Index Status |
|---------|------------|--------------|
| monitoring-laravel-1 | Via mono-repo root | UNKNOWN |
| monitoring-laravel-prototype | Via mono-repo root | UNKNOWN |
| web-monitor | Tidak (deleted) | N/A |

---

## Terhubung ke

- [[LB-Development-Toolchain]] — toolchain overview
- [[LB-AI-Agents]] — opencode pakai CodeGraph MCP
- [[LB-Project-Monitoring-Laravel-1]] — project target
- [[LB-Project-Monitoring-Laravel-Prototype]] — project target
- [[Home-Laptop-Battlefield]] — hub

---

#laptop-battlefield #tool #codegraph #mcp
[[Home-Laptop-Battlefield]]