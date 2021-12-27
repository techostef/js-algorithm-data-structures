function isPalindrome (string = '') {
  function reverse(string = '') {
    if (string.length === 0) return '';
    const newString = string.slice(0, string.length - 1);
    return string[string.length - 1] + reverse(newString)
  }
  
  return string === reverse(string)
}

console.log(isPalindrome('awesome'))
console.log(isPalindrome('tacocat'))