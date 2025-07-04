let a = "Kundan ";
let b = 'Kumar ';

console.log("Adding Strings Normally :", a + b); //This Gives Us "Kundan Kumar"
console.log("\n");

try {
  console.log("I am inside try block.");
  console.log("The operation srt1 + str2 will work as it is a valid operation. \nResult :", a + b);
  console.log("Now we will try a undefined character ie. c and perform the same tast a+c, as it is a error generating line of code it will be directed to the catch block.");
  console.log("\n");
  console.log("Trying a*c", a * c);
} catch (err) {
  console.log("I am inside catch block.");
  console.log("Since, a+c throwed a error we are here in catch block to resolve it.");
  console.log("This is not error message it is a message displayed by me. \n", err);
  console.log("Resolving the error :");
  console.log("Catch: \n Apply b + c instead of a + c: ", b + a);
}

console.log("\n");
console.log("Checking when this line of code will execute");