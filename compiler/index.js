let fs = require("fs");

let dictionary = require("./modules/dictionary.js").DICTIONARY;
let lexer = require("./modules/lexer/main.js").LEXER;
let parser = require("./modules/parser/main.js").PARSER;

fs.readFile("../test/test.lw", "utf-8", function(error, content) {
  if (error === null) {
    let parsedString = lexems(content, dictionary);
    
    parser(lexems, dictionary);
    // console.log(JSON.stringify(lexems, null, 4));

  } else {

    console.error("ERROR!!!")
    console.error(error)
  }
});
