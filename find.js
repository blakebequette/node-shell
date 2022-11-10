const fs = require("fs");



function find2(dirName, searchTerm, done) {
  let rez = []; 
  function inner(currentDir) {
    fs.readdir(currentDir, {withFileTypes: true}, (err, files) => {
      if (err) return err;
      files.map(file => {
        if (!file.isDirectory()) {
          if (file.name.includes(searchTerm)) {
            rez.push(file.name) // done(file.name) //found.push(file.name)
          }
        } else {
          inner(currentDir + "/" + file.name)
        } 
      })
    })
  }

  inner(dirName)
  setTimeout(() => done(rez.join('\n')), 500);
}


module.exports = find2