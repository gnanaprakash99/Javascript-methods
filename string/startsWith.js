let text = "Hello world, welcome to the universe.";

let result1=text.startsWith("Hello")
let result2=text.startsWith("Hello",0)
let result3=text.startsWith("Hello",2)

console.log(result1);  //Result =>true
console.log(result2);  //Result =>true
console.log(result3);  //Result =>false