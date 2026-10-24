---
title: LB-Hardware
type: system
tags: [#type/system, #laptop-battlefield, #hardware]
last_verified: 2026-10-24
confidence: VERIFIED
---

# LB-Hardware — Spesifikasi Hardware Terverifikasi

> Recon read-only 2026-10-24. Semua data dari `lscpu`, `free`, `lsblk`, `lspci`, `lsusb`, `sensors`, `/sys/class/dmi/id/*`. Tanpa sudo.

---

## Identitas Mesin

| Bidang | Nilai | Sumber |
|--------|-------|--------|
| **Vendor** | Hewlett-Packard | `/sys/class/dmi/id/sys_vendor` |
| **Product** | HP Pavilion g4 Notebook PC | `/sys/class/dmi/id/product_name` |
| **Product Version** | 0791100000205610000620100 | `/sys/class/dmi/id/product_version` |
| **BIOS Vendor** | Insyde | `/sys/class/dmi/id/bios_vendor` |
| **BIOS Version** | F.27 | `/sys/class/dmi/id/bios_version` |
| **BIOS Date** | 09/07/2016 | `/sys/class/dmi/id/bios_date` |

> **Kesimpulan**: Cocok dengan note existing [[Spek HP Pavilion g4]] dan [[Hardware Repair SATA dan Repasting]].

---

## CPU

```
Model name: Intel(R) Core(TM) i7-3612QM CPU @ 2.10GHz
CPU(s): 8 (4 core, 2 thread/core, 1 socket)
Vendor ID: GenuineIntel
CPU max MHz: 3100.0000
CPU min MHz: 1200.0000
Virtualization: VT-x (flags: vmx, ept, vpid, vnmi)
Flags kunci: aes, avx, sse4.1, sse4.2, ssse3, pcid, x2apic, tsc_deadline_timer
```

**Keterbatasan**: Generasi Ivy Bridge (2012), tanpa AVX2, tanpa AVX-512. Cocak untuk kompilasi ringan, container, tapi **tidak cocok** untuk inferensi LLM lokal berat atau simulasi fisika kompleks.

---

## RAM

| Metrik | Nilai |
|--------|-------|
| Total | 11 GiB (DDR3) |
| Used | 6.6 GiB |
| Available | 5.0 GiB |
| Swap (zram0) | 4.0 GiB (kompresi, prioritas 100) |
| Swap used | 53 MiB |

**Catatan**: Swappiness = 10 (konservatif). zram aktif. RAM mepet saat Firefox + Electron apps barengan → **trigger OOM killer** (lihat [[LB-Incident-Freeze-RAM-USB-SSD]]).

---

## GPU

```
00:02.0 VGA compatible controller: Intel Corporation Ivy Bridge mobile GT2 [HD Graphics 4000] (rev 09)
Driver: i915
```

**Keterbatasan utama**: OpenGL 4.2, OpenCL 1.2, **tidak punya Vulkan** (hanya via lavapipe software). Ini bottleneck untuk:
- Kompositor Wayland (Hyprland) — butuh fallback software untuk efek tertentu
- Rendering 3D / video encoding hardware
- Inferensi GPU (ROCm/CUDA tidak tersedia)
- Simulasi grafis (GNS3 VQE, dll)

Lihat [[Constraint Intel HD 4000]] untuk detail.

---

## Storage & Block Devices

| Device | Tipe | Ukuran | Transport | Mountpoint | Catatan |
|--------|------|--------|-----------|------------|---------|
| sda | SSD 512GB | 476.9 GiB | **USB (uas)** | sda1=/, sda2=/boot, sda4=/home | Enclosure JMicron (kabel SATA putus) |
| sda3 | ext4 | 122 GiB | USB | (tidak dipasang) | Partisi cadangan? |
| mmcblk0 | SD Card | 1000 GiB | MMC | mmcblk0p1 (vfat) | 1TB microSD |
| zram0 | swap | 4 GiB | RAM | [SWAP] | Kompresi zstd |
| sr0 | DVD-RW | 1024 MiB | SATA | - | Optical drive |

**Detail sda (USB enclosure)**:
- Vendor: JMicron
- Model: Tech
- Driver: `uas` (USB Attached SCSI)
- Speed: 5000 Mbps (USB 3.0 Gen 1)
- Scheduler: `bfq` (default) — **suboptimal untuk SSD**, lihat [[LB-Storage]]

---

## USB Topology (lsusb -t)

```
Bus 04 (xhci_hcd, 5000M)
  └─ Port 1: Dev 02 — Mass Storage, Driver=uas, 5000M  ← SSD enclosure

Bus 01 (ehci-pci, 480M)
  └─ Hub 6-port → Hub 4-port
       └─ Port 3: Dev 41 — HID (mouse/keyboard) 1.5M
       └─ Port 4: Dev 42 — HID 12M  ← perangkat yang error -71 di journal

Bus 03 (ehci-pci, 480M)
  └─ Hub 6-port
       └─ Port 5: Dev 03 — Video (uvcvideo) 480M  ← Webcam

Bus 02 (xhci_hcd, 480M) — kosong
```

**Error USB -71**: Terjadi di **Bus 1 Port 4** (HID device), **bukan** SSD enclosure. SSD di Bus 4 stabil.

---

## Thermals (sensors)

```
coretemp-isa-0000:
  Package id 0: +60.0°C (high=87, crit=105)
  Core 0: +53.0°C
  Core 1: +58.0°C
  Core 2: +57.0°C
  Core 3: +56.0°C

acpitz-acpi-0: temp1 +58.0°C
hp-isa-0000: pwm1 N/A
BAT0: 12.47V, 0.00A
```

**Status**: Aman (throttle di 87°C, critical 105°C). Repasting Thermalright TF7 masih efektif (idle sebelumnya 39–46°C, sekarang 53–60°C under load).

---

## Power Supply

- ACAD (AC adapter) — present
- BAT0 (Battery) — present, 12.47V

---

## Thermal Zones

`/sys/class/thermal/thermal_zone0` hingga `thermal_zone3` — policy `step_wise` default, governor `fair_share` tersedia.

---

## Virtualization & Container Constraints

| Fitur | Status | Catatan |
|-------|--------|---------|
| VT-x | ✅ | Flag `vmx` aktif |
| KVM | ✅ | `kvm_intel` termuat |
| Nested virt | UNKNOWN | Butuh cek `/sys/module/kvm_intel/parameters/nested` (sudo) |
| Docker | ✅ | Via containerd 2.4.2, rootless tidak dipakai |
| libvirtd | ❌ | Inactive |
| GPU passthrough | ❌ | iGPU only, no IOMMU group isolation |
| Local AI inference | ⚠️ | CPU only (AVX), RAM 11Gi limit, no GPU accel |

---

## Ringkasan Keterbatasan (Constraints)

1. **GPU Intel HD 4000** — bottleneck grafis, no Vulkan, no hardware encode/decode modern
2. **RAM 11 GiB** — mepet untuk multi-Electron + browser tabs; butuh earlyoom (sudah terpasang)
3. **SSD via USB JMicron (uas)** — stall I/O ~2% (PSI), scheduler `bfq` suboptimal → ganti ke `mq-deadline`
4. **CPU Ivy Bridge** — no AVX2, compile lambat, inferensi CPU-only lambat
5. **Baterai** — tegangan 12.47V normal, tapi usia laptop 2016 → kapasitas UNKNOWN

---

## Terhubung ke

- [[Spek HP Pavilion g4]] — note lama (Artix/OpenRC, perlu update ke Arch/systemd)
- [[Hardware Repair SATA dan Repasting]] — root cause kabel SATA putus
- [[Diagnosis Freeze RAM dan USB SSD]] — insiden freeze & fix
- [[Constraint Intel HD 4000]] — detail keterbatasan GPU
- [[LB-Storage]] — layout partisi, mount, scheduler
- [[LB-Operating-System]] — OS, kernel, init

---

#laptop-battlefield #hardware #system
[[Home-Laptop-Battlefield]]