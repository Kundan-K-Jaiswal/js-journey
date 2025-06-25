// Question Number 1:
// Checking if the given number is a multiple of 5 or not

let num = prompt("Enter a number :");
if (num % 5 == 0 ) {
  console.log(`The number ${num}  is divisible by 5`);
} else {
  console.log(`The number ${num} is not divisible by 5`);
}



// Question Number 2
// Creating a grade system to check grade according to the marks entered.
let marks = prompt("Please enter your marks : ");
if ( marks >= 80 && marks <= 100 ) {
  console.log("A");
} else if ( marks >= 70 && marks <= 79 ) {
  console.log("B");
} else if ( marks >= 60 && marks <= 69 ) {
  console.log("C");
} else if ( marks >= 50 && marks <= 59 ) {
  console.log("D");
} else if ( marks >= 40 && marks <= 0 ) {
  console.log("F");
} else {
  console.log("Invalid marks was entered.")
}