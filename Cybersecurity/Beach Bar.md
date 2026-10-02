# Beach Bar (TryHackMe)

- **Fokus:** Privilege escalation via credential leak.
- **Progress:** Ketemu root credentials yang ke-leak di **process arguments** (`ps aux` / `/proc/[pid]/cmdline`).
- **Insight:** Command line arguments sering kebaca semua user di sistem — app yang pass password lewat argument (bukan env var atau prompt) itu vulnerable by design.

**Status:** ✅ Selesai

## Terhubung ke
- [[Mindset Pentesting]]
- [[Tool Chaining Alur Umum]]

---
#cybersecurity #thm #privesc
[[Index - Cybersecurity]]
