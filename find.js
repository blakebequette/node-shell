const fs = require("fs");
const find = (dirName, searchTerm, done) => {
  fs.readdir(dirName, function (err, files) {
    files.forEach((file) => {
      if (file === searchTerm) {
        return;
      }
    });
  });
};
