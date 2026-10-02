# Zabbix → n8n → Telegram → Google Sheets Pipeline

Pipeline monitoring lengkap yang dibangun selama [[PKL Overview]].

- **Alur:** Zabbix monitoring router MikroTik via **SNMP** → trigger alert → **n8n** workflow → notifikasi **Telegram** real-time + laporan tren harian ke **Google Sheets**.
- **Exposure:** n8n di-expose ke HTTPS pake **Cloudflare Quick Tunnel**.
- **Bug yang udah difix:**
  - Timestamp epoch error
  - Missing JSON fields
  - Workflow butuh republish manual tiap ada perubahan

## Terhubung ke
- [[PKL Overview]]
- [[OJM Overview]] (sama-sama monitoring MikroTik)

---
#mikrotik #pkl #zabbix #n8n #automation
[[Index - MikroTik]]
