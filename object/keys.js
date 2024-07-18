const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

  let key =Object.keys(person)

console.log(key);  //Result =>[ 'firstName', 'lastName', 'age', 'eyeColor' ]

// Returns an array with the keys of an object and  does not change the original object.