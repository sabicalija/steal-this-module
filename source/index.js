const { add } = require("./math.js");
const cowsay = require("cowsay");

module.exports = {
  hello: function() {
    console.log(`3 + 2 = ${add(3, 2)}`);
    console.log(
      cowsay.say({
        text: "Steal This Module!",
        e: "xX",
        T: "U"
      })
    );
  }
};
