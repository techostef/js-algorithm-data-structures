function isSubsequence(string1 = '', string2 = '') {
  let i = 0;
  let j = 0;
  while(j < string2.length) {
    if (string1[i] === string2[j]) i ++;
    if (i === string1.length) return true;
    j++;
  }
  return false;
}

console.log(isSubsequence('sing', 'string'));
console.log(isSubsequence('abc', 'abfjascadasd'));
console.log(isSubsequence('abe', 'abfjascadasd'));
console.log(isSubsequence('abc', 'acb'));

