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
        Object.assign(stringObject, {
          "string": value
        });
      } else {
        if (Number(value)) {
          //number
          if (Number(value) %-1 === 0) {
            //integer
            Object.assign(stringObject, {
              "integer": Number(value)
            });
          } else {
            //float
            Object.assign(stringObject, {
              "float": Number(value)
            });
          }
        } else {
          //anything else
          Object.assign(stringObject, {
            "undefined": Number(value)
          });
        }
      }
    }
  }

  // Our code here

  return lexems;
};

module.exports.LEXER = LEXER;