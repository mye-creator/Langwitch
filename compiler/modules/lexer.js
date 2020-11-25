let LEXER = function (content, dictionary) {

  let text = content.replace(/\s\s+/gm, " ");
  let strings = text.split(';');

  let lexems = [];

  for (let i = 0; i < strings.length; i++) {
    let currentString = strings[i].trim();

    if (currentString !== "") {
      let words = currentString.split(" ");
      let copyString = currentString;
      let stringObject = {};

      let command = words[0];

      if (dictionary["function"].indexOf(command.toLowerCase()) != -1) {
        Object.assign(stringObject, {
          "function": command
        });
      }
      let value = copyString.replace(new RegExp(command + " : ", "g"), "");
      if (/\"(.")\"/gim.test(value)) {
        // string
      } else {
        // number or anything else
      }
    }
  }
  // Our code here

  return lexems;
};

module.exports.LEXER = LEXER;