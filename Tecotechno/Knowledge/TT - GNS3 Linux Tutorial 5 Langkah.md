---
judul: GNS3 Linux Tutorial 5 Langkah Setup GNS3 The Dude Monitoring
sumber: https://tecotechno.com/gns3-linux-tutorial-5-langkah-mudah-setup-gns3/
tanggal: 2026-07-27
tags: [tecotechno, knowledge, gns3, linux, kvm, qemu, the-dude, wine, monitoring, networking]
---
## Ringkasan
Setup GNS3 Linux (native KVM/QEMU) + integrasi The Dude (monitoring MikroTik) via Wine. 5 langkah: install dependensi (python3, qemu-kvm, libvirt, dynamips), konfigurasi GNS3 GUI/server lokal, import MikroTik CHR v7+ image (konversi qcow2), setup The Dude Server di CHR + Client via Wine, pengujian SNMP/ping probe/pemetaan topologi otomatis. Tips: RAM 8GB+, distro stable (Ubuntu LTS/Debian), troubleshooting Wine/connect/QEMU lambat.

## Poin Penting
- GNS3 Linux + KVM native: overhead virtualisasi minimal vs Windows (VirtualBox/VMware layer)
- Dependensi: python3, qemu-kvm, libvirt-daemon-system, libvirt-clients, bridge-utils, dynamips
- User ke grup kvm,libvirt → logout/login
- GNS3 via PPA: `sudo add-apt-repository ppa:gns3/ppa && sudo apt install gns3-gui gns3-server`
- CHR image: download raw → `qemu-img convert -O qcow2 chr.img chr.qcow2` → template QEMU VM (RAM 256MB, 4 NIC e1000, console telnet)
- The Dude Server: `/system/device-mode/update dude=yes` di CHR → reboot
- The Dude Client: Wine → `wine dude-install.exe` → connect ke CHR IP
- SNMP probe + ping probe + auto-discovery topologi

## Langkah / Cara Kerja
1. `sudo apt update && sudo apt install python3 python3-pip qemu-kvm libvirt-daemon-system libvirt-clients bridge-utils dynamips`
2. `sudo usermod -aG kvm,libvirt $USER` → logout/login
3. `sudo add-apt-repository ppa:gns3/ppa && sudo apt update && sudo apt install gns3-gui gns3-server`
4. `gns3` → Local Server → Preferences → QEMU VMs → New → chr.qcow2 → RAM 256MB, 4 NIC e1000, telnet
5. CHR di GNS3 → Winbox/CLI → `/system/device-mode/update dude=yes` → reboot
6. Linux: `sudo apt install wine winetricks` → `wine dude-install.exe` → connect ke CHR IP
7. The Dude Client: Devices → SNMP probe → ping probe test link down → auto-discovery map

## Istilah & Tools
- [[GNS3]]
- [[KVM]]
- [[QEMU]]
- [[CHR]]
- [[The Dude]]
- [[Wine]]
- [[SNMP Probe]]
- [[MTCNA Materi]]

## Terkait
- [[Index - Tecotechno Knowledge]]
- [[Index - Linux]]
- [[Index - MikroTik]]
- [[MTCNA Materi]]
- [[TT - Pelajari GNS3 7 Hal Penting]]
- [[TT - Routing MikroTik CHR Static Routing]]
