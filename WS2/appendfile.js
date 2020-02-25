var fs = require("fs");

fs.writeFile("example3.text", "I wrote this", function(err) {
  if (err) throw err;
  console.log("Updated!");
});
