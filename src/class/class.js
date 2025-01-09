var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Robot = /** @class */ (function () {
    // Constructor(생성자) / 값의 초기화와 관련있기 때문에 필수 요소이다.
    // 객체의 초기상태를 설정하기 위해 사용
    // 객체의 속성값을 쉽게 전달 가능
    function Robot(name, model) {
        this.status = "Active"; // 기본값 Default 값을 설정 할 수 있음
        // this의 name과 parma의 name은 다르다
        // this.name은 클래스의 name, this = Robot
        this.name = name; // 매개변수로 필드 초기화
        this.model = model;
    } // 객체가 만들어진 후
    // Getter for name
    Robot.prototype.getName = function () {
        return this.name;
    };
    Robot.prototype.getModel = function () {
        return this.name;
    };
    // Method(행동)
    // 클래스를 사용하면 한번에 수정 가능
    Robot.prototype.performTask = function (task) {
        console.log("".concat(this.name, " is performing ").concat(task, "."));
    };
    ;
    Robot.prototype.updateStatus = function (newStatus) {
        this.status = newStatus;
        console.log("".concat(this.name, "'s status is now ").concat(this.status));
    };
    return Robot;
}());
// Create Instance of the Robot class;
// 1. new 키워드로 로봇을 만들기 위해 값을 전달했고
// 2. 객체가 만들어진 후
// 3. r1,r2,r3에 만들어진 변수가 담김
var r1 = new Robot("R2-aD1", "Optimus"); // new 키워드 사용하여 인수(arguments) 전달 (호출하기 위해)
var r2 = new Robot("R5-AA3", "Bumble");
var r3 = new Robot("R2-aD1", "Rotus");
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
var Pet = /** @class */ (function () {
    function Pet() {
        this.category = "Cat"; // 미리 초기화도 가능
        this.name = "Chu";
        // 기본 생성자
        // constructor() {} >> 기본적으로 숨어있는 부분
    }
    return Pet;
}());
var p1 = new Pet();
console.log(p1.name);
var User = /** @class */ (function () {
    // [생성자 부분]
    function User(username, email) {
        this.job = "Student"; // 기본값을 주는 경우
        this.username = username; // 매개변수로 초기화
        this.email = email;
    }
    // [메서드 부분]
    User.prototype.study = function () {
        console.log("".concat(this.username, " is studying"));
    };
    return User;
}());
// [객체 생성] (new 키워드와 arguments 입력)
var user1 = new User("홍길동", "hong@abcd.co.kr");
var user2 = new User("김철수", "kim@example.com");
// [객체의 사용, 접근] (. 도트연산자 사용)
// 1. 인스턴스 자체 접근
console.log(user1); // 출력 : User{username: '홍길동', email: '...'}
// 2. 인스턴스의 세부적인 필드 접근
console.log(user2.username); // cnffur : 김철수
// 3. 메서드 호출
user1.study();
user2.study();
// 클래스의 상속
// 단일책임원칙
var CleaningRobot = /** @class */ (function (_super) {
    __extends(CleaningRobot, _super);
    // Constructor(생성자)
    function CleaningRobot(name, model, cleaningSchedule) {
        var _this = _super.call(this, name, model) || this; // 부모가 가지고 있는 필드의 값을 넘겨줄때 super 키워드 사용
        _this.cleaningSchedule = cleaningSchedule;
        return _this;
    }
    ;
    // Method(행동)
    // override : 부모의 기능을 추가 또는 재정의 하기 위해 사용 (new의 개념이 아님)
    // override performTask() {} >> // 부모의 performTask를 쓸지 청소봇의 performTask를 쓸지 모르기 때문에 override 사용
    // 다형성 : override를 통해서 다형성 구현
    CleaningRobot.prototype.performTask = function () {
        console.log("".concat(this.getName(), " is cleaning according to the schedule ").concat(this.cleaningSchedule.join(", ")));
    };
    return CleaningRobot;
}(Robot));
var CookingRobot = /** @class */ (function () {
    // Constructor(생성자)
    function CookingRobot(name, model, availableMenus) {
        this.status = "Active";
        this.name = name;
        this.model = model;
        this.availableMenus = availableMenus;
    }
    // Method(행동)
    CookingRobot.prototype.performTask = function (task) {
        console.log("".concat(this.name, " is performing ").concat(task, "."));
    };
    ;
    CookingRobot.prototype.updateStatus = function (newStatus) {
        this.status = newStatus;
        console.log("".concat(this.name, "'s status is now ").concat(this.status));
    };
    ;
    CookingRobot.prototype.performCleaning = function () {
        console.log("".concat(this.name, " is cooking according to the menus ").concat(this.availableMenus.join(", "), "."));
    };
    return CookingRobot;
}());
// 접근 제어자 Visivility Modifier / Access Modifier
// public    - protected - (java의 경우 default) - private
// (default) : 생략되어 있는거
// public : 모든 클래스에서 접근 가능(기본값)
// protected : 같은 클래스와 자식 클래스에서 접근 가능
// private : 해당 클래스 내에서만 접근 가능
var c1 = new CleaningRobot("ABC-1", "Prime", ["Sun", "Mon"]);
console.log(c1.cleaningSchedule);
c1.performTask();
console.log(c1.getName());
