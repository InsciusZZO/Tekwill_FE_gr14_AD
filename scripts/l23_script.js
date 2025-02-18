// ternary operator exersices

var number = 5;
var kindOfNum = number % 2 === 0 ? "Even" : "Odd";

console.log(kindOfNum);


var isLoggedIn = true;
var loggingVerification = isLoggedIn === true ? "Passed" : "Failed";

console.log(loggingVerification);


var price = 58;
var amount = 8;
var available = true;
var productCheck = available === true 
    ? `${amount} units of this ptoduct will cost ${price*amount} for you`
    : "there are no products available";

console.log(productCheck);


let currentDate = new Date;
var currentYear = currentDate.getFullYear();
var leapYearCheck = currentYear % 4 === 0 ? "Its a leap year" : "Its not a leap year";

console.log(leapYearCheck);


// switch exercises

var countryCode = "MD";

switch(countryCode) {
    case "MD":
        console.log("Moldova");
        break;
    case "UK":
        console.log("United Kingdom");
        break;
    case "USA":
        console.log("Unated States of America");
        break;
    case "RU":
        console.log("Russia");
        break;
    case "RO":
        console.log("Romania");
        break;
    default:
        console.log("There is no such country in our data");
}


var grade = "d"

switch(grade.toUpperCase()) {
    case "A":
        console.log("90-100");
        break;
    case "B":
        console.log("80-89");
        break;
    case "C":
        console.log("70-79");
        break;
    case "D":
        console.log("60-69");
        break;
    case "F":
        console.log("0-59");
        break;
    default:
        console.log("There is no such grade");
}


// function exercises

function tellFortune(x, y, z, n) {
    console.log(`You will be ${x} in ${y}, and will get married to ${z} with ${n} ${
        ending = n == 1 ? "kid" : "kids"}`)
}

tellFortune("police officer", "Europe", "Nataly", 2);
tellFortune("mall manager", "North America", "Madlen", 3);
tellFortune("programmer", "Asia", "Lina", 1);


function calculatedDogAge(age, coef = 7) {
    console.log(`Your dog has ${age*coef} years according to human age!`)
}

calculatedDogAge(2);
calculatedDogAge(5);
calculatedDogAge(1);


const calculationSupply = (age, foodAmount, maxAge) => {
    if (maxAge > 100) {
        console.log("That maximum age is too optimistic, dont you think?");
        return;
    } else console.log(`You need ${(maxAge-age)*365*foodAmount} kg's of food to last until old age`)
}

calculationSupply(21, 1.4, 27);
calculationSupply(18, 2.1, 60);
calculationSupply(32, 2.4, 101);
