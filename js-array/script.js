// Arrays

// Create Array
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr);
console.log("Length of arr :", arr.length);
arr[4] = 40;
console.log(arr);
arr[20] = 5;
console.log(arr);
console.log("\n");


// Looping in array
let marks = [9, 37, 69, 12, 15, 18, 22];

console.log("Printing Elements of an Array using 'for loop':");
for (let i = 0; i < marks.length; i++) {
  console.log(marks[i]);
}
console.log("\n");


console.log("Printing Elements of an Array using 'for-of loop':");
for (i of marks) {
  console.log(i);
}
console.log("\n");



// Question 1: Average Marks of Students
console.log("Question 1");
let studentMarks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let i of studentMarks) {
  sum += i;
}
console.log(`From the given data : ${studentMarks}, the average marks of the students is ${sum / studentMarks.length}.`);
console.log("\n");



// Question 2: Final price array
console.log("Question 2");
let price = [250, 645, 300, 900, 50];
console.log(`Given price : ${price}`);
for (let i = 0; i < price.length; i++) {
  price[i] = (price[i] - (0.1 * price[i]));
}
console.log(`Price after 10% discount : ${price}`);
console.log("\n");


// Array Methods
let xyz = [0, 1, 2, 3, 4, 5];
let abc = [6, 7, 8, 9];
console.log(`Initial Data : xyz = ${xyz} & abc = ${abc}`);
console.log("\n");

//push
xyz.push(12);
console.log(`xyz after using .push(12) : ${xyz}`);
console.log("\n");

//pop
let p = xyz.pop();
console.log(`xyz after using .pop() : ${xyz}`);
console.log("showing what was removed through pop function",p);
console.log("\n");

//unshift
xyz.unshift(0);
console.log(`xyz after using .unshift(0) : ${xyz}`);
console.log("\n");

//shift
let x = xyz.shift();
console.log(`xyz after using .shift() : ${xyz}`);
console.log("showing what was removed through shift function",x);
console.log("\n");

//tostring
console.log("Using toString function", xyz.toString());
console.log("\n");

//concat
let abcxyz = xyz.concat(abc);
console.log("Using concat function",abcxyz);
console.log("\n");

//slice
let sliced = xyz.slice(1,4);
console.log("using slice function for xyz with index (1,4)", sliced);
console.log("\n");

//splice
//add
xyz.splice(2, 0, 109, 37, 55, 130);
console.log("Using splice function to add elements to the array {.splice(2, 0, 109, 37, 55, 130)} :", xyz);
console.log("\n");
//remove
xyz.splice(4,2);
console.log("Using splice function to remove elements from the array {.splice(4,2)} :", xyz);
console.log("\n");
//replace
xyz.splice(2,2,0,0);
console.log("Using splice function to replace elements from the array {.splice(2, 2, 0, 0)} :", xyz);
console.log("\n");