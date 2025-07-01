// Solution of the questions releated to functions...

// Question 1: Write a function to return vowel number form a given string.
console.log("Question 1");
function vowelNumber(word) {
  word = word.toLowerCase();
  let count = 0;
  for (let i of word) {
    if (i === 'a' || i === 'e' || i === 'i' || i === 'o' || i === 'u') {
      count++;
    }
  }
  return count;
}

userInput = prompt("Enter any word to count its vowel :");
result = vowelNumber(userInput);
console.log("Result through function : ", result);
console.log("\n");





//Question 2: Write an arrow function to return vowel number form a given string.
console.log("Question 2");
const vowelCount = (word) => {
  word = word.toLowerCase();
  let count = 0;
  for (let i of word) {
    if (i === 'a' || i === 'e' || i === 'i' || i === 'o' || i === 'u') {
      count++;
    }
  }
  return count;
};

aresult = vowelCount(userInput);
console.log("Result through arrow function : ", aresult);
console.log("\n");





//Question 3: Find the sum of square of numbers of array using forEach loop.
console.log("Question 3");
let numbersArray = [10,12,13,14,15];
let numberSum = 0;
console.log("Given array :", numbersArray);
numbersArray.forEach((item)=>{
  numberSum += item**2;
});
console.log("The sum of square of numbers is :", numberSum);
console.log("\n");





//Question 4: Collect the students marks more than 90 in an array.
console.log("Question 4");
let marks = [37,12,93,55,62,18,99,94,86,89];
let goodMarks = marks.filter((val)=>{
  return val>=90;
});
console.log("Given marks :", marks);
console.log("Good Marks :", goodMarks);
console.log("\n");





//Question 5: Find the sum and product using reduce method.
console.log("Question 5");
let userNum = prompt("Enter a number to calculate sum and product till that number :");
let arr = [];
for ( let i=1; i<= userNum; i++) {
  arr.push(i);
}
console.log(arr);

//for sum
let sum = arr.reduce((result,current)=>{
  return result+current;
});
console.log("The sum of all the elements is :", sum);

// for product
let product = arr.reduce((result,current)=>{
  return result*current;
});
console.log("The product of all the elements is :", product);
