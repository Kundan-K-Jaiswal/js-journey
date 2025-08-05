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


//Promise Chaining
const AsyncFunc1 = (dataid1, callback) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data1", dataid1);
      if (callback) {
        callback();
      }
      resolve("data1 completed", dataid1);
    }, 5000)
  })
}

const AsyncFunc2 = (dataid2) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data2", dataid2);
      resolve("data2 completed", dataid2);
    }, 5000)
  })
}

//using promise chaning
console.log("Fetching data1 from function1...");
let d1 = AsyncFunc1(1);
d1.then((res) => {
  console.log("Data1 recieved :", res);
  console.log("Fetching data2 from function2...");
  let d2 = AsyncFunc2(2);
  d2.then((res) => {
    console.log("Data2 recieved :", res);
  })
})


//using promise chaning in simpler manner
AsyncFunc1(1).then((res) => {
  return AsyncFunc2(2)
}).then((res) => {
  console.log("Both data was fetched..");
})
