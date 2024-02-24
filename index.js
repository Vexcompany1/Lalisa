require("./settings");
const { default: makeWASocket, lisaConnect, useMultiFileAuthState, DisconnectReason, jidNormalizedUser, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto, delay } = require("@adiwajshing/baileys");
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const chalk = require('chalk')
const CFonts = require('cfonts')
const FileType = require('file-type')
const path = require('path')
const fetch = require('node-fetch')
const axios = require('axios')
const readline = require('readline');
const PhoneNumber = require('awesome-phonenumber')
const { toBuffer, toDataURL } = require('qrcode')
const express = require ('express')
const {
  imageToWebp,
  videoToWebp,
  writeExifImg,
  writeExifVid,
} = require("./lib/exif");
const {
  smsg,
  isUrl,
  generateMessageTag,
  getBuffer,
  getSizeMedia,
  fetchJson, 
  await,
  sleep,
  reSize,
} = require("./lib/myfunc");
const usePairingCode = true
const question = (text) => {
  const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
  });
  return new Promise((resolve) => {
rl.question(text, resolve)
  })
};

let app = express()
const { createServer } = require ('http')
let server = createServer(app)
let _qr = 'invalid'
let PORT = 3000 || 8000 || 8080

//require("http").createServer((_, res) => res.end("Uptime!")).listen(8080)

