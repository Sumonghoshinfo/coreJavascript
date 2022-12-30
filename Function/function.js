// function sleep(){
//     console.log("Jasim is seeilping from 10 PM")

// }
// sleep();


// function sleep(name){
//     console.log(name + "is selping from 10 PM");
// }
// sleep("jashim")
// sleep("Ashim")
// sleep("Karim")




function sleep(name ,time){
    console.log(name + "is selping from " + time);
}
sleep("jashim", "10 PM")
sleep("Ashim","11 PM")
sleep("Karim", "12 PM")


// // javascript fuction syntax
// function name(parameter1, parameter2, parameter3) {
//     // code to be executed
// }

// let x = myFunction(4, 3);   // Function is called, return value will end up in x

function myFunction(a, b) {
  return a * b;             // Function returns the product of a and b
}
result = myFunction(4, 3); 
console.log(result);

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }

result2 = toCelsius(77);
console.log(result2);


// sum
x = sumAll(1, 123, 500, 115, 44, 88);

function sumAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(x);

// maximum number
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

// function sum(...args) {
//     let sum = 0;
//     for (let arg of args) sum += arg;
//     return sum;
//   }
  
//   let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
//   console.log(x);


  const a = {
    firstname : "sumon",
    sleep : function(){
      console.log(`${this.firstname} is sleeping`)
    }
  }

a.sleep();