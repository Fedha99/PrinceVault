---
judul: Zabbix MikroTik Traffic Monitoring 7 Trik Dashboard Pantau Bandwidth
sumber: https://tecotechno.com/zabbix-mikrotik-traffic-monitoring-secara-mudah/
tanggal: 2026-07-15
tags: [tecotechno, knowledge, zabbix, mikrotik, monitoring, dashboard, bandwidth, snmp]
---
## Ringkasan
Tutorial membuat Dashboard Zabbix MikroTik custom untuk monitoring traffic bandwidth real-time. Mencakup: kenapa dashboard custom wajib (vs Latest Data default), persiapan (host aktif, kenali item traffic), 5 langkah buat dashboard (widget Graph traffic, Item Value real-time, layout grouping, widget Problems), studi kasus deteksi bottleneck ISP, tips auto-refresh & multiple pages.

## Poin Penting
- Latest Data default menampilkan ratusan item mentah tanpa konteks visual
- Dashboard custom: visual real-time, grouping widget, alert terintegrasi
- Widget Graph: Data set → host MikroTik → Item pattern "Bits received/sent" → Time period Last 1h/24h
- Widget Item Value: pilih item "Interface ether1: Bits received" → Show Value → Units auto bps/Mbps → threshold warna (hijau/kuning/merah)
- Widget Problems untuk alert terkini
- Auto-refresh: gear icon → interval 30s untuk monitoring kritis
- Multiple pages untuk skala besar (per lokasi/segmen)

## Langkah / Cara Kerja
1. Pastikan host MikroTik sudah terpantau di Zabbix (SNMP)
2. Catat nama item traffic: "Bits received", "Bits sent" per interface
3. Monitoring → Dashboards → Create dashboard
4. Add widget → Graph → name "Traffic Ether1 Real Time" → Add data set → host → item pattern → Time period
5. Add widget → Item Value → item "Interface ether1: Bits received" → Show Value → Advanced config threshold warna
6. Add widget → Problems → filter severity
7. Arrange layout → Save
8. Enable auto-refresh (30s) → buat multiple pages kalau banyak router

## Istilah & Tools
- [[Zabbix]]
- [[SNMP]]
- [[Dashboard Zabbix]]
- [[Low-Level Discovery]]
- [[MTCNA Materi]]

## Terkait
- [[Index - Tecotechno Knowledge]]
- [[Index - MikroTik]]
- [[MTCNA Materi]]
- [[TT - Zabbix MikroTik Monitoring 5 Langkah]]
- [[TT - Zabbix Security Setup 6 Cara]]
- [[TT - Zabbix Setup Mudah 5 Langkah]]
