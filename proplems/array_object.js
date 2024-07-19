const students = [
    { name: 'Alice', grade: 85 },
    { name: 'Bob', grade: 40 },
    { name: 'Charlie', grade: 60 },
    { name: 'David', grade: 75 },
    { name: 'Eve', grade: 55 }
];

// 1. Add a new student to the list.
// 2. Remove a student by name.
// 3. Get the average grade of all students.
// 4. Get a list of students who passed (grade >= 50).
// 5. Get the names of all students as a single string, separated by commas.

let addStudent = (newStudent) => {
    let totalStudent = [...students, newStudent];
    console.log(totalStudent);
};

let deleteStudent = (studentName) => {
    let remainingStudent = students.filter(val => val.name !== studentName);
    console.log(remainingStudent);
};

let averageGrade = () => {
    let totalGrade = 0;
    students.forEach((val) => {
      totalGrade += val.grade;
    });
    let studentPercentage = totalGrade / students.length;
    console.log(studentPercentage);
  };
  

let passedStudent = () => {
    let passed = students.filter(val => {
        return val.grade >= 50;
    });
    console.log(passed);
};

let getStudentName = () => {
    let studentName = students.map(val => {
        return [val.name].join(",")
    });
    console.log(studentName);
};


// addStudent({ name: 'Ajay', grade: 90 })
// deleteStudent("Alice")
averageGrade()
// passedStudent()
// getStudentName()