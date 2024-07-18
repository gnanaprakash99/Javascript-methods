let person={
    id:1,
    name:"sri"
}
Object.preventExtensions(person)
person.age=22;
console.log(person);  //Result =>{ id: 1, name: 'sri' }

// It prevent(not adding) adding properties to an object.