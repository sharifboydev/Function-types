// Named function

function nameOfFunction(a, b) {
    return a + b;
}

console.log(nameOfFunction(10, 20));


// Anonymous function

const myFn = function (a, b) {
    console.log(a, b);
}

myFn(10, 20)

// Arrow function

const arrFn = (a, b) => {
    console.log("Arrow function", a, b);
}

arrFn(50, 60);


// Immediately Invoked function expression IIFE

(function () {
    console.log("IIFE");
})("asasasas")



// High order function


function randomNumber(min, max) {
    return Math.round(Math.random() * (max + min) + min)
}

function highOrderFn(a, b) {
    console.log(a, b, a + b);
}

highOrderFn(randomNumber(1, 100), randomNumber(1, 20))

const number = 10;

let result = number > 10 ? console.log("Xato") : console.log("To'g'ri"); // Ternary operator
const arr = [1, "str", null, true, {}, undefined, 1n];