let Type = require("./utils/type.js").TYPE;
let Eval = require("./utils/eval.js").EVAL;
let isEmpty = require("./utils/isEmpty.js").isEmpty;
let splitValue = require("./utils/splitValue.js").splitValue;

let DICTIONARY = {
	"function" : {
		print : function (fullValue) {
			let obj = splitValue(fullValue, DICTIONARY["types"]);

			let type = obj.type;
			let val = obj.val;

			let typeSymbol = "%";
			let parsedValue = Eval(val);

			if (Type.convert(parsedValue) !== type) {
				console.error("Type error : " + typeof parsedValue + " !== " + type);
				return;
			}

			if (type === "char") typeSymbol += "c";
			else if (type === "string") typeSymbol += "s";
			else if (type === "int") typeSymbol += "d";
			else if (type === "float") typeSymbol += "f";
			else if (type === "undefined") typeSymbol += "s";
			else {
				console.error("UNKNOWN_TYPE : " + type);
				return;
			}

			return `printf("${typeSymbol}",${obj.varName && !isEmpty(obj.varName) ? obj.varName : parsedValue});\n`;
		},

		var : function (fullValue) {
			let obj = splitValue(fullValue, DICTIONARY["types"]);

			let type = obj.type;
			let val = obj.val;

			if (val.match(/\=/gm).length !== 1) {
				console.error("Unknown syntax: " + val);
				return;
			}
			else {
				let varName = val.split("=")[0].trim();
				let varValue = val.split("=")[1].trim();

				if (Type.convert(varValue) !== type) {
					console.error("Type error : " + typeof parsedValue + " !== " + type);
					return;
				}
				else {
					if (/[^a-zA-z0-9]/gm.test(varName)) {
						console.error("There are unacceptable symbols in the variable name : " + varName);
						return;	
					}
					else {
						if (/[0-9]/gm.test(varName[0])) {
							console.error("The first letter of the variable should not be a number : " + varName);
							return;	
						}
						else {
							global.vars.push({
								type : type,
								value : varValue,
								varName : varName
							});

							if (Type.convert(varValue) === "string") {
								return `char ${varName}[] = ${varValue};\n`;
							}
							else {
								return `${type} ${varName}=${varValue};\n`;
							}
						}
					}
				}
			}
		}
	},

	"types" : [
		"int",
		"float",
		"string",
		"char"
	]
};

module.exports.DICTIONARY = DICTIONARY;
