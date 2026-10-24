---
title: LB-Project-GNS3-Labs
type: project
tags: [#type/project, #laptop-battlefield, #gns3, #networking, #routing]
last_verified: 2026-10-24
confidence: VERIFIED
---

# LB-Project-GNS3-Labs — Simulasi Routing & Jaringan

> Recon read-only 2026-10-24. Data dari file modified time (30 hari terakhir) & nama file. Isi file .gns3 **tidak dibuka** (binary/complex JSON).

---

## Identitas Project

| Bidang | Nilai |
|--------|-------|
| **Path** | `/home/princeannakhla/GNS3/projects/` |
| **Tool** | GNS3 (Graphical Network Simulator-3) |
| **Status** | Aktif — 3 project file .gns3 dimodifikasi 30 hari terakhir |

---

## Project Files (Modified 30 Hari Terakhir)

| File | Modifikasi | Ukuran | Deskripsi (dari nama) |
|------|------------|--------|----------------------|
| `79d06694-8330-4479-8198-f6cdb701194c/simulasi_routing_perumahan.gns3` | Baru | - | Simulasi routing skala perumahan |
| `662a923a-ecdd-4fb0-ad58-f6ab0b4aca9e/Sim.gns3` | Baru | - | Simulasi umum (generic) |
| `de203bdc-04d9-4e3f-a8ae-3d3a810ac8d8/Routing_brutal.gns3` | Baru | - | Routing skenario "brutal" (kompleks) |

**Catatan**: Semua file di dalam folder project GNS3 (UUID-named directories). Hanya file `.gns3` utama yang terlihat modified.

---

## Konteks dari Vault Existing

- [[GNS3 CHR RouterOS Awal]] — Setup awal Cloud Hosted Router (CHR) MikroTik di GNS3
- [[GNS3 Lab OSPF 25 Router]] — Lab OSPF 25 router
- [[Project Baru - Web Integrasi MikroTik RADIUS Zabbix]] — Project PKL butuh simulasi RouterOS

---

## Kegunaan (INFERRED)

1. **MikroTik CHR testing** — Simulasi RouterOS sebelum deploy ke hardware
2. **OSPF / Routing protocol lab** — Belajar & uji konfigurasi routing
3. **Integrasi dengan web-monitor/MCC** — Test polling API RouterOS dari Laravel
4. **PKL / OJM prep** — Persiapan uji kompetensi (OJM 2 Sep 2026)

---

## Resource Requirements

- **CPU**: Butuh VT-x (✅ tersedia i7-3612QM)
- **RAM**: GNS3 + multiple CHR VMs butuh RAM signifikan — **berbahaya untuk RAM 11 GiB** (lihat [[LB-Incident-Freeze-RAM-USB-SSD]])
- **Storage**: Image qcow2 CHR + project files di SSD USB
- **Network**: GNS3 pakai tap/bridge interface, butuh root/NET_ADMIN

---

## Terhubung ke

- [[GNS3 CHR RouterOS Awal]] — Vault note setup awal
- [[GNS3 Lab OSPF 25 Router]] — Vault note lab OSPF
- [[Project Baru - Web Integrasi MikroTik RADIUS Zabbix]] — Project PKL
- [[LB-Hardware]] — RAM constraint warning
- [[LB-Development-Toolchain]] — qemu-system-x86_64 tersedia
- [[LB-Service-RouterOS]] — Target simulasi

---

#laptop-battlefield #project #gns3 #networking #routing
[[Home-Laptop-Battlefield]]