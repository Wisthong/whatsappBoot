const { addKeyword, addAnswer } = require("@bot-whatsapp/bot");
const { flowFinal } = require("./flowFinal");
const moment = require("moment");

if (!moment().format("HH") === "13") {
  const flowJusan = addKeyword(["2", "jusan", "fidelity"])
    .w
  module.exports = { flowJusan };
} else {
  const flowJusan = addKeyword(["1", "conversacion"])
    .addAnswer("Me encuentro en horario de almuerzo*", {
      // media: "https://i.imgur.com/0HpzsEm.png",
      media:
        "https://www.semana.com/resizer/cTDBvskYIJErh0N8GiipFCcuCfg=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/JRV2B2FNK5CKLPBPI6ZER2DG5A.jpg",
    })
    .addAnswer("✌🏾✌🏾✌🏾");

  module.exports = { flowJusan };
}
