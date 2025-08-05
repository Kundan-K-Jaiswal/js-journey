//Promises
console.log("Understanding Promise \n");
let promise = new Promise((resolve, reject) => {
  console.log("I am a Promise");
  resolve("Resolved written");
})
console.log("resolve case :");
console.log(promise);

let promise1 = new Promise((resolve, reject) => {
  reject("This is not an error");
})
console.log("reject case :");
console.log(promise1);


let count = 0
function doWork(id, nextdata) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (count % 2 === 0) {
        console.log("work :", id);
        count++;
        resolve("Work Completed");
      } else {
        count++;
        reject("Unable to get data...");
      }

      if (nextdata) {
        nextdata;
      }
    }, 2000)
  })
}


const createPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("promise was created");
    if (count % 2 === 0) {
      count++;
      resolve("Completed");
    } else {
      count++;
      reject("Not Completed");
    }
  })
}

let rpromise = createPromise();
rpromise.then((res) => {
  console.log(res);
})

let repromise = createPromise();
repromise.catch((err) => {
  console.log(err);
})

doWork(50);
