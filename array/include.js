const fruits = ["Banana", "Orange", "Apple", "Mango"];

let index1 = fruits.includes("banana");
let index2 = fruits.includes("Banana");
let index3 = fruits.includes("Banana",1);

console.log(index1); //Result =>false
console.log(index2); //Result =>true
console.log(index3); //Result =>false