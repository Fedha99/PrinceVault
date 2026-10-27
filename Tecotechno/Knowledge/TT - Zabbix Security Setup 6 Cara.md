---
judul: Zabbix Security Setup 6 Cara Pantau Log Keamanan Server Real-Time
sumber: https://tecotechno.com/zabbix-security-setup-6-setup-mudah-security/
tanggal: 2026-07-14
tags: [tecotechno, knowledge, zabbix, security, log-monitoring, brute-force, ssh, agent-active]
---
## Ringkasan
Memanfaatkan Zabbix Docker untuk monitoring keamanan (bukan cuma performa): kenapa Zabbix Agent Active wajib untuk log security (passive lemot, active streaming real-time), konfigurasi Linux Host (izin baca log ke user zabbix, config Agent2), setup item log di Zabbix Web UI (template "Linux by Zabbix agent active", key `log[/var/log/auth.log,"Failed password",,,skip]`), studi kasus simulasi brute force SSH.

## Poin Penting
- Agent Active: server target (Mesin 2) push log ke Zabbix (Mesin 1) real-time saat baris baru match pattern
- Passive: Zabbix pull berkala → ketinggalan event cepat
- Izin baca auth.log: `setfacl -m u:zabbix:r /var/log/auth.log` atau group adm
- Agent2 config: `ServerActive=192.168.33.254` → restart agent
- Item key: `log[/var/log/auth.log,"Failed password",,,skip]` → path, pattern, skip=hanya baris baru
- Studi kasus: simulasi brute force → alert real-time di Zabbix

## Langkah / Cara Kerja
1. Linux Host (Mesin 2): `setfacl -m u:zabbix:r /var/log/auth.log` → edit `/etc/zabbix/zabbix_agent2.conf` → `ServerActive=IP_ZABBIX` → `systemctl restart zabbix-agent2`
2. Zabbix Web UI: Configuration → Hosts → Create host → Template "Linux by Zabbix agent active" → Add
3. Items → Create item → Name="Monitoring Failed SSH Login" → Type=Zabbix agent (active) → Key=`log[/var/log/auth.log,"Failed password",,,skip]`
4. Triggers → Create trigger → Expression: `last(/host/log[...])=1` → Severity=High
5. Test: `ssh wronguser@host` berulang → cek Monitoring → Latest Data → alert muncul
6. Hardening: batasi IP agent, enkripsi PSK/TLS

## Istilah & Tools
- [[Zabbix Agent Active]]
- [[Zabbix Agent Passive]]
- [[Log Monitoring]]
- [[Brute Force SSH]]
- [[auth.log]]
- [[setfacl]]

## Terkait
- [[Index - Tecotechno Knowledge]]
- [[Index - Cybersecurity]]
- [[Index - Linux]]
- [[TT - Zabbix MikroTik Monitoring 5 Langkah]]
- [[TT - Zabbix Setup Mudah 5 Langkah]]
