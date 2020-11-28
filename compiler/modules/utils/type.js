let Type = class {
	static convert (variable) {
		if (typeof variable === "object" || typeof variable === "boolean" || typeof variable === "function" || typeof variable === "null" || typeof variable === "undefined") {
			console.error("Error! Unknown data type!");
			return;
		}
		else {
			if (variable.match && variable.match(/".+?"/gm) !== null) {
				if (variable.match(/\"/gm).length % 2 === 0) {
					if (variable.match(/".+?"/gm).length === 1) {
						if (variable.match(/".+?"/gm)[0].length === 1) {
							return "char";
						}
						else {
							return "string";
						}
					}
					else {
						console.error("Error! In one line there are more than 1 string declaration!");
						return;
					}
				}
				else {
					console.error("Error! Incorrect string declaration!");
					return;
				}
			}
			else {
				if (Number(variable) % 1 === 0) {
					return "int";
				}
				else {
					return "float";
				}
			}
		}
	}
}

module.exports.TYPE = Type;
