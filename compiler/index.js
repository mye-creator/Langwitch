let fs = require("fs");

fs.readFile("test/test.lw", "utf-8", function(error, content) {
  let text = content.replace(/\s\s+/gm, " ");
  let strings = text.split(';');

  for (let i = 0; I < strings.length; i++) {
    let currentStrings = strings[i];
  }
});