const prompt = require("prompt-sync")({ sigint: true });

console.log("Who are you?");
const name = prompt("> ");

console.log(`Hello, ${name}`);
