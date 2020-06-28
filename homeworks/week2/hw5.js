function join(arr, concatStr) {
  let joinedStr = ''
  for (let i=0; i<arr.length; i++) {
      if (i !== arr.length-1) {
          joinedStr += arr[i]
          joinedStr += concatStr
      } else {
          joinedStr += arr[i]
      } 
  }
  return joinedStr
}

function repeat(str, times) {
  let repeatedStr = ''
  for ( let i = 0; i < times; i++){
    repeatedStr += str
  }
  return repeatedStr
}

console.log(join(["a", "b", "c"], "!"))
console.log(join(['a', 1, 'b', 2, 'c', 3], ','))
console.log(repeat('a', 5))
console.log(repeat('yoyo', 2))


