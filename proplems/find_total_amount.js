const input = [
    { username: "Alice", amount: 50, date: "2024-01-01" },
    { username: "Bob", amount: 30, date: "2024-01-02" },
    { username: "Alice", amount: 20, date: "2024-01-03" },
    { username: "Bob", amount: 40, date: "2024-01-04" },
    { username: "Alice", amount: 30, date: "2024-01-05" },
];
let result = {};
let seperateUsers = [];
input.forEach((users) => {
    let { username } = users;
    if (!seperateUsers[username]) {
        seperateUsers[username] = [];
        // console.log(users);
    }
    seperateUsers[username].push(users);
});
for (let username in seperateUsers) {
    result[username] = seperateUsers[username].reduce(
        (sum, item) => sum + item.amount,
        0
    );
}
// console.log(seperateUsers);
//   console.log(result);

//   Result =>{ Alice: 100, Bob: 70 }



// Finding total hours

const workLogs = [
    { employee: "John", hours: 5 },
    { employee: "Jane", hours: 8 },
    { employee: "John", hours: 7 },
    { employee: "Jane", hours: 6 }
];

let totalHoursOfAPerson = (arrObj) => {
    let result = {};
    let seperateEmployee = [];
    arrObj.forEach(items => {
        let { employee, hours } = items;
        if (!seperateEmployee[employee]) {
            seperateEmployee[employee] = []
        }
        seperateEmployee[employee].push(hours)
    });
    for (let employee in seperateEmployee) {
        result[employee] = seperateEmployee[employee].reduce((sum, item) => sum + item, 0)
    }
    console.log(result)
};
totalHoursOfAPerson(workLogs)