

// // The stdin 'data' event fires after a user types in a line
// process.stdin.on("data", (data) => {
//   const cmd = data.toString().trim(); //remove the newline

//   process.stdout.write("You typed: " + cmd + "\n");
//   if (cmd === "pwd") {
//     process.stdout.write(process.env.PWD);
//   }

//   process.stdout.write("\nprompt > ");
// });

function pwd() {
    process.stdout.write(process.env.PWD);
    process.stdout.write("\nprompt > ");
}

module.exports = pwd