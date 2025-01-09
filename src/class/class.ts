class Robot { // Members
    // Property(속성) 또는 Field(속성, 필드)
    name: string;
    model: string;
    status: string = "Active";

    // Constructor(생성자) / 값의 초기화와 관련있기 때문에 필수 요소이다.
    // 객체의 초기상태를 설정하기 위해 사용
    // 객체의 속성값을 쉽게 전달 가능
    constructor(name: string, model: string){ // param, 매개변수 (전달받는 값)
        // this의 name과 parma의 name은 다르다
        // this.name은 클래스의 name, this = Robot
        this.name = name; 
        this.model = model;
    } // 객체가 만들어진 후

    // Method(행동)
    // 클래스를 사용하면 한번에 수정 가능
    performTask(task: string){
        console.log(`${this.name} is performing ${task}.`)
    };

    updateStatus(newStatus: string) {
        this.status = newStatus;
        console.log(`${this.name}'s status is now ${this.status}`);
    }
}

// Create Instance of the Robot class;
// 1. new 키워드로 로봇을 만들기 위해 값을 전달했고
// 2. 객체가 만들어진 후
// 3. r1,r2,r3에 만들어진 변수가 담김
let r1 = new Robot("R2-aD1", "Optimus") // new 키워드 사용하여 인수(argument) 전달 (호출하기 위해)
let r2 = new Robot("R5-AA3", "Bumble")
let r3 = new Robot("R2-aD1", "Rotus")

// Accessing fields and Calling methods
console.log(r1.name);
console.log(r2.model);
console.log(r3.status);

// 메서드 실행
r1.performTask("Charging");
r2.performTask("Explorering");
r3.updateStatus("On Repair");


// No-args Constructor
// 아무 param도 필요없는 기본 생성자가 숨어있음
class Pet {
    category: string = "Cat"; // 미리 초기화도 가능
    name: string = "Chu";

    // 기본 생성자
    // constructor() {} >> 기본적으로 숨어있는 부분
}

let p1 = new Pet();
console.log(p1.name);

