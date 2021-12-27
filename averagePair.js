function averagePair(arr = [], average) {
  let indexMin = 0;
  let indexMax = arr.length - 1;
  let isFound = false;
  while(indexMin < indexMax) {
    const ave = (arr[indexMin] + arr[indexMax]) / 2;
    if (ave === average) {
      isFound = true;
      break;
    } else if (arr[indexMax - 1] > average) {
      indexMax -= 1;
    } else {
      indexMin += 1;
    }
  }

  return isFound;
}

console.log(averagePair([1,2,3], 2.5));
console.log(averagePair([1,2,3,5,6,7,10,12,19], 8));
console.log(averagePair([-1,0,3,5,6], 4.1));
console.log(averagePair([], 4));