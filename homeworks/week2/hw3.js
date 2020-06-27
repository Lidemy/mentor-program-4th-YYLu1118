function reverse(str) {
  var reverse=''
  for (var i=str.length-1; i>=0; i--){
    reverse+=str[i]
  }
  console.log(reverse)
}

reverse('yoyoyo') 
reverse('1abc2')
reverse('1,2,3,2,1')
