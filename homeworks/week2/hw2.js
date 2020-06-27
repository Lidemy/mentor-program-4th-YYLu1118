function capitalize(str) {
  var firstUppercaseLetter = str.charAt(0).toUpperCase()+str.slice(1)
  return firstUppercaseLetter
}

console.log(capitalize('nick'));
console.log(capitalize('Nick'));
console.log(capitalize(',hello'));
