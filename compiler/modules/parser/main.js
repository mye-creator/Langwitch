function parser (lexems, dictionary) {
   let start = `#include <stdio.h>\n\nint main () {\n`;
   let current = null;
   let end = `return 0;\n}`;
   
   if (lexems && lexems.length !== 0) {
      for (let i = 0; i < lexems.length; i++) {
         let functionName = lexems[i]["function"];
         let typeObj = lexems[i]["type"];
         let valueObj = lexems[i]["value"];
         if (lexems[i]["function"] && dictionary["function"][functionName.toLowerCase()]) {
            let currentFunction = dictionary["function"][functionName.toLowerCase()];
            
            current = currentFunction(typeObj.value);
            start = start + current;
         }
         else {
            console.error("function \""+functionName+"\" isn't registered!");
         }
      }

      return start + end;
   else {
      console.error("Array of lexems is empty");
   }
};

modules.exports.PARSER = parser;
