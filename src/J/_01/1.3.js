function show_student(ssn) {
    let student = db.find(ssn);

    if (student !== null) {
        document.querySelector(
            `#${elementId}`
        ).innerHTML = `${student.ssn}, ${student.firstname}, ${student.lastname}`;
    } else {
        throw new Error(`학생을 찾을 수 없습니다.`);
    }
}

show_student("444-44-4444");
