let DICTIONARY = {
  "function" : {
    print : function (type, val) {
       let typeSymbol = "%";
       let parsedValue = value;
       
       if (type === "int" || type === "float") {
          parsedValue = eval(parsedValue);
         
          if (typeof parsedValue !== type) {
             console.error("Type Error : " + typeof parsedValue + " !== " + type);
             return;
          }
       }
       
       if (type === "char") typeSymbol += "c";
       else if (el.type === "string") typeSymbol += "s";
       else if (el.type === "int") typeSymbol += "d";
       else if (el.type === "float") typeSymbol += "f";
       else if (el.type === "undefined") typeSymbol += "s";
       else {
          console.error("UNKNOWN_TYPE : " + type);
          return;
       }
       
       return `printf(${typeSymbol},${parsedValue});\n`;

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
