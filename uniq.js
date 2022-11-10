const fs = require("fs");

const uniq = (fileName, done) => {
  fs.readFile(fileName, "utf-8", function (err, data) {
    if (err) {
      throw err;
    } else {
      done(
        data
          .split(`\n`)
          .reduce(
            (acc, curVal) => {
              if (acc[acc.length - 1] !== curVal) {
                acc.push(curVal);
              }
              return acc;
            },
            [data.split("\n")[0]]
          )
          .join("\n")
      );
    }
  });
};

module.exports = uniq;
