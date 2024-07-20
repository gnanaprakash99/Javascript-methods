let person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

  let countPropertyOfObject=(val)=>{
    return Object.entries(val).length;
    
  }
  console.log(countPropertyOfObject(person1));  //Result =>4


  let valuesOfProperty =(val)=>{
    return Object.values(val).toString()
  }
  console.log(valuesOfProperty(person1));  //Result=>John,Doe,50,blue