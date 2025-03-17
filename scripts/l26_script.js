const studentGrades = [
    { name: "Anna", note: 9 },
    { name: "Denis", note: 7 },
    { name: "Cristian", note: 8 },
    { name: "Daniel", note: 6 },
    { name: "Elena", note: 10 }
  ];

const result = studentGrades.reduce(
    ((accumulator, student) => accumulator + student.note), 0
) / studentGrades.length;

console.log(result);



const products = [
    {name: "Tshirt", price: 50, isAvailable: true },
    {name: "Pants", price: 80, isAvailable: false },
    {name: "Jacket", price: 120, isAvailable: true },
    {name: "Shirt", price: 60, isAvailable: true },
    {name: "Skirt", price: 40, isAvailable: false }
  ];

const availableProducts = products
.filter(products => products.isAvailable === true)
.map((product) => product.name);

console.log(availableProducts);



const numbers = [10, 5, 8, 15, 3, 20];

const maxNum = numbers.reduce((accumulator, currentNum) => {
    if (currentNum > accumulator) {
        return currentNum;
    }
    return accumulator;
}, 0);

console.log(maxNum);



const pupils = [{John: [8, 7, 9]}, {Mary: [9, 9, 10]}, {Alex: [6, 8, 7]}];

function getUpdatedPupils(arrOfPupils) {
    updatedPupils = {}
    for(const el of arrOfPupils) {
        for(let[pupilName, marks] of Object.entries(el)) {
            updatedPupils[pupilName] = (marks.reduce((accumulator, curVal) => 
                {return accumulator + curVal}, 0) / marks.length).toFixed(2)
        }
    }
    return updatedPupils;
}

console.log(getUpdatedPupils(pupils));
