let fs = require('fs')
let handler = async (m, { conn, args, command }) => {
let qris = 'https://telegra.ph/file/19e41947c0a6ae28dbf62.jpg'
let dann =
`
┏━━━ꕥ〔 *${global.wm2}* 〕ꕥ━⬣ 
┃Pulsa: 08815109103 ( Sf )
┃Dana: 08815109103
┗━━━ꕥ
`
 await conn.sendFile(m.chat, qris, 'thumnail.png', `${dann}`, m)
}

handler.help = ['donasi']
handler.tags = ['info', 'main']
handler.command = /^(donasi|donate)$/i
module.exports = handler