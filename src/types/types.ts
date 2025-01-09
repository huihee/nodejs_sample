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

// 함수의 명시적 타입 지정 방법 (매개변수 / Parameter)
function greeter(name:string){
    return "Hello, " + name
}

console.log(greeter("Tom"));

// 객체 타입
// 객체는 계층 구조를 가진다는 특징이 있음
const car = {
    color: 'red', // 쉼표로 각 속성을 구분하여 작성
    model: 'Sedan',
    manufacturer: 'Toyota'
}

// 도트 연산자로 속성에 접근
console.log(car.color);

// 구분자를 , 또는 ; 로 사용할 수도 있음
// function printOutput(pt: {x:number; y:number;}) {
// function printOutput(pt: {x, y}) { // Any type 오류 : 타입을 어떤 타입이든 아무걸로나 보겠다는 뜻
function printOutput(pt: {x:number, y:number}) { // 파라미터 내부에서 초기화 가능
    console.log("The X value is : " + pt.x);
    console.log("The Y value is : " + pt.y);
}

