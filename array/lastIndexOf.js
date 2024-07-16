const fruits = ["Banana", "Orange", "Apple", "Mango", "Orange"];

let index1 =fruits.lastIndexOf("Orange");
let index2 =fruits.lastIndexOf("Mango");
let index3 =fruits.lastIndexOf("Orange",2);
let index4 =fruits.lastIndexOf(1);


console.log(index1); //Result => 4
console.log(index2); //Result => 3
console.log(index3); //Result => 1
console.log(index4); //Result => -1