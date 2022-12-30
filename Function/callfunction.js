// const person = {
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
//   const person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
//   const person2 = {
//     firstName:"Mary",
//     lastName: "Doe"
//   }
  
//   // This will return "John Doe":
// console.log(person.fullName.call(person1));

// const person = {
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
//   const person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
//   const person2 = {
//     firstName:"Mary",
//     lastName: "Doe"
//   }
  
//   // This will return "Mary Doe"
// console.log(person.fullName.call(person2));


const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  
console.log(person.fullName.call(person1, "Oslo", "Norway"));