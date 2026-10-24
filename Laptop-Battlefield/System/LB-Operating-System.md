---
title: LB-Operating-System
type: system
tags: [#type/system, #laptop-battlefield, #os]
last_verified: 2026-10-24
confidence: VERIFIED
---

# LB-Operating-System — OS, Kernel, Init, Session

> Recon read-only 2026-10-24. Data dari `/etc/os-release`, `uname`, `systemctl`, `journalctl`, `lsmod`, `pacman`.

---

## Distribusi & Kernel

| Bidang | Nilai |
|--------|-------|
| **OS** | Arch Linux (rolling) |
| **Kernel** | 7.2.11-zen1-1-zen #1 ZEN SMP PREEMPT_DYNAMIC |
| **Arsitektur** | x86_64 |
| **Init** | systemd (systemd 257+) |
| **Build ID** | rolling |

> ⚠️ **Konflik dengan vault existing**: Note [[Spek HP Pavilion g4]] menyebut **Artix Linux + OpenRC + kernel 7.1.3-cachyos-bore**. Mesin ini sekarang **Arch Linux + systemd + kernel zen**. Perlu update note lama.

---

## Kernel Command Line

```
BOOT_IMAGE=/vmlinuz-linux-zen root=UUID=c8db0bed-8a77-4af0-86de-a3ce26484d4a rw loglevel=3 quiet mitigations=off
```

- `mitigations=off` — Spectre/Meltdown mitigations dimatikan (performance)
- `loglevel=3` — kernel log level ringan

---

## Session & Desktop

| Variabel | Nilai |
|----------|-------|
| DESKTOP_SESSION | hyprland |
| XDG_SESSION_TYPE | wayland |
| XDG_CURRENT_DESKTOP | sway |
| HYPRLAND_INSTANCE_SIGNATURE | efb50993... |
| SHELL | /usr/bin/bash |
| EDITOR / VISUAL | (tidak diset) |

**Window Manager**: Hyprland (dynamic tiling, Wayland native)  
**Compositor**: wlroots-based, GPU Intel HD 4000 (i915)

---

## Package Manager & Packages

- **pacman**: 2048 package terinstall
- **flatpak**: tersedia
- **AUR helper**: paru (dari history shell), tapi tidak di-scan isinya

---

## Systemd Units — Failed (System)

```
● playit.service     loaded failed failed  Playit Agent
```

Hanya 1 unit gagal: `playit.service` (tunneling service, non-kritis).

**User units**: 0 failed.

---

## Journal Errors (Boot Ini, Prioritas Err)

```
usb 1-1.2: clear tt 1 (8000) error -71
usb 1-1.2-port4: cannot reset (err = -71)  [berulang]
usb 1-1.2-port4: Cannot enable. Maybe the USB cable is bad?
usbhid 1-1.2.4:1.0: can't add hid device: -71
usbhid 1-1.2.4:1.1: can't add hid device: -71
```

**Sumber**: Bus 1 (ehci-pci 480M) → Hub 6-port → Hub 4-port → Port 4 (HID device). **Bukan SSD enclosure** (SSD di Bus 4 xhci_hcd 5000M).

---

## Loaded Modules (Kunci)

| Modul | Fungsi |
|-------|--------|
| `i915` | Intel GPU (HD 4000) |
| `kvm_intel`, `kvm` | Virtualisasi KVM |
| `rtl8821ae`, `rtl_pci`, `rtlwifi`, `mac80211` | WiFi Realtek RTL8821AE |
| `uvcvideo`, `videobuf2_*` | Webcam |
| `snd_hda_intel`, `snd_hda_codec_*` | Audio Intel HDA |
| `nvme`, `ahci` | Storage controller (AHCI untuk SATA internal, nvme untuk NVMe kalau ada) |
| `usb_storage`, `uas` | USB mass storage |
| `zram` | Compressed swap |
| `overlay` | Docker/containerd overlayfs |

---

## Boot History (journalctl --list-boots)

14 boot tercatat. Boot sebelumnya (23 Okt) up 38 menit. Beberapa boot singkat (< 1 menit) di 22-23 Okt — shutdown normal (bukan crash).

---

## Ringkasan Perbedaan vs Vault Existing

| Bidang | Vault Existing ([[Spek HP Pavilion g4]]) | Live (Rekon) | Status |
|--------|------------------------------------------|--------------|--------|
| OS | Artix Linux | Arch Linux | **BERUBAH** |
| Init | OpenRC | systemd | **BERUBAH** |
| Kernel | 7.1.3-cachyos-bore | 7.2.11-zen | **BERUBAH** |
| RAM | 11.57 GB | 11 GiB | ~sama |
| IP eth0 | 192.168.23.254 | 192.168.23.253 | BERUBAH (DHCP) |
| WM | Hyprland 0.56.1 | Hyprland (versi baru) | Update |

---

## Terhubung ke

- [[Spek HP Pavilion g4]] — butuh update ke Arch/systemd
- [[LB-Hardware]] — hardware yang menjalankan OS ini
- [[LB-Storage]] — root filesystem di sda1 (USB SSD)
- [[LB-Development-Toolchain]] — toolchain di atas OS ini
- [[LB-AI-Agents]] — AI agents di user session

---

#laptop-battlefield #os #system
[[Home-Laptop-Battlefield]]