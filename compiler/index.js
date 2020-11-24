let fs = require("fs");

fs.readfile("test/test.lw", "utf-8", function(error, content) {
   console.log(content)        
});
