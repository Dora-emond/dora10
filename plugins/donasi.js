let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `
┌〔 Donasi • Emoney 〕

├ Dana,Gopay,Linkaja (082387704390)
├ Pulsa 
├ three wa.me/6289601145546
├ telkomsel wa.me/6282387704390
├ https://saweria.co/Doraemond
├
├ _saya harap kamu menyukai bot saya
├ dan jangan lupa untuk mensupport saya
├ karena saya sangat menyukai Dora :D_
└────
`.trim(), '© Doraemond', 'Donasi', '.donasi', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
