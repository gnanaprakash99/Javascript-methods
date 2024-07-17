const numbers = [1, 2, 3, 4, 5];
let sum = 0;

let addNumbers = numbers.forEach(val => {
    sum += val;
    console.log(sum);
});
// Result =>
// 1
// 3
// 6
// 10
// 15

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.forEach(val=>{
    console.log(val);
    console.log(val.toUpperCase());  // it because of string we can use upper case
})
// Result =>
// Banana
// Orange
// Apple
// Mango

// Result =>
// BANANA
// ORANGE
// APPLE
// MANGO