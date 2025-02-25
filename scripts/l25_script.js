var fruits = ["apple", "banana", "orange"];

for (let i = 0; i < fruits.length; i++)
    console.log(fruits[i]);


var numbers = [1, 2, 3, 4, 5];
sum = 0

for (let j = 0; j < numbers.length; j++)
    sum += numbers[j];

console.log(sum);


var names = ["John", "Jane", "Mikhael", "Jennifer", "Bobby"];
var newArr =[];
for (let k = 0; k < names.length; k++)
    newArr.push(names[k].length);

console.log(newArr);


var company = [["Dan","Mark","Rose"], 
["Been","Ann","Mira","Antonio"],
["Kate","Andy"],
["Rob","Bob","Rick"]];
//var employees = company.flat().sort()
var employees = [];

for (let p = 0; p < company.length; p++) {

    for (let pp = 0; pp < company[p].length; pp++) {
        employees.push(company[p][pp]);
        console.log(company[p][pp]);
    }
}

employees.sort()
console.log(employees);



const person = { name: "Larry", surname: "Lobster", age: 30, job: "developer" };

function findKeys(obj) {
    return Object.keys(obj).length;
};

console.log(findKeys(person));


function numGenerator(n) {
    let numArr = [];

    for (let m = 1; m <= n; m++) {
        numArr.push(m);
    }

    return numArr;
}

console.log(numGenerator(5));


var randomNums = [2, 4, 76, 12, 32, 6241, 23123, 512, 6, 3, 11];

function theBiggestNum(randomNumsArr) {
    let max = 0;

    for (let c = 0; c < randomNumsArr.length; c++) {
        if (randomNumsArr[c] > max)
            max = randomNumsArr[c];
    }

    return max;
}

console.log(theBiggestNum(randomNums));


var pupil = {math: 8, literature: 7, history: 9};

function averageValue(marksObj) {
    all = 0;

    for(let key in marksObj) {
        all += marksObj[key];
    }

    average = (all / Object.keys(marksObj).length);

    return average;
}

console.log(averageValue(pupil));


var Dog = new Object();
Dog["name"] = "Rex";
Dog["age"] = "4";
Dog["color"] = "Grey";

function getPuppies(num) {
    Dog["puppies"] = []
    for (let x = 1; x < num+1; x++) {
        Dog["puppies"].push(`Puppy_${x}`)
    }
    return Dog["puppies"];
}

console.log(getPuppies(5));