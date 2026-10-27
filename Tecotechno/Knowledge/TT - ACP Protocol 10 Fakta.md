---
judul: ACP Protocol 10 Fakta Wajib Kamu Tahu Dijelasin Simpel
sumber: https://tecotechno.com/10-hal-yang-perlu-kamu-tahu-soal-acp-protocol/
tanggal: 2026-10-20
tags: [tecotechno, knowledge, acp-protocol, ai-agent, agent-communication, mcp, a2a, langgraph, crewai]
---
## Ringkasan
ACP Protocol (Agent Communication Protocol) = standar komunikasi antar AI agent (bukan model AI). Analogi: resepsionis hotel yang ngurus komunikasi tamu. Kenapa perlu: framework AI (LangGraph, CrewAI, AutoGen) punya bahasa sendiri → developer harus bikin glue code. Bedanya: MCP = 1 model ke tools/data; ACP = multi-agent saling komunikasi; A2A = Google, konsep mirip tata kelola beda. Keamanan: zero-trust (verifikasi tiap request). Tantangan: spec masih berkembang, implementasi butuh dev effort, bukan solusi ajaib. Salah kaprah: bukan AI model, bukan auto-fix integrasi, bukan cuma enterprise, belum final.

## Poin Penting
- ACP = Agent Communication Protocol = standar bahasa antar AI agent (framework/vendor beda)
- MCP = Model Context Protocol = 1 model ke tools/data (database, file, app)
- A2A = Agent2Agent = Google, konsep mirip ACP tapi governance beda
- Zero-trust: tiap request diverifikasi, tidak auto-trust "dari dalam sistem"
- Salah kaprah: (1) Bukan model AI, (2) Bukan auto-fix integrasi, (3) Bukan cuma enterprise, (4) Spec belum final (masih revisi komunitas)
- Relevan untuk developer individu/tim kecil yang pakai multi-framework

## Langkah / Cara Kerja
1. Agent A mau minta Agent B jalanin tugas
2. Agent A kirim request via ACP Protocol (format standar JSON/HTTP/gRPC)
3. Agent B terima → verifikasi identity/permission (zero-trust)
4. Agent B eksekusi → kirim response via ACP
5. Agent A terima hasil → lanjut proses

## Istilah & Tools
- [[ACP Protocol]]
- [[MCP Protocol]]
- [[A2A Protocol]]
- [[AI Agent]]
- [[LangGraph]]
- [[CrewAI]]
- [[AutoGen]]
- [[Zero Trust]]
- [[Agent Communication]]

## Terkait
- [[Index - Tecotechno Knowledge]]
- [[Index - Cybersecurity]]
- [[TT - 7 Kesalahan Fatal Pakai AI Programmer]]
- [[TT - 7 Lapisan OSI 7 Layers]]
