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

// Array
let arrayOfNumbers1:number[];
arrayOfNumbers1 = [5];
arrayOfNumbers1 = [5, 10, 30];
// [5], [5,5,10,30]; (X)
// [5, 10, 30]

// 배열은 인덱스로 접근
console.log(arrayOfNumbers1[0]); // 5
console.log(arrayOfNumbers1[1]); // 10
console.log(arrayOfNumbers1[2]); // 30

// 열의 초기화

let arrayOfNumbers2: Array<number>;
arrayOfNumbers2 = [6];
arrayOfNumbers2 = [6, 8, 20];
console.log(arrayOfNumbers2[2])  //2

// 해당 타입만 허용 되는 배열 = 튜플
// let singleNumberTuple: [number]; // 한칸을 만들건데, number 타입만 들어갈 수 있다.
// 두칸을 만드려면 >> let singleNumberTuple: [number,number];
// singleNumberTuple = [5];

function greeter(name:string){
    return "Hello, "+ name
}

console.log(greeter{T"Tom"}));

