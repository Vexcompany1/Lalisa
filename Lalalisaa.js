/*
   Created By ArxzyDev
   Rebuild Junn
*/

const {
  BufferJSON,
  WA_DEFAULT_EPHEMERAL,
  generateWAMessageFromContent,
  proto,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  areJidsSameUser,
  getContentType,
} = require("@adiwajshing/baileys");
const os = require("os");
const fs = require("fs");
const fsx = require("fs-extra");
const path = require("path");
const util = require("util");
const chalk = require("chalk");
const moment = require("moment-timezone");
const speed = require("performance-now");
const ms = (toMs = require("ms"));
const axios = require("axios");
const fetch = require("node-fetch");
const yts = require ("yt-search");
const { exec, spawn, execSync } = require("child_process");
const { performance } = require("perf_hooks");
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);
const {
  TelegraPh,
  UploadFileUgu,
  webp2mp4File,
  floNime,
} = require("./lib/uploader");
const {
  toAudio,
  toPTT,
  toVideo,
  ffmpeg,
  addExifAvatar,
} = require("./lib/converter");
const {
  smsg,
  getGroupAdmins,
  formatp,
  tanggal,
  formatDate,
  getTime,
  isUrl,
  await,
  sleep,
  clockString,
  msToDate,
  sort,
  toNumber,
  enumGetKey,
  runtime,
  fetchJson,
  getBuffer,
  json,
  delay,
  format,
  logic,
  generateProfilePicture,
  parseMention,
  getRandom,
  pickRandom,
  reSize,
} = require("./lib/myfunc");
const uploadFile = require('./lib/uploadFile') 
const uploadImage = require('./lib/uploadImage') 
/* ~~~~~~~~~ FUNTION SYSTEM ~~~~~~~~~ */
const {
  addPremiumUser,
  getPremiumExpired,
  getPremiumPosition,
  expiredCheck,
  checkPremiumUser,
  getAllPremiumUser,
} = require("./lib/premiun");
/* ~~~~~~~~~ DATA ~~~~~~~~~ */
let premium = JSON.parse(fs.readFileSync("./src/data/premium.json"));
let _owner = JSON.parse(fs.readFileSync("./src/data/owner.json"));
let _user = JSON.parse(fs.readFileSync("./src/data/user.json"));
let hit = JSON.parse(fs.readFileSync("./src/total-hit-user.json"));
/* ~~~~~~~~~ WAKTU SETEMPAT ~~~~~~~~~ */
moment.tz.setDefault("Asia/Jakarta").locale("id");

