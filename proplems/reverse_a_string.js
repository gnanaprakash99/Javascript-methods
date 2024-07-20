const text ="hello there"

let reverseString=(str)=>{
    return str.split('').reverse().join('')
}
console.log(reverseString(text));