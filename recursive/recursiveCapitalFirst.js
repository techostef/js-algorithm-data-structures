// function capitalFirst(oldArr){
//   let newArr = []
//   for(let i = 0; i < oldArr.length; i++){
//     if(Array.isArray(oldArr[i])){
//       newArr = newArr.concat(flatten(oldArr[i]))
//     } else {
//       newArr.push(oldArr[i])
//     }
//   } 
//   return newArr;
// }


function capitalFirst(arr = []){
  if (arr.length === 0) return []
  const string = arr[0];
  return [(string[0].toUpperCase() + string.slice(1))].concat(capitalFirst(arr.slice(1)))
}

console.log(capitalFirst(['banana', 'nangka', 'duren']));
