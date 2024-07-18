let person={
    id:1,
    name:"sri"
}
Object.seal(person);
let text=Object.isSealed(person)
console.log(text);  //Result =>true

// It returns true if an object is sealed