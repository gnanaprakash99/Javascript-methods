let person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

  let names=Object.getOwnPropertyNames(person1);
  console.log(names);  //Result =>[ 'firstName', 'lastName', 'age', 'eyeColor' ]
  console.log(names[1]);  //Result =>lastName

  // It returns an array with the properties of an object and does not change the original object.