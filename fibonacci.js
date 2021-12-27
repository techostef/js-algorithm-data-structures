function febonacci(num) {
  if (num === 0) return 0;
  if (num <= 2) return 1;
  return febonacci(num - 1) + febonacci(num - 2)
}

// 1 + 1       + 2     + 3         + 5       + 8       + 11
// n + (n + 0) + (n + 1) + (n + 2) + (n + 4) + (n + 7) + (n + 10)
// 1 + 2       + 3       + 4       + 5       + 6       + 7

console.log(febonacci(1))
console.log(febonacci(2))
console.log(febonacci(3))
console.log(febonacci(4))
console.log(febonacci(5))