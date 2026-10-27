---
judul: Link State
sumber: Tecotechno articles
tags: [konsep, link-state, ospf, isis, lsdb, spf, dijkstra, routing]
---
## Definisi
Link State = kelas protokol routing (OSPF, IS-IS) di mana setiap router bangun database topologi lengkap (LSDB) via flooding LSA → jalankan SPF (Dijkstra) hitung tree jalur terpendek. Konvergensi cepat, event-driven, support ECMP. RouterOS v7 implementasi via instance + interface-template.

## Artikel Terkait
- [[TT - Routing OSPF GNS3 MikroTik]]
- [[TT - RIP Networking Guide 7 Panduan]]
- [[MTCNA Materi]]

## Terkait
- [[Index - Tecotechno Knowledge]]
- [[Index - MikroTik]]
- [[MTCNA Materi]]
