function insertionSort(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
          arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

function splitHalfArr (arr = [], isLeft = true) {
  let middle = Math.floor(arr.length / 2)
  let max =  isLeft ? middle : arr.length;
  let i = isLeft ? 0 : middle;
  let arrHalf = [];
  for(i; i < max; i ++) {
    arrHalf.push(arr[i]);
  }
  return arrHalf;
}

const merge = (arr1 = [], arr2 = []) => {
  let newArr = [];
  let iArr1 = 0;
  let iArr2 = 0;
  while(iArr1 < arr1.length && iArr2 < arr2.length) {
    if (arr1[iArr1] > arr2[iArr2]) {
      newArr.push(arr2[iArr2]);
      iArr2 += 1;
    } else {
      newArr.push(arr1[iArr1]);
      iArr1 += 1;
    }
  }

  while(iArr1 < arr1.length) {
    newArr.push(arr1[iArr1]);
    iArr1 += 1;
  }

  while(iArr2 < arr2.length) {
    newArr.push(arr2[iArr2]);
    iArr2 += 1;
  }
  return newArr;
}

function mergeSort (arr = []) {
  if (arr.length <= 1) return arr; 
  const leftArr = mergeSort(splitHalfArr(arr));
  const rightArr = mergeSort(splitHalfArr(arr, false));
  let mergeArr = merge(leftArr, rightArr);
  return mergeArr;
}

let arr = [19, 44, 38, 22, 5, 47, 15];

console.log('arr', mergeSort(arr));