---
judul: Waspada CSRF 5 Cara Ampuh Menghentikan Serangan CSRF Aplikasi Web
sumber: https://tecotechno.com/serangan-csrf-cara-mengatasinya/
tanggal: 2026-07-13
tags: [tecotechno, knowledge, csrf, web-security, owasp, blue-team, mitigation]
---
## Ringkasan
Penjelasan mendalam CSRF (Cross-Site Request Forgery) dari sudut Blue Team: mekanisme session cookie otomatis, analogi stempel rahasia, skenario eksploitasi, dan 5 mitigasi berlapis: CSRF Token (synchronizer pattern), SameSite Cookie (Strict/Lax), Double Submit Cookie, Custom Header (X-Requested-With), dan User Interaction (re-auth/confirmation). Termasuk implementasi kode contoh.

## Poin Penting
- CSRF memanfaatkan browser otomatis kirim cookie ke domain yang sama
- Server tidak bedakan request sadar user vs dipicu situs jahat
- 5 mitigasi: (1) CSRF Token per form/request, (2) SameSite=Strict/Lax cookie, (3) Double Submit Cookie (token di cookie + header), (4) Custom Header AJAX, (5) Re-auth/confirmation untuk aksi sensitif
- Defense in depth: kombinasikan minimal 2 layer

## Langkah / Cara Kerja
1. Implementasi CSRF Token: generate token unik per session → embed di form hidden field → validasi di server
2. Set cookie SameSite: `Set-Cookie: sessionid=xxx; SameSite=Strict; Secure`
3. Double Submit: kirim token di cookie DAN custom header `X-CSRF-Token` → server bandingkan
4. AJAX: kirim header `X-Requested-With: XMLHttpRequest` → server cek header
5. Aksi sensitif: minta password/OTP/confirm dialog sebelum eksekusi

## Istilah & Tools
- [[CSRF]]
- [[Session Cookie]]
- [[SameSite Cookie]]
- [[CSRF Token]]
- [[Double Submit Cookie]]
- [[OWASP]]
- [[Blue Team]]

## Terkait
- [[Index - Tecotechno Knowledge]]
- [[Index - Cybersecurity]]
- [[TT - 7 Hal Penting Authentication]]