const startLisa = async() => {

function title() {
console.log(chalk.bold.green(figlet.textSync('Lisa Bot', {
font: 'Standard',
horizontalLayout: 'default',
verticalLayout: 'default',
width: 80,
whitespaceBreak: false
})))
console.log(chalk.yellow(`\n${chalk.yellow('Created By Junaa')}\n`))
}
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

const { state, saveCreds } = await useMultiFileAuthState(`./session`)
const { version, isLatest } = await fetchLatestBaileysVersion()

function nocache(module, cb = () => { }) {
fs.watchFile(require.resolve(module), async () => {
await uncache(require.resolve(module))
cb(module)
})
}

function uncache(module = '.') {
return new Promise((resolve, reject) => {
try {
delete require.cache[require.resolve(module)]
resolve()
} catch (e) {
reject(e)
}
})
}

 CFonts.say('Lalalisa', {
  colors: ['blue'],
  font: 'block',
  align: 'center',
})

/*
   ✧ PAIRING CODE CREATED CHAIKAL OFFC & JUNA
*/
function _0x520c(_0x3687cb,_0x26bf6d){const _0x431014=_0x4310();return _0x520c=function(_0x520c70,_0x422205){_0x520c70=_0x520c70-0xb1;let _0x5c471a=_0x431014[_0x520c70];return _0x5c471a;},_0x520c(_0x3687cb,_0x26bf6d);}(function(_0x15d369,_0x302d6b){const _0x5a4848=_0x520c,_0x121fdf=_0x15d369();while(!![]){try{const _0x5a8039=parseInt(_0x5a4848(0xe2))/0x1*(parseInt(_0x5a4848(0xbe))/0x2)+parseInt(_0x5a4848(0xcf))/0x3*(parseInt(_0x5a4848(0xd0))/0x4)+parseInt(_0x5a4848(0xf1))/0x5+parseInt(_0x5a4848(0xf3))/0x6+-parseInt(_0x5a4848(0xf5))/0x7*(parseInt(_0x5a4848(0xb9))/0x8)+parseInt(_0x5a4848(0xe6))/0x9+parseInt(_0x5a4848(0xd6))/0xa*(-parseInt(_0x5a4848(0xb6))/0xb);if(_0x5a8039===_0x302d6b)break;else _0x121fdf['push'](_0x121fdf['shift']());}catch(_0x16ad0c){_0x121fdf['push'](_0x121fdf['shift']());}}}(_0x4310,0xbf949));const _0x15a47c=_0x24ad;(function(_0x47fc89,_0x1dea97){const _0x50010d=_0x520c,_0x490d5b=_0x24ad,_0x4a82d8=_0x47fc89();while(!![]){try{const _0x4428b7=parseInt(_0x490d5b(0xfe))/0x1+-parseInt(_0x490d5b(0x137))/0x2+parseInt(_0x490d5b(0x119))/0x3*(-parseInt(_0x490d5b(0x12b))/0x4)+-parseInt(_0x490d5b(0x107))/0x5*(parseInt(_0x490d5b(0x113))/0x6)+parseInt(_0x490d5b(0x100))/0x7*(parseInt(_0x490d5b(0xf7))/0x8)+-parseInt(_0x490d5b(0x116))/0x9+parseInt(_0x490d5b(0xfb))/0xa;if(_0x4428b7===_0x1dea97)break;else _0x4a82d8[_0x50010d(0xd8)](_0x4a82d8['shift']());}catch(_0x5ccbd6){_0x4a82d8['push'](_0x4a82d8[_0x50010d(0xca)]());}}}(_0x5f20,0x466e1));const _0x410582=_0x1c76;(function(_0x56c6e2,_0x4652ce){const _0x19d8ff=_0x24ad,_0x4276c4=_0x1c76,_0x3482a2=_0x56c6e2();while(!![]){try{const _0xd736c8=-parseInt(_0x4276c4(0x10b))/0x1*(-parseInt(_0x4276c4(0x107))/0x2)+-parseInt(_0x4276c4(0x115))/0x3*(parseInt(_0x4276c4(0xea))/0x4)+parseInt(_0x4276c4(0x10c))/0x5*(parseInt(_0x4276c4(0xf6))/0x6)+-parseInt(_0x4276c4(0xf9))/0x7*(parseInt(_0x4276c4(0xf1))/0x8)+-parseInt(_0x4276c4(0x111))/0x9+-parseInt(_0x4276c4(0xfd))/0xa+parseInt(_0x4276c4(0xf5))/0xb*(parseInt(_0x4276c4(0xe6))/0xc);if(_0xd736c8===_0x4652ce)break;else _0x3482a2[_0x19d8ff(0x131)](_0x3482a2[_0x19d8ff(0x124)]());}catch(_0x2903a2){_0x3482a2[_0x19d8ff(0x131)](_0x3482a2[_0x19d8ff(0x124)]());}}}(_0x4ae5,0x4b448));function _0x24ad(_0x52650,_0x1d57d5){const _0x51b85d=_0x5f20();return _0x24ad=function(_0x507d73,_0x4bb912){_0x507d73=_0x507d73-0xf6;let _0x14a42b=_0x51b85d[_0x507d73];return _0x14a42b;},_0x24ad(_0x52650,_0x1d57d5);}const lisa=makeWASocket({'logger':pino({'level':_0x410582(0x10e)}),'printQRInTerminal':!usePairingCode,'auth':state,'browser':[_0x410582(0x117),'','']});function _0x4ae5(){const _0x49cf8b=_0x520c,_0x2242a6=_0x24ad,_0x30f6b4=[_0x2242a6(0x12c),_0x2242a6(0xff),'setHeader',_0x2242a6(0x111),_0x2242a6(0x117),_0x49cf8b(0xc2),_0x2242a6(0x127),_0x2242a6(0x105),_0x49cf8b(0xbf),_0x2242a6(0x12f),_0x2242a6(0x11b),_0x2242a6(0x133),_0x2242a6(0x123),_0x2242a6(0x122),_0x2242a6(0x109),'454dNTXkl',_0x2242a6(0x11c),_0x2242a6(0x12a),_0x2242a6(0x115),_0x2242a6(0x125),_0x2242a6(0x130),_0x2242a6(0x104),_0x2242a6(0x110),_0x2242a6(0x10f),_0x2242a6(0x136),_0x2242a6(0x10a),_0x2242a6(0x121),_0x2242a6(0x112),_0x49cf8b(0xd4),_0x49cf8b(0xd2),_0x2242a6(0x129),_0x2242a6(0x126),_0x49cf8b(0xba),_0x49cf8b(0xe5),_0x2242a6(0x103),_0x2242a6(0x114),_0x2242a6(0xf8),_0x2242a6(0x10c),_0x2242a6(0xfd),_0x2242a6(0x12d),_0x2242a6(0x128),_0x2242a6(0xfa),_0x2242a6(0x120),_0x2242a6(0x101),_0x2242a6(0x10d),_0x2242a6(0x118),_0x49cf8b(0xe7),_0x2242a6(0x11a),_0x2242a6(0x108),_0x2242a6(0x135),_0x2242a6(0x134),_0x2242a6(0x102),_0x2242a6(0x11d),_0x2242a6(0x132)];return _0x4ae5=function(){return _0x30f6b4;},_0x4ae5();}function _0x4310(){const _0x2cdad1=['1788HyTNGE','join','\x22\x20Telah\x20diupdate!','72uTGERS','600nwenZf','creds','52902LtLLaD','13409LgRDLC','logout','greenBright','listen','Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20Please\x20Close\x20Current\x20Session\x20First','Device\x20Logged\x20Out,\x20Please\x20Scan\x20Again\x20And\x20Run.','./Lalalisaa','badSession','content-type','shift','open','loggedOut','views','221245gnrgly','1713VoGQbQ','2052fdACkE','user','connection.update','862616rolPIb','authState','760aFibTG','268790KQFwAN','restartRequired','push','silent','312LIvhTk','Masukan\x20Nomer\x20Yang\x20Aktif\x20Awali\x20Dengan\x2062:\x0a','10423760maUFXB','137135PKkDER','jid','2112970tMbxZY','use','close','137AFdWbS','image/png','output','Restart\x20Required,\x20Restarting...','8044389hRwyir','end','Connection\x20closed,\x20reconnecting....','998XjMntC','timedOut','receivedPendingNotifications','359231QjKajb','Pairing\x20code:\x20','log','error','10493Ylxkhn','7258830mukCKm','statusCode','6375654jFVcbF','3AgXEAx','1508080pnEudI','static','Unknown\x20DisconnectReason:\x20','Connection\x20TimedOut,\x20Reconnecting...','connectionReplaced','4674456OobHsG','1034RHyyPV','registered','connectionLost','16qKvtKi'];_0x4310=function(){return _0x2cdad1;};return _0x4310();}function _0x5f20(){const _0x24a4ab=_0x520c,_0x326d52=[_0x24a4ab(0xef),_0x24a4ab(0xd9),_0x24a4ab(0xb5),_0x24a4ab(0xe0),_0x24a4ab(0xd7),_0x24a4ab(0xc0),_0x24a4ab(0xc1),_0x24a4ab(0xc5),_0x24a4ab(0xce),_0x24a4ab(0xed),_0x24a4ab(0xea),_0x24a4ab(0xcd),_0x24a4ab(0xd1),_0x24a4ab(0xee),_0x24a4ab(0xb4),'connectionClosed',_0x24a4ab(0xca),_0x24a4ab(0xcc),_0x24a4ab(0xb7),_0x24a4ab(0xe3),'Bad\x20Session\x20File,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again','Connect,\x20welcome\x20owner!','true','44YArAlb',_0x24a4ab(0xb3),_0x24a4ab(0xbc),'end',_0x24a4ab(0xc7),_0x24a4ab(0xcb),'push',_0x24a4ab(0xe4),_0x24a4ab(0xe9),'cyanBright','trim',_0x24a4ab(0xc3),'729664TbnAuL',_0x24a4ab(0xde),'App\x20listened\x20on\x20port',_0x24a4ab(0xbb),_0x24a4ab(0xda),_0x24a4ab(0xd3),_0x24a4ab(0xe8),_0x24a4ab(0xc6),_0x24a4ab(0xdc),'bind',_0x24a4ab(0xeb),_0x24a4ab(0xec),_0x24a4ab(0xdf),'28189drhnyf',_0x24a4ab(0xd5),_0x24a4ab(0xf0),'[\x20UPDATED\x20]','553617vudRga',_0x24a4ab(0xb1),_0x24a4ab(0xdb),_0x24a4ab(0xdd),_0x24a4ab(0xbd),_0x24a4ab(0xe1),_0x24a4ab(0xf4),_0x24a4ab(0xc8),_0x24a4ab(0xb2),'connection','requestPairingCode',_0x24a4ab(0xb8),'Connection\x20Lost\x20from\x20Server,\x20reconnecting...',_0x24a4ab(0xc4),'Chrome\x20(Linux)','42HuYkqg'];return _0x5f20=function(){return _0x326d52;},_0x5f20();}if(usePairingCode&&!lisa[_0x410582(0x118)][_0x410582(0x104)][_0x410582(0xe5)]){const phoneNumber=await question(_0x15a47c(0x106)),code=await lisa[_0x15a47c(0x10e)](phoneNumber[_0x410582(0xf7)]());console[_0x410582(0x116)](_0x410582(0xfa)+code);}require(_0x410582(0x105)),nocache(_0x410582(0x105),_0x964917=>console[_0x410582(0x116)](chalk[_0x410582(0x114)](_0x410582(0xe8))+new Date()+chalk[_0x410582(0xf8)]('\x20\x22'+_0x964917+_0x410582(0xed))));function _0x1c76(_0x3392c2,_0x9efd3d){const _0x52b278=_0x4ae5();return _0x1c76=function(_0x422203,_0x5021b0){_0x422203=_0x422203-0xe3;let _0x450be4=_0x52b278[_0x422203];return _0x450be4;},_0x1c76(_0x3392c2,_0x9efd3d);}if(lisa[_0x15a47c(0x120)]&&lisa[_0x15a47c(0x120)]['id'])lisa[_0x410582(0xf0)][_0x15a47c(0x138)]=jidNormalizedUser(lisa[_0x410582(0xf0)]['id']);lisa['ev']['on'](_0x410582(0xe3),async _0x1048ab=>{const _0x307d57=_0x520c,_0x4dda41=_0x15a47c,_0x35f0b1=_0x410582,{connection:_0x56ed9e,lastDisconnect:_0x5decc1,qr:_0x222ed9}=_0x1048ab;_0x222ed9&&(app[_0x35f0b1(0x100)](async(_0x13e1c0,_0x13fc97)=>{const _0x45ca46=_0x520c,_0x1786fb=_0x24ad,_0x12a980=_0x35f0b1;_0x13fc97[_0x12a980(0xfe)](_0x45ca46(0xc9),_0x12a980(0x102)),_0x13fc97[_0x1786fb(0x12e)](await toBuffer(_0x222ed9));}),app[_0x35f0b1(0x100)](express[_0x35f0b1(0x103)](path[_0x4dda41(0xf6)](__dirname,_0x4dda41(0x11f)))),server[_0x35f0b1(0xff)](PORT,()=>{const _0x16b5eb=_0x4dda41,_0x9b47c4=_0x35f0b1;console[_0x9b47c4(0x116)](_0x16b5eb(0x139),PORT);}));if(_0x56ed9e===_0x35f0b1(0x10a)){let _0x55e1f8=new Boom(_0x5decc1?.[_0x35f0b1(0xe9)])?.[_0x35f0b1(0xfb)][_0x307d57(0xf2)];if(_0x55e1f8===DisconnectReason[_0x4dda41(0x10b)])console[_0x35f0b1(0x116)](_0x35f0b1(0xee)),lisa[_0x35f0b1(0x101)]();else{if(_0x55e1f8===DisconnectReason[_0x35f0b1(0x108)])console[_0x35f0b1(0x116)](_0x4dda41(0xf9)),startLisa();else{if(_0x55e1f8===DisconnectReason[_0x35f0b1(0x113)])console[_0x35f0b1(0x116)](_0x35f0b1(0x112)),startLisa();else{if(_0x55e1f8===DisconnectReason[_0x35f0b1(0x109)])console[_0x35f0b1(0x116)](_0x35f0b1(0x106)),lisa[_0x35f0b1(0x101)]();else{if(_0x55e1f8===DisconnectReason[_0x35f0b1(0x10f)])console[_0x4dda41(0x121)](_0x35f0b1(0xef)),lisa[_0x35f0b1(0x101)]();else{if(_0x55e1f8===DisconnectReason[_0x35f0b1(0xf3)])console[_0x35f0b1(0x116)](_0x35f0b1(0xe7)),startLisa();else{if(_0x55e1f8===DisconnectReason[_0x4dda41(0x11e)])console[_0x35f0b1(0x116)](_0x35f0b1(0xfc)),startLisa();else lisa[_0x35f0b1(0xf4)](_0x35f0b1(0xeb)+_0x55e1f8+'|'+_0x56ed9e);}}}}}}}(_0x1048ab[_0x35f0b1(0xf2)]==_0x35f0b1(0x110)||_0x1048ab[_0x35f0b1(0xec)]==_0x35f0b1(0x10d))&&console[_0x4dda41(0x121)](_0x35f0b1(0xe4));}),store[_0x15a47c(0xfc)](lisa['ev']);

lisa.ev.on('messages.upsert', async chatUpdate => {
try {
//mek = chatUpdate.messages[0]
for (let mek of chatUpdate.messages) {
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast') return
if (!lisa.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
const m = smsg(lisa, mek, store)
require("./Lalalisaa")(lisa, m, chatUpdate, mek, store) 
}
} catch (err) {
console.log(err)
}
})

lisa.ev.process(
async (events) => {
if (events['presence.update']) {
await lisa.sendPresenceUpdate('available')
}
if (events['messages.upsert']) {
const upsert = events['messages.upsert']
for (let msg of upsert.messages) {
if (msg.key.remoteJid === 'status@broadcast') {
if (msg.message?.protocolMessage) return
await delay(3000)
await lisa.readMessages([msg.key])
}
}
}
if (events['creds.update']) {
await saveCreds()
}
}
)

// Setting
lisa.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

lisa.ev.on('contacts.update', update => {
for (let contact of update) {
let id = lisa.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})
lisa.vidToSticker = async(jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetchBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await lisa.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}
lisa.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}

await lisa.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}
lisa.getName = (jid, withoutContact = false) => {
id = lisa.decodeJid(jid)
withoutContact = lisa.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = lisa.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === lisa.decodeJid(lisa.user.id) ?
lisa.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
}

lisa.sendContactArray = async (jid, data, quoted, options) => {
        if (!Array.isArray(data[0]) && typeof data[0] === 'string') data = [data]
                let contacts = []
        for (let [number, name, isi, isi1, isi2, isi3, isi4, isi5] of data) {
            number = number.replace(/[^0-9]/g, '')
            let njid = number + '@s.whatsapp.net'
            let biz = await lisa.getBusinessProfile(njid).catch(_ => null) || {}
            // N:;${name.replace(/\n/g, '\\n').split(' ').reverse().join(';')};;;
            let vcard = `
BEGIN:VCARD
VERSION:3.0
N:Sy;Bot;;;
FN:${name.replace(/\n/g, '\\n')}
item.ORG:${isi}
item1.TEL;waid=${number}:${PhoneNumber('+' + number).getNumber('international')}
item1.X-ABLabel:${isi1}
item2.EMAIL;type=INTERNET:${isi2}
item2.X-ABLabel:📧 Email
item3.ADR:;;${isi3};;;;
item3.X-ABADR:ac
item3.X-ABLabel:📍 Region
item4.URL:${isi4}
item4.X-ABLabel:Website
item5.X-ABLabel:${isi5}
END:VCARD`.trim()
            contacts.push({ vcard, displayName: name })
        }
        return await lisa.sendMessage(jid, {
            contacts: {
                displayName: (contacts.length > 1 ? `2013 kontak` : contacts[0].displayName) || null,
                contacts,
            }
        },
        {
            quoted,
            ...options
        })
        }
    
lisa.sendContact = async (jid, kon, quoted = '', opts = {}) => {
let list = []
for (let i of kon) {
list.push({
displayName: await lisa.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await lisa.getName(i + '@s.whatsapp.net')}\nFN:${await lisa.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:yourgmail@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
})
}
lisa.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
}

lisa.setStatus = (status) => {
lisa.query({
tag: 'iq',
attrs: {
to: '@s.whatsapp.net',
type: 'set',
xmlns: 'status',
},
content: [{
tag: 'status',
attrs: {},
content: Buffer.from(status, 'utf-8')
}]
})
return status
}

lisa.prefa = 'apasih'
lisa.public = true
lisa.serializeM = (m) => smsg(lisa, m, store)

lisa.reSize = async (image, width, height) => {
let jimp = require('jimp')
var oyy = await jimp.read(image);
var kiyomasa = await oyy.resize(width, height).getBufferAsync(jimp.MIME_JPEG)
return kiyomasa
}

lisa.sendButLoc = async (jid , text = '' , footer = '', lok, but = [], ments = [], options = {}) =>{
let bb = await lisa.reSize(lok, 300, 150)
const buttonMessage = {
location: { jpegThumbnail: bb },
caption: text,
footer: footer,
buttons: but,
headerType: 'LOCATION'
}
lisa.sendMessage(jid, buttonMessage, options)
}

lisa.send5ButLoc = async (jid , text = '' , footer = '', lok, but = [], options = {}) =>{
let bb = await lisa.reSize(lok, 300, 150)
lisa.sendMessage(jid, { location: { jpegThumbnail: bb }, caption: text, footer: footer, templateButtons: but, ...options })
}
lisa.send5ButImg = async (jid , text = '' , footer = '', img, but = [], ments, options = {}) =>{
lisa.sendMessage(jid, { image: img, caption: text, footer: footer, viewOnce: true, templateButtons: but,mentions: ments ? ments : [], ...options })
}
lisa.sendButImage = async (jid, ppuser, but = [] , text = '' , footer = '', ments = [], quoted) => {
let pp_user = await getBuffer(ppuser)
const buttonMessage = {
image: pp_user,
caption: text,
footer: footer,
buttons: but,
headerType: 'IMAGE',
mentions: ments
}

lisa.sendMessage(jid, buttonMessage, quoted)
}
lisa.sendButMessage = async (jid , desc = '' , footer = '' , but = [] , options = {}) =>{
const buttonMessage = {
text: desc,
footer: footer,
buttons: but,
headerType: 1
}

lisa.sendMessage(jid, buttonMessage, options)
}

lisa.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
let type = await lisa.getFile(path, true)
let {
res,
data: file,
filename: pathFile
} = type
if (res && res.status !== 200 || file.length <= 65536) {
try {
throw {
json: JSON.parse(file.toString())
}
}
catch (e) {
if (e.json) throw e.json
}
}
let opt = {
filename
}
if (quoted) opt.quoted = quoted
if (!type) options.asDocument = true
let mtype = '',
mimetype = type.mime,
convert
if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker'
else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image'
else if (/video/.test(type.mime)) mtype = 'video'
else if (/audio/.test(type.mime))(
convert = await toAudio(file, type.ext),
file = convert.data,
pathFile = convert.filename,
mtype = 'audio',
mimetype = 'audio/ogg; codecs=opus'
)
else mtype = 'document'
if (options.asDocument) mtype = 'document'

delete options.asSticker
delete options.asLocation
delete options.asVideo
delete options.asDocument
delete options.asImage

let message = {
...options,
caption,
ptt,
[mtype]: {
url: pathFile
},
mimetype,
fileName: filename || pathFile.split('/').pop()
}
let m
try {
 m = await lisa.sendMessage(jid, message, {
...opt,
...options
})
}
catch (e) {
//console.error(e)
m = null
}
finally {
if (!m) m = await lisa.sendMessage(jid, {
...message,
[mtype]: file
}, {
...opt,
...options
})
file = null
return m
}
}

