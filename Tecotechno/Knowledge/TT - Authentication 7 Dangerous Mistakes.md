---
judul: Authentication 7 Dangerous Mistakes Bikin Akun Bobol
sumber: https://tecotechno.com/7-hal-penting-soal-authentication-yang-wajib-lotahu/
tanggal: 2026-10-21
tags: [tecotechno, knowledge, authentication, authn, security, 2fa, mfa, passkeys, password, oauth]
---
## Ringkasan
Penjelasan authentication (authN) dari nol: definisi (verifikasi claimant = siapa), 3 pemain (claimant, credential, verifier), 3 faktor (knowledge/password, possession/phone/token, inherence/biometrik), perbedaan authN vs authZ (authorization = boleh ngapain), metode modern (password, OTP/TOTP, WebAuthn/Passkeys, OAuth/OIDC, Magic Link), serangan (credential stuffing, phishing, MITM, brute force, session hijacking), praktik terbaik (password unik + manager, 2FA wajib, Passkeys jika support, rate limit, secure cookie, monitoring), seri 1 (authZ artikel terpisah).

## Poin Penting
- Authentication ≠ Authorization: authN = "kamu siapa", authZ = "kamu boleh apa"
- 3 Faktor: Knowledge (password/PIN), Possession (HP/token/YubiKey), Inherence (sidik jari/face ID)
- MFA = kombinasi ≥2 faktor berbeda (password + OTP = knowledge + possession)
- Passkeys: passwordless, public-key crypto, phishing-resistant, sync via iCloud/Google Password Manager
- Serangan umum: credential stuffing (password bocor dipakai situs lain), phishing (halaman palsu), brute force, session hijack
- Best practice: password unik per akun (pakai Bitwarden), 2FA wajib, Passkeys jika tersedia, rate limit login, secure/httponly cookie, log & alert anomali

## Langkah / Cara Kerja
1. User claim identity (username/email)
2. Verifier minta credential (password/OTP/biometrik)
3. User provide credential
4. Verifier cek kecocokan → valid/invalid
5. Jika valid → buat session/token → return ke user
6. Request berikutnya bawa session/token → verifier cek validitas

## Istilah & Tools
- [[Authentication]]
- [[Authorization]]
- [[MFA]]
- [[2FA]]
- [[Passkeys]]
- [[WebAuthn]]
- [[OAuth]]
- [[OIDC]]
- [[Credential Stuffing]]
- [[Session Hijacking]]
- [[Bitwarden]]

## Terkait
- [[Index - Tecotechno Knowledge]]
- [[Index - Cybersecurity]]
- [[TT - 4 Cara Menggunakan Bitwarden]]
- [[TT - Waspada CSRF 5 Cara Mitigasi]]
- [[TT - ACP Protocol 10 Fakta]]
