let fs = require("fs");

let lexer = require("./modules/lexer.js").LEXER;

fs.readFile("../test/test.lw", "utf-8", function(error, content) {

  console.log(JSON.stringify(lexems, null, 4));
});