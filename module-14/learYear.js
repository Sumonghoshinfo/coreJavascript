function leapyear (year){
    const remainder = year % 4;
    if (remainder === 0){
        return("Your Year is a leap year");
    } else{
        return("Your Year is  not a leap year")
    }
}

console.log(leapyear(2020));

function leapyear(year)
{
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapyear(2016));
console.log(leapyear(2000));
console.log(leapyear(1700));
console.log(leapyear(1800));
console.log(leapyear(100));