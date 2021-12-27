const { performance } = require('perf_hooks');

function addUpToSlower(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

function addUpToFaster(n) {
  return n * (n + 1) / 2
}

const number = 3000000000;

let t1 = performance.now();
addUpToSlower(number);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`)

t1 = performance.now();
addUpToFaster(number);
t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`)