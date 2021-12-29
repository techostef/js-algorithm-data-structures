/*
  pivot using first index
*/
function quickSort(arr = [], start = 0, end = arr.length) {
  if (start < end) {
    let i = start;
    let swapIdx = start + 1;
    let isSwap = false;
    const swap = (a, b) => {
      const temp = arr[a];
      arr[a] = arr[b];
      arr[b] = temp;
    }
    const pivot = arr[start];
    while (i < end) {
      if (pivot > arr[i]) {
        swap(i, swapIdx)
        swapIdx += 1;
        i += 1;
        isSwap = true;
      } else {
        i += 1;
      }
    }
  
    if (isSwap) {
      swap(start, swapIdx - 1)
      arr = quickSort(arr, start, swapIdx - 1)
    }
  
    arr = quickSort(arr, swapIdx);
  }
  return arr;
}


let arr = [11, 40, 40, 50, 43, 10, 30, 42, 20, 6, 19, 32, 20, 41, 23, 27];
let arr1 = [9,4,8,2,1,5,7,6,3];

console.log('arr', quickSort(arr));