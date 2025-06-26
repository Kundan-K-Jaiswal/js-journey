
//for loop
console.log("Using for loop to print hello world 60 times.");
for(let i=1; i<=60; i++) {
  console.log("Hello World");
}
console.log("\n");

//sum of 1 - n natural numbers
let num = prompt("Enter a number to print sum of n-natural numbers (using for loop): ");
console.log(`using for loop to print sum of natural number from 1 to ${num}`);
let sum = 0;
for(let count=1; count<=num; count++) {
  sum += count;
}
console.log("Sum-for:", sum);
console.log("\n");



// ------------------------------------------------------------------------------------------------------- //



//while loop
console.log("Using while loop to print hello world 60 times.");
let i = 1;
while(i<=60) {
  console.log("Hello World");
  i++;
}
console.log("\n");


//sum of 1 - n natural numbers
let wnum = prompt("Enter a number to print sum of n-natural numbers (using while loop): ");
console.log(`using while loop to print sum of natural number from 1 to ${wnum}`);
let wsum = 0;
let count = 1;
while(count<= wnum){
  wsum += count;
  count++;
}
console.log("Sum-while:", wsum);
console.log("\n");



// ------------------------------------------------------------------------------------------------------- //



//do-while loop
console.log("Using do-while loop to print hello world 60 times.");
let j = 1;
do {
  console.log("Hello World");
  j++;
} while(j<=60);
console.log("\n");


//sum of 1 - n natural numbers
let dnum = prompt("Enter a number to print sum of n-natural numbers (using do-while loop): ");
console.log(`using do-while loop to print sum of natural number from 1 to ${dnum}`);
let dsum = 0;
let dcount = 1;
do {
  dsum += dcount;
  dcount++;
} while(dcount<= dnum);
console.log("Sum-do-while:", dsum);
console.log("\n");



// ------------------------------------------------------------------------------------------------------- //



//for-of loop
let strLength = 0;
newString = "My Name Is Kundan Kumar Jaiswal.";
console.log(`using for-of loop to print all the characters/letters form "${newString}" `);
for ( let char of newString ) {
  strLength++;
  console.log(char);
}
console.log(strLength);
console.log("\n");



// ------------------------------------------------------------------------------------------------------- //



//for-in loop
console.log(`using for-in loop to print all the keys & values form an object `);
const student = {
  name: "KKJ",
  roll: 109,
  address: "Bihar",
};
for(let val in student ) {
  console.log("key :", val, ", value :", student[val]);
}
console.log("\n");



// ------------------------------------------------------------------------------------------------------- //