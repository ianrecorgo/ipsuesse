type Student = {
  // Assuming other properties of a student
  dept?: string;
};

function storeStudent(studentInfo: Student): Readonly<Student> {
  // Function implementation
  return Object.freeze(studentInfo);
}

// Expanded and optimized usage
const jkInfo: Student = {
  // ...other student info properties
};

// Explicitly passing the 'dept' property to satisfy the required property
const jk: Readonly<Student> = storeStudent({ ...jkInfo, dept: "CSE" });
