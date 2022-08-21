import * as R from "ramda";

/* fetch_student_from_db :: DB -> (String -> Student) */
const fetch_student_from_db = R.curry(function (db, ssn) {
    return find(db, ssn);
});

/* fetch_student_from_array :: Array -> (String -> Student) */
const fetch_student_from_array = R.curry(function (array, ssn) {
    return array[ssn];
});

const find_student = use_db
    ? fetch_student_from_db(db)
    : fetch_student_from_array(arr);

find_student("777-7777-7777");
