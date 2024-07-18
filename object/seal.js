let person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

  Object.seal(person1);
  person1.age=55
  person1.address=1/20

console.log(person1);  //Result =>{ firstName: 'John', lastName: 'Doe', age: 55, eyeColor: 'blue' }

// It will freeze the object and can change their values and cannot delete properties or add properties