// src/data/serverDetails.js
const serverDetailsData = {
  status: {
    currentPlayers: 64,
    maxPlayers: 64,
    pingMs: 47,
    serverTickrateHz: 60
  },
  description: {
    antiCheat: "K-50 AntiCheat",
    vipRulesLink: "www.epg.gg",
    discordLink: "https://discord.gg/3r5NK46"
  },
  favoritesCount: 13672,
  buttons: {
    join: true,
    spectate: true,
    joinAsCommander: true
  },
  settings: {
    region: "EUROPE - DE",
    punkbuster: "ON",
    fairfight: "ON",
    passwordProtected: "OFF",
    preset: "NORMAL"
  },
  advancedSettings: {
    miniMap: "ON",
    onlySquadLeaderSpawn: "OFF",
    vehicles: "ON",
    teamBalance: "ON",
    miniMapSpotting: "ON",
    hud: "ON",
    thirdPersonVehicleCam: "ON",
    regenerativeHealth: "ON",
    killCam: "ON",
    friendlyFire: "OFF",
    threeDSpotting: "ON",
    enemyNameTags: "ON"
  },
  rules: {
    tickets: 450,
    vehicleSpawnDelay: 25,
    bulletDamage: 100,
    kickAfterTeamKills: 5,
    playerHealth: 100,
    playerRespawnTime: 100,
    kickAfterIdle: 300,
    banAfterKicks: 3
  },
  mapRotationLabel: "MAP ROTATION"
};

// Simulate an API call
export const fetchServerDetails = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(serverDetailsData);
    }, 1000); // Simulate network delay
  });
};