let person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

  Object.freeze(person1);
  person1.age=55
// let person2 ={
//     firstName: "Ajay",
//     lastName: "prakash"
// };
// Object.assign(person1,person2);.
console.log(person1);

// It will freeze the object and cannot change their values