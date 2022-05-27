/*
› Create By @RIY
› Base Ori @DikaArdnt
› Kalau mau tambahin fitur di index.js
› Edit text menu di file language › help.js
*/

//gausah di apa² in!
const fs = require('fs')
const chalk = require('chalk')

//—————「 Website Apikey 」—————//
global.APIs = {
//gausah di apa² in!
zenz: 'https://zenzapis.xyz',
}

//—————「 Website Apikey 」—————//
global.APIKeys = {
//gausah di apa² in, udah free apikey :)
'https://zenzapis.xyz': 'BagasPrdn',
}

//—————「 Setting Owner 」—————//
global.owner = ['6288215689772','6288215689772','6288215689772'] //ubah jadi nomor mu, note tanda ' gausah di hapus!
global.premium = ['6288215689772'] //ubah jadi nomor mu, note tanda ' gausah di hapus!
global.ownernomer = '6288215689772' //ubah jadi nomor mu, note tanda ' gausah di hapus!

//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'Fangz' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.botname = 'FangzBOTZ' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.footer = 'FangzBOTZ | FangzGanz' //ubah jadi nama mu, note tanda ' gausah di hapus!

//—————「 Set Kebutuhan Button & Kontak 」—————//
//ubah aja kalau ada yang gapunya gsh di hps anggap aja credits :), note tanda ' gausah di hapus!
global.youtube = 'tiktok.com/@fangzjb'
global.ig = 'https://instagram.com/darmapryanda?igshid=YmMyMTA2M2Y='
global.mygc = 'https://chat.whatsapp.com/IAtQHCRjPzX2A3qHi9VlgQ'
global.myweb = 'https://s.id/RiyAPIs'
global.email = 'fangzcraft178@gmail.com'
global.region = 'indonesia'

//—————「 Set Wm 」—————//
global.packname = '© FangzBOTZ' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.author = 'FangzGanz' //ubah jadi nama mu, note tanda ' gausah di hapus!

//—————「 Set Nama Session 」—————//
//gausah di apa² in!
global.sessionName = 'session'

//—————「 Set Limit 」—————//
//terserah mau ubah atau nggak, note : tanda ' gausah di hapus ya 🗿
global.limitawal = {
premium: "Infinity",
free: 15,
}

//—————「 Set Image 」—————//
//terserah mau ubah apa nggak, menurut gua jangan di ubah!
global.thumb = fs.readFileSync('./image/chika.jpg')
global.veloriy = fs.readFileSync('./image/chika.mp4')

//—————「 Set Image Welcome 」—————//
//terserah mau ubah apa nggak, menurut gua jangan di ubah!
global.BgWelcLeav = 'https://telegra.ph/file/ca207893ae26d531cd9c6.jpg'

//—————「 Set Random Image Menu 」—————//
//gausah di apa² in!
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//—————「 Set Prefix 」—————//
//gausah di apa² in!
global.prefa = ['','!','.','🐦','🐤','🗿']

//—————「 Set Simbol 」—————//
//terserah mai ubah atau nggak, note : tanda ' gausah di hapus!
global.sp = '⭔'

//—————「 Set Message 」—————//
//terserah mau ubah apa nggak, note : tanda ' gausah di hapus!
global.mess = {
	toxic: '',
	kartun: '𝐇𝐮𝐮 𝐈𝐬𝐭𝐫𝐢 𝐤𝐨 𝐤𝐚𝐫𝐭𝐮𝐧',
	pedo: '𝐓𝐜𝐡, 𝐃𝐚𝐬𝐚𝐫 𝐏𝐞𝐝𝐨𝐟𝐢𝐥',
    success: '*✓ 𝐒𝐮𝐜𝐜𝐞𝐬𝐬*',
    admin: '𝐅𝐢𝐭𝐮𝐫 𝐊𝐡𝐮𝐬𝐮𝐬 𝐀𝐝𝐦𝐢𝐧 𝐆𝐫𝐨𝐮𝐩!',
    botAdmin: '𝐁𝐨𝐭 𝐇𝐚𝐫𝐮𝐬 𝐌𝐞𝐧𝐣𝐚𝐝𝐢 𝐀𝐝𝐦𝐢𝐧 𝐓𝐞𝐫𝐥𝐞𝐛𝐢𝐡 𝐃𝐚𝐡𝐮𝐥𝐮!',
    owner: '𝐅𝐢𝐭𝐮𝐫 𝐊𝐡𝐮𝐬𝐮𝐬 𝐎𝐰𝐧𝐞𝐫 𝐁𝐨𝐭',
    group: '𝐅𝐢𝐭𝐮𝐫 𝐃𝐢𝐠𝐮𝐧𝐚𝐤𝐚𝐧 𝐇𝐚𝐧𝐲𝐚 𝐔𝐧𝐭𝐮𝐤 𝐆𝐫𝐨𝐮𝐩!',
    private: '𝐅𝐢𝐭𝐮𝐫 𝐃𝐢𝐠𝐮𝐧𝐚𝐤𝐚𝐧 𝐇𝐚𝐧𝐲𝐚 𝐔𝐧𝐭𝐮𝐤 𝐏𝐫𝐢𝐯𝐚𝐭𝐞 𝐂𝐡𝐚𝐭!',
    bot: '𝐅𝐢𝐭𝐮𝐫 𝐊𝐡𝐮𝐬𝐮𝐬 𝐏𝐞𝐧𝐠𝐠𝐮𝐧𝐚 𝐍𝐨𝐦𝐨𝐫 𝐁𝐨𝐭',
    wait: '```「▰▰▰▱▱▱▱▱▱▱」Loading...```',
    error: '𝐅𝐢𝐭𝐮𝐫 𝐬𝐞𝐝𝐚𝐧𝐠 𝐞𝐫𝐫𝐨𝐫!',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
//—————「 Batas Akhir 」—————//
//gausah si apa² in!
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
