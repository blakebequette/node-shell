const fs = require("fs");
function head(fileName, done) {
  fs.readFile(fileName, "utf-8", function (err, data) {
    if (err) {
      throw err;
    }
    done(data.split('\n').slice(0,10).join('\n'));
  });
}

module.exports = head;
