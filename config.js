const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '94761516805'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://SithumKalhara:97531@cluster0.iva7dbo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'Sithumkalhara271@gmail.com'
global.github = 'https://github.com/Sithuwa/SITHUWA-MD'
global.location = 'Sri Lanka'
global.gurl = 'https://instagram.com' // add your username
global.sudo = process.env.SUDO || "94761516805"
global.devs = '94761516805';
global.website = 'https://github.com/Sithuwa/SITHUWA-MD' //wa.me/+94000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/15b1dd8aeaa47888d75d7.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUU4bWdYUTVDR2RLU0hBMzVGTzcybUZGSTkzclVjZ2Z1YTdTOEVmaG0zWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZnowSEl3YUorZnYrNDlxWGpra0cxWk9YZjZ2M3Y1YTNhaGxEQ0ZFcmZBRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTSjJ4MTFTWWRqbWxGR2N5OVU4SEI2VTZkaFk3cS9GTXQ1WFhjYkJmaEg4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHVEdtbU10Z0VOdCtJRHRzVmV2ZXNROWZ6Y1pMdjNVcXI2Z1RiUXNONzFzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklBZ2MrMFh2RkRORnpUd0o3TlRyakNkTmFYL1Vma2I4M2R1T0JwQW5uSGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InV6Z1AxUjF6QTI3bWFSdTE0TzdMNWFhNUovdDZ5d0JpekJORVN4S2RUZ1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU54ZjdnSHU3UktKUlM3ZkQvc0N3LzlOVkJRbHhzMG90ZXMxWkJyRmlYWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTE5nSkFFWmxVUGNSdjBpN2ZmMzVTaitwbGRUMzVyanE5VFphVW5oMEh5MD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpjUmkxVzEyZ0c2S21UcDFuL09KZzhFWUcyWUlpSS85YytmdldBc2pEZXZDSFN0bjlJZVdrSDVyaU9scUxjN2lnQTZ0QklVb0pzLzZ3RXIvbzZRMUJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgsImFkdlNlY3JldEtleSI6Ii9ETWEvQm5xMStiTTZIZ2NhTjFRWmpOZG9tcWwzMHduOVFZdS84b1hMTm89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU2NzA1OTgxODU5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkIwOEIzQjFFOEQ0QjBCMEM5OUI4NzdEQkZCRDk1QjIxIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjAwNTAxNTl9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NjcwNTk4MTg1OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyRUNENTk3OTNCMjJCQzNEMzlEMjIzNTA0OTJDQjEyQyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIwMDUwMTU5fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJzd0RNNDNyNFF1Mmd1QmF4U1lITU9nIiwicGhvbmVJZCI6ImY5MjJlNjYwLTFkMTEtNDE4Ny05N2M1LWJmYzBlNGMyZDk4YSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzczB6RkViM2ljYlByTmJHcGRLRFJ6ZExKc1U9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSm1kWUJrc2V3QXBqYWVPK2dmbFg3RU9OM0gwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjUyWjE4UEJKIiwibWUiOnsiaWQiOiIyNTY3MDU5ODE4NTk6NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLCvyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSjNTeFlnQkVPRERsN1FHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiK3hPaEdzQ280U1dvUTZ5WWI2S1ppQzNCQ20vQ21lZzBEMEk2QnBzMndGST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSEl3RmpQRkRKMmp4WHpZSmhTUDgwYVRuUXQrYVR1cGFMMFNGblIrWlMzdFBOc0RBejhLVTVUWDd1TmtOdzV2cW41c3ZBMmhhZnhCdDdyMUsrN2ZGQVE9PSIsImRldmljZVNpZ25hdHVyZSI6IlBnOHZMenpPVlJsQ3VZMVlqN3ovWTFFanJsd2IrV1dNU1RhRVBEVzMzaS90aWtlZFhPZ1BxWmJKUElnR0I3SDFwZ0Q4WDdZaGVWbG5EVUVOTTBsaUJBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU2NzA1OTgxODU5OjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZnNUb1JyQXFPRWxxRU9zbUcraW1ZZ3R3UXB2d3Bub05BOUNPZ2FiTnNCUyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDA1MDE1NywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHZnMifQ==",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'SITHUWA BOT',
  packname:  process.env.PACK_NAME || 'MADE BY SITHUM KALHARA',
  
  botname:   process.env.BOT_NAME === undefined ? "SITHUWA-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'sithumkalhara' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱɪᴛʜᴜᴡᴀ-ᴍᴅ•* ",   //*『sᴜʙsᴄʀɪʙᴇ • ʙʟᴀᴅᴇ ᴛᴇᴄʜ』*\n youtube.com/@blade444"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'sithuwa-md',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
