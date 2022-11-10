const fs = require("fs");

const wc = (fileName, done) => {
  fs.readFile(fileName, "utf-8", function (err, data) {
    if (err) {
      throw err;
    }
    done(
      `Bytes: ${data.split(/%..|./).length - 1} Lines: ${
        data.split("\n").length
      } Words: ${data.split(" ").length}`
    );
  });
};

module.exports = wc;
