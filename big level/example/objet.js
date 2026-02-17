// const user = {
//   name: "Ange",
//   age: 17,
//   city: "Abidjan"
// };


// const obj1 = {a: 1};
// const obj2 = {b: 2};
// const merged = {...obj1 , ...obj2}
// console.log(merged)
//destructuring


//clone an object

// const clone = {...user};
// clone.age = 30;
// console.log(clone)

// function updateUser(user, newAge , newCity){
//     return {...user, newAge, newCity}
// }

// console.log(updateUser(user, 18 , "abidjan"))

let students = [
  { id: 1, name: "Alice", grade: 90 },
  { id: 2, name: "Bob", grade: 75 },
  { id: 3, name: "Charlie", grade: 85 }
];


//add a student
function addStudent(students, student) {
  return [...students, student];
}

// update
function updateStudentGrade(students, id, newGrade) {
  return students.map(student =>
    student.id === id
      ? { ...student, grade: newGrade }
      : student
  );
}

//delete a student
function deleteStudent(students, id) {
  return students.filter(student => student.id !== id);
}

// Actions
students = addStudent(students, { id: 4, name: "David", grade: 88 });
students = addStudent(students, { id: 5, name: "Emma", grade: 92 });
students = updateStudentGrade(students, 2, 80);
students = deleteStudent(students, 3);

console.table(students);


// extract only the names using destructuring
for (const { name } of students) {
  console.log(name);
}
