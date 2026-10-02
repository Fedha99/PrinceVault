# Home Server Planning

Rencana: [[Spek HP Pavilion g4]] dialihfungsiin jadi home server setelah [[ThinkPad T14 Gen 2 AMD]] datang.

## Rencana Stack
- **OS:** Debian-based
- **Orchestration:** K3s
- **Automation:** n8n
- **Game server:** Minecraft server buat temen-temen — nyambung ke [[Modpack Forge 1.20.1 Overview]]
- **Storage:** cloud storage pribadi
- **Monitoring:** Zabbix Agent 2 — nyambung ke [[Zabbix n8n Telegram Pipeline|pengalaman PKL]]

## Klarifikasi Penting
**Proxmox** itu bare-metal hypervisor — **gak bisa** diinstall di dalam VirtualBox. Kalau mau pake Proxmox harus dedicated bare metal.

## Terhubung ke
- [[ThinkPad T14 Gen 2 AMD]]
- [[Spek HP Pavilion g4]]
- [[SSH Hunter Tool]]

---
#linux #server #planning
[[Index - Linux]]
