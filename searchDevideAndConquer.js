function searchDevideAndConquer(arr = [], search) {
  let indexMin = 0;
  let indexMax = arr.length - 1;
  let indexFound = undefined;

  while(indexMin <= indexMax) {
    let middle = Math.floor((indexMin + indexMax) / 2);
    const number = arr[middle];

    if (number === search) {
      indexFound = middle;
      break;
    }
    else if (search < number) {
      indexMax = middle - 1;
    } else {
      indexMin = middle + 1;
    }
  }
  return indexFound;
}

console.log(searchDevideAndConquer([1,2,3,5,7,8,9], 1));
console.log(searchDevideAndConquer([1,2,3,5,7,8,9], 3));
console.log(searchDevideAndConquer([1,2,3,5,7,8,9], 5));
console.log(searchDevideAndConquer([1,2,3,5,7,8,9], 9));
console.log(searchDevideAndConquer([1,2,3,5,7,8,9], 11));