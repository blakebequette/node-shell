const fs = require("fs");


function sort2(fileName, done) {
  fs.readFile(fileName, "utf-8", function (err, data) {
    if (err) {
      throw err;
    }
    done(data.split('\n').sort().join('\n'));
  });
}

module.exports = sort2;