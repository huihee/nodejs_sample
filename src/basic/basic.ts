const message = "Hello!";
// Accessing the property 'toLowerCase'
// on 'message' and the calling it
message.toLowerCase();
// Calling 'message'
// message();

const announcement = "Hello World";

// How quickly can you spot the typos?
// announcement.toLocaleLowerCase();
// announcement.toLocaleLowerCase();

// We probably meant to write this...
announcement.toLocaleLowerCase();

const value = Math.random() < 0.5 ? "a" : "b"; // 삼항연산자 true : false
// if(value !== "a"){
if(value !== "a"){
    // ...
} else if (value === "a") {
    // Oops, unreachable
}

function flipCoin() {
    // Meant to be Math.random()

    // return Math.random < 0.5; >> 오류
    return Math.random() < 0.5;
}


// 1. 추론적 타입 지정 >> 지원은 하지만 권장하진 않음
let x = 3;
// x = [0,1,null];

// class Animal {}
// class Rhino extends Animal {
//     hasHorn: boolean = true;
// }
// class Elephant extends Animal {
//     hasTrunk: boolean = true;
// }

// class Snake extends Animal {
//     hasLegs: boolean = false;
// }

// let zoo = [new Rhino(), new Elephant(), new Snake()]; // 객체를 가지고 있는 배열
// Animal[] 추론 추측, 그러나 다른 타입이 지정됨

// 2. 명시적 타입 지정(Explct Types) >> 권장
// This is an industrial-grade general-purpose greeter function:
function greet(person: string, date: Date) { // 파라미터에는 무조건 타입을 작성해줘야 함
    console.log('Hello ${person}, today is ${date}!');
}

greet("Brendan", new Date());
// Date라는 내장함수는 기본적으로 string을 반환함
// 그런데 String("Brendan")을 넣었으므로 Date()에서 오류 발생
// greet("Brendan", Date()); -> greet("Brendan", new Date()); 로 수정