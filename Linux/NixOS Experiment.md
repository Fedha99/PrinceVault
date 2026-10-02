# NixOS Experiment

- Diinstall di [[Spek HP Pavilion g4]] **dual-boot** sama BlackArch (MBR partition table, 4 partisi).
- Migrasi ke setup **flakes-based** buat support **DankMaterialShell (DMS)** + **Quickshell**.

## Masalah Utama
Hyprland **0.52.2** di nixpkgs stable **gak support Lua config** (butuh 0.55+) → repeated config displacement, bikin [[Hyprland Config Lua]] gak bisa dipake langsung di sini.

## Status
🟡 **Paused** — sebelum sempet nyelesain upgrade Hyprland via flake input.

## Catatan
Dotfiles Artix original (14MB) confirmed **intact**, belum pernah dideploy ke NixOS.

## Terhubung ke
- [[Hyprland Config Lua]]
- [[Bedrock Linux Lama]]
- [[Spek HP Pavilion g4]]

---
#linux #nixos #distro-hop
[[Index - Linux]]
