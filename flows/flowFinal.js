const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");

const flowFinal = addKeyword(["final", "terminar"]).addAnswer(
  "Conversacion *finalizada*"
);

module.exports = { flowFinal };
