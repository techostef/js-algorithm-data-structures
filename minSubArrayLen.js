function minSubArrayLen(arr = [], sum) {
  let start = 0;
  let end = 0;
  let minLen = Infinity;
  let totalSum = 0;

  while(start < arr.length) {
    if (totalSum < sum && end < arr.length) {
      totalSum += arr[end];
      end += 1;
    } else if (totalSum >= sum) {
      minLen = Math.min(minLen, end-start);
      totalSum -= arr[start];
      start += 1;
    } else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7)) // 2
console.log(minSubArrayLen([2,1,6,5,4], 9)) // 2
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)) // 1
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 39)) // 3