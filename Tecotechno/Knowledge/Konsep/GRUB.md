---
judul: GRUB
sumber: Tecotechno articles
tags: [konsep, grub, bootloader, grub-rescue, uefi, bios, esp, mbr, gpt]
---
## Definisi
GRUB (GRand Unified Bootloader) = bootloader Linux standar. GRUB Rescue = mode darurat saat gagal temukan filesystem (root/prefix). Diagnosis: `ls` → `ls (hd0,gptX)/` cari `/boot/grub`. Perbaiki: `set root`, `set prefix`, `insmod normal`, `normal`. Permanen: UEFI → reinstall ke ESP (`/boot/efi`); BIOS → reinstall ke MBR (`/dev/sda`).

## Artikel Terkait
- [[TT - Grub Rescue 9 Cara Mengatasi]]
- [[TT - Ventoy Linux Installation 7 Langkah]]
- [[Index - Linux]]

## Terkait
- [[Index - Tecotechno Knowledge]]
- [[Index - Linux]]
