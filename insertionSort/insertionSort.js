
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

let arr = [19, 44, 38, 22, 5, 47, 15];
arr = insertionSort(arr);

console.log('arr', arr);
