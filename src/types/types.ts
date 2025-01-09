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

// 객체의 선택적 속성 지정 방법
function printName(user: { first:string, last?:string}){ // ?를 추가하면 값이 없는 경우에는 제외해서 처리 가능
    if(user.last != undefined) { // user의 lastname이 있다면
        console.log("Your First name is " + user.first.toUpperCase()); // 출력
        console.log("Your Last name is " + user.last.toUpperCase()); // 출력
    } else { // last name이 없다면
        console.log("Yout name is "+user.first.toLowerCase())
    }
}


// last?:string의 ? 때문에 아래처럼 param 넘기는 것도 가능 (선택적 명시 방법)
printName({first: "Bob"});
// printName({first: "Bob", last: "Chirs"}); >> 원래 작성 방법

// cd /users/.../metaverse/nodejs_sample/src/types 처럼 직접 경로를 입력해서 이동도 가능
// 1. 경로 확인 후
// 2. npx tsc types.ts 로 컴파일
// 3. node types.js 로 실행


// Any 타입 : 타입 검사를 작성 안되도록 하는 키워드 (재사용성을 위함)
// 많은 js 프로젝트들을 사용하는데 문제가 되지 않도록 하기 위해 사용
// >> js에서는 정상적으로 작동한다면 재활용 가능하므로 문제가 발생하지 않도록 해줌
// Any 타입은 되도록 사용하지 않는다.

let object: any = { x:0 };

// any 키워드를 사용하면 아래 내용에 대해 검사를 하지 않음
object.foo();
object();
object.bar = 100;
object = "hello";
const n: number = object;


// Union 타입 (권장하진 않음, 타입을 나눠서 함수를 분리하는 것을 권장)
// 2개의 타입을 가질 수 있음을 명시 (or를 의미)
function printId(id:number|string){ // printId(id:ID)로 사용자 지정 타입 사용 가능
    // console.log(id.toUpperCase()); >> 타입이 2개이므로 오류 (number일 경우 처리 불가)
    if(typeof id === "string") {
        console.log(id.toUpperCase());
    } else {
        console.log(typeof id); //number
    }
}
printId(10);
printId("Hello");

// Union 타입도 사용자 정의 가능
// 타입 별칭으로도 Union 같이 다른 타입들도 커스텀 가능
type ID = number | string;


// Type Alias & Interface
// function printCord(point: {x:number, y:number}) { >> 아래처럼 수정
function printCord(point: Point) {
    // console.log("The coordinate's x value is " + print.x); >> print -> point
    // console.log("The coordinate's y value is " + print.y); >> print -> point
    console.log("The coordinate's y value is " + point.y);
    console.log("The coordinate's y value is " + point.y);
}

function calculateDistance(point1: Point, point2: Point):number { // 사용자 정의 타입을 사용하면 간결해짐
    const locationX = point2.x - point1.x;
    const locationY = point2.y - point1.y;
    return Math.sqrt(locationX ** 2 + locationY ** 2)
}

printCord({x:100, y:100});
// 해당 객체의 속성이 같다면,, 하지만 파라미터가 point1,2,3 ... 255까지 늘어난다면 계속해서 중복코드가 늘어남

// 사용자 정의 타입 생성 (대명사를 만드는 것과 같음)
// type Point = {
//     x: number,
//     y: number
// }

// 별칭보다는 인터페이스 사용을 더 권장함
interface Point {
    x: number,
    y: number
}

// 개방 폐쇄 원칙에 유리하기 때문에
// 예시
// interface Animal {
//     name: string;
// }

// interface Bear extends Animal { // anumal로 부터 상속을 받음
//     honey: boolean;
// }

// 상속을 통해 주 속성을 받고 있음
// function getBear(): Bear {
//     return {
//         name: "Grizzly",
//         honey: true
//     };
// }

// const bear = getBear();
// console.log(bear.name) // from Animal
// console.log(bear.honey)

// 인터페이스를 사용하면 기존 코드를 수정하지 않고 계속해서 확장 가능

// // Type Alias의 확장 예시
// type Animal = {
//     name: string;
// }

// type Bear = Animal & {
//     honey: boolean;
// }

// function getBear(): Bear {
//     return {
//         name: "Grizzly",
//         honey: true
//     };
// }

// const bear = getBear();
// console.log(bear.name) // from Animal type
// console.log(bear.honey)

// 인터페이스 병합의 차이점
interface Job {
    title: string;
}

interface Job { // type으로 변경하면 중복 코드 오류 발생
    // union을 쓰거나 분기문으로 나눠서 쓰거나 해야됨 >> 5원칙 위반 (인터페이스가 더 유리한 이유)
    company: string;
}

const myJob: Job = {
    title: "SW Engineer",
    company: "Tech"
}


// 타입 단언 Type Assertions
const apiResponse: any = {
    id: 1,
    title: "TypeScript Begins",
    content: "This is contents of Article"
};

// Error지만 찾지 못하는 경우(any 타입 사용)
// console.log(apiResponse.like);

interface Content {
    id: number;
    title: string;
    content: string;
}

// Type assertions using 'as' keyword (방법1)
const content1 = apiResponse as Content; // 인터페이스로 감싸서 전달
// Type assertions using <> bracket syntax (방법2)
const content2 = <Content>apiResponse;

// console.log(content1.like); // like does not exist
console.log(content2.id); //OK
console.log(content2.content); //OK

