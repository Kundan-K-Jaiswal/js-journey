//Callback Example
function sum(a, b) {
  console.log("Sum of a & b :", a + b);
}

function calculator(a, b, callback) {
  callback(a, b);
}

console.log("Calculating sum through callback :");
calculator(2, 3, sum);



//Callback Hell
function getData(id, nextexecution) {
  setTimeout(() => {
    console.log("data", id);
    if (nextexecution) {
      nextexecution();
    }
  }, 2000)
}

console.log("\nUsing callback hell");
getData(1, () => {
  getData(2, () => {
    getData(3, () => {
      getData(4)
    })
  });
})