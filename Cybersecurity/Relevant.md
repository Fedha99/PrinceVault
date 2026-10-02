# Relevant (TryHackMe)

- **Fokus:** SMB enumeration → pivot ke web (IIS).
- **Progress:**
  - Enumerasi SMB share, ketemu file berisi credentials dalam bentuk **base64**.
  - RDP pake kredensial itu → **gagal**.
  - Lagi pivot ke hipotesis **IIS webshell** sebagai jalan masuk alternatif.
- **Next step:** Coba upload webshell via IIS (kalau ada upload point / misconfigured directory), atau cek ulang apakah kredensial base64 valid buat service lain (WinRM, FTP, dll) sebelum RDP.

**Status:** 🟡 In progress

## Terhubung ke
- [[Mindset Pentesting]]
- [[Tool Chaining Alur Umum]]
- [[HTB Archetype]] (pola serangan mirip)
- [[Gap Belajar Pentesting]]

---
#cybersecurity #thm #smb #iis
[[Index - Cybersecurity]]
