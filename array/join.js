const fruits = ["Banana", "Orange", "Apple", "Mango"];

let newArr1= fruits.join();
let newArr2= fruits.join(' and ');
let newArr3= fruits.join("'s ");

console.log(newArr1);  //Result =>Banana,Orange,Apple,Mango
console.log(newArr2);  //Result =>Banana and Orange and Apple and Mango
console.log(newArr3);  //Result =>Banana's Orange's Apple's Mango