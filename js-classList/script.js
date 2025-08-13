//Q1: change the given heading 
let heading = document.querySelector("h2");
let changeString =  "form Apna College Students.";
heading.innerText += changeString;


//Q2: add text to the div
let divs = document.querySelectorAll(".box");
divs[0].innerHTML = "<p> Hii </p>";
divs[1].innerHTML = "<p> How are you doing? </p>";
divs[2].innerHTML = "<p> Please stay motivated. You can do it. Your parents are always with you. </p>";


//Q3: create and add a button in the page
let button = document.createElement("button");
button.innerText = "Click Me!";
button.style.background = "red";
button.style.color = "white";

let body = document.querySelector("body");
body.prepend(button);


//Q4: append new class
let pTag = document.querySelector(".para");
// pTag.setAttribute("class","newpara");
pTag.classList.add("newpara");