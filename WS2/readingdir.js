var fs = require("fs");

console.log("Program started");

fs.readFile("example1.txt", function(err, data) {
  if (err) return console.error(err);
  console.log("Results of fileread:");
  console.log(data.toString());
});

for (i = 0; i < 3; i++) {
  console.log("Keep on reading the file");
}
console.log("Program Ended");
