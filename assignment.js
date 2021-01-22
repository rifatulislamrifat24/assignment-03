

/** My First Problem Solved Here */
function kilometerToMeter (kilometer) {
    if (kilometer >= 0){
        var meter = kilometer * 1000;
        return meter;
    }
    else {
        return "This output can not be nagetive!"
    }
}
/** 
var output = kilometerToMeter(5);
console.log(output);
*/



/** My Second Problem Solved Here */
function budgetCalculator (watch, phone, laptop) {
    var totalCost = (watch * 50) + (phone * 100) + (laptop * 500);
    return totalCost;
}
/** 
var totalResult = budgetCalculator (5, 3, 2);
console.log(totalResult);
*/



/** My Third Problem Solved Here */
function hotelCost (days) {
    var totalCost = 0;
    if (days <= 10) {
        totalCost = days * 100;
    }
    else if (days <= 20) {
        var firstTenDays = 10 * 100;
        var remainingDays = days - 10;
        var secondTenDays = remainingDays * 80;
        totalCost = firstTenDays + secondTenDays;
    }
    else {
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remainingDays = days - 20;
        var thirdSomeDays = remainingDays * 50;
        totalCost = firstTenDays + secondTenDays + thirdSomeDays;
    }
    return totalCost;
}
/**
var totaSpend = hotelCost (21);
console.log(totalSpend);
 */



/** My Forth Problem Solved Here */
function megaFriend (names) {

    var highestLetterNames = names[0];

    for (var i = 0; i < names.length; i++) {
        var element = names[i];
        if (element.length > highestLetterNames.length) {
            highestLetterNames = element;
        }
    }
    return highestLetterNames;
}
/**
var friendNames = megaFriend(["Rimon","Jony","Abdullah"]);
console.log(friendNames);
 */