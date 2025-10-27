import TelegramBot from "node-telegram-bot-api";

const TOKEN = "7884966007:AAEDoJw5reFpTSk4o1qx3xzum3cBTrMnuiM"

const bot = new TelegramBot(TOKEN, { polling: true })

bot.on("message", function (msg) {
    const chatId = msg.chat.id;
    const firstname = msg.chat.first_name;
    bot.sendMessage(chatId, `Xush Kelibsiz, ${firstname}` ), {
        
    }

})

console.log("Bot ishga tushdi");
