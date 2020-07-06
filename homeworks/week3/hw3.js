const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

rl.on('line', (line) => {
  lines.push(line);
});

function checkPrime(n) {
  if (n === 1) return false;
  for (let i = 2; i <= n; i += 1) {
    if (n % i === 0 && n !== i) return false;
  }
  return true;
}

rl.on('close', () => {
  for (let i = 1; i < lines.length; i += 1) {
    let result = 'Composite';
    if (checkPrime(Number(lines[i]))) {
      result = 'Prime';
    }
    console.log(result);
  }
});
