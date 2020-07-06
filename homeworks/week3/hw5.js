const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

rl.on('line', (line) => {
  lines.push(line);
});

// javascript 整數若大於 Math.pow(2, 53) 也就是大於 9007199254740992 時，執行運算就會出現失去精準度的狀況
// 詳情可參考 https://blog.csdn.net/qq_35271556/article/details/80137474
// 根據題意，保證長度為 512 個位數以內
// 因此，不能直接把 A, B 直接轉成 Number 做比較
function solve(a, b) {
  // 當 A 位數比 B 多
  if (a.length > b.length) {
    return 'A';
  }

  // 當 B 位數比 A 多
  if (a.length < b.length) {
    return 'B';
  }

  // 當 A B 位數一樣多
  for (let i = 0; i < a.length; i += 1) {
    const xA = +a[i];
    const xB = +b[i];
    if (xA > xB) {
      return 'A';
    }
    if (xB > xA) {
      return 'B';
    }
  }

  // A B 數字一樣
  return 'DRAW';
}

rl.on('close', () => {
  for (let i = 1; i < lines.length; i += 1) {
    let [a, b, k] = lines[i].split(' '); // eslint-disable-line
    if (k === '-1') {
      const tmp = b;
      b = a;
      a = tmp;
    }
    console.log(solve(a, b));
  }
});
