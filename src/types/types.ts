//The primitives
const str:string = "Hello"; // string - 문자열, ""로 감싸서 표현
const num:number = 10; // number - 숫자, int, double 등 세부 타입은 없음
const bool:boolean = true; // boolean - 논리, true, false (0,1로도 표현 가능)
// 타입은 소문자로 시작한다는 것에 주의(자바랑 헷갈리지 말것)


console.log(str.length); //
console.log(str.toUpperCase()); //

// String, Number, Boolean 는 타입 명시법과 다르니 주의
const wrapperStr = new String(num); // wrapper 클래스 사용법
// 강제 형변환 할때 wrapper 클래스 사용
// 자바는 대문자로 시작하는게 많아서 헷갈릴 수 있음
// wrapper 기능이 실제로 있기 때문에 오류는 안남