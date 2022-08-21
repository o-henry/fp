/**
 * 실무에서 커링을 사용하는 법
 * */

/* factory function */

class Student {}

interface Student_store {
    find_student(ssn: string): Student;
}

class Db_student_store implements Student_store {
    public find_student(ssn: string): Student {
        // find ssn in db
        return new Student();
    }
}

class Cache_student_store implements Student_store {
    public find_student(ssn: string): Student {
        const cache = new Map();
        // find ssn in cache
        return cache.get(ssn) as Student;
    }
}

export {};
