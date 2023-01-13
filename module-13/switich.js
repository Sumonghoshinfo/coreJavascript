const foo = 0;
switch (foo) {
  case -1:
    console.log('negative 1');
    break;
  case 0: // Value of foo matches this criteria; execution starts from here
    console.log(0);
    // Forgotten break! Execution falls through
  case 1: // no break statement in 'case 0:' so this case will run as well
    console.log(1);
    break; // Break encountered; will not continue into 'case 2:'
  case 2:
    console.log(2);
    break;
  default:
    console.log('default');
}

const action = 'say_hello';
switch (action) {
  case 'say_hello': { // added brackets
    const message = 'hello';
    console.log(message);
    break;
  } // added brackets
  case 'say_hi': { // added brackets
    const message = 'hi';
    console.log(message);
    break;
  } // added brackets
  default: { // added brackets
    console.log('Empty action received.');
  } // added brackets
}

// switch (expr) {
//     case 'Oranges':
//       console.log('Oranges are $0.59 a pound.');
//       break;
//     case 'Apples':
//       console.log('Apples are $0.32 a pound.');
//       break;
//     case 'Bananas':
//       console.log('Bananas are $0.48 a pound.');
//       break;
//     case 'Cherries':
//       console.log('Cherries are $3.00 a pound.');
//       break;
//     case 'Mangoes':
//     case 'Papayas':
//       console.log('Mangoes and papayas are $2.79 a pound.');
//       break;
//     default:
//       console.log(`Sorry, we are out of ${expr}.`);
//   }
  
//   console.log("Is there anything else you'd like?");

// program using switch statement
// let a = 2;

// switch (a) {

//     case 1:
//         a = 'one';
//         break;
//     case 2:
//         a = 'two';
//         break;
//     default:
//         a = 'not found';
//         break;
// }
// console.log(`The value is ${a}`);

// program using switch statement
let a = 1;

switch (a) {
    case "1":
        a = 1;
        break;
    case 1:
        a = 'one';
        break;
    case 2:
        a = 'two';
        break;

    default:
        a = 'not found';
        break;
}
console.log(`The value is ${a}`);

// multiple case switch program
let fruit = 'apple';
switch(fruit) {
    case 'apple':
    case 'mango':
    case 'pineapple':
        console.log(`${fruit} is a fruit.`);
        break;
    default:
        console.log(`${fruit} is not a fruit.`);
        break;
}

const pet = "dog";

if (pet === "lizard") {
  console.log("I own a lizard");
} else if (pet === "dog") {
  console.log("I own a dog");
} else if (pet === "cat") {
  console.log("I own a cat");
} else if (pet === "snake") {
  console.log("I own a snake");
} else if (pet === "parrot") {
  console.log("I own a parrot");
} else {
  console.log("I don't own a pet");
}

// const pet = "dog";
 
// switch (pet) {
//   case "lizard":
//     console.log("I own a lizard");
//     break;
//   case "dog":
//     console.log("I own a dog");
//     break;
//   case "cat":
//     console.log("I own a cat");
//     break;
//   case "snake":
//     console.log("I own a snake");
//     break;
//   case "parrot":
//     console.log("I own a parrot");
//     break;
//   default:
//     console.log("I don't own a pet");
//     break;
// }

switch ("oboe") {
    case "trumpet":
      console.log("I play the trumpet");
      break;
    case "flute":
      console.log("I play the flute");
      break;
    case "oboe":
      console.log("I play the oboe");
      break;
    default:
      console.log("I don't play an instrument. Sorry");
      break;
  }
// If I were to change the expression to "no instrument", then the default clause would execute and the message printed to the console would be "I don't play an instrument. Sorry".
  switch ("no instrument") {
    case "trumpet":
      console.log("I play the trumpet");
      break;
    case "flute":
      console.log("I play the flute");
      break;
    case "oboe":
      console.log("I play the oboe");
      break;
    default:
      console.log("I don't play an instrument. Sorry");
      break;
  }

  let day = 3;
  let dayName;
  
  switch (day) {
    case 1:
      dayName = 'Sunday';
      break;
    case 2:
      dayName = 'Monday';
      break;
    case 3:
      dayName = 'Tuesday';
      break;
    case 4:
      dayName = 'Wednesday';
      break;
    case 5:
      dayName = 'Thursday';
      break;
    case 6:
      dayName = 'Friday';
      break;
    case 7:
      dayName = 'Saturday';
      break;
    default:
      dayName = 'Invalid day';
  }
  
  console.log(dayName); // Tuesday


    // JavaScript program to illustrate switch-case
    let i = 9;
 
    switch (i)
    {
    case 0:
        console.log("i is zero.");
        break;
    case 1:
        console.log("i is one.");
        break;
    case 2:
        console.log("i is two.");
        break;
    default:
        console.log("i is greater than 2.");
    }
 