const jam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const hariini = moment.tz("Asia/Jakarta").format("dddd, DD MMMM YYYY");
const wib = moment.tz("Asia/Jakarta").format("HH:mm:ss");
const waktu = moment().tz("Asia/Jakarta").format("HH:mm:ss");
if (waktu < "23:59:00") {
  var ucapanWaktu = "Good Night 🏙️";
}
if (waktu < "19:00:00") {
  var ucapanWaktu = "Good Evening 🌆";
}
if (waktu < "18:00:00") {
  var ucapanWaktu = "Good Evening 🌇";
}
if (waktu < "15:00:00") {
  var ucapanWaktu = "Good Afternoon 🌤️";
}
if (waktu < "10:00:00") {
  var ucapanWaktu = "Good Morning 🌄";
}
if (waktu < "05:00:00") {
  var ucapanWaktu = "Good Morning 🌆";
}
if (waktu < "03:00:00") {
  var ucapanWaktu = "Good Night, Have you not fallen asleep yet? 🌃";
}
/* ~~~~~~~~~ STARTING & MODULE ALL ~~~~~~~~~ */
module.exports = lisa = async (lisa, m, msg, chatUpdate, store) => {
  try {
    /* ~~~~~~~~~ BASE ARXZYDEV ~~~~~~~~~ */
    const { type, quotedMsg, mentioned, now, fromMe } = m;
    var body =
      m.mtype === "conversation"
        ? m.message.conversation
        : m.mtype == "imageMessage"
        ? m.message.imageMessage.caption
        : m.mtype == "videoMessage"
        ? m.message.videoMessage.caption
        : m.mtype == "extendedTextMessage"
        ? m.message.extendedTextMessage.text
        : m.mtype == "buttonsResponseMessage"
        ? m.message.buttonsResponseMessage.selectedButtonId
        : m.mtype == "listResponseMessage"
        ? m.message.listResponseMessage.singleSelectm.reply.selectedRowId
        : m.mtype == "templateButtonm.replyMessage"
        ? m.message.templateButtonm.replyMessage.selectedId
        : m.mtype === "messageContextInfo"
        ? m.message.buttonsResponseMessage?.selectedButtonId ||
          m.message.listResponseMessage?.singleSelectm.reply.selectedRowId ||
          m.text
        : "";
    var budy = typeof m.text == "string" ? m.text : "";
    var prefix = [".", "/"]
      ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body)
        ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0]
        : ""
      : prefa;
    const isCmd = body.startsWith(prefix, "");
    const command = body
      .replace(prefix, "")
      .trim()
      .split(/ +/)
      .shift()
      .toLowerCase();
    const args = body.trim().split(/ +/).slice(1);
    const full_args = body.replace(command, "").slice(1).trim();
    const pushname = m.pushName || "No Name";
    const botNumber = await lisa.decodeJid(lisa.user.id);
    const itsMe = m.sender == botNumber ? true : false;
    const sender = m.sender;
    const text = (q = args.join(" "));
    const from = m.key.remoteJid;
    const fatkuns = m.quoted || m;
    const quoted =
      fatkuns.mtype == "buttonsMessage"
        ? fatkuns[Object.keys(fatkuns)[1]]
        : fatkuns.mtype == "templateMessage"
        ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]]
        : fatkuns.mtype == "product"
        ? fatkuns[Object.keys(fatkuns)[0]]
        : m.quoted
        ? m.quoted
        : m;
    const mime = (quoted.msg || quoted).mimetype || "";
    const qmsg = quoted.msg || quoted;
    /* ~~~~~~~~~ MEDIA ALL ~~~~~~~~~ */
    const isMedia = /image|video|sticker|audio/.test(mime);
    const isImage = type == "imageMessage";
    const isVideo = type == "videoMessage";
    const isAudio = type == "audioMessage";
    const isText = type == "textMessage";
    const isSticker = type == "stickerMessage";
    const isQuotedText =
      type === "extendexTextMessage" && content.includes("textMessage");
    const isQuotedImage =
      type === "extendedTextMessage" && content.includes("imageMessage");
    const isQuotedLocation =
      type === "extendedTextMessage" && content.includes("locationMessage");
    const isQuotedVideo =
      type === "extendedTextMessage" && content.includes("videoMessage");
    const isQuotedSticker =
      type === "extendedTextMessage" && content.includes("stickerMessage");
    const isQuotedAudio =
      type === "extendedTextMessage" && content.includes("audioMessage");
    const isQuotedContact =
      type === "extendedTextMessage" && content.includes("contactMessage");
    const isQuotedDocument =
      type === "extendedTextMessage" && content.includes("documentMessage");
    /* ~~~~~~~~~ PREFIX V2 ~~~~~~~~~ */
    const pric = /^#.¦|\\^/.test(body) ? body.match(/^#.¦|\\^/gi) : ".";
    const isAsu = body.startsWith(pric);
    const isCommand = isAsu
      ? body.replace(pric, "").trim().split(/ +/).shift().toLowerCase()
      : "";
    const sticker = [];
    /* ~~~~~~~~~ GROUP SYSTEM ~~~~~~~~~ */
    const isGroup = m.key.remoteJid.endsWith("@g.us");
    const groupMetadata = m.isGroup
      ? await lisa.groupMetadata(m.chat).catch((e) => {})
      : "";
    const groupName = m.isGroup ? groupMetadata.subject : "";
    const participants = m.isGroup ? await groupMetadata.participants : "";
    const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : "";
    const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
    const groupOwner = m.isGroup ? groupMetadata.owner : "";
    const isGroupOwner = m.isGroup
      ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender)
      : false;
    /* ~~~~~~~~~ FAKE ~~~~~~~~~ */
    const fkontak = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: `6285600793871-1614953337@g.us` } : {}),
      },
      message: {
        contactMessage: {
          displayName: `${pushname}`,
          vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${
            m.sender.split("@")[0]
          }:${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
          jpegThumbnail: global.thumb,
          thumbnail: global.thumb,
          sendEphemeral: true,
        },
      },
    };
    /* ~~~~~~~~~ STATUS USERS ~~~~~~~~~ */
    const isCreator = [botNumber, numberowner, ..._owner]
      .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
      .includes(m.sender);
    const isPremium =
      isCreator || isCreator || checkPremiumUser(m.sender, premium);
    const isUser = _user.includes(m.sender);
    expiredCheck(lisa, m, premium);
    /* ~~~~~~~~~ ALL SYSTEM BOT ~~~~~~~~~ */
    if (!lisa.public) {
      if (isCreator && !m.key.fromMe) return;
    }
    if (autoread) {
      lisa.readMessages([m.key]);
    }
    if (chatUpdate["messages.upsert"]) {
      const upsert = chatUpdate["messages.upsert"];
      for (let msg of upsert.messages) {
        if (
          msg.key.remoteJid == "status@broadcast" &&
          !msg.key.fromMe &&
          !msg.message?.protocolMessage
        ) {
          console.log(
            `Lihat status ${msg.pushName} ${
              msg.key.participant.split("@")[0]
            }\n`,
          );
          lisa.readMessages([msg.key]);
        }
      }
    }
    let list = [];
    for (let i of owner) {
      list.push({
        displayName: lisa.getName(i + "@s.whatsapp.net"),
        vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${lisa.getName(i + "@s.whatsapp.net")}\n
FN:${lisa.getName(i + "@s.whatsapp.net")}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:callmejunaa@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://mywebsite.junn4.my.id\n
item3.X-ABLabel:Profile Website\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`,
      });
    }
    if (isCmd && !isUser) {
      _user.push(sender);
      fs.writeFileSync("./src/data/user.json", JSON.stringify(_user, null, 2));
    }
    /* ~~~~~~~~~ CONSOLE ~~~~~~~~~ */
    if (m.message) {
      console.log(`══════════════════════════════════`);
      console.log(
        chalk.black(
          chalk.bgWhite(!isCommand ? "💬 MESSAGE" : "🖥 COMMAND"),
        ),
        chalk.black(chalk.bgGreen(hariini)),
        chalk.black(chalk.bgBlue(budy || m.mtype)) +
          "\n" +
          chalk.magenta("=> From"),
        chalk.green(pushname),
        chalk.yellow(m.sender) + "\n" + chalk.blueBright("=> In"),
        chalk.green(m.isGroup ? pushname : "Private Chat", m.chat),
      );
      console.log(`══════════════════════════════════`);
      const cmdadd = () => {
        hit[0].hit_cmd += 1;
        fs.writeFileSync("./src/total-hit-user.json", JSON.stringify(hit));
      };
      cmdadd();
      const totalhit = JSON.parse(
        fs.readFileSync("./src/total-hit-user.json"),
      )[0].hit_cmd;
    }
      

/* ~~~~~~~~~ MENUNYA ~~~~~~~~~ */

const { menu } = require("./menu");
      
    switch (isCommand) {
      /* ~~~~~~~~~ OWNER FEATURE ~~~~~~~~~ */
      case 'upsw':
        {
          if (!isCreator) return m.reply(mess.owner);
          if (args.length < 1) return m.reply("perihal apa?");
          if (q === "image") {
            let imgSw = await lisa.downloadAndSaveMediaMessage(quoted);
            await lisa.sendMessage(
              "status@broadcast",
              { image: { url: imgSw }, caption: q },
              { statusJidList: _user },
            );
            m.reply(mess.done);
          } else if (/video/.test(mime)) {
            let VidSw = await lisa.downloadAndSaveMediaMessage(quoted);
            await lisa.sendMessage(
              "status@broadcast",
              { video: { url: VidSw }, caption: q },
              { statusJidList: _user },
            );
            m.reply(mess.done);
          } else if (/audio/.test(mime)) {
            let VnSw = await lisa.downloadAndSaveMediaMessage(quoted);
            await lisa.sendMessage(
              "status@broadcast",
              { audio: { url: VnSw }, mimetype: "audio/mp4", ptt: true },
              { backgroundColor: "#FF000000", statusJidList: _user },
            );
            m.reply(mess.done);
          } else if (q) {
            lisa.sendMessage(
              "status@broadcast",
              { text: q },
              { backgroundColor: "#FF000000", font: 3, statusJidList: _user },
            );
          } else {
            m.reply(
              "Replay Media Jika Mau Dengan Caption Ketik .status caption",
            );
          }
        }
        break;
      case 'addprem':
        if (!isCreator) return m.reply(mess.owner);
        if (args.length < 2)
          return m.reply(
            `Penggunaan :\n*#addprem* @tag waktu\n*#addprem* nomor waktu\n\nContoh : #addprem @tag 30d`,
          );
        if (m.mentionedJid.length !== 0) {
          for (let i = 0; i < m.mentionedJid.length; i++) {
            addPremiumUser(m.mentionedJid[0], args[1], premium);
          }
          m.reply("Sukses Premium");
        } else {
          addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
          m.reply("Sukses Via Nomer");
        }
        break;
      case 'delprem':
        if (!isCreator) return m.reply(mess.owner);
        if (args.length < 1)
          return m.reply(`Penggunaan :\n*#delprem* @tag\n*#delprem* nomor`);
        if (m.mentionedJid.length !== 0) {
          for (let i = 0; i < m.mentionedJid.length; i++) {
            premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1);
            fs.writeFileSync(
              "./src/data/premium.json",
              JSON.stringify(premium),
            );
          }
          m.reply("Sukses Delete");
        } else {
          premium.splice(
            getPremiumPosition(args[0] + "@s.whatsapp.net", premium),
            1,
          );
          fs.writeFileSync("./src/data/premium.json", JSON.stringify(premium));
          m.reply("Sukses Via Nomer");
        }
        break;
      case 'listprem':
        {
          if (!isCreator) return m.reply(mess.owner);
          let data = require("./src/data/premium.json");
          let txt = `*------「 LIST PREMIUM 」------*\n\n`;
          for (let i of data) {
            txt += `Nomer : ${i.id}\n`;
            txt += `Expired : ${i.expired} Second\n`;
          }
          lisa.sendMessage(
            m.chat,
            {
              text: txt,
              mentions: i,
            },
            {
              quoted: m,
            },
          );
        }
        break;
      case 'join':
        try {
          if (!isCreator) return m.reply(mess.owner);
          if (!text) return m.reply("Masukkan Link Group!");
          if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
            return m.reply("Link Invalid!");
          m.reply(mess.wait);
          let result = args[0].split("https://chat.whatsapp.com/")[1];
          await lisa
            .groupAcceptInvite(result)
            .then((res) => m.reply(json(res)))
            .catch((err) => m.reply(json(err)));
        } catch {
          m.reply("Gagal Masuk Ke Group");
        }
        break;
      case 'myip':
      case 'ipbot':
        if (!isCreator) return m.reply(mess.owner);
        var http = require("http");
        http.get(
          {
            host: "api.ipify.org",
            port: 80,
            path: "/",
          },
          function (resp) {
            resp.on("data", function (ip) {
              m.reply("🔎 My public IP address is: " + ip);
            });
          },
        );
        break;
      case 'shutdown':
        if (!isCreator) return m.reply(mess.owner);
        m.reply(`Otsukaresama deshita🖐`);
        await sleep(3000);
        process.exit();
        break;
      case 'restart':
        if (!isCreator) return m.reply(mess.owner);
        m.reply("Proses....");
        exec("pm2 restart all");
        break;
      case 'autoread':
        if (!isCreator) return m.reply(mess.owner);
        if (args.length < 1)
          return m.reply(`Contoh ${prefix + command} on/off`);
        if (q === "on") {
          autoread = true;
          m.reply(`Berhasil mengubah autoread ke ${q}`);
        } else if (q === "off") {
          autoread = false;
          m.reply(`Berhasil mengubah autoread ke ${q}`);
        }
        break;
        case 'public': {
        if (!isCreator) return m.reply(mess.owner);
       lisa.public = true
       reply('Sukses Change To Public Mode')
       }
        break
        case 'self': {
      if (!isCreator) return m.reply(mess.owner);
       lisa.public = false
       reply('Sukses Change To Self Mode')
       }
      break
      case 'setexif':
        if (!isCreator) return m.reply(mess.owner);
        if (!text)
          return m.reply(`Contoh : ${prefix + command} packname|author`);
        global.packname = text.split("|")[0];
        global.author = text.split("|")[1];
        m.reply(
          `Exif berhasil diubah menjadi\n\n• Packname : ${global.packname}\n• Author : ${global.author}`,
        );
        break;
      case 'setpp':
      case 'setppbot':
        if (!isCreator) return m.reply(mess.owner);
        if (!quoted)
          return m.reply(
            `Kirim/m.reply Image Dengan Caption ${prefix + command}`,
          );
        if (!/image/.test(mime))
          return m.reply(
            `Kirim/m.reply Image Dengan Caption ${prefix + command}`,
          );
        if (/webp/.test(mime))
          return m.reply(
            `Kirim/m.reply Image Dengan Caption ${prefix + command}`,
          );
        var medis = await lisa.downloadAndSaveMediaMessage(
          quoted,
          "ppbot.jpeg",
        );
        if (args[0] == "full") {
          var { img } = await generateProfilePicture(medis);
          await lisa.query({
            tag: "iq",
            attrs: {
              to: botNumber,
              type: "set",
              xmlns: "w:profile:picture",
            },
            content: [
              {
                tag: "picture",
                attrs: {
                  type: "image",
                },
                content: img,
              },
            ],
          });
          fs.unlinkSync(medis);
          m.reply(mess.done);
        } else {
          var memeg = await lisa.updateProfilePicture(botNumber, {
            url: medis,
          });
          fs.unlinkSync(medis);
          m.reply(mess.done);
        }
        break;
      case 'block':
        if (!isCreator) return m.reply(mess.owner);
        let blockw = m.mentionedJid[0]
          ? m.mentionedJid[0]
          : m.quoted
          ? m.quoted.sender
          : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await lisa
          .updateBlockStatus(blockw, "block")
          .then((res) => m.reply(json(res)))
          .catch((err) => m.reply(json(err)));
        break;
      case 'unblock':
        if (!isCreator) return m.reply(mess.owner);
        let blockww = m.mentionedJid[0]
          ? m.mentionedJid[0]
          : m.quoted
          ? m.quoted.sender
          : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await lisa
          .updateBlockStatus(blockww, "unblock")
          .then((res) => m.reply(json(res)))
          .catch((err) => m.reply(json(err)));
        break;
      case 'leave':
        if (!isCreator) return m.reply(mess.owner);
        if (!m.isGroup) return m.reply(mess.group);
        m.reply("Dadah Semuanya 🥺");
        await lisa.groupLeave(m.chat);
        break;
      case 'backup':
        if (!isCreator) return m.reply(mess.owner);
        if (m.isGroup) return m.reply(mess.private);
        m.reply(mess.wait);
        exec("zip backup.zip *");
        let malas = await fs.readFileSync("./backup.zip");
        await lisa.sendMessage(
          m.chat,
          {
            document: malas,
            mimetype: "application/zip",
            fileName: "backup.zip",
          },
          {
            quoted: m,
          },
        );
        break;
      case 'getcase':
      case 'ambilcase':
        if (!isCreator) return m.reply(mess.owner);
        const getCase = (cases) => {
          return (
            "case" +
            `'${cases}'` +
            fs
              .readFileSync("Lalalisaa.js")
              .toString()
              .split("case '" + cases + "'")[1]
              .split("break")[0] +
            "break"
          );
        };
        m.reply(`${getCase(q)}`);
        break;

      /* ~~~~~~~~~ GROUP FEATURES ~~~~~~~~~ */

      case 'closetime':
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isCreator) return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        if (args[1] == "detik") {
          var timer = args[0] * `1000`;
        } else if (args[1] == "menit") {
          var timer = args[0] * `60000`;
        } else if (args[1] == "jam") {
          var timer = args[0] * `3600000`;
        } else if (args[1] == "hari") {
          var timer = args[0] * `86400000`;
        } else {
          return m.reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik");
        }
        m.reply(`Close time ${q} dimulai dari sekarang`);
        setTimeout(() => {
          var nomor = m.participant;
          const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`;
          lisa.groupSettingUpdate(m.chat, "announcement");
          m.reply(close);
        }, timer);
        break;
      case 'opentime':
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isCreator) return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        if (args[1] == "detik") {
          var timer = args[0] * `1000`;
        } else if (args[1] == "menit") {
          var timer = args[0] * `60000`;
        } else if (args[1] == "jam") {
          var timer = args[0] * `3600000`;
        } else if (args[1] == "hari") {
          var timer = args[0] * `86400000`;
        } else {
          return m.reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik");
        }
        m.reply(`Open time ${q} dimulai dari sekarang`);
        setTimeout(() => {
          var nomor = m.participant;
          const open = `*Tepat waktu* grup dibuka oleh admin\n sekarang member dapat mengirim pesan`;
          lisa.groupSettingUpdate(m.chat, "not_announcement");
          m.reply(open);
        }, timer);
        break;
      case 'kick':
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        let blockwww = m.mentionedJid[0]
          ? m.mentionedJid[0]
          : m.quoted
          ? m.quoted.sender
          : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await lisa
          .groupParticipantsUpdate(m.chat, [blockwww], "remove")
          .then((res) => m.reply(json(res)))
          .catch((err) => m.reply(json(err)));
        break;
      case 'add':
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        let blockwwww = m.quoted
          ? m.quoted.sender
          : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await lisa
          .groupParticipantsUpdate(m.chat, [blockwwww], "add")
          .then((res) => m.reply(json(res)))
          .catch((err) => m.reply(json(err)));
        break;
      case 'promote':
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        let blockwwwww = m.mentionedJid[0]
          ? m.mentionedJid[0]
          : m.quoted
          ? m.quoted.sender
          : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await lisa
          .groupParticipantsUpdate(m.chat, [blockwwwww], "promote")
          .then((res) => m.reply(json(res)))
          .catch((err) => m.reply(json(err)));
        break;
      case 'demote':
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        let blockwwwwwa = m.mentionedJid[0]
          ? m.mentionedJid[0]
          : m.quoted
          ? m.quoted.sender
          : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await lisa
          .groupParticipantsUpdate(m.chat, [blockwwwwwa], "demote")
          .then((res) => m.reply(json(res)))
          .catch((err) => m.reply(json(err)));
        break;
      case 'setname':
      case 'setsubject':
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        if (!text) return "Text ?";
        await lisa
          .groupUpdateSubject(m.chat, text)
          .then((res) => m.reply(mess.success))
          .catch((err) => m.reply(json(err)));
        break;
      case 'setdesc':
      case 'setdesk':
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        if (!text) return "Text ?";
        await lisa
          .groupUpdateDescription(m.chat, text)
          .then((res) => m.reply(mess.success))
          .catch((err) => m.reply(json(err)));
        break;
      case 'setppgroup':
      case 'setppgrup':
      case 'setppgc':
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins) return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        if (!quoted)
          return m.reply(
            `Kirim/m.reply Image Dengan Caption ${prefix + command}`,
          );
        if (!/image/.test(mime))
          return m.reply(
            `Kirim/m.reply Image Dengan Caption ${prefix + command}`,
          );
        if (/webp/.test(mime))
          return m.reply(
            `Kirim/m.reply Image Dengan Caption ${prefix + command}`,
          );
        var medis = await lisa.downloadAndSaveMediaMessage(
          quoted,
          "ppbot.jpeg",
        );
        if (args[0] == "full") {
          var { img } = await generateProfilePicture(medis);
          await lisa.query({
            tag: "iq",
            attrs: {
              to: m.chat,
              type: "set",
              xmlns: "w:profile:picture",
            },
            content: [
              {
                tag: "picture",
                attrs: {
                  type: "image",
                },
                content: img,
              },
            ],
          });
          fs.unlinkSync(medis);
          m.reply(mess.done);
        } else {
          var memeg = await lisa.updateProfilePicture(m.chat, {
            url: medis,
          });
          fs.unlinkSync(medis);
          m.reply(mess.done);
        }
        break;
      case 'tagall':
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        let teks = `ダ TAG BY ADMIN ダ
 
                  *MESSAGE: ${q ? q : "kosong"}*\n\n`;
        for (let mem of participants) {
          teks += `◈ @${mem.id.split("@")[0]}\n`;
        }
        lisa.sendMessage(
          m.chat,
          {
            text: teks,
            mentions: participants.map((a) => a.id),
          },
          {
            quoted: m,
          },
        );
        break;
      case 'hidetag':
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        lisa.sendMessage(
          m.chat,
          {
            text: q ? q : "",
            mentions: participants.map((a) => a.id),
          },
          {
            quoted: m,
          },
        );
        break;
      case 'totag':
        if (!m.isGroup) return m.reply(mess.group);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        if (!isAdmins) return m.reply(mess.admin);
        if (!m.quoted)
          return m.reply(`Reply pesan dengan caption ${prefix + command}`);
        lisa.sendMessage(m.chat, {
          forward: m.quoted.fakeObj,
          mentions: participants.map((a) => a.id),
        });
        break;
      case 'group':
      case 'grup':
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        if (args[0] === "close") {
          await lisa
            .groupSettingUpdate(m.chat, "announcement")
            .then((res) => m.reply(`Sukses Menutup Group 🕊️`))
            .catch((err) => m.reply(json(err)));
        } else if (args[0] === "open") {
          await lisa
            .groupSettingUpdate(m.chat, "not_announcement")
            .then((res) => m.reply(`Sukses Membuka Group 🕊️`))
            .catch((err) => m.reply(json(err)));
        } else {
          m.reply(`Mode ${command}\n\n\nKetik ${prefix + command}open/close`);
        }
        break;
      case 'editinfo':
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        if (args[0] === "open") {
          await lisa
            .groupSettingUpdate(m.chat, "unlocked")
            .then((res) => m.reply(`Sukses Membuka Edit Info Group 🕊️`))
            .catch((err) => m.reply(json(err)));
        } else if (args[0] === "close") {
          await lisa
            .groupSettingUpdate(m.chat, "locked")
            .then((res) => m.reply(`Sukses Menutup Edit Info Group 🕊️`))
            .catch((err) => m.reply(json(err)));
        } else {
          m.reply(`Mode ${command}\n\n\nKetik ${prefix + command}on/off`);
        }
        break;
      case 'linkgroup':
      case 'linkgrup':
      case 'linkgc':
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        let response = await lisa.groupInviteCode(m.chat);
        lisa.sendText(
          m.chat,
          `👥 *INFO LINK GROUP*\n📛 *Nama :* ${
            groupMetadata.subject
          }\n👤 *Owner Grup :* ${
            groupMetadata.owner !== undefined
              ? "@" + groupMetadata.owner.split`@`[0]
              : "Tidak diketahui"
          }\n🌱 *ID :* ${
            groupMetadata.id
          }\n🔗 *Link Chat :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${
            groupMetadata.participants.length
          }\n`,
          m,
          {
            detectLink: true,
          },
        );
        break;
      case 'revoke':
      case 'resetlink':
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        await lisa
          .groupRevokeInvite(m.chat)
          .then((res) => {
            m.reply(
              `Sukses Menyetel Ulang, Tautan Undangan Grup ${groupMetadata.subject}`,
            );
          })
          .catch((err) => m.reply(json(err)));
        break;
      /* ~~~~~~~~~ MAIN & STATUS BOT ~~~~~~~~~ */
      case 'ping':
      case 'botstatus':
      case 'statusbot':
        {
          const used = process.memoryUsage();
          const cpus = os.cpus().map((cpu) => {
            cpu.total = Object.keys(cpu.times).reduce(
              (last, type) => last + cpu.times[type],
              0,
            );
            return cpu;
          });
          const cpu = cpus.reduce(
            (last, cpu, _, { length }) => {
              last.total += cpu.total;
              last.speed += cpu.speed / length;
              last.times.user += cpu.times.user;
              last.times.nice += cpu.times.nice;
              last.times.sys += cpu.times.sys;
              last.times.idle += cpu.times.idle;
              last.times.irq += cpu.times.irq;
              return last;
            },
            {
              speed: 0,
              total: 0,
              times: {
                user: 0,
                nice: 0,
                sys: 0,
                idle: 0,
                irq: 0,
              },
            },
          );
          let timestamp = speed();
          let latensi = speed() - timestamp;
          neww = performance.now();
          oldd = performance.now();
          respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${
            oldd - neww
          } _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used)
  .map(
    (key, _, arr) =>
      `${key.padEnd(Math.max(...arr.map((v) => v.length)), " ")}: ${formatp(
        used[key],
      )}`,
  )
  .join("\n")}

${
  cpus[0]
    ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times)
        .map(
          (type) =>
            `- *${(type + "*").padEnd(6)}: ${(
              (100 * cpu.times[type]) /
              cpu.total
            ).toFixed(2)}%`,
        )
        .join("\n")}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus
  .map(
    (cpu, i) =>
      `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(
        cpu.times,
      )
        .map(
          (type) =>
            `- *${(type + "*").padEnd(6)}: ${(
              (100 * cpu.times[type]) /
              cpu.total
            ).toFixed(2)}%`,
        )
        .join("\n")}`,
  )
  .join("\n\n")}`
    : ""
}
`.trim();
          await lisa.sendMessage(
            m.chat,
            {
              text: respon,
              contextInfo: {
                externalAdReply: {
                  showAdAttribution: true,
                  title: "STATUS SERVER",
                  body: `${latensi.toFixed(4)} Second`,
                  thumbnailUrl:
                    "https://telegra.ph/file/4acd50022ae063748105c.jpg",
                  sourceUrl: global.link,
                  mediaType: 1,
                  renderLargerThumbnail: true,
                },
              },
            },
            {
              quoted: m,
            },
          );
        }
        break;
      case 'runtime':
        let pinga = `Bot Telah Berjalan Selama ${runtime(process.uptime())}`;
        lisa.sendMessage(
          m.chat,
          {
            text: pinga,
            contextInfo: {
              externalAdReply: {
                showAdAttribution: true,
                title: "RUNTIME",
                body: `FORGET DONATE`,
                thumbnailUrl:
                  "https://telegra.ph/file/cc2345eea07447e24a7b8.jpg",
                sourceUrl: global.link,
                mediaType: 1,
                renderLargerThumbnail: true,
              },
            },
          },
          {
            quoted: m,
          },
        );
        break;
      case'owner': case 'creator': {
  const sentMsg = await lisa.sendContactArray(m.chat, [
       [`${global.numberowner}`, `${await lisa.getName(global.numberowner+'@s.whatsapp.net')}`, `${global.namaowner}`, `Love Yourself Don't Love Me.`, `callmejunaa@gmail.com`, `Batang, Jawa Tengah, Indonesia`, `https://mywebsite.junn4.my.id`, `Developer Bot`],
    [`${global.nobot}`, `${await lisa.getName(global.nobot+'@s.whatsapp.net')}`, `${global.namabot}`, `Don't Spam!`, `lalisaa@gmail.com`, `Batang, Jawa Tengah, Indonesia`, `https://mywebsite.bots.my.id`, `Bot Whatsapp Yang Sering Error:(`]
  ], m)
}
break
      case 'tqto':
        {
          var tqto = `0ཻུ۪۪ꦽꦼ̷⸙‹•══════════════♡᭄
│       *「 Big Thanks To 」*
│ _*• My God*_
│ _*• My Parents*_
│ _*• My Friend & All User Bot*_
│ _*• ArxzyDev*_
│ _*• Arifzyn*_
│ _*• Yanz Dev*_
│ _*• ChaikalOffc*_
│ _*• Myself*_
│ _*• And Other All Bot Creators*_
╰═════ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙
`;
          var result = [
            `𝐌𝐲 𝐆𝐨𝐝`,
            `𝐌𝐲 𝐏𝐚𝐫𝐞𝐧𝐭𝐬`,
            `𝐌𝐲 𝐅𝐫𝐢𝐞𝐧𝐝𝐬 & 𝐀𝐥𝐥 𝐔𝐬𝐞𝐫 𝐁𝐨𝐭`,
            `𝐀𝐫𝐱𝐳𝐲𝐃𝐞𝐯`,
            `𝐀𝐫𝐢𝐟𝐳𝐲𝐧`,
            `𝐘𝐚𝐧𝐳 𝐃𝐞𝐯`, 
            `𝐂𝐡𝐚𝐢𝐤𝐚𝐥𝐥 𝐎𝐟𝐟𝐜`, 
            `𝐌𝐲𝐬𝐞𝐥𝐟`,
            `𝐀𝐧𝐝 𝐎𝐭𝐡𝐞𝐫 𝐀𝐥𝐥 𝐁𝐨𝐭 𝐂𝐫𝐞𝐚𝐭𝐨𝐫𝐬`,
            `${tqto}`,
          ];
          let { key } = await lisa.sendMessage(
            m.chat,
            { text: "𝐓𝐡𝐚𝐧𝐤𝐬 𝐓𝐨 :" },
            { quoted: m },
          );

          for (let i = 0; i < result.length; i++) {
            await sleep(1000);
            await lisa.sendMessage(
              m.chat,
              { text: result[i], edit: key },
              { quoted: m },
            );
          }
        }
        break;

      /* ~~~~~~~~~ CONVERT FEATURES ~~~~~~~~~ */
      case 'sticker':
      case 'stiker':
      case 's':
        {
          if (!quoted)
            return m.reply(
              `Balas Video/Image Dengan Caption ${prefix + command}`,
            );
          if (/image/.test(mime)) {
            let media = await quoted.download();
            let encmedia = await lisa.sendImageAsSticker(m.chat, media, m, {
              packname: packname,
              author: author,
            });
            await fs.unlinkSync(encmedia);
          } else if (isVideo || /video/.test(mime)) {
            if ((quoted.msg || quoted).seconds > 11)
              return m.reply("Maksimal 10 detik!");
            let media = await quoted.download();
            let encmedia = await lisa.sendVideoAsSticker(m.chat, media, m, {
              packname: packname,
              author: author,
            });
            await fs.unlinkSync(encmedia);
          } else {
            return m.reply(
              `Kirim Gambar/Video Dengan Caption ${
                prefix + command
              }\nDurasi Video 1-9 Detik`,
            );
          }
        }
        break;
      case 'smeme':
        {
          let respond = `Kirim/Reply image/sticker dengan caption ${
            prefix + command
          } text1|text2`;
          if (!/image/.test(mime)) return m.reply(respond);
          if (!text) return m.reply(respond);
          m.reply(mess.wait);
          atas = text.split("|")[0] ? text.split("|")[0] : "-";
          bawah = text.split("|")[1] ? text.split("|")[1] : "-";
          let dwnld = await lisa.downloadAndSaveMediaMessage(qmsg);
          let fatGans = await TelegraPh(dwnld);
          let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(
            bawah,
          )}/${encodeURIComponent(atas)}.png?background=${fatGans}`;
          let pop = await lisa.sendImageAsSticker(m.chat, smeme, m, {
            packname: packname,
            author: author,
          });
          fs.unlinkSync(pop);
        }
        break;
      case 'toimage':
      case 'toimg':
        {
          if (!/webp/.test(mime))
            return m.reply(
              `Reply sticker dengan caption *${prefix + command}*`,
            );
          m.reply(mess.wait);
          let media = await lisa.downloadAndSaveMediaMessage(qmsg);
          let ran = await getRandom(".png");
          exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media);
            if (err) return err;
            let buffer = fs.readFileSync(ran);
            lisa.sendMessage(
              m.chat,
              {
                image: buffer,
              },
              {
                quoted: m,
              },
            );
            fs.unlinkSync(ran);
          });
        }
        break;
      case 'tomp4':
      case 'tovideo':
        {
          if (!/webp/.test(mime))
            return m.reply(
              `m.reply stiker dengan caption *${prefix + command}*`,
            );
          m.reply(mess.wait);
          let media = await lisa.downloadAndSaveMediaMessage(qmsg);
          let webpToMp4 = await webp2mp4File(media);
          await lisa.sendMessage(
            m.chat,
            {
              video: {
                url: webpToMp4.result,
                caption: "Convert Webp To Video",
              },
            },
            {
              quoted: m,
            },
          );
          await fs.unlinkSync(media);
        }
        break;
      case 'toaud':
      case 'toaudio':
        {
          if (!/video/.test(mime) && !/audio/.test(mime))
            return m.reply(
              `Kirim/m.reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${
                prefix + command
              }`,
            );
          m.reply(mess.wait);
          let media = await lisa.downloadMediaMessage(qmsg);
          let audio = await toAudio(media, "mp4");
          lisa.sendMessage(
            m.chat,
            {
              audio: audio,
              mimetype: "audio/mpeg",
            },
            {
              quoted: m,
            },
          );
        }
        break;
      case 'tomp3':
        {
          if (!/video/.test(mime) && !/audio/.test(mime))
            return m.reply(
              `Kirim/m.reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${
                prefix + command
              }`,
            );
          m.reply(mess.wait);
          let media = await lisa.downloadMediaMessage(qmsg);
          let audio = await toAudio(media, "mp4");
          lisa.sendMessage(
            m.chat,
            {
              document: audio,
              mimetype: "audio/mp3",
              fileName: `Arxzy-MD.mp3`,
            },
            {
              quoted: m,
            },
          );
        }
        break;
      case 'tovn':
      case 'toptt':
        {
          if (!/video/.test(mime) && !/audio/.test(mime))
            return m.reply(
              `m.reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${
                prefix + command
              }`,
            );
          m.reply(mess.wait);
          let media = await lisa.downloadMediaMessage(qmsg);
          let { toPTT } = require("./lib/converter");
          let audio = await toPTT(media, "mp4");
          lisa.sendMessage(
            m.chat,
            {
              audio: audio,
              mimetype: "audio/mpeg",
              ptt: true,
            },
            {
              quoted: m,
            },
          );
        }
        break;
      case 'togif':
        {
          if (!/webp/.test(mime))
            return m.reply(
              `m.reply stiker dengan caption *${prefix + command}*`,
            );
          m.reply(mess.wait);
          let media = await lisa.downloadAndSaveMediaMessage(qmsg);
          let webpToMp4 = await webp2mp4File(media);
          await lisa.sendMessage(
            m.chat,
            {
              video: {
                url: webpToMp4.result,
                caption: "Convert Webp To Video",
              },
              gifPlayback: true,
            },
            {
              quoted: m,
            },
          );
          await fs.unlinkSync(media);
        }
        break;
      case 'tourl':
        {
          m.reply(mess.wait);
let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw '*send/reply your media with caption .tourl*'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  m.reply(`┌  • *U p l o a d - F i l e*
│  ◦ *Size:* ${media.length}
└  ◦ *Link:* ${link}`)
        }
        break;
      case 'emojimix2':
        {
          let [emoji1, emoji2] = text.split`+`;
          if (!emoji1) return m.reply(`Contoh : ${prefix + command} 😅+🤔`);
          if (!emoji2) return m.reply(`Contoh : ${prefix + command} 😅+🤔`);
          m.reply(mess.wait);
          let anu = await fetchJson(
            `https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(
              emoji1,
            )}_${encodeURIComponent(emoji2)}`,
          );
          for (let res of anu.results) {
            let encmedia = await lisa.sendImageAsSticker(m.chat, res.url, m, {
              packname: global.packname,
              author: global.author,
              categories: res.tags,
            });
            await fs.unlinkSync(encmedia);
          }
        }
        break;
      case 'emojimix1':
        {
          if (!text) return m.reply(`Contoh : ${prefix + command} 😅`);
          let anu = await fetchJson(
            `https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(
              text,
            )}`,
          );
          for (let res of anu.results) {
            let encmedia = await lisa.sendImageAsSticker(m.chat, res.url, m, {
              packname: global.packname,
              author: global.author,
              categories: res.tags,
            });
            await fs.unlinkSync(encmedia);
          }
        }
        break;
      case 'toonce':
      case 'toviewonce':
        {
          if (!quoted) return m.reply(`Reply Image/Video`);
          if (/image/.test(mime)) {
            anuan = await lisa.downloadAndSaveMediaMessage(quoted);
            lisa.sendMessage(
              m.chat,
              {
                image: {
                  url: anuan,
                },
                caption: `Here you go!`,
                fileLength: "999",
                viewOnce: true,
              },
              {
                quoted: m,
              },
            );
          } else if (/video/.test(mime)) {
            anuanuan = await lisa.downloadAndSaveMediaMessage(quoted);
            lisa.sendMessage(
              m.chat,
              {
                video: {
                  url: anuanuan,
                },
                caption: `Here you go!`,
                fileLength: "99999999",
                viewOnce: true,
              },
              {
                quoted: m,
              },
            );
          }
        }
        break;
      case 'toqr':
        {
          if (!q) return m.reply(" Please include link or text!");
          const QrCode = require("qrcode-reader");
          const qrcode = require("qrcode");
          let qyuer = await qrcode.toDataURL(q, {
            scale: 35,
          });
          let data = new Buffer.from(
            qyuer.replace("data:image/png;base64,", ""),
            "base64",
          );
          let buff = getRandom(".jpg");
          await fs.writeFileSync("./" + buff, data);
          let medi = fs.readFileSync("./" + buff);
          await lisa.sendMessage(
            from,
            {
              image: medi,
              caption: "Here you go!",
            },
            {
              quoted: m,
            },
          );
          setTimeout(() => {
            fs.unlinkSync(buff);
          }, 10000);
        }
        break;
      case 'qc':
        {
          const { quote } = require("./lib/quote.js");
          if (!q) return m.reply("Masukan Text");
          try {
            let ppnyauser = await await lisa
              .profilePictureUrl(m.sender, "image")
              .catch(
                (_) => "https://telegra.ph/file/6880771a42bad09dd6087.jpg",
              );
            const rest = await quote(q, pushname, ppnyauser);
            m.reply(mess.wait);
            lisa.sendImageAsSticker(m.chat, rest.result, m, {
              packname: `${global.packname}`,
              author: `${global.author}`,
            });
          } catch {
            m.reply(mess.error);
          }
        }
        break;
      /* ~~~~~~~~~ LISA ~~~~~~~~~ */
      case 'lisa':{
if (!q) return  m.reply(`Select the type of media you view!\n- image\n- video\n- profile\n\nExample : ${prefix + command} image`)
 if (args[0] === 'image'){
let cecan = await getBuffer(`https://api.junn4.my.id/cecan/lisa`)
await lisa.sendMessage(m.chat, {image: cecan, caption: ``},{quoted: m})
 } else
 if (args[0] === 'video'){
let anu = await fetchJson('https://api.junn4.my.id/search/tiktoksearch?query=lisa%20blackpink') 
lisa.sendMessage(m.chat, { video: { url: anu.result.no_watermark}, caption: ``}, {quoted: m})
 } else
 if (args[0] === 'profile'){
var profile = `*• Full name* : Pranpriya Manoban 
*• Place of birth* : Buriram, Thailand 
*• Date of birth* : March 27, 1997 
*• Height* : 167 cm 
*• Body weight* : 45 kg
*• Zodiac* : Aries 
*• MBTI Character* : ESFJ

*~ The origin of the name Lalisa ~*
Lalisa Manoban's birth name is Pranpiriya Manoban. However, this changed due to the advice of an astrologer. Finally, Pranpriya's name was changed to Lalisa, which means someone who receives prosperity in Thai. Until now, Lisa Blackpink always uses this name which has brought her success.

*~ Explanation of the meaning of ESFJ characters ~*
ESFJ stands for Extraverted, Sensing, Feeling, Judgment. This is one of the 16 personality types grouped by Katharine Briggs and Isabel Myers. People with the ESFJ personality get energy from interacting with other people. They focus on facts and details rather than ideas and concepts (Sensing). They also make decisions based on feelings and values ​​(Feeling), and prefer to plan and organize rather than be spontaneous and flexible (Judging). People with the ESFJ personality type tend to be friendly, loyal, organized, and soft-hearted. They have the ability to push others to be their best. Although often, this trait makes it difficult for them to believe bad things about the people closest to them. People with the ESFJ personality are people who like to help, are sensitive to the needs of others, and are fully dedicated to their responsibilities. They are very in tune with their own emotional environment by paying attention to other people's feelings and perceptions of them. The ESFJ personality is a personality that upholds loyalty and tradition.

_Source From https://www.orami.co.id/magazine/lisa-blackpink_

© 𝐋𝐚𝐥𝐚𝐥𝐢𝐬𝐚 𝐒𝐞𝐥𝐟𝐛𝐨𝐭 𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 𝐉𝐮𝐧𝐚𝐚`
lisa.sendText(m.chat, `${profile}`, m)
 } else {
m.reply(`Select the type of media you view!\n- image\n- video\n- profile\n\nExample : ${prefix + command} image`)
 }
 }
    break
      /* ~~~~~~~~~ DOWNLOADER ~~~~~~~~~ */
   case 'tiktok': case 'tiktokmp4': case 'tt': case 'ttmp4': {
   if (!text) return m.reply(`Type tiktok url!\nExample : ${prefix + command} https://vt.tiktok.com/ZSNPqWbuy/`)
   await lisa.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key } });
   try{
   let anu = await fetchJson(`https://api.junn4.my.id/download/tiktok?url=${text}`)
   const aud = anu.result.audio
await lisa.sendMessage(m.chat, { video: { url: anu.result.Medium.url}, caption: `*Downloaded Successfully*\n\n© 𝐓𝐢𝐤𝐭𝐨𝐤 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐁𝐲 𝐋𝐚𝐥𝐚𝐥𝐢𝐬𝐚 𝐒𝐞𝐥𝐟𝐛𝐨𝐭`}, {quoted: m})
await lisa.sendMessage(m.chat, {audio : {url : aud}, mimetype:'audio/mpeg'}, {quoted:m})
   await lisa.sendMessage(m.chat, { react: { text: `✅`, key: m.key } });
   }catch (error) {
     await lisa.sendMessage(m.chat, { react: { text: `❎`, key: m.key } });
   }
       }
    break
    case'ttslide': case 'tiktokslide':{
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *url*\n\n_Contoh_\n\n${prefix+command} https://vt.tiktok.com/ZSL36LfEP/`)
lisa.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
let ban = m.mentionedJid[0] || m.sender || conn.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || '';
try{
let anu = await fetchJson(`https://api.junn4.my.id/download/tiktokslide?url=${text}`)
for (let slide of anu.result.images) {
await sleep(1500)
await lisa.sendMessage(ban, { image: { url: slide}, caption: ``}, {quoted: m})
}
return lisa.sendMessage(m.chat, { react: { text: `✅`, key: m.key } });
}catch (error) {
m.reply(`Sorry this video can't be download`);
}
}
break
case'ig': case 'igdl': case 'igvideo': case 'instavideo': case 'instavid': case 'igreels': case 'instareels': case 'instareel': case 'igtv': case 'instatv': case 'igstory': case 'igphoto': case 'instaphoto': case 'instafoto': case 'igfoto': {
if (!text) return reply(`Type instagram url!\nExample : \n\n${prefix + command} https://www.instagram.com/reel/Cr5AXBQvBC1/?igshid=MzRlODBiNWFlZA==`)
lisa.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
let ban = m.mentionedJid[0] || m.sender || conn.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || '';
  try {
    if (args[0].includes('instagram.com') && args[0].includes('/p/')) {
      let anu = await fetchJson(`https://api.junn4.my.id/download/instagram?url=${args[0]}`);
      for (let imgs of anu.result.media) {
      await sleep(1500);
        await lisa.sendFile(ban, imgs, null, ``, m);
       }
      return lisa.sendMessage(m.chat, { react: { text: `✅`, key: m.key }})
    } else if (args[0].includes('instagram.com') && args[0].includes('/reel/')) {
      let anu = await fetchJson(`https://api.junn4.my.id/download/instagram?url=${args[0]}`);
lisa.sendMessage(m.chat, { video: { url: anu.result.media[0]}, caption: `*Downloaded Successfully*\n\n© 𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐁𝐲 𝐋𝐚𝐥𝐚𝐥𝐢𝐬𝐚 𝐒𝐞𝐥𝐟𝐛𝐨𝐭`}, {quoted: m})
      return lisa.sendMessage(m.chat, { react: { text: `✅`, key: m.key }})
    } else if (args[0].includes('instagram.com')){
      let anu = await fetchJson(`https://api.junn4.my.id/download/ighighlight?url=${args[0]}`);
      for (let slide of anu.result) {
        await sleep(1500);
        await lisa.sendFile(ban, slide, null, ``, m);
        }
        return lisa.sendMessage(m.chat, { react: { text: `✅`, key: m.key }})
     }
  } catch (error) {
    lisa.sendMessage(m.chat, { react: { text: `❎`, key: m.key }})
}
}
break
case 'fb': case ' facebook': case 'fbdl': {
   if (!text) return m.reply(`Type facebook url!\nExample : ${prefix + command} https://www.facebook.com/reel/3637137626609548?mibextid=rS40aB7S9Ucbxw6v`)
   await lisa.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key } });
   try{
   let anu = await fetchJson(`https://api.junn4.my.id/download/facebook?url=${text}`) 
   lisa.sendMessage(m.chat, { video: { url: anu.result.video_sd}, caption: `*Downloaded Successfully*\n\n© 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐁𝐲 𝐋𝐚𝐥𝐚𝐥𝐢𝐬𝐚 𝐒𝐞𝐥𝐟𝐛𝐨𝐭`}, {quoted: m})
   await lisa.sendMessage(m.chat, { react: { text: `✅`, key: m.key } });
   }catch (error) {
     await lisa.sendMessage(m.chat, { react: { text: `❎`, key: m.key } });
   }
       }
    break
    case 'play': case 'ytplay':{
const nsfwKeywords = ['dik', 'kontol', 'XXX', 'porn', 'mia', 'tobrut', 'desah', 'nude', 'memek', 'bokep', 'ngewe', 'sex'];
    const isNSFW = nsfwKeywords.some(keyword => text.toLowerCase().includes(keyword));
    if (isNSFW) {
        return m.reply('Teks mengandung konten terlarang, tidak dapat mengunduh permintaan.');
    }
if (!text) return m.reply(`Example : ${prefix + command} Lagu sad`)
try {
let search = await yts(`${text}`)
let caption = `*YOUTUBE PLAY*

あ ID : ${search.all[0].videoId}
あ Title : ${search.all[0].title}
あ Views : ${search.all[0].views}
あ Duration : ${search.all[0].timestamp}
あ Channel : ${search.all[0].author.name}
あ Upload : ${search.all[0].ago}
あ URL Video : ${search.videos[0].url}
あ Description : ${search.videos[0].description}

_Please wait, the audio file is being sent..._`
let todd = await getBuffer(search.all[0].image)
lisa.sendMessage(m.chat, {image: todd, caption: caption}, {quoted:m})
let ply = search.videos[0].url
const ytdl = require('ytdl-core')
let mp3file = `./${m.chat}.mp3`
  let nana = ytdl(ply, { filter: 'audioonly' })
  .pipe(fs.createWriteStream(mp3file))
  .on('finish', async () => {
lisa.sendMessage(m.chat, {audio: fs.readFileSync(mp3file), mimetype:'audio/mpeg' }, {quoted: m})
   })
}catch (error) {
m.reply(`Judul tidak ditemukan`);
}
}
break
    case 'ytmp3':{
    if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *url*\n\n_Contoh_\n\n${prefix+command} https://youtu.be/bWsTCzmkI7E?si=NYyG9v8Tgws3Sdit`)
if (!text.includes('youtu.be') && !text.includes('youtube.com')) return m.reply(`Gunakan dengan cara ${prefix + command} *url*\n\n_Contoh_\n\n${prefix + command} https://youtu.be/dhYOPzcsbGM`)
try{
await lisa.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
let search = await yts(`${text}`)
let caption = `*YOUTUBE PLAY*

あ ID : ${search.all[0].videoId}
あ Title : ${search.all[0].title}
あ Views : ${search.all[0].views}
あ Duration : ${search.all[0].timestamp}
あ Channel : ${search.all[0].author.name}
あ Upload : ${search.all[0].ago}
あ URL Video : ${search.videos[0].url}
あ Description : ${search.videos[0].description}

_Please wait, the audio file is being sent..._`
let todd = await getBuffer(search.all[0].image)
lisa.sendMessage(m.chat, {image: todd, caption: caption}, {quoted:m})
let ply = search.videos[0].url
const ytdl = require('ytdl-core')
let mp3file = `./${m.chat}.mp3`
  let nana = ytdl(ply, { filter: 'audioonly' })
  .pipe(fs.createWriteStream(mp3file))
  .on('finish', async () => {
lisa.sendMessage(m.chat, {audio: fs.readFileSync(mp3file), mimetype:'audio/mpeg' }, {quoted: m})
   })
}catch (error) {
m.reply(`Audio tidak dapat diunduh!`);
}
}
break
    case 'ytv': case 'ytmp4':{
    if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *url*\n\n_Contoh_\n\n${prefix+command} https://youtu.be/bWsTCzmkI7E?si=NYyG9v8Tgws3Sdit`)
lisa.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
try{
let anu = await fetchJson(`https://api.junn4.my.id/download/ytmp4?url=${text}`)
const cpt = anu.result.channel
const nick = anu.result.title
await lisa.sendMessage(m.chat, { video: { url: anu.result.result}, caption: `💬Judul : ${nick}\n👤Channel : ${cpt}`}, {quoted: m})
await lisa.sendMessage(m.chat, { react: { text: `✅`, key: m.key } });
}catch (error) {
m.reply('Error') 
}
}
break
      /* ~~~~~~~~~ AI FEATURE ~~~~~~~~~ */
    case 'ai': case 'chatgpt': {
    if (!text) return m.reply(`Yep ${m.pushName}, Lisa In Here what can i do to help you?`);
    let api = await fetchJson(`https://api.junn4.my.id/ai/chatGptV2?model=change your speaking style to be more characteristic and more open and your name is Lalisa, you are a robot created by Juna, express your character with emojis and speak English like a human.&text=${text}`)
    let result = api.result
    lisa.sendMessage(m.chat, {text: result }, {quoted: m})
    }
    break
    case 'txt2img':{
if (!isCreator&&!isPremium) return m.reply('Feature only for premium users')
if (!text) throw 'Masukan Promptnya\nExample:\n1girl, with glasses, in beach'
lisa.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
try{
let api = await fetchJson(`https://api.junn4.my.id/ai/txt2img?prompt=${text}&model=Realistic_Vision_V1.4-pruned-fp16`)
await lisa.sendMessage(m.chat, {image: {url: api.result.imageUrl}, caption: `Done.`},{quoted: m})
lisa.sendMessage(m.chat, { react: { text: `✅`, key: m.key }})
} catch (e) {
lisa.sendMessage(m.chat, { react: { text: `❎`, key: m.key }})
}
}
break
      /* ~~~~~~~~~ MENU ~~~~~~~~~ */
      case 'menu':
      case 'help':
        await lisa.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key } });
        await lisa.sendMessage(
          m.chat,
          {
            document: fs.readFileSync("./package.json"),
            fileName: `Hiii ${m.pushName}`,
            mimetype: "application/pdf",
            fileLength: 9999999,
            pageCount: 999999,
            caption: menu(prefix, jam, pushname),
            contextInfo: {
              externalAdReply: {
                title:
                  "                                   𝐋𝐚𝐥𝐢𝐬𝐚𝐚\n                   𝐒𝐞𝐥𝐟𝐛𝐨𝐭 𝐏𝐨𝐰𝐞𝐝 𝐁𝐲 𝐉𝐮𝐧𝐚𝐚",
                body: "",
                thumbnailUrl:
                  global.menu,
                sourceUrl: "",
                mediaType: 1,
                renderLargerThumbnail: true,
              },
            },
          },
          { quoted: m },
        );
        await lisa.sendMessage(m.chat, { react: { text: `✅`, key: m.key } });
        break;
      default:
        if (budy.startsWith("=>")) {
          if (!isCreator) return m.reply(mess.owner);

          function Return(sul) {
            sat = JSON.stringify(sul, null, 2);
            bang = util.format(sat);
            if (sat == undefined) {
              bang = util.format(sul);
            }
            return m.reply(bang);
          }
          try {
            m.reply(
              util.format(eval(`(async () => { return ${budy.slice(3)} })()`)),
            );
          } catch (e) {
            m.reply(String(e));
          }
        }

        if (budy.startsWith(">")) {
          if (!isCreator) return m.reply(mess.owner);
          try {
            let evaled = await eval(budy.slice(2));
            if (typeof evaled !== "string")
              evaled = require("util").inspect(evaled);
            await m.reply(evaled);
          } catch (err) {
            await m.reply(String(err));
          }
        }
        if (budy.startsWith("$")) {
          if (!isCreator) return m.reply(mess.owner);
          exec(budy.slice(2), (err, stdout) => {
            if (err) return m.reply(err);
            if (stdout) return m.reply(stdout);
          });
        }
    }
  } catch (err) {
    lisa.sendText(numberowner + "@s.whatsapp.net", util.format(err), m);
    console.log(util.format(err));
  }
};
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});
