---
judul: CSRF
sumber: Tecotechno articles
tags: [konsep, csrf, web-security, owasp, session-cookie, samesite, token]
---
## Definisi
CSRF (Cross-Site Request Forgery) eksploitasi kepercayaan server ke session cookie browser. Browser otomatis kirim cookie ke domain asal → server tidak bedakan request sadar vs dipicu situs jahat. Mitigasi: CSRF Token (synchronizer), SameSite Cookie (Strict/Lax), Double Submit Cookie, Custom Header (X-Requested-With), User Interaction (re-auth).

## Artikel Terkait
- [[TT - Waspada CSRF 5 Cara Mitigasi]]
- [[TT - Authentication 7 Dangerous Mistakes]]
- [[Index - Cybersecurity]]

## Terkait
- [[Index - Tecotechno Knowledge]]
- [[Index - Cybersecurity]]
