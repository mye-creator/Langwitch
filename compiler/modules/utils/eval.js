let Type = require("./type.js").TYPE;

let Eval = function (value) {
        if (Type.convert(value) === "int" || Type.convert(value) === "float") {
                let evaled = eval(value);

                if (typeof evaled === "number" && isFinite(evaled)) {
                        return evaled;
                }
                else {
                        console.error("Error while calculating the value!");
                        return;
                }
        }
        else {
                return value;
        }
}

module.exports.EVAL = Eval;
