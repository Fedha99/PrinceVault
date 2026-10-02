up:: [[SuperFantasyRPG - Mod List & Konsep]]
related:: [[Modpack Forge 1.20.1 Overview]]
tags:: minecraft, questline, ftb-quests, mca-quests, superfantasyrpg

# SuperFantasyRPG — Questline Draft (FTB Quests + MCA Quests)

**Struktur:** Hub-based + Branching. FTB Quests = backbone progression (wajib, gate konten). MCA Quests = layer sosial opsional yang nempel di NPC village, ngasih reward tambahan/buff tapi gak wajib buat lanjut cerita utama.

**Cara pakai:** tiap chapter di bawah = 1 FTB Quests chapter tab. Task ditulis dalam format `Judul quest — deskripsi singkat — reward`. Item reward masih generic, sesuaikan pas build di FTB Quests editor sesuai item ID mod yang bener.

---

## Chapter 0 — Awakening (Tutorial)

**Tema:** Onboarding, survival dasar, kenalan village pertama.
**Mods terkait:** primitivestart, notreepunching, appleskin, minecraft-comes-alive

| Quest | Deskripsi | Reward |
|---|---|---|
| Bangun dari Tidur | Craft crafting table + tool kayu pertama | 1 stack kayu, buku panduan |
| Api Unggun Pertama | Bikin furnace, masak makanan dasar (FarmersDelight) | Beberapa food item |
| Jejak di Hutan | Explore radius 200 block, temukan struktur pertama pake ExplorersCompass | ExplorersCompass gratis kalau belum craft |
| Selamat Datang di Desa | Masuk radius village pertama (bettervillage), ngobrol sama 1 NPC MCA | Unlock MCA quest chain |

**MCA branch:** NPC pertama kasih side-quest "kenalan" — reward starter gear (helm kulit + pedang kayu upgrade).

---

## Chapter 1 — The Village Hub

**Tema:** Village jadi base utama, mulai kenal sistem sosial MCA.
**Mods terkait:** minecraft-comes-alive, bettervillage, Towns-and-Towers, waystones

| Quest | Deskripsi | Reward |
|---|---|---|
| Rumah Baru | Waystone pertama — tandai village sebagai home base | 1 Waystone item |
| Kenalan Lebih Dekat | Interaksi 3x sama NPC berbeda (MCA) | Reputasi/relationship point |
| Tukang & Pandai Besi | Temukan NPC blacksmith di village, buka trade | Akses trade khusus |
| Menara Kota | Explore Towns-and-Towers structure terdekat | Unlock fast-travel point baru |

**MCA branch:** Opsional nikah/adopsi NPC → buff pasif jangka panjang (regen/luck kecil). Ini murni opsional, gak block progress FTB.

---

## Chapter 2A — Path of Steel (Combat)

**Tema:** Jalur pedang. Unlock kalau udah selesai Chapter 1.
**Mods terkait:** epic-fight, Apotheosis, ApothicAttributes, simplyswords, Epic-Knights

| Quest | Deskripsi | Reward |
|---|---|---|
| Dasar Combo | Pelajari stance & combo epic-fight (killed 10 mob pake combo) | Skill point |
| Perburuan Gear Pertama | Kill 1 mob elite, dapetin gear ber-affix (Apotheosis) | Gear affix random |
| Pandai Besi Sejati | Craft 1 senjata dari simplyswords/Epic-Knights | Senjata pilihan |
| Attribute Awakening | Alokasikan 5 poin pertama di ApothicAttributes/rpg_attribute_system | Buff attribute permanen |

**MCA branch:** NPC blacksmith kasih quest "buatkan aku senjata X" — reward resep senjata langka.

> ⚠️ Note: test dulu apa `ApothicAttributes` dan `rpg_attribute_system` alokasi poinnya independent atau saling ganggu sebelum quest ini di-lock final.

---

## Chapter 2B — Path of Arcane (Magic)

**Tema:** Jalur spellbook. Unlock kalau udah selesai Chapter 1 (alternatif dari 2A).
**Mods terkait:** irons_spellbooks, cataclysm_spellbooks, ias_spellbooks, spells_gone_wrong

| Quest | Deskripsi | Reward |
|---|---|---|
| Buku Pertama | Dapetin spellbook pertama (irons_spellbooks) | Spellbook basic |
| Mana Awakening | Cast 10 spell, kenalan sama mana management | Mana potion x5 |
| Resiko Sang Penyihir | Cast spell sampai kena efek "gone wrong" minimal 1x | Item unik dari efek gagal |
| Sekolah Sihir Kedua | Unlock spell dari cataclysm_spellbooks/ias_spellbooks | Spell baru |

