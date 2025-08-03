//synchronous programming example

console.log("Synchronous Programming Example :");
console.log("Executed normally : first");
console.log("Executed normally : second"); // executes only after first executes
console.log("Executed normally : third"); // executes only after second executes
console.log("\n");



//Learning setTimeout
function hello() {
  console.log("Learning setTimeout");
  console.log("setTimeout Examples :");
  console.log("This message was executed after 4seconds.");
}
setTimeout(hello, 4000);

setTimeout(() => {
  console.log("This message was executed after 6seconds: How Are You?");
}, 6000);


//asynchronous programming example

console.log("Asynchronous Programming Example :");
console.log("Executed normally :", 1);
console.log("Executed normally :", 2);
setTimeout(() => {
  console.log("Executed after 3s :", 3);
  console.log("\n");
}, 3000);
console.log("Executed normally :", 4);
console.log("Executed normally :", 5);