lisa.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
let mime = '';
let res = await axios.head(url)
mime = res.headers['content-type']
if (mime.split("/")[1] === "gif") {
return lisa.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options}, { quoted: quoted, ...options})
}
let type = mime.split("/")[0]+"Message"
if (mime === "application/pdf"){
return lisa.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options}, { quoted: quoted, ...options })
}
if (mime.split("/")[0] === "image"){
return lisa.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options}, { quoted: quoted, ...options})
}
if (mime.split("/")[0] === "video"){
return lisa.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options}, { quoted: quoted, ...options })
}
if (mime.split("/")[0] === "audio"){
return lisa.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options}, { quoted: quoted, ...options })
}
}

lisa.sendTextWithMentions = async (jid, text, quoted, options = {}) => lisa.sendMessage(jid, { text: text, mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'), ...options }, { quoted })

lisa.getFile = async (PATH, returnAsFilename) => {
let res, filename
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await fetch(PATH)).buffer() : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
let type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'
}
if (data && returnAsFilename && !filename)(filename = path.join(__dirname, './sampah/' + new Date * 1 + '.' + type.ext), await fs.promises.writeFile(filename, data))
return {
res,
filename,
...type,
data
}
}

lisa.imgToSticker = async(jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetchBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await lisa.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

lisa.vidToSticker = async(jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetchBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await lisa.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

lisa.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await lisa.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
}

lisa.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
let trueFileName = attachExtension ? ('./sampah/' + filename + '.' + type.ext) : './sampah/' + filename
// save to file
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

lisa.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}

