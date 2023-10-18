const { stdin, stdout } = require("process");

function principal() {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("¿Cual es tu nombre? : ", (nombre) => {
    console.log(`Hola, ${nombre}`);
  });
}

principal();
