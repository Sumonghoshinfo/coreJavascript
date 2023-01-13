let car = {
    name: 'fiat',
    model :500,
    weight :"850 kg",
    color :"white",
    start :function(){
        console.log ("car has started");
    },
    drive :function(){
        console.log("car is driving")
    },
    
};

console.log(car.weight)
console.log(car["model"]);
car.start();

const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };