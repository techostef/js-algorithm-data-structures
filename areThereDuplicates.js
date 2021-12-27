function areThereDuplicates(...arr) {
  let obj = {};
  let check = false;
  for(let val of arr) {
    if (!obj[val]) {
      obj[val] = 1;
    } else {
      check = true;
    }
  }

  return check;
}

console.log(areThereDuplicates(1,2,3));
console.log(areThereDuplicates(1,2,2));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));