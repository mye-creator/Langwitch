let LEXER = function (content, dictionary) {
  let text = content.replace(/\s\s+/gm, " ");
  let strings = text.split(";");
  
  let lexems = [];

  for (let i = 0; i < strings.length; i++) {
    let currentString = strings[i].trim();

    if (currentString !== "" && currentString[0] !== "#") {
      let parts = currentString.split(":");

      let command = parts[0].trim();
      let fullValue = parts[1].trim();

      let obj = {};

      if (dictionary["function"][command.toLowerCase()]) {
        Object.assign(obj, { 
          "function" : command,
          "value" : fullValue
        });
      }
      else {
        // undefined_function
        console.error(`Unknown function : "${command}"`);
        return;
      }

      lexems.push(obj);
    }
  }

  return lexems;  
};

module.exports.LEXER = LEXER;

/*
if (/\((.*?)\)/g.test(fullValue)) {
  type = fullValue.match(/\((.*?)\)/g)[0].slice(1, -1); // "(int)"
  value = fullValue.replace(new RegExp("\\("+type+"\\)", "g"), ""); // 100
  if (dictionary["function"][command.toLowerCase()]) {
    if (dictionary["types"].indexOf(type) !== -1) {
      Object.assign(obj, { 
        "function" : command,
        "type" : type,
        "value" : value
      });
    }
    else {
      console.error(`Unknown type : "${type}"`);
      return;
    }
  }
  else {
    // undefined_function
    console.error(`Unknown function : "${command}"`);
    return;
  }
}
else {
  console.error("You need to set type of your value!");
  return;
}
*/
