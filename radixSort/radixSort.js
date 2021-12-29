function getDigit (number = 0, digit = 0) {
  const string = number.toString();
  const result = Number(string[string.length - 1 - digit]);
  return isNaN(result) ? 0 : result;
}

function getDigitCount (number = 0) {
  const string = number.toString();
  return string.length;
}

function getMaxDigitOnArray (arr = []) {
  let maxDigit = 0;
  for(let i = 0; i < arr.length; i ++) {
    let digitCount = getDigitCount(arr[i]);
    if (maxDigit < digitCount) maxDigit = digitCount;
  }
  return maxDigit;
}

function radixSort (arr = []) {
  let arrTemp = Array.from({length: 10}, () => []);
  let maxDigit = getMaxDigitOnArray(arr);
  const max = arr.length;
  for(let i = 0; i < maxDigit; i ++) {
    for(let j = 0; j < max; j++) {
      const number = arr.shift();
      const digit = getDigit(number, i);
      arrTemp[digit].push(number);
    }
    arrTemp.forEach((numberArr) => {
      while(numberArr.length) {
        const number = numberArr.shift();
        arr.push(number);
      }
    })
  }

  return arr;
}


let arr = [1556, 4, 3556, 593, 408, 4386, 902, 7, 8157, 86, 9637, 29]
let arr1 = [4, 1, 5, 11,  2, 3]

console.log(radixSort(arr1))
