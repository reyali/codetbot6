let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO BOT* ⚠️
Dibuat dengan javascript via NodeJs,Ffmpeg,dan ImageMagick

Rec: Sugar Dady
Script: @reyali_adji
Github: 
https://github.com/reyali/codetbot5

*Sosmed :*
Kritik kami di sosmed
Instagram: @reyali_adji

*Thanks To :*
Allah.SWT

╠═〘 DONASI 〙 ═
╠➥ Tsel: 082252420430
║>Request? Wa.me/6282252420430
╠═〘 INFO BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

