// Function

//function definition
function myFunction1() {
  console.log("Hello World!");
}

function myFunction2(msg) {
  console.log(msg);
}

//function call:
myFunction1();
console.log("\n");
myFunction2("Hey");  // printing message through parameter
console.log("\n");


//addition of two numbers using function keyword
console.log("Addition of two numbers using function keyword.");
function addition(num1, num2) {
  return num1 + num2;
}

let a = 2;
let b = 3;
let result = addition(a, b); // stroring the value in result
console.log("Showing the result of addition of 2 & 3 :");
console.log(result);
console.log("\n");


//Arrow Function

//addition of two numbers
console.log("Addition of two numbers using arrow function.");
const sum = (a, b) => {
  return a + b;
}

console.log(sum(3, 5));