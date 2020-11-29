let fs = require("fs");

let dictionary = require("./modules/dictionary.js").DICTIONARY;
let lexer = require("./modules/lexer/main.js").LEXER;
let parser = require("./modules/parser/main.js").PARSER;

global.vars = [];

fs.readFile("../test/test.lw", "utf-8", function (error, content) {

	if (error === null) {
		let lexems = lexer(content, dictionary);
		let parsedString = parser(lexems, dictionary);

		console.log(parsedString);

		// console.log(JSON.stringify(lexems, null, 4));
	}
	else {
		console.error("ERROR!");
		console.error(error);
	}

});
