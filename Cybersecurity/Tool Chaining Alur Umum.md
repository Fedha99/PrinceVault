# Tool Chaining — Alur Umum

Alur standar yang kepake berulang di box-box THM/HTB.

```
[ Recon ]
   │  nmap -sC -sV -p- (banner grab, service version)
   ▼
[ Enumeration per-service ]
   │  SMB  → smbclient / enum4linux
   │  Web  → gobuster / feroxbuster + manual browsing
   │  RDP  → xfreerdp (test kredensial hasil enum)
   ▼
[ Credential Hunting ]
   │  ps aux / /proc/*/cmdline (leaked args)
   │  file share / config file (base64, plaintext)
   ▼
[ Exploitation ]
   │  webshell upload, xp_cmdshell, dsb.
   ▼
[ Privesc ]
      PowerShell history, SUID binary, cron job, dll.
```

Pola ini kepake identik di [[HTB Archetype]] dan lagi dicoba diterapin di [[Relevant]].

## Terhubung ke
- [[Mindset Pentesting]]
- [[Relevant]]
- [[HTB Archetype]]
- [[Gap Belajar Pentesting]]

---
#cybersecurity #tools
[[Index - Cybersecurity]]
