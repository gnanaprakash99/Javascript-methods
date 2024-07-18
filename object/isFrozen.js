let person={
    id:1,
    name:"sri"
}
Object.freeze(person);
let text=Object.isFrozen(person)
console.log(text);  //Result =>true

// It returns true if an object is frozen