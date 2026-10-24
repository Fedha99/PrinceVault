---
title: LB-Service-RouterOS
type: service
tags: [#type/service, #laptop-battlefield, #routeros, #mikrotik, #inferred]
last_verified: 2026-10-24
confidence: INFERRED
---

# LB-Service-RouterOS — MikroTik RouterOS (Target Monitoring)

> Recon read-only 2026-10-24. **Tidak ada RouterOS di mesin ini**. Data dari vault existing notes & project requirements. Target device eksternal.

---

## Status: EXTERNAL TARGET

| Bidang | Nilai |
|--------|-------|
| **OS** | RouterOS (MikroTik) |
| **Versi** | CHR (Cloud Hosted Router) di GNS3 / Hardware fisik |
| **Protokol** | API (port 8728/8729), SSH (22), WinBox (8291), SNMP (161) |
| **Lokasi** | PKL site / GNS3 simulasi / Remote |
| **Status** | Target polling untuk MCC |

---

## Vault Existing References

- [[GNS3 CHR RouterOS Awal]] — Setup CHR di GNS3
- [[GNS3 Lab OSPF 25 Router]] — Lab 25 router OSPF
- [[Project Baru - Web Integrasi MikroTik RADIUS Zabbix]] — PKL project butuh integrasi
- [[Log Kerja Hermes - web-monitor]] — Log setup awal

---

## Kegunaan untuk MCC

| Fitur MCC | RouterOS Interaction |
|-----------|---------------------|
| Device Discovery | `/system/routerboard`, `/interface` via API |
| Interface Polling | `/interface/ethernet`, `/interface/wireless` stats |
| DHCP Management | `/ip/dhcp-server/lease`, `/ip/pool` (D-013) |
| Traffic Metrics | `/interface/traffic` atau `/tool/bandwidth-test` |
| Alert/Threshold | D-014: threshold/stale detection |
| Config Backup | `/export` atau `/system/backup` |

---

## Simulasi di GNS3

- **Project**: `~/GNS3/projects/` — 3 file .gns3 modified recent
- **CHR Image**: MikroTik CHR qcow2 (butuh download)
- **Network**: GNS3 tap/bridge interface ke host
- **Resource**: Butuh RAM signifikan (CHR min 256MB, recommended 512MB+ per instance)

---

## Security (INFERRED)

- **API User**: Dedicated read-only user untuk polling
- **TLS**: API-SSL (port 8729) untuk production
- **Firewall**: Input chain allow dari IP MCC server only
- **Rate Limit**: API call rate limit di RouterOS side

---

## Terhubung ke

- [[LB-Project-Monitoring-Laravel-1]] — Backend butuh polling worker
- [[LB-Project-Monitoring-Laravel-Prototype]] — Dashboard butuh data RouterOS
- [[LB-Project-GNS3-Labs]] — Simulasi environment
- [[LB-Project-MCC]] — MCC core logic
- [[Zabbix n8n Telegram Pipeline]] — Vault note pipeline
- [[GNS3 CHR RouterOS Awal]] — Vault note setup

---

#laptop-battlefield #service #routeros #mikrotik #inferred
[[Home-Laptop-Battlefield]]