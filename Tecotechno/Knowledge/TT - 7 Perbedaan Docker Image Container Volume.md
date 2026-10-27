---
judul: 7 Perbedaan Docker Image Container Volume Ultimate Easy
sumber: https://tecotechno.com/7-perbedaan-docker-image-container-dan-volume/
tanggal: 2026-10-24
tags: [tecotechno, knowledge, docker, image, container, volume, devops, containerization]
---
## Ringkasan
Penjelasan santai 7 perbedaan Docker Image, Container, Volume via analogi dapur: Image=resep (read-only, template), Container=masakan jadi (bisa banyak dari 1 resep, read-write layer), Volume=kulkas/wadah penyimpanan (data persist, survive container hapus). Mencakup: kenapa bikin bingung (nama command mirip), analogi dapur, detail Image (read-only, layer, `docker image ls`), Container (rw layer, `docker container ls`), Volume (persist, `docker volume ls`), perbandingan tabel, kapan pakai masing-masing, kesalahan hindari (simpan data di container bukan volume).

## Poin Penting
- Image: read-only template (OS minimal, runtime, lib, code, config) → layer tertumpuk
- Container: instance image yang jalan → read-write layer di atas image → `docker run` bikin container baru
- Volume: penyimpanan persist terpisah dari container → data aman kalau container dihapus
- Command mirip tapi beda: `docker image ls` vs `docker container ls` vs `docker volume ls`
- Analogi: Image=resep, Container=masakan, Volume=kulkas
- JANGAN simpan data penting di container (hilang saat `rm`); pakai Volume atau Bind Mount

## Langkah / Cara Kerja
1. Build/pull image: `docker pull nginx:alpine` atau `docker build -t myapp .`
2. Jalankan container: `docker run -d --name web -p 80:80 nginx:alpine`
3. Buat volume: `docker volume create data-db`
4. Mount volume: `docker run -d --name db -v data-db:/var/lib/mysql mysql:8`
5. List: `docker image ls`, `docker container ls -a`, `docker volume ls`
6. Hapus container: `docker rm web` → volume `data-db` tetap ada dengan data

## Istilah & Tools
- [[Docker Image]]
- [[Docker Container]]
- [[Docker Volume]]
- [[Read-Only Layer]]
- [[Read-Write Layer]]
- [[Bind Mount]]
- [[Dockerfile]]

## Terkait
- [[Index - Tecotechno Knowledge]]
- [[Index - Linux]]
- [[TT - 7 Rahasia Docker Developer Ketagihan]]
- [[TT - Ventoy Linux Installation]]
