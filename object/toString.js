const fruits = ["Banana", "Orange", "Apple", "Mango", "Orange"];
let result1=fruits.toString();
console.log(`Given as a array and get as a string => ${result1}`);
//Result =>Given as a array and get as a string => Banana,Orange,Apple,Mango,Orange

let person1 = {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

let result2=person1.toString();
console.log(`Given as a object and get as a  => ${result2}`);
// Result =>Given as a object and get as a => [object Object]

let result3=Object.toString(person1);
console.log
(`Given as a object and get as a  => ${result3}`);
//Result =>Given as a object and get as a  => function Object() { [native code] }


