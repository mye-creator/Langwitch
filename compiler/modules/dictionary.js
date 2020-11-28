let DICTIONARY = {
  "function" : {
    print : function (type, val) {
       let typeSymbol = "%";
      
       if (type === "char") typeSymbol += "c";
       else if (el.type === "string") typeSymbol += "s";
       else if (el.type === "int") typeSymbol += "d";
       else if (el.type === "float") typeSymbol += "f";
       else if (el.type === "undefined") typesymbol += "s";
       else {
          console.error("UNKNOWN_TYPE");
          return;
       }
       
       return `printf(${typeSymbol}, ${val});\n`;

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
