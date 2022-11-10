const ls = require("./ls");
const pwd = require("./pwd");
const cat = require("./cat");
const newDate = require("./date");
const echo = require("./echo");
const head = require('./head');
const tail = require("./tail");
const sort2 = require('./sort')

const done = (output) => {
  process.stdout.write(output + "\n" + "prompt > ");
};

//Output a prompt
process.stdout.write("prompt > ");

// The stdin 'data' event fires after a user types in a line
process.stdin.on("data", (data) => {
  const [cmd, ...args] = data.toString().trim().split(" "); //remove the newline

  process.stdout.write("You typed: " + cmd + "\n");
  if (cmd === "pwd") {
    pwd(done);
  }
  if (cmd === "ls") {
    ls(done);
  }
  if (cmd === "cat") {
    cat(args[0], done);
  }
  if (cmd === "date") {
    newDate(done);
  }
  if (cmd === "echo") {
    echo(done);
  }
  if (cmd === 'head') {
    head(args[0], done)
  }
  if (cmd === 'tail') {
    tail(args[0], done)
  }
  if (cmd === 'sort') {
    sort2(args[0], done)
  }
});
