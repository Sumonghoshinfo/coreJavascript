// var buisness =450;
// var minister =650;
// var sochib = 550;

// if (buisness >minister){
//     if (buisness > sochib){
//         console.log("Buisness is bigger");
//     }else{
//         console.log("Sochib is bigger");
//     }
// }

// else{
//     if(minister >sochib){
//         console.log("Minister is bigger");
//     }else{
//         console.log("Sochib is bigger");
//     }
// }

// const num1 = parseFloat(prompt("Enter first number: "));
// const num2 = parseFloat(prompt("Enter second number: "));
// const num3 = parseFloat(prompt("Enter third number: "));
// let largest;

// // check the condition
// if(num1 >= num2 && num1 >= num3) {
//     largest = num1;
// }
// else if (num2 >= num1 && num2 >= num3) {
//     largest = num2;
// }
// else {
//     largest = num3;
// }

// // display the result
// console.log("The largest number is " + largest);

// program to find the largest among three numbers

// take input from the user
// const num1 = parseFloat(prompt("Enter first number: "));
// const num2 = parseFloat(prompt("Enter second number: "));
// const num3 = parseFloat(prompt("Enter third number: "));

// const largest = Math.max(num1, num2, num3);

// // display the result
// console.log("The largest number is " + largest);

// function largestOfFour(arr) {
//     return arr;
//   }
//   console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

var arr = [3, 6, 2, 56, 32, 5, 89, 32];
var largest = arr[0];

for (var i = 0; i < arr.length; i++) {
    if (largest < arr[i] ) {
        largest = arr[i];
    }
}
console.log(largest);

function max_of_three(x, y, z) 
 {
  max_val = 0;
  if (x > y)
  {
    max_val = x;
  } else
  {
    max_val = y;
  }
  if (z > max_val) 
  {
    max_val = z;
  }
  return max_val;
}

console.log(max_of_three(1,0,1));
console.log(max_of_three(0,-10,-20));
console.log(max_of_three(1000,510,440));