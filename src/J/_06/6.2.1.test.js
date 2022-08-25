describe("🚀 show_student", () => {
    it("should show_student", () => {
        function show_student(ssn) {
            if (ssn !== null) {
                ssn = ssn.replace(/^\s*|\-|\s*$/g, ""); // validation (parsing)
                if (ssn.length !== 9) {
                    throw new Error("잘못된 입력입니다.");
                }

                let student = db.get(ssn); // db에 접근하여 학생조회

                if (student !== null) {
                    var info = `${student.ssn},
                        ${student.firstname},
                        ${student.lastname}
                    `;
                    document.querySelector("#${elementId").innerHTML = info; // DOM IO
                } else {
                    throw new Error("학생을 찾을 수 없습니다.");
                }
            } else {
                return null; // handle error
            }
        }
    });
});