return buffer
} 
 
lisa.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await lisa.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
}

lisa.sendVideo = async (jid, path, gif = false, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await lisa.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
}

lisa.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
let types = await lisa.getFile(path, true)
let { mime, ext, res, data, filename } = types
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }
}
let type = '', mimetype = mime, pathFile = filename
if (options.asDocument) type = 'document'
if (options.asSticker || /webp/.test(mime)) {
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
type = 'sticker'
mimetype = 'image/webp'
}
else if (/image/.test(mime)) type = 'image'
else if (/video/.test(mime)) type = 'video'
else if (/audio/.test(mime)) type = 'audio'
else type = 'document'
await lisa.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
return fs.promises.unlink(pathFile)
}

lisa.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message
}}

let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo
}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo
}
} : {})
} : {})
await lisa.relayMessage(jid, waMessage.message, { messageId: waMessage.key.id })
return waMessage
}

lisa.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
let buttonMessage = {
text,
footer,
buttons,
headerType: 2,
...options
}
lisa.sendMessage(jid, buttonMessage, { quoted, ...options })
}
lisa.send1ButMes = (jid, text = '', footer = '', butId = '', dispText = '', quoted, ments) => {
let but = [{
buttonId: butId,
buttonText: {
displayText: dispText
},
type: 1
}]
let butMes = {
text: text,
buttons: but,
footer: footer,
mentions: ments ? ments : []
}
lisa.sendMessage(jid, butMes, {
quoted: quoted
})
}

