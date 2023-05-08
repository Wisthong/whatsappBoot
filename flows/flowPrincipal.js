const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");
const { flowConversation } = require("./flowConversation");

const flowPrincipal = addKeyword(EVENTS.WELCOME)
  // const flowPrincipal = addKeyword(["hola", "alo"])
  .addAnswer("Bivenid@ al *ChatBot de Wisthong*")
  .addAnswer([
    "¿En que puedo ayudarte?",
    "",
    "*1* Conversación",
    "*2* Jusan / Fidelity",
    "*3* Otro",
  ])
  .addAnswer(["En unos instantes estare contigo"], null, null, [
    flowConversation,
  ]);

module.exports = { flowPrincipal };
