let person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

let person2 ={
    firstName: "Ajay",
    lastName: "prakash"
};

Object.assign(person1,person2);
console.log(person1);
// Result =>{ firstName: 'Ajay', lastName: 'prakash', age: 50, eyeColor: 'blue' }

// It copies properties from one or more source objects to a target object.