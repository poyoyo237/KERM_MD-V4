/*
_  ______   _____ _____ _____ _   _
| |/ / ___| |_   _| ____/___ | | | |
| ' / |  _    | | |  _|| |   | |_| |
| . \ |_| |   | | | |__| |___|  _  |
|_|\_\____|   |_| |_____\____|_| |_|

ANYWAY, YOU MUST GIVE CREDIT TO MY CODE WHEN COPY IT
CONTACT ME HERE +237656520674
YT: KermHackTools
Github: Kgtech-cmr
*/








const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: "dev",
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `*╭┈───────────────•*

*👋 HELLO ${pushname}*

*╰┈───────────────•*
*╭┈───────────────•*
*│  ◦* *ᴡᴇʟᴄᴏᴍᴇ ɪᴛs Kᴇʀᴍ_Mᴅ-V4*
*│  ◦* *ᴄʀᴇᴀᴛᴇʀ 𝟣 Lᴏʀᴅ Kᴇʀᴍ²³⁷*
*│  ◦* *ᴄʀᴇᴀᴛᴇʀ 𝟤 Tʜᴇ Gɪꜰꜰᴀʀᴇɴᴏ²³⁷*
*│  ◦* *ʀᴇᴀʟ ɴᴀᴍᴇ➠ Bᴜᴛ Kᴇʀᴍ😂.*
*│  ◦* *ᴘᴜʙʟɪᴄ ɴᴀᴍᴇ➠ Kᴇʀᴍ*
*│  ◦* *ᴀɢᴇ➠ ᴛᴡᴇɴᴛʏ ʏᴇᴀʀ*
*│  ◦* *ᴄɪᴛʏ➠ Dᴏᴜᴀʟᴀ*
*│  ◦* *ᴀ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ᴅᴇᴠᴇʟᴘᴏʀ*
*╰┈───────────────•*
> *◆◆◆◆◆◆◆◆◆◆◆◆*

*[ • 𝖪𝖤𝖱𝖬_𝖬𝖣－𝖵𝟦 - TEAM • ]*
*╭┈───────────────•*
*│  ◦* *▢➠Lᴏʀᴅ Kᴇʀᴍ²³⁷*
*│  ◦* *▢➠Tʜᴇ Gɪꜰꜰᴀʀᴇɴᴏ²³⁷*
*│  ◦* *▢➠ɴᴏᴛʜɪɴɢ*
*╰┈───────────────•*
*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝖪𝗀 𝖳𝖾𝖼𝗁
*•────────────•⟢*
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:about},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
