let enrollment = [
    { enrolled: 2, grade: 100 },
    { enrolled: 2, grade: 80 },
    { enrolled: 1, grdade: 89 },
];

let total_grades = 0;
let totla_student_found = 0;

for (let i = 0; i < enrollment.length; i++) {
    let student = enrollment[i];
    if (student !== null) {
        if (student.enrolled > 1) {
            total_grades += student.grade;
            totla_student_found++;
        }
    }
}

const average = total_grades / totla_student_found;

_.chain(enrollment)
    .filter((student) => student.enrolled > 1)
    .pluck("grade")
    .average()
    .value();
