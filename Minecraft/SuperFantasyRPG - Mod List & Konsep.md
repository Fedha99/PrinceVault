up:: [[Index - Minecraft]]
related:: [[Modpack Forge 1.20.1 Overview]], [[Daftar Mod Lengkap]]
tags:: minecraft, modpack, superfantasyrpg, questline, ftb-quests, mca-quests

# SuperFantasyRPG — Mod List & Konsep

**Forge 47.4.22 · Minecraft 1.20.1 · Target hardware: ThinkPad T14 Gen 2 (Ryzen 7, bukan HP Pavilion HD 4000)**

195 mod, di-assemble dari `Fixed-BetterFR-1.0.2-F` + tambahan RPG attribute/ocean gear. Full breakdown per kategori ada di bawah, plus konsep gimana semua sistem nyambung jadi satu game-loop.

---

## 1. Fondasi & Library (dependency)

| Mod | Deskripsi |
|---|---|
| architectury | Bridge cross-loader (Forge/Fabric compat) |
| balm | Library shared banyak mod dungeon/structure |
| blueprint | Library structure & world-gen |
| Bookshelf | Library umum banyak mod |
| CarbonConfig | Config framework |
| CerbonsAPI | API pendukung mod combat |
| cloth-config | Config GUI framework |
| Connector | Fabric-to-Forge bridge |
| coroutil | Utility library lama |
| CreativeCore | Dependency CGM/animasi |
| cristellib | Library kecil |
| croaklib | Library kecil |
| curios | Slot equipment tambahan (accessory) |
| delightlib | Library seri "Delight" (farmers/chefs/ends) |
| fabric-api | Compat layer Fabric di Forge (via Connector) |
| fzzy_config | Config framework |
| geckolib / azurelib-neo | Animasi model custom (dipakai mob-mob besar) |
| gnetum | Library |
| irons_lib | Dependency Iron's Spellbooks |
| ixeris | Library |
| jamlib / jauml | Library kecil |
| JinxedLib | Dependency Jinxed |
| kotlinforforge | Runtime Kotlin buat mod berbasis Kotlin |
| libraryferret | Library |
| lionfishapi | Library |
| lithostitched | Library world-gen |
| MaFgLib | Library |
| monolib | Dependency mod solo dev |
| moonlight | Library besar (dipakai banyak mod fantasy) |
| obscure-api | Library |
| Placebo | Dependency Apotheosis |
| player-animation-lib | Animasi pemain custom |
| PuzzlesLib | Dependency mod-mod "Puzzle" |
| resourcefulconfig | Config framework |
| Searchables | UI search box helper |
| supermartijn642configlib | Config lib |
| yet_another_config_lib_v3 | Config framework |

