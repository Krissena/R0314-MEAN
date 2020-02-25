var fs = require("fs");

//Delete the file deleteExampleFile.txt
fs.unlink("deleteExampleFile.txt", function(err) {
  if (err) throw err;
  console.log("File deleted!");
});
