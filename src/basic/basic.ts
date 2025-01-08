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