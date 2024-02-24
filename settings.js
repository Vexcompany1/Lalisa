const fs = require("fs");
const chalk = require("chalk");

/* ~~~~~~~~~ SETTINGS OWNER ~~~~~~~~~ */
global.numberowner = "6285xxx"; // Owner Utama
global.owner = ["6285xxx"]; // Owner Lainnya
global.nobot = "6285xxx"; // Nomer Bot
global.namaowner = "YourName"; // Nama Owner
global.premium = ["6285xxx"]; // Premium User
/* ~~~~~~~~~ SETTINGS BOT ~~~~~~~~~ */
global.namabot = "𝐋𝐚𝐥𝐚𝐥𝐢𝐬𝐚𝐚"; // NickBot
global.autoread = false; // ReadChat
global.autobio = false; // AutoBio
global.packname = "𝐋𝐚𝐥𝐚𝐥𝐢𝐬𝐚𝐚\n\n𝐱\n\n𝐣𝐮𝐧𝐧"; // Watermark Sticker
global.author = ""; // Watermark Sticker
/* ~~~~~~~~~ MESSAGES ~~~~~~~~~ */
global.mess = {
  done: "Done!",
  prem: "Feature Only For User _*PREMIUM*_",
  admin: "Feature Only for _*Admin Group*_",
  botAdmin:
    "Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !",
  owner: "Feature Only for _*Owner*_",
  group: "Feature Only for _*Group Chat*_",
  private: "Feature Only for _*Private Chat*_",
  wait: "Wait a Moment, for Process",
  error: "_*Sorry Features Error*_",
};
/* ~~~~~~~~~ THUMBNAIL ~~~~~~~~~ */
global.menu = "https://telegra.ph/file/6cd59e1ded1b8333519cd.jpg", 
/* ~~~~~~~~~ EDITS LINK ~~~~~~~~~ */
global.link = "https://chat.whatsapp.com/CnhLvTHX6ak7kjp22ZMqwE";
/* ~~~~~~~~~ END SYSTEM ~~~~~~~~~ */
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});
