const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

  let entry=Object.entries(person);
  console.log(entry);  
//   Result =>
//     [
//         [ 'firstName', 'John' ],
//         [ 'lastName', 'Doe' ],
//         [ 'age', 50 ],
//         [ 'eyeColor', 'blue' ]
//       ]

    // Returns an array of the key/value pairs of an object.It does not change the original object.