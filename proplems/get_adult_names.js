const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 30 }
];
// findAdultNames(people); // ['Alice', 'Charlie']

let getAdultNames = () => {
    let names = people.filter(val => {
        return val.age > 18
    }).map(val => {
        return [val.name].join(",")
    });
    console.log(names);
};
getAdultNames()