var fruits = [];
fruits.push("apple", "banana", "orange");
console.log(fruits.length)
console.log(fruits);

var numbers = [1, 2, 3, 4, 5];
console.log(numbers);
numbers.pop();
console.log(numbers);
numbers.shift();
console.log(numbers);

var colors = ["red", "green", "blue", "yellow"];
console.log(colors);
console.log(colors.indexOf("green"));
console.log(colors.includes("orange"));

var names = ["John", "Jane", "Mike", "Jennifer"];
console.log(names);
console.log(names.indexOf("Mike"));
names.unshift("David");
console.log(names);
console.log(names.indexOf("Mike"));

var numbers2 = [2, 4, 6, 8, 10];
console.log(numbers2);
console.log(numbers2.includes(5));
numbers2.push(12);
console.log(numbers2);

var months = [
    "January", "February", "March", 
    "April", "May", "June", "July", "August", 
    "September", "October", "November", "December"
];
console.log(months);
console.log(months.sort());

var result = months.filter((el) => el.length > 3);
console.log(result);

var newOrderOfMonths = months.slice(months.indexOf("July"), months.indexOf("November")+1);
console.log(newOrderOfMonths);

var months2 = [
    "January", "February", "March", 
    "April", "May", "June", "July", "August", 
    "September", "October", "November", "December"
  ];
  
var result2 = months.filter(month => month.length >= 5).sort().join("-");
console.log(result2);
