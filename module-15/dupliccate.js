var name =[3,6,2,4,5,6,7,8,9,7,8,9,4,5,6,1,2,3];
var uniqueName =[];
for (var i = 0; i < name.length; i++){
    var element = name[i];
    var index = uniqueName.indexOf(element);
    if (index == -1){
        uniqueName.push(element);
    }
}
console.log(uniqueName);