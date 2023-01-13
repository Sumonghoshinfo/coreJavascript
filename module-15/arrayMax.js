var marks = [45, 81, 63, 98, 56, 36, 23];
var max =marks[0];

for (var i= 0; i<marks.length; i++){
    var element = marks[i];
    if (element>max){
        max =element;
    }
}
console.log("Higest value is :",max);
