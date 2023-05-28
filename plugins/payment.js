let fs = require('fs')
let handler = async (m, { conn, args, command }) => {
let qris = 'https://telegra.ph/file/395e20536473665ab2c5d.jpg'
let dann =
`
Scan diatas untuk memproses pembelian anda
`
 await conn.sendButton(m.chat, dann, wm, qris, [['Menu', '.menu']], m)
}

handler.help = ['payment', 'pembayaran']
handler.tags = ['info', 'tools']
handler.command = /^(payment|pembayaran)$/i
module.exports = handler