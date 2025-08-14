// event handeling
let btn1 = document.querySelector(".clickMeBtn1");
btn1.onclick = () => {
  console.log("hey!");
  alert("hii");
}

let btn2 = document.querySelector(".clickMeBtn2");
btn2.ondblclick = () => {
  console.log("You clicked me twice.");
}

let box = document.querySelector(".box");
box.onmouseover = () => {
  alert("You are on the box...")
}



// event object
let btn3 = document.querySelector(".clickMeBtn3");
btn3.onclick = (e) => {
  console.log(e);
  console.log(e.target);
  console.log(e.type);
  console.log(e.clientX);
  console.log(e.clientY);
}



// event listerners
let btn4 = document.querySelector(".clickMeBtn4");

btn4.addEventListener("click", () => {
  console.log("handler1");
});

btn4.addEventListener("click", () => {
  console.log("handler2");
});

let hand3 = () => {
  console.log("handler3")
}
btn4.addEventListener("click", hand3);

btn4.addEventListener("click", () => {
  console.log("handler4");
});


btn4.removeEventListener("click", hand3 );
