function reverse(string = '') {
  if (string.length === 0) return '';
  const newString = string.slice(0, string.length - 1);
  return string[string.length - 1] + reverse(newString)
}

console.log(reverse('awesome'))
console.log(reverse('rith'))
