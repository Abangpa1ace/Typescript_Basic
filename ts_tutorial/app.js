var studentId = 123;
var studentName = 'Taeng';
var graduated = false;
function getStudent(studentId) {
    return {
        studentId: 124,
        studentName: 'Hyung',
        graduated: true
    };
}
function getStudentInfo(studentId) {
    return {
        studentId: 10,
        studentName: 'Taeng',
        age: 29,
        subject: 'Typescript',
        graduated: false
    };
}
// function modifyStudentInfo(student: StudentInfo): void {
//   student.studentId = 40,
// }
// enum
var Subject;
(function (Subject) {
    Subject[Subject["Java"] = 0] = "Java";
    Subject[Subject["Javascript"] = 1] = "Javascript";
    Subject[Subject["Typescript"] = 2] = "Typescript";
})(Subject || (Subject = {}));
function getStudentInfoEnum(studentId) {
    return {
        studentId: 10,
        studentName: 'Taeng',
        age: 29,
        subject: Subject.Typescript,
        graduated: false
    };
}
