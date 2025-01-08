console.log("hello")

let a:number = 10; //숫자, number
let b:string = "Hello"; // 문자열, string
let c:boolean = true; // false, Boolean 참, 거짓
let d:number[] = [1,2,3,4]; // Array, 배열 (배열도 Object)
let e:Person = { name : "Tom", age : 35 }; // Object 객체
//..

interface Person {
    name:String;
    age:number;
}

a = 50;
b = "50"; // JS 떄는 문제가 없었는데 타입 스크립트로 바꾸면서 오류

//..
console.log("a=" + a, ", type of " + typeof a)
console.log("b=" + b, ", type of " + typeof b)
console.log("c=" + c, ", type of " + typeof c)
console.log("d=" + d[0], ", type of " + typeof d)
console.log("e.name=" + e.name, "e.age=" + e.age, ", type of " + typeof e)

// 예시
let columnLength = 10; // 길이를 cm 단위로 number로 지정
//.. 개발진행과정
//.. 개발진행과정
//.. 개발진행과정
//.. 개발진행과정
//.. 개발진행과정
columnLength = 30;

//.. 개발진행과정
//.. 개발진행과정
//.. 개발진행과정
let addLength = columnLength + 5;
let meterLength = addLength / 10;

//.. 개발진행과정
//.. 개발진행과정
//.. 개발완료

console.log(addLength)
console.log(meterLength)

