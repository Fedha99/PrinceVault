---
title: LB-Graph-Service-Dependencies
type: handoff
tags: [#type/handoff, #laptop-battlefield, #graph, #service-dependencies]
last_verified: 2026-10-24
confidence: VERIFIED
---

# LB-Graph-Service-Dependencies — Docker, Database, Laravel, Monitoring Stack

> Mermaid diagram + wikilink list untuk service dependencies di Graph View.

---

## Mermaid Diagram

```mermaid
graph TD
    %% Hardware base
    HW[LB-Hardware: i7-3612QM, 11GiB RAM, Intel HD 4000]
    USB[USB SSD JMicron uas]

    %% OS layer
    OS[LB-Operating-System: Arch Linux, systemd, kernel zen]
    DOCKER[LB-Tool-Docker: Docker 29.9, containerd 2.4]

    %% Docker Networks
    BR0[docker0: 172.17.0.0/16]
    BR1[br-e12f3b561011: 172.18.0.0/16]
    BR2[br-db1d13c7f3b8: 172.19.0.0/16]

    %% Containers
    VELX[velxio: ghcr.io/davidmonterocrespo24/velxio:master]
    MDB[mcc-mariadb: mariadb:11]
    WAPP[web-monitor-app: php:8.5-cli]
    WDB[web-monitor-db: postgres:17]

    %% Database Services
    PG[LB-Service-PostgreSQL: postgres:17]
    MARIA[LB-Service-MariaDB: mariadb:11]

    %% Laravel Projects
    MCC1[LB-Project-Monitoring-Laravel-1]
    MCC2[LB-Project-Monitoring-Laravel-Prototype]
    WM[LB-Project-Web-Monitor]

    %% Monitoring Target
    ROS[LB-Service-RouterOS: MikroTik RouterOS]
    ZBX[LB-Service-Zabbix: Zabbix stack]

    %% MCC Core
    MCC[LB-Project-MCC: Monitoring Control Center]

    %% Dependencies
    HW --> USB
    USB --> OS
    OS --> DOCKER
    DOCKER --> BR0
    DOCKER --> BR1
    DOCKER --> BR2

    BR0 --> VELX
    BR1 --> WAPP
    BR1 --> WDB
    BR2 --> MDB

    VELX -.-> PG
    WDB --> PG
    MDB --> MARIA

    WAPP --> WM
    WDB --> WM

    MCC1 --> MARIA
    MCC2 --> PG

    MCC1 --> MCC
    MCC2 --> MCC

    MCC --> ROS
    MCC --> ZBX

    %% Network layer
    NW[LB-Network: eno1, wlp1s0, bridges]
    DOCKER -.-> NW
    ROS -.-> NW
    ZBX -.-> NW
```

---

## Wikilink List

### Infrastructure
- [[LB-Hardware]]
- [[LB-Operating-System]]
- [[LB-Tool-Docker]]
- [[LB-Network]]

### Docker Networks & Containers
- [[LB-Service-PostgreSQL]]
- [[LB-Service-MariaDB]]
- [[LB-Service-Zabbix]]

### Projects
- [[LB-Project-Monitoring-Laravel-1]]
- [[LB-Project-Monitoring-Laravel-Prototype]]
- [[LB-Project-Web-Monitor]]
- [[LB-Project-MCC]]

### External Services
- [[LB-Service-RouterOS]]
- [[LB-Project-GNS3-Labs]] (simulasi RouterOS)
- [[LB-Project-Masjidku-WordPress]] (cPanel hosting)

---

## Service Dependency Matrix

| Service | Depends On | Used By | Status |
|---------|------------|---------|--------|
| Docker Engine | OS, USB SSD | All containers | ✅ Running |
| docker0 bridge | Docker | velxio | ✅ UP |
| br-e12f3b561011 | Docker | web-monitor (app+db) | 🔴 DOWN |
| br-db1d13c7f3b8 | Docker | mcc-mariadb | 🔴 DOWN |
| PostgreSQL (PG) | docker0/br1 | web-monitor, MCC-prototype | Container exited |
| MariaDB | docker0/br2 | MCC-1 | Container exited |
| Zabbix | br2 (planned) | Monitoring stack | Not deployed |
| RouterOS | Network | MCC polling | Target device |
| velxio | docker0 | Unknown (7.13GB image) | ✅ Running |

---

## Graph View Filter (Saran)

| Group | Query | Color |
|-------|-------|-------|
| Infrastructure | path:Laptop-Battlefield/System OR path:Laptop-Battlefield/LB-Tool-Docker OR path:Laptop-Battlefield/LB-Network | #3B82F6 |
| Databases | path:Laptop-Battlefield/LB-Service-PostgreSQL OR path:Laptop-Battlefield/LB-Service-MariaDB | #10B981 |
| Monitoring Stack | path:Laptop-Battlefield/Projects/LB-Project-Monitoring* OR path:Laptop-Battlefield/LB-Project-MCC OR path:Laptop-Battlefield/LB-Service-RouterOS OR path:Laptop-Battlefield/LB-Service-Zabbix | #F59E0B |
| External | path:Laptop-Battlefield/LB-Project-Masjidku-WordPress OR path:Laptop-Battlefield/LB-Project-GNS3-Labs | #8B5CF6 |

---

#laptop-battlefield #graph #service-dependencies
[[Home-Laptop-Battlefield]]