function leapyear (year){
    const remainder = year % 4;
    if (remainder === 0){
        return("Your Year is a leap year");
    } else{
        return("Your Year is  not a leap year")
    }
}

console.log(leapyear(2020));