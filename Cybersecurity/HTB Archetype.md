# HTB Archetype

Full attack chain yang udah pernah berhasil:

```
SMB enumeration → MSSQL (xp_cmdshell) → reverse shell → privesc (PowerShell history)
```

Pola ini mirip sama yang lagi dikerjain di [[Relevant]] — kemungkinan besar box itu juga bakal berujung ke exploitasi service Windows (MSSQL/IIS) abis SMB enum.

**Status:** ✅ Selesai (referensi lama)

## Terhubung ke
- [[Tool Chaining Alur Umum]]
- [[Relevant]]

---
#cybersecurity #htb #smb #mssql
[[Index - Cybersecurity]]
