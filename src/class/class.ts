class Robot { // Members
    // Property(속성) 또는 Field(속성, 필드)
    private name: string;
    private model: string;
    protected status: string = "Active"; // 기본값 Default 값을 설정 할 수 있음

    // Constructor(생성자) / 값의 초기화와 관련있기 때문에 필수 요소이다.
    // 객체의 초기상태를 설정하기 위해 사용
    // 객체의 속성값을 쉽게 전달 가능
    constructor(name: string, model: string){ // param, 매개변수 (전달받는 값)
        // this의 name과 parma의 name은 다르다
        // this.name은 클래스의 name, this = Robot
        this.name = name; // 매개변수로 필드 초기화
        this.model = model;
    } // 객체가 만들어진 후

    // Getter for name
    public getName(): string {
        return this.name;
    }

    public getModel(): string {
        return this.name;
    }

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
console.log(r1.getName());
console.log(r2.getModel());
// console.log(r3.status());

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
// 단일책임원칙
class CleaningRobot extends Robot { // Members
    // Property(속성) 또는 Field(속성, 필드)
    cleaningSchedule: string[];

    // Constructor(생성자)
    constructor(name: string, model: string, cleaningSchedule: string[]){ // param, 매개변수 (전달받는 값)
        super(name, model) // 부모가 가지고 있는 필드의 값을 넘겨줄때 super 키워드 사용
        this.cleaningSchedule = cleaningSchedule;
    };

    // Method(행동)
    // override : 부모의 기능을 추가 또는 재정의 하기 위해 사용 (new의 개념이 아님)
    // override performTask() {} >> // 부모의 performTask를 쓸지 청소봇의 performTask를 쓸지 모르기 때문에 override 사용
    // 다형성 : override를 통해서 다형성 구현
    performTask() { // override는 자동으로 인식되기 떄문에 생략 가능하다.
        console.log(`${this.getName()} is cleaning according to the schedule ${this.cleaningSchedule.join(", ")}`);
    }
}

class CookingRobot { // Members
    name: string;
    model: string;
    availableMenus: string[];
    status: string = "Active";

    // Constructor(생성자)
    constructor(name: string, model: string, availableMenus: string[]){
        this.name = name;
        this.model = model;
        this.availableMenus = availableMenus;
    }

    // Method(행동)
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

// 접근 제어자 Visivility Modifier / Access Modifier
// public    - protected - (java의 경우 default) - private
// (default) : 생략되어 있는거
// public : 모든 클래스에서 접근 가능(기본값)
// protected : 같은 클래스와 자식 클래스에서 접근 가능
// private : 해당 클래스 내에서만 접근 가능 (getter, setter로 접근 / 은닉화:데이터보호, 메서드로 상호작용, 가독성 부분에서도 은닉화가 도움이 됨)

let c1 = new CleaningRobot("ABC-1", "Prime", ["Sun", "Mon"])
console.log(c1.cleaningSchedule);
c1.performTask();
console.log(c1.getName());

// 인터페이스는 2가지 의미가 있음
// (추상화 부분에 대한 설명)
// 소프트웨어 관점 : 
// 프로그램 내부 : 

// 객체 구조를 정의하거나 추상화할때 인터페이스를 사용한다.
// 여러 객체가 동일한 구조(인터페이스 구조)를 따르도록 구조를 설계해주기 위해서 사용
// 클래스랑 혼동될 수 있으나, 클래스는 객체를 생성하기 위한 설계도이고 생성자를 무조건 포함해야 한다 (생성자를 무조건 포함한다 = 객체를 만들 수 있다)
// 인터페이스는 형태를 정의하는 것이기 때문에 객체를 생성할 수 없다.

// Interface
interface UserDTO { // 개발자가 구조를 정의(이 값만 들어올 수 있도록 제한)
    id:number;
    name:string;
    email:string;
    createAt:Date;
}

// API 응답 형태를 정의하는 경우에는
interface ApiResponse{
    success:boolean;
    data:UserDTO;
    message?:string; // 있을수도 없을수도 있음
}



