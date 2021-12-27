function productOfArray(arr = []) {
  if (arr.length === 0) return 1;
  if (arr.length === 1) return arr[0];
  const newArr = arr.slice(1);
  const product = productOfArray(newArr);
  return arr[0] + product;
}



console.log(productOfArray([1,2,3]))
console.log(productOfArray([1,2,3,10]))