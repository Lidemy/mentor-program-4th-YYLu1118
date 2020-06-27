function printStars(n) {
  var answer=''
  for(var i=1;i<=n;i++){
    answer+='*\n'
  }
  console.log(answer)
}

function foo(n) {
  for(let i = 0; i < n; i++) {
    console.log('*')
  }
}

// printStars(5)
foo(3)