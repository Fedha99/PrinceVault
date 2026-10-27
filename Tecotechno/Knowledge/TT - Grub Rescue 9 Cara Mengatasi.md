---
judul: Grub Rescue 9 Cara Mengatasi Grub Rescue di Linux Ampuh Tuntas
sumber: https://tecotechno.com/grub-loader-bermasalah-9-cara-mengatasi-grub-resque/
tanggal: 2026-08-15
tags: [tecotechno, knowledge, grub, grub-rescue, bootloader, linux, uefi, bios, live-usb, recovery]
---
## Ringkasan
Panduan lengkap diagnosis & perbaiki GRUB Rescue (`grub rescue>` prompt): definisi GRUB & rescue mode, 10 penyebab umum (resize partisi, hapus partisi, urutan partisi berubah, kehilangan referensi root, config rusak, install OS lain timpa bootloader, dual boot Windows, ganti disk, filesystem korup, urutan boot BIOS/UEFI). Diagnosis `ls` → cek partisi `ls (hd0,gptX)/` → cari folder `/boot/grub`. Perbaikan: set root, set prefix, insmod normal, normal → boot Linux. Perbaikan permanen: UEFI (mount ESP, reinstall GRUB ke `/boot/efi`), BIOS/Legacy (install ke MBR `/dev/sda`). Live USB opsi recovery fleksibel. FAQ: data aman, tidak perlu install ulang, waktu perbaikan menit-jam.

## Poin Penting
- GRUB rescue = bootloader gagal temukan lokasi filesystem (root/prefix)
- Diagnosis wajib: `ls` → lihat device `(hd0)`, `(hd0,gpt1)`... → `ls (hd0,gptX)/` cari folder `boot/grub`
- Perbaikan sementara: `set root=(hd0,gpt2)` → `set prefix=(hd0,gpt2)/boot/grub` → `insmod normal` → `normal` → boot
- Permanen UEFI: mount ESP (`/boot/efi`) → `grub-install --target=x86_64-efi --efi-directory=/boot/efi --bootloader-id=GRUB` → `grub-mkconfig -o /boot/grub/grub.cfg`
- Permanen BIOS: `grub-install /dev/sda` → `grub-mkconfig -o /boot/grub/grub.cfg`
- Live USB (Ventoy/Arch/Ubuntu) → chroot → perbaiki dari dalam
- MBR vs GPT: `ls` output beda (msdos vs gpt) → jangan asumsi!

## Langkah / Cara Kerja
1. Di `grub rescue>` → `ls` → catat device/partisi
2. `ls (hd0,gpt1)/` `ls (hd0,gpt2)/` ... → cari yang ada folder `boot/grub`
3. `set root=(hd0,gptX)` (partisi yang benar)
4. `set prefix=(hd0,gptX)/boot/grub`
5. `insmod normal` → `normal` → masuk menu GRUB → pilih Linux
6. Di Linux: UEFI → mount ESP → `grub-install ...` ; BIOS → `grub-install /dev/sda`
7. `grub-mkconfig -o /boot/grub/grub.cfg`
8. Reboot → verifikasi menu GRUB normal

## Istilah & Tools
- [[GRUB]]
- [[GRUB Rescue]]
- [[UEFI]]
- [[BIOS Legacy]]
- [[ESP]]
- [[MBR]]
- [[GPT]]
- [[chroot]]
- [[Ventoy]]

## Terkait
- [[Index - Tecotechno Knowledge]]
- [[Index - Linux]]
- [[TT - Ventoy Linux Installation]]
- [[TT - 7 Perbedaan Docker Image Container Volume]]