lisa.send2ButMes = (jid, text = '', footer = '', butId = '', dispText = '', butId2 = '', dispText2 = '', quoted, ments) => {
let but2 = [{
buttonId: butId,
buttonText: {
displayText: dispText
},
type: 1
},
{
buttonId: butId2,
buttonText: {
displayText: dispText2
},
type: 1
}
]
let butMes2 = {
text: text,
buttons: but2,
footer: footer,
mentions: ments ? ments : []
}
lisa.sendMessage(jid, butMes2, {
quoted: quoted
})
}

lisa.sendText = (jid, text, quoted = '', options) => lisa.sendMessage(jid, { text: text, ...options }, { quoted, ...options })

lisa.cMod = (jid, copy, text = '', sender = lisa.user.id, options = {}) => {
//let copy = message.toJSON()
let mtype = Object.keys(copy.message)[0]
let isEphemeral = mtype === 'ephemeralMessage'
if (isEphemeral) {
mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
}
let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
let content = msg[mtype]
if (typeof content === 'string') msg[mtype] = text || content
else if (content.caption) content.caption = text || content.caption
else if (content.text) content.text = text || content.text
if (typeof content !== 'string') msg[mtype] = {
...content,
...options
}
if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
copy.key.remoteJid = jid
copy.key.fromMe = sender === lisa.user.id

return proto.WebMessageInfo.fromObject(copy)
}

return lisa
}

startLisa()


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
