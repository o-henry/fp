import R from "rambda";
/**
 * handling error
 * mapping an operation to container
 */

try {
    // 예외가 날 가능성 있는 코드 : 잠재적 위험성이 존재하는 코드
    var student = findStudent("777-7777-7777");
} catch (e) {
    // 예외 처리 구문
    console.error(e.message);
}
