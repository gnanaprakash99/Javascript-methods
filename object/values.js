const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

  let value =Object.values(person);
  console.log(value); //Result => [ 'John', 'Doe', 50, 'blue' ]

    // Returns an array of the property values of an object.It does not change the original object.