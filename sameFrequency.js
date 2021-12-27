function sameFrequency(num1 = 0, num2 = 0) {
  let string1 = num1.toString();
  let string2 = num2.toString();

  if (string1.length !== string2.length) return false;
  const obj = {}

  for (let val of string1) {
    if (obj[val]) {
      obj[val] += 1;
    } else {
      obj[val] = 1;
    }
  }

  for(let val of string2) {
    if (!obj[val]) return false;
    else if (obj[val]) {
      obj[val] -= 1;
    }
  }

  return true;
}

console.log(sameFrequency(123,321));
console.log(sameFrequency(1232,321));
console.log(sameFrequency(0,321));
console.log(sameFrequency(54321,12345));
console.log(sameFrequency(55521,51255));