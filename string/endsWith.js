let text = "Hello world, welcome to the universe.";

let result1=text.endsWith("world")
let result2=text.endsWith("universe")
let result3=text.endsWith("universe.")
let result4=text.endsWith("universe.",5)
let result5=text.endsWith("universe.",6)

console.log(result1);  //Result =>false
console.log(result2);  //Result =>false
console.log(result3);  //Result =>true
console.log(result4);  //Result =>false
console.log(result5);  //Result =>false