let fs = require("fs");

fs.readFile("test/test.lw", "utf-8", function(error, content) {
  console.log(content)
});