var marks = [45, 81, 63, 98, 56, 36, 23];
var min =marks[0];

for (var i= 0; i<marks.length; i++){
    var element = marks[i];
    if (element<min){
        min =element;
    }
}
console.log("lowest value is :",min);