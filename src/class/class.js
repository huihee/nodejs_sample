// Class
var Robot = /** @class */ (function () {
    // Constructor(생성자)
    function Robot(name, model) {
        this.status = "Active";
        this.name = name;
        this.model = model;
    }
    // Method(행동)
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
var r1 = new Robot("R2-aD1", "Optimus");
var r2 = new Robot("R5-AA3", "Bumble");
var r3 = new Robot("R2-aD1", "Rotus");
// Accessing fields and Calling methods
console.log(r1.name);
console.log(r2.model);
console.log(r3.status);
r1.performTask("Charging");
r2.performTask("Explorering");
r3.updateStatus("On Repair");
