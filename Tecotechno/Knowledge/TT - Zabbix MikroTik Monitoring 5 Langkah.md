---
judul: Zabbix MikroTik Monitoring 5 Langkah Mudah Ampuh SNMP Real-Time
sumber: https://tecotechno.com/zabbix-mikrotik-monitoring-mudah-dalam-5-step/
tanggal: 2026-07-14
tags: [tecotechno, knowledge, zabbix, mikrotik, snmp, monitoring, docker, lld]
---
## Ringkasan
Setup monitoring MikroTik via SNMP di Zabbix Docker: kenapa SNMP cocok untuk bare metal RouterOS, 3 langkah konfigurasi MikroTik (enable SNMP, set location/contact, SNMP communities), setup host di Zabbix Web UI (template "MikroTik by SNMP", macro {$SNMP_COMMUNITY}), Low-Level Discovery otomatis detect interface, baca grafik traffic & alert kritis, hardening SNMP (batasi IP request).

## Poin Penting
- RouterOS bare metal: tidak bisa pasang Zabbix Agent → SNMP ringan & praktis
- SNMP port default 161 (UDP)
- 3 langkah MikroTik (Winbox/CLI): enable SNMP → set contact/location → add community (read-only)
- CLI: `/snmp set enabled=yes contact="IT Support" location="Kantor" && /snmp community add name=public read-access=yes write-access=no`
- Zabbix: template "MikroTik by SNMP" → macro {$SNMP_COMMUNITY}=public
- LLD otomatis bikin item per interface Ethernet/WLAN
- Hardening: `/snmp community set [find name=xxx] addresses=192.168.x.x/32`

## Langkah / Cara Kerja
1. MikroTik Winbox: IP → SNMP → Enabled=yes → Contact/Location → Communities → + → name=public, read=yes, write=no
2. Zabbix Web UI: Configuration → Hosts → Create host → Name=MikroTik-1 → Templates: "MikroTik by SNMP" → Macros: {$SNMP_COMMUNITY}=public
3. Save → tunggu LLD detect interface → Monitoring → Latest Data → cek grafik
4. Konfigurasi trigger/alert untuk bandwidth/CPU/memory
5. Hardening: batasi IP yang boleh SNMP request

## Istilah & Tools
- [[SNMP]]
- [[Zabbix Docker]]
- [[Low-Level Discovery LLD]]
- [[MikroTik by SNMP Template]]
- [[MTCNA Materi]]

## Terkait
- [[Index - Tecotechno Knowledge]]
- [[Index - MikroTik]]
- [[MTCNA Materi]]
- [[TT - Zabbix MikroTik Traffic Monitoring]]
- [[TT - Zabbix Security Setup 6 Cara]]
- [[TT - Zabbix Setup Mudah 5 Langkah]]
