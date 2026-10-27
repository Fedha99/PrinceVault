---
judul: OSPF
sumber: Tecotechno articles
tags: [konsep, ospf, routing, link-state, lsdb, spf, ecmp, routeros-v7]
---
## Definisi
OSPF (Open Shortest Path First) protokol dynamic routing link-state. Setiap router bangun LSDB (Link State Database) identik via LSA flooding → jalankan SPF Algorithm (Dijkstra) hitung jalur terpendek. Cost = reference bandwidth / interface bandwidth. ECMP (Equal-Cost Multi-Path) load balance cost sama. RouterOS v7: instance + interface-template + area.

## Artikel Terkait
- [[TT - Routing OSPF GNS3 MikroTik]]
- [[TT - Routing MikroTik CHR Static Routing]]
- [[MTCNA Materi]]

## Terkait
- [[Index - Tecotechno Knowledge]]
- [[Index - MikroTik]]
- [[MTCNA Materi]]
