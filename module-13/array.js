var friendAge = [15, 17, 14, 16];
friendAge.push(21);
friendAge.push(23);
friendAge.push(26);
friendAge.push(28);
friendAge.push(30);
friendAge.pop();
friendAge.pop();
friendAge.pop();
friendAge.pop();

// friendAge[1] = 21;
// var position = friendAge.indexOf(14);
// console.log(position);
console.log(friendAge)
console.log(friendAge.length)
// console.log(friendAge[0])


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.unshift("Lemon","Pineapple");
// console.log(fruits);
// console.log(fruits.length);

const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt)
console.log(newArr);

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3);
// console.log(citrus);

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const myBest = fruits.slice(-3, -1);
console.log(myBest);

const cars = new Array("Saab", "Volvo", "BMW");
console.log(cars);


var tealine = ['palam','kalam','salam','Balam','jalal']
var part = tealine.slice(2);
console.log(part);