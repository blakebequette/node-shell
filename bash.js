const ls = require("./ls");
const pwd = require("./pwd");
const cat = require("./cat");
const newDate = require("./date");
const echo = require("./echo");

const done = (output) => {
  process.stdout.write(output + "\n" + "prompt > ");
};

//Output a prompt
process.stdout.write("prompt > ");

// The stdin 'data' event fires after a user types in a line
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim().split(" "); //remove the newline

  process.stdout.write("You typed: " + cmd[0] + "\n");
  if (cmd[0] === "pwd") {
    pwd(done);
  }
  if (cmd[0] === "ls") {
    ls(done);
  }
  if (cmd[0] === "cat") {
    cat(cmd[1], done);
  }
  if (cmd[0] === "date") {
    newDate(done);
  }
  if (cmd[0] === "echo") {
    echo(done);
  }
});
