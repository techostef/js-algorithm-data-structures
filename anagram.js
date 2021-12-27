function anagramValid(string1 = '', string2 = '') {
  if (string1.length !== string2.length) return false;

  let obj1 = {};

  for(let item of string1) {
    if (!obj1[item]) {
      obj1[item] = 1;
    } else {
      obj1[item] += 1;
    }
  } 

  let obj2 = {};

  for(let item of string2) {
    if (!obj2[item]) {
      obj2[item] = 1;
    } else {
      obj2[item] += 1;
    }
  } 

  // console.log('string', string1, string2)
  // console.log('obj', obj1, obj2)

  for(let key in obj1) {
    if (obj1.hasOwnProperty(key)) {
      if (obj1[key] !== obj2[key]) {
        return false
      }
    }
  }

  return true;
}

console.log(anagramValid('', ''));
console.log(anagramValid('aaz', 'zza'));
console.log(anagramValid('gaba', 'baga'));
console.log(anagramValid('rat', 'car'));