**MCA branch:** NPC "sage/penyihir desa" kasih quest kumpulin bahan spell tertentu → reward spell langka.

---

## Chapter 2C — Path of the Deep (Ocean)

**Tema:** Jalur eksplorasi laut. Unlock kalau udah selesai Chapter 1 (alternatif dari 2A/2B, bisa diambil semua).
**Mods terkait:** scuba_gear, aquamirae, deeper-oceans, wonderoussea, oceansdelight

| Quest | Deskripsi | Reward |
|---|---|---|
| Napas Pertama | Kalahin 1 Drowned, coba dapetin scuba gear piece | Petunjuk lokasi Drowned spawn |
| Perlengkapan Selam | Kumpulin full set scuba gear | Buff swim speed |
| Turun ke Kedalaman | Explore biome deeper-oceans, temukan 1 struktur aquamirae | Loot laut |
| Hidangan Laut | Masak 3 resep dari oceansdelight | Buff makanan (saturasi tinggi) |

**MCA branch:** NPC nelayan kasih quest "bawakan aku ikan langka X" → reward resep oceansdelight eksklusif.

---

## Chapter 3 — Convergence

**Tema:** Semua path ketemu. Unlock butuh minimal 1 chapter dari 2A/2B/2C selesai.
**Mods terkait:** DungeonsArise, L_Enders_Cataclysm, AutoLeveling

| Quest | Deskripsi | Reward |
|---|---|---|
| Panggilan Bahaya | Temukan dungeon besar (DungeonsArise) yang muncul di map | Map/petunjuk lokasi |
| Uji Nyali | Selesaikan 1 ruang dungeon (boleh solo path manapun) | Gear tier menengah |
| Bayangan Cataclysm | Encounter musuh dari L_Enders_Cataclysm pertama kali | Item lore/quest item |
| Bersatu | Requirement: minimal 2 dari 3 path (2A/2B/2C) udah progress | Buff gabungan (unlock sinergy combat+magic atau combat+ocean, dst) |

---

## Chapter 4 — Attribute Mastery

**Tema:** Deep-dive progression system, gak ada gate baru selain grinding.
**Mods terkait:** PassiveSkillTree, rpg_attribute_system, ApothicAttributes, AttributeFix

| Quest | Deskripsi | Reward |
|---|---|---|
| Peta Kekuatan | Buka full PassiveSkillTree UI, alokasikan 10 poin | Skill point bonus |
| Affix Hunter | Kumpulin 5 item ber-affix berbeda (Apotheosis) | Crafting material affix |
| Sinergi Attribute | Kombinasikan minimal 3 attribute jadi 1 build coherent | Title/achievement in-game |

---

## Chapter 5 — Endgame

**Tema:** Boss final, penutup cerita.
**Mods terkait:** L_Enders_Cataclysm (boss final), iceandfire (naga), mowziesmobs (boss unik), mcaquests (epilogue)

| Quest | Deskripsi | Reward |
|---|---|---|
| Sarang Naga | Kalahin 1 naga dari iceandfire | Naga loot (scale/heart) |
| Boss Tersembunyi | Kalahin 1 boss mowziesmobs | Trophy item |
| Raid Terakhir | Kalahin boss final Cataclysm | Gear endgame tier tertinggi |
| Damai di Desa | Selesaikan epilogue MCA quest — cek status semua NPC yang udah lo kenal | Cosmetic reward, credits/lore text |

**MCA branch (epilogue):** Semua NPC yang udah punya relationship kasih pesan penutup + reward kecil masing-masing.

---

## Belum Diputuskan / To-Do

- [ ] Tentuin item reward spesifik per quest (butuh cek item ID exact tiap mod)
- [ ] Test overlap `ApothicAttributes` vs `rpg_attribute_system` sebelum lock Chapter 2A/4
- [ ] Decide: apakah Chapter 3 Convergence wajib nyelesein 2 path atau cukup 1 + syarat lain
- [ ] Build actual quest chapter di FTB Quests editor (JSON/GUI) berdasarkan draft ini
- [ ] Setup MCA quest triggers per NPC sesuai role (blacksmith/sage/nelayan/dll)

---

Lihat juga: [[SuperFantasyRPG - Mod List & Konsep]] buat referensi mod lengkap per kategori.
