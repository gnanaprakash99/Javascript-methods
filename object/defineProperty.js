let person1 = {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

Object.defineProperty(person1, "id", {
    value: 1
});
console.log(person1.id);
person1.id = 4;
console.log(person1.id);


// GET OWN PROPERTY DESCRIPTOR
let discriptor=Object.getOwnPropertyDescriptor(person1,"age");
console.log(`${discriptor.value} ${discriptor.writable}`);
// Result =>50 true