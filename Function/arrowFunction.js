// ES5
// var x = function(x, y) {
//     return x * y;
// }

// ES6
// const x = (x, y) => x * y;
// console.log(x(4, 3))

// Arrow function

let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

console.log( sum(1, 2) ); // 3

let double = n => n * 2;
// roughly the same as: let double = function(n) { return n * 2 }

console.log( double(3) ); // 6

x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
console.log(x);