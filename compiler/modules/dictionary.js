let DICTIONARY = {
  "function" : {
    print : function (el) {
       let type = "%";
      
       if (el.type === "char") type += "c";
       else if (el.type === "string") type += "s";
       else if (el.type === "integer") {
          if (el.subtype) === "infinity") {
             console.error("Too big number!");
             return;
          }
       }
       else if (el.type === "float") type += "f";
       else if (el.type === "undefined") type += "s";
       else {
          console.error("UNKNOWN_TYPE");
          return;
       }
       
       return `printf(${type}, ${el.value});`;
    }
  }
};
module.exports.DICTIONARY = DICTIONARY;
