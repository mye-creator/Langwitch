let isEmpty = require("./isEmpty.js").isEmpty;

let splitValue = function (fullValue, types) {
   if (/\((.*?)\)/g.test(fullValue)) {
       type = fullValue.match(/\((.*?)\)/g)[0].slice(1, -1); // "(int)"
       value = fullValue.replace(new RegExp("\\("+type+"\\)", "g", "")); // 100

       if (dictionary["function"][command.toLowerCase()]) {
            if (types.indexOf(type) !== -1) {
               
            }
            else {
               console.error(`Unknown type : "${type}"`);
               return;
            }
       }
   }
   else {

   }
}

module.exports.splitValue = splitValue;
