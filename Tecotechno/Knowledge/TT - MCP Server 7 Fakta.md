---
judul: 7 Fakta tentang MCP Server
sumber: https://tecotechno.com/7-fakta-gila-tentang-mcp-server-secara-mudah-detail/
tanggal: 2026-10-08
tags: [tecotechno, knowledge, ai, mcp, keamanan]
---
## Ringkasan
Artikel memperkenalkan Model Context Protocol (MCP) sebagai protokol untuk menghubungkan aplikasi AI dengan tool dan sumber data melalui pola yang seragam. Arsitekturnya melibatkan host, client, dan server; server dapat menawarkan tools, resources, dan prompts. Koneksi ini memperluas kemampuan AI sekaligus menambah permukaan serangan dan risiko akses berlebihan.

## Poin Penting
- **Host** adalah aplikasi AI; **client** mengelola koneksi ke server; **server** menyediakan kemampuan.
- **Tools** menjalankan aksi, **resources** menyajikan data, dan **prompts** menyediakan template instruksi.
- MCP membungkus akses ke layanan atau API agar kemampuan dapat ditemukan dan dipanggil lewat pola yang konsisten.
- Risiko yang dibahas: prompt injection dari hasil tool, tool poisoning, server tidak tepercaya, izin berlebihan, dan kebocoran kredensial.
- Terapkan least privilege, sandbox, persetujuan manusia untuk aksi sensitif, audit kode, serta penyimpanan rahasia yang layak. Perlakukan output tool sebagai data tidak tepercaya.

## Langkah / Cara Kerja
1. Mulai dari satu kebutuhan kecil dan satu server yang terawat.
2. Tentukan tool, resource, atau prompt yang benar-benar diperlukan.
3. Batasi akses file/jaringan dan gunakan mode baca-saja bila cukup.
4. Uji server dengan host yang digunakan; jangan menaruh token di kode.
5. Tinjau output dan minta persetujuan sebelum aksi sensitif.

## Istilah & Tools
- [[MCP Protocol]]
- [[AI Agent]]

## Terkait
- [[Index - Tecotechno Knowledge]]
- [[Index - Tecotechno]]
- [[Index - Cybersecurity]]
- [[TT - 10 AI Agents Gratis]]
- [[TT - ACP Protocol 10 Fakta]]
