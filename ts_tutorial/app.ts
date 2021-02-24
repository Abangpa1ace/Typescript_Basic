let studentId = 123
let studentName = 'Taeng'
let graduated = false;

function getStudent(studentId: number): object {
  return {
    studentId: 124,
    studentName: 'Hyung',
    graduated: true,
  }
}

// function getStudentMoreInfo(studentId: number): {
//   studentId: number,
//   studentName: string,
//   age: number,
//   subject: string,
//   graduated: boolean,
// } {
//   return null;
// }

// Interface 적용
interface StudentInfo {
  readonly studentId: number,
  studentName: string,
  age: number,
  subject: string,
  graduated: boolean,
}

function getStudentInfo(studentId: number): StudentInfo {
  return {
    studentId: 10,
    studentName: 'Taeng',
    age: 29,
    subject: 'Typescript',
    graduated: false,
  }
}

// function modifyStudentInfo(student: StudentInfo): void {
//   student.studentId = 40,
// }

// enum
enum Subject {
  Java,
  Javascript,
  Typescript
}

interface StudentInfoEnum {
  readonly studentId: number,
  studentName: string,
  age: number,
  subject: Subject,
  graduated: boolean,
}

function getStudentInfoEnum(studentId: number): StudentInfoEnum {
  return {
    studentId: 10,
    studentName: 'Taeng',
    age: 29,
    subject: Subject.Typescript,
    graduated: false,
  }
}

interface StudentInfoLiteral {
  readonly studentId: number,
  studentName: string,
  age: number,
  subject?: 'java' | 'javascript' | 'typescript',
  graduated: boolean,
}

function getStudentInfoLiteral(studentId: number): StudentInfoLiteral {
  return {
    studentId: 10,
    studentName: 'Taeng',
    age: 29,
    // subject: "python",
    graduated: false,
  }
}

let unionPrice: string | number = 5;
unionPrice = '5';
// unionPrice = false;

// Type Guard
type StrOrNum = string | number;
let itemPrice: number;

const setItemPrice = (price: StrOrNum): void {
  if (typeof price === 'string') {
    itemPrice = 0;
  }
  else {
    itemPrice = price;
  }
}

// Function Type
function sendGreeting(message: string, userName?: string): void {
  console.log(`${message}, ${userName}`);
}

sendGreeting('hello');

