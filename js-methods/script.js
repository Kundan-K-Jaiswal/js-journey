// Methods

//forEach loop
console.log("Understanding forEach loop");
console.log("\n");

let array = [1, 2, 3, 4, 5];
console.log("Given Data :", array);
console.log("\n");

function printValue1(val) {
  console.log(val);
}
console.log("Printing each element of given array using a seperate function");
array.forEach(printValue1);
console.log("\n");

console.log("Printing each element of given array using a callback (function keyword)");
array.forEach(function printValue2(val) {
  console.log(val);
});
console.log("\n");

console.log("Printing each element of given array using a callback (arrow function)");
array.forEach((val) => {    // arrow function is prefered for the callback function
  console.log(val);
})
console.log("\n");



// map 
console.log("Understanding map");
console.log("\n");

let price = [12, 15, 18, 14];
console.log("Initial price :", price);

let newPrice = price.map((val) => {
  return val + 3;
});

console.log("Price after increament of 3 :", newPrice);
console.log("\n");


// filter
console.log("Understanding Filter");
console.log("\n");

let naturalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Given natural number list :", naturalNumbers);

let evenArray = naturalNumbers.filter((val) => {
  return val % 2 === 0;
});

console.log("Even natural numbers from the given list :", evenArray);
console.log("\n");


// reduce
console.log("Understanding Reduce");
console.log("\n");

//sum
let numArr = [1,2,3,4];
let total = numArr.reduce((result,value)=> {
  return result + value;
});

console.log("Given number array :", numArr);
console.log("Total sum of elements of number array :", total);

//max number
let max = numArr.reduce((prev, current)=>{
  return prev>current? prev : current;
});

console.log("Max value among elements of number array :", max);