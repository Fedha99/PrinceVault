---
tags: [obsidian, vault-maintenance, personal]
---

# Observasi Graph View — Kenapa Cuma Keliatan 1 Cluster (2026-10-02)

Muncul pertanyaan: kenapa Graph View cuma nunjukin ~11 node (cluster MikroTik) padahal vault punya 59 note?

## Diagnosis

Dicek via `get_outgoing_links` — `Master Index.md` ternyata **sudah** link ke semua 6 index folder:
- [[Index - Personal]]
- [[Index - Cybersecurity]]
- [[Index - MikroTik]]
- [[Index - Linux]]
- [[Index - Minecraft]]
- [[Index - Tecotechno]]

Plus beberapa link langsung lain (Masjidku WordPress Deployment, ThinkPad T14 Gen 2 AMD, OJM Overview, Modpack Forge 1.20.1 Overview).

**Kesimpulan: vault ini secara struktur SATU graph yang nyambung**, bukan beberapa pulau terpisah. Screenshot yang cuma nunjukin cluster MikroTik itu soal viewport/zoom graph view yang lagi fokus ke satu area, bukan masalah data link.

## Yang perlu diinget

- `Master Index.md` sendiri **orphan** (0 incoming link) — normal buat hub/entry-point, tapi kalau mau dia keliatan "ditarik ke tengah" pas pertama buka graph, tambahin minimal 1 link balik ke dia dari note lain
- Orphan notes lain (per cek 2026-10-01, 6 total): Minecraft/SuperFantasyRPG-Final-Summary.md, Minecraft/SuperFantasyRPG-Final-Build-Report.md, MikroTik/Perbandingan Local vs Remote 2026-10-01.md, MikroTik/Checklist Import Masjid-Zip ke cPanel.md, Master Index.md, Cybersecurity/Rangkuman Pentesting.md
- Broken links: 0 — semua wikilink yang ada resolve dengan benar

## Cara liat full graph

1. Zoom out di Graph View (scroll wheel)
2. Drag canvas ke area kosong buat nemuin cluster lain
3. Cari tombol fit-to-view kalau ada
