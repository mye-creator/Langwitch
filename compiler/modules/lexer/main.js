let LEXER = function (content, dictionary) {

  let text = content.replace(/\s\s+/gm, " ");
  let strings = text.split(';');

  let lexems = [];

  for (let i = 0; i < strings.length; i++) {
    let currentString = strings[i].trim();

    if (currentString !== "" && currentString[0] !== "##") {
      let parts = currentString.split(":");
      
      let command = partss[0].trim();
      let fullValue = parts[1].trim();
      let type = null;
      let value = null;

      let obj = {};

      if (/\((.*?)\)/g.test(fullValue)) {
          type = fullValue.match(/\((.*?)\)/g)[0].slice(1, -1); // "(int)"
          value = fullValue.replace(new RegExp("\\("+type+"\\)", "g", ""); // 100

          if (dictionary["function"][command.toLowerCase()]) {
            if (dictionary["types"].indexOf(type) !== -1) {
              Object.assign(obj, { 
                  "function" : command,
                  "type" : type,
                  "value" : value });
            }
            else {
               console.error(`Unknown type : "${type}"`);
            }
          }
          else {
             // undefined_function
             console.error(`Unknown function: "${command}"`);
          }

      }
      else {
          console.error("You need to set up type of your value!");
      }

        lexems.push(obj);

      }

  }

    //There is should be other code, but I need to think about it.

    return lexems;
  };

  module.exports.LEXER = LEXER;
