const { addKeyword, addAnswer } = require("@bot-whatsapp/bot");
const { flowFinal } = require("./flowFinal");
const moment = require("moment");

if (!moment().format("HH") === "13") {
  const flowOtro = addKeyword(["2", "Otro", "fidelity"]);
  addAnswer("Actualmente fuera de servicio")
    .addAnswer("*Error de conexión remota*")
    .addAnswer(
      ["Para finalizar escribe *final o terminar*"],
      null,
      null,
      flowFinal
    );
  module.exports = { flowOtro };
} else {
  const flowOtro = addKeyword(["1", "conversacion"])
    .addAnswer("Me encuentro en horario de almuerzo*", {
      // media: "https://i.imgur.com/0HpzsEm.png",
      media:
        "https://www.semana.com/resizer/cTDBvskYIJErh0N8GiipFCcuCfg=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/JRV2B2FNK5CKLPBPI6ZER2DG5A.jpg",
    })
    .addAnswer("✌🏾✌🏾✌🏾");

  module.exports = { flowOtro };
}
