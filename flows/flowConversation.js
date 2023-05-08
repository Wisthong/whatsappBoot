const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");
const { flowFinal } = require("./flowFinal");

// const flowPrincipal = addKeyword(EVENTS.WELCOME)
const flowConversation = addKeyword(["1", "conversacion"])
  .addAnswer("Has elegido chatear con *Wisthong*")
  .addAnswer("En unos instantes estare contigo")
  .addAnswer(
    ["Para finalizar escribe *final o terminar*"],
    null,
    null,
    flowFinal
  );

module.exports = { flowConversation };
