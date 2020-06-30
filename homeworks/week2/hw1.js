function printStars(n) {
  var answer=''
  for(var i=1;i<=n;i++){
    answer+='*\n'
  }
  console.log(answer)
}

printStars(1)
printStars(3)
printStars(6)

// function foo(n) {
//   for(let i = 0; i < n; i++) {
//     console.log('*')
//   }
// }

// foo(3)