const mineflayer = require('mineflayer')

function createBot() {
    const bot = mineflayer.createBot({
        host: 'Lloydsworld-LCxb.aternos.me', // Ex: meu-servidor.aternos.me
        port: 30228,                          // Mude para a sua porta de 5 números
        username: 'Zane_Bot',                 // Nome que o bot terá no jogo
        version: '1.20.1'                     // Mude para a versão do seu servidor
    })

    bot.on('spawn', () => {
        console.log('Zane Bot entrou no servidor com sucesso!')
    })

    bot.on('end', () => {
        console.log('Bot desconectado. Tentando reconectar em 10 segundos...')
        setTimeout(createBot, 10000)
    })

    bot.on('error', err => console.log('Erro no bot: ', err))
}

createBot()
