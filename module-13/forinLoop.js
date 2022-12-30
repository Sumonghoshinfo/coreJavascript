// syntax
// for (key in object) {
//     // code block to be executed
//   }

const person = {fname:"John", lname:"Doe", age:25};
for(let x in person) {
    // value print korar jonno
    console.log(person[x]);
    // key print korar jonno
    // console.log(x);
}

var totn_colors = { primary: 'blue', secondary: 'gray', tertiary: 'white' };

for (var color in totn_colors) {
   console.log(totn_colors[color]);
}

var totn_colors = [ 'blue', 'gray', 'white' ];

for (var color in totn_colors) {
   console.log(totn_colors[color]);
}

const student = {
    name: 'Monica',
    class: 7,
    age: 12
}

// using for...in
for ( let key in student ) {

    // display the properties
    console.log(`${key} => ${student[key]}`);
    console.log(`${key} => ${student[key]}`);
}

const salaries= {
    Jack : 24000,
    Paul : 34000,
    Monica : 55000
}

// using for...in
for ( let i in salaries) {

    // add a currency symbol
    let salary = "$" + salaries[i];

    // display the values
    console.log(`${i} : ${salary}`);
}

const string = 'code';

// using for...in loop
for (let i in string) {
    console.log(string[i]);
}


// define array
const arr = [ 'hello', 1, 'JavaScript' ];

// using for...in loop
for (let x in arr) {
    console.log(arr[x]);
}

// Note: You should not use for...in to iterate over an array where the index order is important.
