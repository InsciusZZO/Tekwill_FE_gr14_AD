let student = {
    name: "John",
    lastName: "Doe",
    faculty: "history",
    year: 3
};

const studetObjReduction = (studentObj) => {
    const {name: firstName, lastName, faculty, year} = studentObj;
    let studentArr = [];
    studentArr.push(`${firstName} ${lastName}`, faculty, year);
    return studentArr;
};

console.log(studetObjReduction(student));



let colors = ["red", "green", "blue", "violet"];

const getColors = (arr) => {
    const [first, , third] = arr;
    return [first, third];
}

console.log(getColors(colors));



function getNumArr() {
    numArr = [...arguments];
    return numArr;
}

console.log(getNumArr(1,3,5,2,6,8,32,743,123,53,90));



let numArr1 = [1, 2, 3, 4, 5];
let numArr2 = [6, 7, 8, 9, 10];

function connectArrays(arr1, arr2) {
    newArr = [...numArr1, ...numArr2];
    return newArr;
}

console.log(connectArrays(numArr1, numArr2));



let lang = { language: "en" };

function studentUpdate(student, update) {
    newStudent = {...student, ...update};
    return newStudent;
}

console.log(studentUpdate(student, lang));


// From exercise 7 ||
//                 \/
let try1 = "din",
    try2 = "recede",
    try3 = "Success",
    try4 = "(( @";

function iDontReallyKnow(randomString) {
    let keyboardChars = " abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";
    let newString = "";
    for (let i = 0; i < randomString.length; i++) {
        if (keyboardChars.includes(randomString[i].toLowerCase())) {
            newString = newString + "(";
            let index = keyboardChars.indexOf(randomString[i].toLowerCase());
            keyboardChars = keyboardChars.slice(0, index) + keyboardChars.slice(index + 1);
        } else {
            newString = newString + ")";
        }
    }
    return newString;
}

console.log(`${try1}: `, iDontReallyKnow(try1));
console.log(`${try2}: `, iDontReallyKnow(try2));
console.log(`${try3}: `, iDontReallyKnow(try3));
console.log(`${try4}: `, iDontReallyKnow(try4));



// From exercise 8 ||
//                 \/

let ex1 = [2, 4, 0, 100, 4, 11, 2602, 36],
    ex2 = [160, 3, 1719, 19, 11, 13, -21];

function letsDoIt(numArr) {
    let odd = 0;
    let even = 0;
    let result = 0;
    for(let i = 0; i < 3; i++) {
        if ((numArr[i] % 2) !== 0) {
            odd++;
        } else {
            even++;
        }
    }
    console.log(odd, even);
    if (odd > even) {
        result = numArr.reduce((acc, num) => {
            return ((num % 2) === 0 ? acc = num : acc);
        }, 0);
        return result;
    } else {
        result = numArr.reduce((acc, num) => {
            return ((num % 2) > 0 ? acc = num : acc);
        }, 0);
        return result;
    }
}

console.log(`${ex1}: `, letsDoIt(ex1));
console.log(`${ex2}: `, letsDoIt(ex2));
