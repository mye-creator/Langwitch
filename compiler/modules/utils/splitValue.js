let isEmpty = require("./isEmpty.js").isEmpty;

let splitValue = function (fullValue, types) {
	if (/\((.*?)\)/g.test(fullValue)) {
		let type = fullValue.match(/\((.*?)\)/g)[0].slice(1, -1); // "(int)"
		let value = fullValue.replace(new RegExp("\\("+type+"\\)", "g"), ""); // 100

		if (types.indexOf(type) !== -1) {
			if (!isEmpty(value)) {
				return {
					type : type,
					val : value
				};
			}
			else {
				console.error("Value cant be empty!");
				return;
			}
		}
		else {
			console.error(`Unknown type : "${type}"`);
			return;
		}
	}
	else {
		for (let i = 0; i < global.vars.length; i++) {
			if (global.vars[i].varName === fullValue) {
				return {
					type : global.vars[i].type,
					val : global.vars[i].value,
					varName : global.vars[i].varName
				};
			}
		}
	}
}

module.exports.splitValue = splitValue;
