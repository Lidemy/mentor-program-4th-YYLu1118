const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });

const lines = [];

function splitNumber(num, digits) {
  const numbers = [];
  for (let i = 0; i < digits; i += 1) {
    numbers.push(+num.charAt(i));
  }
  return numbers;
}

function solve(data) {
  const numbers = data[0].split(' ');
  for (let i = +numbers[0]; i <= +numbers[1]; i += 1) {
    const digits = `${i}`.length;
    const numbersOfEachDigit = splitNumber(`${i}`, digits);
    let sum = 0;
    for (let k = 0; k < numbersOfEachDigit.length; k += 1) {
      sum += numbersOfEachDigit[k] ** digits;
    }
    if (sum === i) {
      console.log(i);
    }
  }
}

rl.on('line', line => lines.push(line));

// 輸入結束，開始針對 lines 做處理
rl.on('close', () => {
  solve(lines);
});
