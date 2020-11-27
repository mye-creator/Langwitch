function parser (lexems, dictionary) {
   if (lexems && lexems.length !== 0) {
      for (let i = 0; i < lexems.length; i++) {
         let functionName = lexems[i]["function"]["function"] ? lexems[i]["function"] : lexems[i]["undefined_function"];
         let valueObj = lexems[i]["value"] = dictionary["function"][functionName.toLowerCase()];
         
         if (lexems[i]["function"] && dictionary["function"][functionName.toLowerCase()]) {
            let curretnFunction = dictionary["function"][functionName.toLowerCase()];
            
            currentFunction(valueObj.value);
         }
         else {
            console.error("function \""+functionName+"\" isn't registered!");
         }
      }
   else {
      console.error("Array of lexems is empty");
   }
};

modules.exports.PARSER = parser;
