// The function above is actually an anonymous function (a function without a name).

const x = function (a, b) {
    return a * b
};
let z = x(4, 3);
console.log(z); 



(function(){
    console.log("i am sumon");
})()  //self invoking function