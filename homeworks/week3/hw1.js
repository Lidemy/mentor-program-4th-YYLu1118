const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

rl.on('line', (line) => {
  lines.push(line);
});

const star = '*';

rl.on('close', () => {
  for (let i = 0; i < +lines[0]; i += 1) {
    console.log(star.repeat(i + 1));
  }
});
