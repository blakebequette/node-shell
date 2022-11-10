const fs = require("fs");

function tail(fileName, done) {
  fs.readFile(fileName, "utf-8", function (err, data) {
    if (err) {
      throw err;
    }
    done(data.split('\n').slice(-10,).join('\n'));
  });
}

module.exports = tail;