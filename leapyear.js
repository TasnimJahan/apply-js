function leapyear(year) {
    // const remainder = ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
    if(remainder = ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
        return true;
    }
    else{
        return false;
    }
}
var year = 2000
var checkyear = leapyear(year);
// console.log(checkyear);
if(checkyear == true){
    console.log(year, "is a Leapyear");
}
else{
    console.log(year, "is not a Leapyear");
}