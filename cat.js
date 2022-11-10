const fs = require("fs");
function cat(fileName, done) {
  fs.readFile(fileName, "utf-8", function (err, data) {
    if (err) {
      throw err;
    }
    done(data);
  });
}

module.exports = cat;
