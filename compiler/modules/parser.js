function parser (lexems, dictionary) {
   if (lexems && lexems.length !== 0) {
      for (let i = 0; i < lexems.length; i++) {
         let functionName = lexems[i]["function"];
         let valueObj = lexems[i]["value"];
         
         if (dictionary["function"][functionName.toLowerCase()]) {
            (dictionary["function"][functionName.toLowerCase()]()
         }
         else {
            console.error("function \""+functionName+"\" isn't registered!");
         }
      }
   }
   else {
      console.error("Array of lexems is empty");
   }
};

modules.exports.PARSER = parser;