> Ini "mesin di balik layar" — gak ada gameplay langsung, tapi tanpa ini banyak mod besar (Apotheosis, Iron's Spellbooks, dungeon packs) gak bisa jalan.

---

## 2. Performance & Optimasi

| Mod | Deskripsi |
|---|---|
| embeddium | Rendering engine (fork Sodium buat Forge) |
| oculus | Shader support (jalan bareng embeddium) |
| radium | Fork optimasi rendering lain (numpuk sama embeddium — risk diterima) |
| noisium | Optimasi noise generation (worldgen) |
| ferritecore | Optimasi memory usage |
| entityculling | Skip render entity yang gak keliatan |
| immersive-optimization | Optimasi umum |
| Fastload-Reforged | Percepat loading game |
| dynamic-fps | Turunin FPS pas game gak fokus |
| modernfix | Kumpulan patch performance & bugfix |
| mobtimizations | Optimasi AI mob |
| GlitchCore | Optimasi kecil |
| notenoughcrashes | Auto-recover dari crash tertentu |
| Chunk-Pregenerator / Chunky | Pre-generate chunk |

---

## 3. World Generation & Biome

| Mod | Deskripsi |
|---|---|
| BiomesOPlenty | Paket biome tambahan besar |
| Terralith + DynamicTreesTerralith | Overhaul terrain + pohon custom |
| Incendium | Overhaul Nether |
| endergetic | Overhaul End |
| deeperdarker | Ekspansi Deep Dark |
| TerraBlender | Framework gabungin biome-mod |
| Geophilic | Ground cover kecil |
| aquamirae | Biome & boss laut custom |
| deeper-oceans / wonderoussea | Konten laut tambahan |
| DynamicTrees + BOP + Plus | Pohon tumbuh natural |

---

## 4. Struktur & Dungeon

| Mod | Deskripsi |
|---|---|
| DungeonsArise | Dungeon custom besar |
| awesomedungeonocean | Dungeon bawah laut |
| katters-structures / little-structures / moogs_structure_lib / ATi Structures | Struktur tambahan kecil |
| create-structures | Struktur bertema Create |
| explorations | Struktur eksplorasi |
| YungsApi | Dependency struktur Yung |
| ExplorersCompass | Compass cari struktur terdekat |
| waystones | Fast travel antar titik |
| Towns-and-Towers | Struktur desa/kastil |
| bettervillage | Overhaul desa vanilla |

---

## 5. Mob, Boss & Musuh

| Mod | Deskripsi |
|---|---|
| iceandfire | Naga & makhluk mitos besar |
| L_Enders_Cataclysm | Boss-boss end-game raid |
| alexsmobs | Paket mob realistis (darat & laut) |
| alexscaves | Mob & biome gua custom |
| mowziesmobs | Boss unik (Umvuthana, Ferrous Wroughtnaut) |
| citadel | Dependency wajib iceandfire/mowziesmobs/cataclysm |
| enemyexpansion | Varian musuh tambahan |
| illageandspillagerespillaged / illager_additions | Overhaul & tambahan illager |
| born_in_chaos_[Forge] | Mob/event chaos tambahan |
| benssharks | Hiu |
| nyfsspiders | Laba-laba custom |
| realmrpg_skeletons | Skeleton varian RPG |
| AutoLeveling | Musuh auto-scale sesuai progress player |

---

## 6. Combat, Senjata & Skill

| Mod | Deskripsi |
|---|---|
| epic-fight | Overhaul combat soulslike (stance/combo) |
| bettercombat | Alternatif overhaul combat lebih ringan |
| EpicFight x Curios Compat / bc_ef_compat | Compat epic-fight |
| simplyswords | Pedang-pedang unik tambahan |
| Epic-Knights | Armor & senjata ksatria |
| itemphysicguns / ItemPhysic | Fisika visual senjata |
| Apotheosis + ApothicAttributes + AttributeFix | Sistem affix/attribute gear (ARPG-style) |
| PassiveSkillTree | Skill tree pasif |
| rpg_attribute_system | Sistem attribute tambahan (⚠️ cek overlap sama ApothicAttributes) |
| notenoughexperience | Balancing XP |
| EnchantingInfuser | Cara baru infuse enchant |
| EnchantmentDescriptions | Tooltip efek enchant |
| MoreEnchantments / extra_enchantments / ultimate_enchantment | Enchant tambahan |
| disenchanting_table | Lepas enchant dari gear |

---

## 7. Magic & Spellbook

| Mod | Deskripsi |
|---|---|
| irons_spellbooks | Sistem magic utama (spellbook, mana, class) |
| cataclysm_spellbooks | Spell tambahan dari boss Cataclysm |
| ias_spellbooks | Spell tambahan lain |
| spells_gone_wrong | Efek gagal cast spell (risk/reward) |
| gtbcs_spell_lib | Library spell |
| celestisynth | Item/mekanik magic tambahan |

---

## 8. Explore Laut

| Mod | Deskripsi |
|---|---|
| aquamirae | Biome, struktur, boss laut |
| deeper-oceans | Biome laut lebih dalam |
| wonderoussea | Makhluk laut tambahan |
| oceansdelight | Makanan hasil laut |
| scuba_gear | Gear diving (drop dari Drowned) |
| cfm-forge | Furniture simple (dekorasi) |

Flow: **Attribute progression (darat) → Scuba Gear (drop Drowned) → Aquamirae boss + deeper-oceans + wonderoussea → oceansdelight reward → cfm-forge dekorasi base.**

---

## 9. Farming, Makanan & Survival

| Mod | Deskripsi |
|---|---|
| FarmersDelight + moredelight + chefsdelight + ends_delight + oceansdelight | Ekosistem "Delight" — tema beda per area |
| 3d_placeable_food | Makanan bisa jadi decor 3D |
| smarterfarmers | Villager farmer lebih pintar |
| rightclickharvest | Panen sekali klik kanan |
| appleskin | Info hunger/saturation di HUD |
| primitivestart | Early-game survival lebih susah |
| notreepunching | Gak bisa nebang pohon tangan kosong |
| Icarus | Death/respawn mechanic custom |
| nyctophobia | Mob nambah kalau gelap |
| dynamic-torches | Obor bisa dipasang di tangan |

---

## 10. Penyimpanan & Utility

| Mod | Deskripsi |
|---|---|
| sophisticatedbackpacks + sophisticatedcore | Backpack upgradeable |
| travelersbackpack | Alternatif backpack lain |
| Jade | Info block/entity saat di-hover |
| PickUpNotifier | Notifikasi item kepungut |
| FastSuite | UI craft cepat |
| common-networking | Dependency networking |
| ftb-library / ftb-quests / ftb-teams | Sistem quest custom — **backbone questline** |
| mcaquests | Quest terintegrasi MCA — **layer sosial NPC** |

---

## 11. NPC, Village & Sosial

| Mod | Deskripsi |
|---|---|
| minecraft-comes-alive | Villager jadi NPC penuh (nikah, keluarga) |
| mcaquests | Quest dari NPC MCA |
| bettervillage | Village lebih hidup |
| Towns-and-Towers | Struktur kastil/kota |

---

## 12. UI, Visual & Quality of Life

| Mod | Deskripsi |
|---|---|
| jei | Recipe viewer |
| SimplyTooltips | Tooltip lebih rapi |
| EnhancedVisuals | Efek visual UI |
| chatanimation | Animasi chat |
| notenoughanimations | Animasi player nambah |
| ShoulderSurfing | Kamera third-person fleksibel |
| WI-Zoom / okzoomer | Fitur zoom |
| traveloptics | Binocular lihat jauh |
| zergatul.freecam | Freecam |
| xaerominimap / xaeroworldmap | Minimap & world map |
| NoChatReports | Disable chat report ke Mojang |
| nomusicpause | Musik gak pause pas minimize |
| e4mc | LAN-play tanpa port forwarding |
| AmbientSounds | Ambience suara |

---

## 13. Compat & Bridge

| Mod | Deskripsi |
|---|---|
| efcompat / bc_ef_compat | Compat epic-fight |
| citresewn | CIT (custom item texture) support |
| continuity | Connected textures |
| entity_model_features / entity_texture_features | Resource pack support model/texture entity |
| fusion | Compat rendering |
| totw_modded | Compat "Towers of the Wild" |
| lukis-grand-capitals | Font/text styling |

---

## 14. Create (tech-lite, bukan sci-fi)

| Mod | Deskripsi |
|---|---|
| create | Mesin mekanikal steampunk |
| create-structures | Struktur tema Create |

---

## 15. Removed / Ditrim

| Mod | Alasan |
|---|---|
| ItemProductionLib-1.0.2a | Duplikat versi (pakai 2b) |
| Forgematica | Schematic tool, gak diperluin final pack |
| Mekanism, SecurityCraft, immersive_aircraft, simpleplanes, seamoths, smallships, subnauticraft | Terlalu modern/sci-fi buat fantasy RPG |

---

## Big Picture

```
World-gen (Terralith+BOP+Aquamirae+Incendium)
        │
        ▼
Struktur & Dungeon (DungeonsArise, waystones)
        │
        ▼
Mob & Boss (iceandfire, cataclysm, mowziesmobs)
        │
        ▼
Combat/Magic split (epic-fight+Apotheosis  vs  irons_spellbooks)
        │
        ▼
Attribute/Skill progression (PassiveSkillTree, rpg_attribute_system)
        │
        ▼
Reward loop (Delight food series, backpack, waystones fast-travel)
        │
        ▼
ftb-quests + mcaquests ← tie semua jadi satu questline terstruktur
```

Performance layer (embeddium/radium/ferritecore/dll) jalan di bawah semuanya.

## Rating Perbandingan (jujur, per Sep 2026)

| Aspek | RLCraft | DawnCraft | SuperFantasyRPG |
|---|---|---|---|
| Depth Konten | 9/10 | 8/10 | 8/10 |
| Progression | 6/10 | 8/10 | 7/10 (target 8.5+ setelah quest diisi) |
| Stabilitas | 5/10 | 6/10 | 6/10 (belum full playtest) |
| Kejelasan Tujuan | 5/10 | 8/10 | 5/10 → naik setelah questline jadi |
| **Overall** | **6.5/10** | **7.5/10** | **7/10 → potensi 8.5+** |

Gap terbesar: questline kosong. Lihat [[SuperFantasyRPG - Questline Draft]] buat rencana isinya.
