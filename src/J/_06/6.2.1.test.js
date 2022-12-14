describe("π show_student", () => {
    it("should show_student", () => {
        function show_student(ssn) {
            if (ssn !== null) {
                ssn = ssn.replace(/^\s*|\-|\s*$/g, ""); // validation (parsing)
                if (ssn.length !== 9) {
                    throw new Error("μλͺ»λ μλ ₯μλλ€.");
                }

                let student = db.get(ssn); // dbμ μ κ·Όνμ¬ νμμ‘°ν

                if (student !== null) {
                    var info = `${student.ssn},
                        ${student.firstname},
                        ${student.lastname}
                    `;
                    document.querySelector("#${elementId").innerHTML = info; // DOM IO
                } else {
                    throw new Error("νμμ μ°Ύμ μ μμ΅λλ€.");
                }
            } else {
                return null; // handle error
            }
        }
    });
});
