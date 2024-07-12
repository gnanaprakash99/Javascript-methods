// example 1
let num = [1,2,3]
num.push(4)  
let extra = num.push(5,6,7,8,9)

console.log(num);  //the element will push end of the array
console.log(extra); //  result: 9 (the index is 9 that means array.length)

// example 2
let numbers =[1,2,3];
let extraNumbers=[4,5,6];

console.log( numbers.push(extraNumbers)); //result:4 (extraNumbers are in one element)

