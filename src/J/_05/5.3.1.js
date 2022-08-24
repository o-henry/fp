import * as R from "ramda";

/**
 * ssn으로 학생 레코드를 찾아 주소 속성을 얻는 코드
 * a. DB에 query를 날려 찾는다.
 */
const wrap = (val) => new Wrapper(val);

const find_student = R.curry((db, ssn) => {
    wrap(
        find(db, ssn)
    ); /** 객체를 찾지 못할 경우를 대비하여 조회한 객체를 감싼다. */
});

const get_address = (student) => wrap(student.fmap(R.prop("address")));

const student_address = R.compose(get_address, find_student(DB("student")));

student_address("777-77-7777"); // -> Wrapper(Wrapper(address))
student_address("777-77-7777").map(R.identity).map(R.identity);

export {};
