//Conditional Statement


//Using if statement for checking eligiablity cretria for vote
let age = 18;

if(age >= 18) {
  console.log("You can vote in election.")
}


// using if statements for changing of mode/theme
let mode = "dark";
let color = "default";

if(mode === "light") {
  color = "white";
}

if(mode === "dark") {
  color = "black";
}

console.log(color)



//using if-else for checking if a number is odd or even
let a = 57;

if( a % 2 === 0 ) {
  console.log("a is even");
} else {
  console.log("a is odd");
}



//using if-else-if ladder for checking age group
let nage = 60;

if( nage < 18 ) {
  console.log("junior");
} else if( nage > 60 ) {
  console.log("senior");
} else {
  console.log("middle");
}


//using switch statement 
let cage = "pen";
switch(cage) {
  case "book":
    console.log("Rs. 500");
    break;
  case "pen":
    console.log("Rs. 20");
    break;
  case "copy":
    console.log("Rs. 100");
    break;
  case "pencil":
    console.log("Rs. 5");
    break;
  default:
    console.log("invalid option");
}