var fs = require("fs");

console.log("Program started");
var data = fs.readFileSync("example.txt");
console.log(data.toString());

for (var i = 0; i < 15; i++) {
  console.log("Node just keep on going while the file is being read...");
}

function results(err, data) {
  if (err) return console.error(err);
  console.log("Results of fileread: ");
  console.log(data.toString());
}

console.log("Server running at http://127.0.0.1:8081/");
