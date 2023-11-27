/*
WHATSAPP BOT BY Janith sadanuwan 
WHATSAPP - 94767438882
SUPPORT GROUP - https://t.me/QueenNilu
YOUTUBE - http://youtube.com/janithsadanuwan
*/

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

// PUT YOUR SESSION ID HERE  ##Required 

global.SESSION_ID = 'QueenNilu;;;w7wiDbJb#CYYQcpyzgdnkTHXG6kaDehZEFbI2lOd-qAX4da4l9tY' // PUT your session ID BY scan QR 

// databse URL  ##Required 
global.POSTGRESQL_URL = 'postgres://sandiz_user:Yevasz5T68huIktEGaLeWKvSWJKr93D6@dpg-cl0926rjdq6s73arcil0-a.frankfurt-postgres.render.com/sandiz'

 

// ⚙️ OWNER SETTINGS  ⚙️

global.OWNER_NUMBER = '94704352872'

global.OWNER_NAME = '𝐒𝐀𝐍𝐃𝐈𝐍 𝐒𝐀𝐓𝐇𝐒𝐄𝐍'

global.TIMEZONE = 'Asia/Colombo' 

global.INBOX_BLOCK_MESSAGE = '' // Inboc Block Message

global.INBOX_BLOCK = 'false' // TO Inbox Block On put true

global.READ_MESSAGE = "false" 

global.OPENAI_API_KEY = "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" 

/*
⚙️ BOT  SETTINGS  ⚙️
*/

global.BOT_NAME = 'ǫᴜᴇᴇɴ ɴɪʟᴜ 𝙱𝙾𝚃 𝙱𝚈 𝚂𝙰𝙽𝙳𝙸𝙽 𝚂𝙰𝚃𝙷𝚂𝙴𝙽'

global.FOOTER = '𝚂𝙰𝙽𝙳𝙸𝚉 𝚘𝚏𝚏𝚒𝚌𝚒𝚊𝚕 2023'

global.BOT_OFFLINE = false    //  Always Onlne -  | false offline -True

global.STICKER_NAME = '@𝚂𝙰𝙽𝙳𝙸𝚉 𝙾𝙵𝙲 🤹‍♂️' //sticker

global.LANG = 'EN' // Language (EN-  TO english  ,  SI- TO sinhala )

global.PREFIX = '.' // Bot Prefix

global.CAPTION = '© ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ 𝚂𝙰𝙽𝙳𝙸𝚉 2023' // Caption

global.ALIVELOGO = 'https://telegra.ph/file/2ce209c78caffec7b31f8.jpg' // Set Alive Logo link 

global.ALIVE_MESSAGE = 'hi👋 i am alive now' // Set Alive Message

global.MAX_SIZE = '500' // Bot Uloading Max size 

global.ANTI_BAD = true // Antibad (on = True , Off = False )

global.ANTI_BAD_ACTION = false

global.ANTI_LINK = true //Anti Link (on = True , Off = False )

global.ANTI_BOTS = true

global.ONLY_GROUP = 'false' // Only group mode

global.GROUP_LINK = 'https://chat.whatsapp.com/BOYKjfV97d73zQTBIACjb3' // ur group link


/* 18 + Download Settings */

global.SEX_DL = 'true' // 18 + video dl

/* AUTO REPLY SETTINGS */

global.AUTO_STICKER = true

global.AUTO_REPLY = true

global.VOICE_REPLY = true


/* V card */

global.ytname = "YT: janithsadanuwan" //ur yt chanel name
global.socialm = "GitHub: janithsadanuwan" //ur github or insta name
global.location = "Srilanka, colombo" //ur location
