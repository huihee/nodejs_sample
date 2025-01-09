class Robot { // Members
    // Property(속성) 또는 Field(속성, 필드)
    name: string;
    model: string;
    status: string = "Active";

    // Constructor(생성자)
    // 객체의 초기상태를 설정하기 위해 사용
    // 객체의 속성값을 쉽게 전달 가능
    constructor(name: string, model: string){
        this.name = name;
        this.model = model;
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
let r1 = new Robot("R2-aD1", "Optimus")
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

