function selectionSort (arr = []) {
  let minIdx = 0;
  const swap = (a, b) => {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }
  for(let i = 0; i < arr.length; i++) {
    minIdx = i;
    for(let j = i + 1; j < arr.length; j++) {
      if (arr[minIdx] > arr[j]) {
        minIdx = j
      }
    }

    if (i !== minIdx) {
      swap(i, minIdx);
    }
  }
  return arr;
}

let arr = [19, 44, 38, 5, 47, 15];
arr = selectionSort(arr);

console.log('arr', arr);
