---
title: LB-Refresh-Playbook
type: handoff
tags: [#type/handoff, #laptop-battlefield, #refresh-playbook]
last_verified: 2026-10-24
confidence: VERIFIED
---

# LB-Refresh-Playbook — Perintah Read-Only untuk Recon Ulang

> Jalankan perintah ini untuk rebuild knowledge base. **Semua read-only, no sudo**.

---

## Phase 0 — Scope

```bash
whoami; echo "HOME=$HOME"; echo "SHELL=$SHELL"
ls -ld ~/labs/Learning/PrinceVault
which obsidian hermes claude cursor opencode codegraph
ls -la ~/.hermes ~/.config/claude-desktop ~/.config/Cursor ~/.codex 2>/dev/null | head -20
```

---

## Phase 1 — Hardware

```bash
lscpu | grep -E 'Model name|^CPU\(s\):|Thread|Core|Socket|Vendor|MHz|Virtualization|Flags.*(vmx|svm)'
free -h
lsblk -f
findmnt -n -o SOURCE,TARGET,FSTYPE,OPTIONS
lspci
lsusb -t
sensors 2>/dev/null | head -20
for f in sys_vendor product_name product_version bios_vendor bios_version bios_date; do echo "$f:"; cat /sys/class/dmi/id/$f 2>/dev/null || echo "  (unreadable)"; done
ls /sys/class/power_supply/
ls /sys/class/thermal/thermal_zone* 2>/dev/null | head -10
cat /sys/block/sda/queue/scheduler 2>/dev/null
cat /sys/block/sda/device/model 2>/dev/null
```

---

## Phase 2 — OS

```bash
cat /etc/os-release
uname -a
readlink /sbin/init
echo "DESKTOP_SESSION=$DESKTOP_SESSION XDG_SESSION_TYPE=$XDG_SESSION_TYPE XDG_CURRENT_DESKTOP=$XDG_CURRENT_DESKTOP"
systemctl list-units --failed --no-pager
systemctl --user list-units --failed --no-pager
journalctl -p err -b --no-pager | tail -30
cat /proc/cmdline
lsmod | grep -iE 'vmx|kvm|nvidia|amdgpu|i915|btusb|bluetooth|wireless|80211|uvc|snd|nvme|ahci|usb' | head -20
pacman -Q 2>/dev/null | wc -l
```

---

## Phase 3 — Network

```bash
ip -brief addr
ip route
resolvectl status 2>/dev/null | head -30 || cat /etc/resolv.conf
ss -tulpn 2>/dev/null | head -40
which openvpn wireguard wg tailscale zerotier nmcli
nft list ruleset 2>/dev/null | head -50
```

---

## Phase 4 — Toolchain

```bash
git --version; gcc --version | head -1; python3 --version; node --version 2>/dev/null; php --version 2>/dev/null | head -1; composer --version 2>/dev/null
docker --version 2>/dev/null; docker ps -a --format 'table {{.Names}}\t{{.Image}}\t{{.Status}}' 2>/dev/null; docker images --format 'table {{.Repository}}\t{{.Tag}}\t{{.Size}}' 2>/dev/null | head -10
which helix nvim vim cursor code zed sqlite3 psql mariadb mysql redis-cli qemu-system-x86_64 virsh
which claude cursor opencode codex
cat ~/labs/monitoring/opencode.jsonc 2>/dev/null
```

---

## Phase 5 — Projects & History

```bash
# Repos under HOME (depth 4, excl caches)
find ~ -maxdepth 4 -name '.git' -type d 2>/dev/null | sed 's|/.git$||' | sort -u | head -30

# Monitoring mono-repo
cd ~/labs/monitoring && git log --since="90 days ago" --date=short --pretty=format:'%ad %s' | head -30
git status --short
git branch -vv
git remote -v

# Sub-projects
for p in monitoring-laravel-1 monitoring-laravel-prototype; do
  echo "=== $p ==="
  cd ~/labs/monitoring/$p && git log --since="90 days ago" --date=short --pretty=format:'%ad %s' | head -20
  git status --short
  git branch -vv
  git remote -v
done

# Other key repos
for p in ~/labs/Learning/PrinceVault ~/GNS3/projects; do
  echo "=== $p ==="
  find "$p" -maxdepth 3 -name '.git' -type d 2>/dev/null | sed 's|/.git$||' | sort -u
done
```

---

## Vault Verification

```bash
# Check new notes exist & have links
find ~/labs/Learning/PrinceVault/Laptop-Battlefield -name '*.md' -type f | sort
# Check each has incoming/outgoing wikilinks (grep for \[\[)
for f in ~/labs/Learning/PrinceVault/Laptop-Battlefield/**/*.md; do
  echo "=== $f ==="
  grep -c '\[[' "$f" 2>/dev/null || echo "0 links"
done
```

---

## Quick Health Check (Daily)

```bash
# RAM & earlyoom
free -h && journalctl -u earlyoom --since="1 hour ago" --no-pager
# PSI
cat /proc/pressure/memory; cat /proc/pressure/io; cat /proc/pressure/cpu
# Disk scheduler
cat /sys/block/sda/queue/scheduler
# Docker
docker ps -a
# Git dirty
cd ~/labs/monitoring && git status --short
cd ~/labs/monitoring/monitoring-laravel-prototype && git status --short
```

---

#laptop-battlefield #playbook #refresh
[[Home-Laptop-Battlefield]]