let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Telkomsel [085337396419]
│ • Gopay [085337396419]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6282340533705
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
