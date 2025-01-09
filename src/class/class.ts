import { StringLiteral } from "typescript";

class Robot { // Members
    // Property(속성) 또는 Field(속성, 필드)
    name: string;
    model: string;
    status: string = "Active"; // 기본값 Default 값을 설정 할 수 있음

    // Constructor(생성자) / 값의 초기화와 관련있기 때문에 필수 요소이다.
    // 객체의 초기상태를 설정하기 위해 사용
    // 객체의 속성값을 쉽게 전달 가능
    constructor(name: string, model: string){ // param, 매개변수 (전달받는 값)
        // this의 name과 parma의 name은 다르다
        // this.name은 클래스의 name, this = Robot
        this.name = name; // 매개변수로 필드 초기화
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
let r1 = new Robot("R2-aD1", "Optimus") // new 키워드 사용하여 인수(arguments) 전달 (호출하기 위해)
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


class User {
    // [필드 부분]
    username: string; // 타입만을 표기하는 경우
    email: string;
    job: string = "Student"; // 기본값을 주는 경우

    // [생성자 부분]
    constructor(username: string, email: string) {
        this.username = username; // 매개변수로 초기화
        this.email = email;
    }

    // [메서드 부분]
    study(): void {
        console.log(`${this.username} is studying`);
    }
}

// [객체 생성] (new 키워드와 arguments 입력)
let user1 = new User("홍길동", "hong@abcd.co.kr");
let user2 = new User("김철수", "kim@example.com");

// [객체의 사용, 접근] (. 도트연산자 사용)
// 1. 인스턴스 자체 접근
console.log(user1) // 출력 : User{username: '홍길동', email: '...'}
// 2. 인스턴스의 세부적인 필드 접근
console.log(user2.username); // cnffur : 김철수
// 3. 메서드 호출
user1.study();
user2.study();

// 클래스의 상속
class CleaningRobot { // Members
    // Property(속성) 또는 Field(속성, 필드)
    name: string;
    model: string;
    cleaningSchedule: string[];
    status: string = "Active"; // 기본값 Default 값을 설정 할 수 있음

    // Constructor(생성자) / 값의 초기화와 관련있기 때문에 필수 요소이다.
    // 객체의 초기상태를 설정하기 위해 사용
    // 객체의 속성값을 쉽게 전달 가능
    constructor(name: string, model: string, cleaningSchedule: string[]){ // param, 매개변수 (전달받는 값)
        // this의 name과 parma의 name은 다르다
        // this.name은 클래스의 name, this = Robot
        this.name = name; // 매개변수로 필드 초기화
        this.model = model;
        this.cleaningSchedule = cleaningSchedule;
    } // 객체가 만들어진 후

    // Method(행동)
    // 클래스를 사용하면 한번에 수정 가능
    performTask(task: string){
        console.log(`${this.name} is performing ${task}.`)
    };

    updateStatus(newStatus: string) {
        this.status = newStatus;
        console.log(`${this.name}'s status is now ${this.status}`);
    };

    performCleaning() {
        console.log(`${this.name} is cleaning according to the schedule ${this.cleaningSchedule.join(", ")}`);
    }
}

class CookingRobot { // Members
    // Property(속성) 또는 Field(속성, 필드)
    name: string;
    model: string;
    availableMenus: string[];
    status: string = "Active"; // 기본값 Default 값을 설정 할 수 있음

    // Constructor(생성자) / 값의 초기화와 관련있기 때문에 필수 요소이다.
    // 객체의 초기상태를 설정하기 위해 사용
    // 객체의 속성값을 쉽게 전달 가능
    constructor(name: string, model: string, availableMenus: string[]){ // param, 매개변수 (전달받는 값)
        // this의 name과 parma의 name은 다르다
        // this.name은 클래스의 name, this = Robot
        this.name = name; // 매개변수로 필드 초기화
        this.model = model;
        this.availableMenus = availableMenus;
    } // 객체가 만들어진 후

    // Method(행동)
    // 클래스를 사용하면 한번에 수정 가능
    performTask(task: string){
        console.log(`${this.name} is performing ${task}.`)
    };

    updateStatus(newStatus: string) {
        this.status = newStatus;
        console.log(`${this.name}'s status is now ${this.status}`);
    };

    performCleaning() {
        console.log(`${this.name} is cooking according to the menus ${this.availableMenus.join(", ")}.`);
    }
}