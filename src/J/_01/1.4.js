const find = curry((db, id) => {
    let obj = db.find(id);
    if (obj === null) {
        throw new Error("객체를 찾을 수 없습니다.");
    }
    return obj;
});

const csv = (student) =>
    `${student.ssn}, ${student.firstname}, ${student.lastname}`;

const append = curry((selector, info) => {
    document.querySelector(selector).innerHTML = info;
});

// f◦g = f(g(x))
const show_student = compose(append("#student-info"), csv, find(db));
show_student("444-44-4444");
