//pop,push,shift,unshift,reduce,sort,filter,map,slice,find,forEach
const asd = ["asd", "ghgh", "tyeu"];
let result = asd.map((el, index) => "рома красавшик");
console.log(result);

const terrariaBosses = {
  KingSlime: {
    name: "King Slime",
    health: 5000,
    damage: 30,
    drops: [
      { item: "Slime Crown", chance: 1 / 40 },
      { item: "Gel", chance: 1 / 1 },
      { item: "Solidifier", chance: 1 / 2 },
    ],
    biome: "Surface",
    preHardmode: true, // Этот босс в пред-хардмоде
    description:
      "King Slime is a large, blue slime that is the first boss players can encounter.",
  },
  EyeOfCthulhu: {
    name: "Eye of Cthulhu",
    health: 2800,
    damage: 40,
    drops: [
      { item: "Eye of Cthulhu Mask", chance: 1 / 20 },
      { item: "Shield of Cthulhu", chance: 1 / 100 },
      { item: "Demonite Ore", chance: 1 / 1 },
    ],
    biome: "Surface",
    preHardmode: true, // Этот босс в пред-хардмоде
    description:
      "The Eye of Cthulhu is one of the first major bosses in the game, spawning at night.",
  },
  EaterOfWorlds: {
    name: "Eater of Worlds",
    health: 11000,
    damage: 45,
    drops: [
      { item: "Shadow Orb", chance: 1 / 10 },
      { item: "Demonite Ore", chance: 1 / 2 },
      { item: "Eater of Worlds Mask", chance: 1 / 50 },
    ],
    biome: "Corruption",
    preHardmode: true, // Этот босс в пред-хардмоде
    description:
      "A massive worm-like boss that burrows through the ground in the Corruption biome.",
  },
  Skeletron: {
    name: "Skeletron",
    health: 4300,
    damage: 60,
    drops: [
      { item: "Skeletron Mask", chance: 1 / 20 },
      { item: "Book of Skulls", chance: 1 / 100 },
      { item: "Bones", chance: 1 / 1 },
    ],
    biome: "Dungeon",
    preHardmode: true, // Этот босс в пред-хардмоде
    description:
      "Skeletron is the guardian of the Dungeon and can be summoned by using the Old Man in the Dungeon.",
  },
  WallOfFlesh: {
    name: "Wall of Flesh",
    health: 25000,
    damage: 60,
    drops: [
      { item: "Pwnhammer", chance: 1 / 1 },
      { item: "Demonsite Ore", chance: 1 / 1 },
      { item: "The Breaker Blade", chance: 1 / 50 },
    ],
    biome: "Underworld",
    preHardmode: true, // Этот босс в пред-хардмоде
    description:
      "The Wall of Flesh is the final boss of pre-hardmode and must be defeated to enter Hardmode.",
  },
  TheDestroyer: {
    name: "The Destroyer",
    health: 80000,
    damage: 60,
    drops: [
      { item: "Trophy: Destroyer", chance: 1 / 4 },
      { item: "Hallowed Bars", chance: 1 / 1 },
      { item: "Mechanical Worm", chance: 1 / 1 },
    ],
    biome: "Underground Hallow",
    preHardmode: false, // Этот босс в хардмоде
    description:
      "The Destroyer is a mechanical version of the Eater of Worlds, with much more power.",
  },
  Plantera: {
    name: "Plantera",
    health: 30000,
    damage: 80,
    drops: [
      { item: "Temple Key", chance: 1 / 1 },
      { item: "Plantera's Bulb", chance: 1 / 1 },
      { item: "Trophy: Plantera", chance: 1 / 4 },
    ],
    biome: "Jungle",
    preHardmode: false, // Этот босс в хардмоде
    description:
      "Plantera is a powerful plant boss found in the Underground Jungle, only after defeating all mechanical bosses.",
  },
  Golem: {
    name: "Golem",
    health: 45000,
    damage: 70,
    drops: [
      { item: "Golem's Mask", chance: 1 / 50 },
      { item: "Trophy: Golem", chance: 1 / 4 },
      { item: "Lihzahrd Power Cell", chance: 1 / 1 },
    ],
    biome: "Lihzahrd Temple",
    preHardmode: false, // Этот босс в хардмоде
    description:
      "Golem is a mechanical boss that spawns in the Lihzahrd Temple and guards valuable treasures.",
  },
  MoonLord: {
    name: "Moon Lord",
    health: 80000,
    damage: 100,
    drops: [
      { item: "Lunar Portal Staff", chance: 1 / 4 },
      { item: "Moon Lord's Legs", chance: 1 / 1 },
      { item: "Solar Eruption", chance: 1 / 1 },
    ],
    biome: "Space",
    preHardmode: false, // Этот босс в хардмоде
    description:
      "Moon Lord is the final boss in Terraria, and is only fought after defeating the four Lunar Cultists.",
  },
};

const valuesBosses = Object.values(terrariaBosses);
// const bosses = valuesBosses.map((el) => el.name);

// result = valuesBosses.filter((el) => el.preHardmode);
// result = result.map((el) => {
//   return {
//     name: el.name,
//     preHardmode: el.preHardmode,
//   };
// });
result = valuesBosses.sort((a, b) => a.health - b.health);
result = result.map((el) => {
  return {
    name: el.name,
    health: el.health,
  };
});
console.log(result);
