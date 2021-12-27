function countUniqueValue (arr = []) {
  let i = 1;
  let count = 0;
  let prev = arr[0];
  while(i <= arr.length) {
    if (prev !== arr[i]) {
      count += 1;
      prev = arr[i];
    }
    i ++;
  }

  return count;
}

console.log(countUniqueValue([1,1,1,1,2]));
console.log(countUniqueValue([1,2,3,4,4,4,4,7,7,12,12,13]));
console.log(countUniqueValue([]));
console.log(countUniqueValue([-2,-1,-1,0,1]))
