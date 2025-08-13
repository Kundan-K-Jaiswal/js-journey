console.dir(document);
console.log(document);

console.dir(document.head);
console.log(document.head);

console.dir(document.body);
console.log(document.body);

document.body.style.backgroundColor = "green";
document.body.childNodes[1].innerText = "I changed my heading through my JS file...";


// Access to the html

let x = document.getElementById("heading");
console.dir(x);

let y = document.getElementsByClassName("para");
console.dir(y);

let z = document.getElementsByTagName("button");
console.dir(z);

let firstElement = document.querySelector("p");
console.dir(firstElement);
let allElements = document.querySelectorAll("p");
console.dir(allElements);


let check = document.querySelectorAll(".para");
console.dir(check)