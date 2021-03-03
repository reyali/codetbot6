let handler = function (m) {
  // this.sendContact(m.chat, '6282252420430', 'Reyali/codet', m)
  this.sendContact(m.chat, '6282252420430', 'My Owner BOT', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
