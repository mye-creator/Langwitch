let fs = require("fs");

fs.readFile("../test/test.lw", "utf-8", function(error, content) {
  let text = content.replace(/\s\s+/gm, " ");
  let strings = text.split(';');

  let lexems = []

  for (let i = 0; i < strings.length; i++) {
    let currentString = strings[i].trim();

    if (currentString !== "") {
      let words = currentString.split(" ");
      let stringObject = {};

      for (let j = 0; j < words.length; j++) {
        if (words[j].toLowerCase() === "print") {
          stringObject["id"] = "print";
        } else if (words[j].toLowerCase() === ":") {
          stringObject["operator"] = ":";
        } else {
          let copyString = currentString;

          if (/PRINT : \((.*)\)/gim.test(copyString)) {
            let str = copyString.replace(/PRINT : \((.*)\)/gim, '$1');
            stringObject["string"] = str;
          } else if (/PRINT : (.*)/gim.test(copyString)) {
            let num = copyString.replace(/PRINT : (.*)/gim, '$1');
            stringObject["number"] = num;
          }

        }

      }

      lexems.push(stringObject);

    }

  }
  console.log(lexems)
});