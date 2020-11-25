let fs = require("fs");

let dictionary = require("./modules/dictionary.js").DICTIONARY;
let lexer = require("./modules/lexer.js").LEXER;

fs.readFile("../test/test.lw", "utf-8", function(error, content) {
  if (error === null) {
    let lexems = lexems(content, dictionary)

    console.log(JSON.stringify(lexems, null, 4));

  } else {

    console.error("ERROR!!!")
    console.error(error)
  }
});