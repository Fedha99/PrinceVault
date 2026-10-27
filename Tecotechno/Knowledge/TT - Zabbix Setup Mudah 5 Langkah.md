---
judul: Zabbix Setup Mudah Cepat 5 Langkah Deploy Zabbix Docker Universal
sumber: https://tecotechno.com/setup-zabbix-server-untuk-monitoring-jaringan/
tanggal: 2026-07-14
tags: [tecotechno, knowledge, zabbix, docker, docker-compose, monitoring, postgresql, agent2]
---
## Ringkasan
Deploy Zabbix Docker Universal 5 langkah: arsitektur mesin fisik (Host Zabbix Server + target Linux), deployment docker-compose.yml (PostgreSQL, Zabbix Server, Web UI), instalasi Zabbix Agent2 lintas distro, solusi error "No Matches Found" saat add host, analisis metrik baseline performa (CPU, RAM, disk, network). Portabilitas: simpan docker-compose.yml, replikasi ke server lain hitungan menit.

## Poin Penting
- Arsitektur: Mesin 1 (Zabbix Docker, IP statis 192.168.33.254, port 8080) + Mesin 2+ (Linux target, Agent2)
- docker-compose.yml: 3 service (db/postgres, zabbix-server, zabbix-web) + volumes persist
- Agent2 config seragam semua distro: `/etc/zabbix/zabbix_agent2.conf` → `Server=IP_ZABBIX`, `ServerActive=IP_ZABBIX`, `Hostname=hostname_target`
- Error "No Matches Found": pilih template via dropdown Host Group → Templates/Operating systems → centang "Linux by Zabbix agent active"
- Baseline metrics: CPU idle, Memory available, Disk space, Network traffic

## Langkah / Cara Kerja
1. Mesin 1: `mkdir -p ~/zabbix-docker/db-data && cd ~/zabbix-docker`
2. Buat docker-compose.yml (PostgreSQL, Zabbix Server, Web UI) → `docker-compose up -d`
3. Akses http://IP:8080 (Admin/zabbix)
4. Target Linux: install zabbix-agent2 → edit `/etc/zabbix/zabbix_agent2.conf` → Server/ServerActive/Hostname → restart
5. Zabbix Web UI: Add host → Template "Linux by Zabbix agent active" → cek Latest Data

## Istilah & Tools
- [[Zabbix Docker]]
- [[docker-compose]]
- [[PostgreSQL]]
- [[Zabbix Agent2]]
- [[No Matches Found]]

## Terkait
- [[Index - Tecotechno Knowledge]]
- [[Index - Linux]]
- [[Index - Cybersecurity]]
- [[TT - Zabbix MikroTik Monitoring 5 Langkah]]
- [[TT - Zabbix Security Setup 6 Cara]]
- [[TT - Zabbix MikroTik Traffic Monitoring]]
