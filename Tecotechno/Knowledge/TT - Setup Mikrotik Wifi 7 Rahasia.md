---
judul: Setup Mikrotik Wifi 7 Rahasia Setting Sinyal Full Bar Anti Lemot
sumber: https://tecotechno.com/7-rahasia-setting-mikrotik-wifi-biar-sinyal-full/
tanggal: 2026-07-15
tags: [tecotechno, knowledge, mikrotik, wifi, wireless, capsman, winbox, networking]
---
## Ringkasan
Panduan lengkap setting WiFi MikroTik via WinBox: mode AP Bridge, band/frequency/channel width anti-interferensi, Security Profile WPA2-PSK, studi kasus optimasi area padat (Frequency Scan, Snooper, Tx Power), CAPsMAN centralized management, integrasi Hotspot & VLAN, troubleshooting (sinyal penuh tapi lemot, DHCP lease full), dan FAQ.

## Poin Penting
- Mode AP Bridge untuk Access Point standar
- Band 2.4GHz (channel 1/6/11, width 20MHz) vs 5GHz (channel 36/40/44/48, width 20/40/80MHz)
- Security Profile: WPA2-PSK AES, grup key update 3600s
- Frequency Scan & Snooper untuk cari channel paling bersih
- Tx Power: jangan max, atur sesuai coverage butuh
- CAPsMAN: Controller (provisioning, datapath, security) + CAP Client (interface wireless)
- Integrasi Hotspot: user auth via RADIUS/local; VLAN tagging per SSID
- Troubleshooting: cek DNS, NAT, bandwidth queue, DHCP lease pool

## Langkah / Cara Kerja
1. Wireless → double-click wlan → tab Wireless → Mode = ap bridge
2. Band = 2ghz-b/g/n atau 5ghz-a/n/ac → Frequency = auto → Channel Width = 20MHz (2.4G) / 20/40/80MHz (5G)
3. Security Profiles → + → name=wifi-secure → Mode=dynamic-keys → Authentication=WPA2-PSK → Encryption=aes-ccm → Passphrase=xxx
4. Wireless → tab Security → Security Profile = wifi-secure
5. CAPsMAN: Controller → Manager → Provisioning → add (identity regex, master-cfg) → CAP Client → Manager → add CAPsMAN address
6. Hotspot: IP → Hotspot → Setup → pilih interface wireless → konfigurasi DHCP, DNS, SSL cert
7. Troubleshooting: Frequency Scan (Tools → Wireless → Scan), Snooper, cek Tx Power, DHCP lease

## Istilah & Tools
- [[AP Bridge]]
- [[CAPsMAN]]
- [[Frequency Scan]]
- [[Snooper]]
- [[Tx Power]]
- [[WPA2-PSK]]
- [[MTCNA Materi]]

## Terkait
- [[Index - Tecotechno Knowledge]]
- [[Index - MikroTik]]
- [[MTCNA Materi]]
- [[TT - Cara Konfigurasi VLAN MikroTik]]
- [[TT - Konfigurasi DHCP Server MikroTik]]
- [[TT - Problem Hotspot MikroTik]]
