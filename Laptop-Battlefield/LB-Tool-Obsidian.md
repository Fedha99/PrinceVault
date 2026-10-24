---
title: LB-Tool-Obsidian
type: tool
tags: [#type/tool, #laptop-battlefield, #obsidian, #vault]
last_verified: 2026-10-24
confidence: VERIFIED
---

# LB-Tool-Obsidian — Knowledge Base & Note Taking

> Recon read-only 2026-10-24. Data dari binary location, vault path, existing notes structure.

---

## Versi & Binary

| Komponen | Detail |
|----------|--------|
| Binary | `/usr/bin/obsidian` |
| Vault Path | `/home/princeannakhla/labs/Learning/PrinceVault` |
| Config Dir | `~/.config/obsidian/` |
| Data Dir | `~/.local/share/obsidian/` |

---

## Vault Structure (PrinceVault)

```
PrinceVault/
├── Index.md                    # Root index
├── Master Index.md             # Master hub
├── Checklist Import Masjid-Zip ke cPanel.md
├── Cybersecurity/ (10 notes)
├── Linux/ (12 notes)           # Includes: Spek HP Pavilion g4, Hardware Repair, Diagnosis Freeze, Constraint Intel HD 4000, etc.
├── MikroTik/ (20 notes)        # Includes: web-monitor logs, Masjidku WP, GNS3, PKL
├── Minecraft/ (10 notes)
├── Personal/ (5 notes)
├── Tecotechno/ (5 notes)
└── Laptop-Battlefield/ (NEW)   # This recon documentation
```

**Total existing**: ~65 notes (sebelum Laptop-Battlefield)

---

## Graph View Optimization (Addendum 2 Rules)

1. **Hub note**: `Home-Laptop-Battlefield.md` links to all LB notes
2. **Every note** has outgoing wikilinks to hub/parent + related
3. **Unique filenames**: `LB-Hardware.md`, `LB-Project-Monitoring-Laravel-1.md`, etc.
4. **Entity notes** capped ~30 (tools/services actually used)
5. **Wikilinks as plain text** (not in code blocks)
6. **Mermaid + wikilink list** paired
7. **Frontmatter**: title, type, tags, last_verified, confidence

---

## Language Rule (Addendum 3)

- **Content**: Bahasa Indonesia semi-formal
- **Technical terms**: Original (kernel, daemon, container, commit, branch, path, command)
- **Frontmatter keys**: Original (title, type, tags, last_verified, confidence)
- **Status labels**: VERIFIED/INFERRED/UNKNOWN/HISTORICAL + arti singkat

---

## Plugins / MCP (UNKNOWN)

- Obsidian MCP server tidak diverifikasi terinstall
- Community plugins: tidak di-scan (butuh buka Obsidian)
- Core plugins: Graph View, Canvas, Outliner, dll (default)

---

## Terhubung ke

- [[Home-Laptop-Battlefield]] — hub LB
- [[LB-Development-Toolchain]] — toolchain overview
- [[Spek HP Pavilion g4]] — vault existing
- [[Diagnosis Freeze RAM dan USB SSD]] — vault existing
- [[Project Baru - Web Integrasi MikroTik RADIUS Zabbix]] — vault existing

---

#laptop-battlefield #tool #obsidian
[[Home-Laptop-Battlefield]]