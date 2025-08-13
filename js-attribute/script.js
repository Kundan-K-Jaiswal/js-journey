//properties
let div = document.querySelector("div");
console.log(div.tagName);
console.log(div.innerText);
console.log(div.innerHTML);
console.log(div.textContent);


// Attributes 
let para = document.querySelector(".para");
let img = document.querySelector("img");
// console.log(img);

let id = div.getAttribute("id");
let class1 = div.getAttribute("class");
let class2 = para.getAttribute("class");
let alt = img.getAttribute("alt");

console.log(id);
console.log(class1);
console.log(class2);
console.log(alt);


para.setAttribute("class","paragraph");
class2 = para.getAttribute("class");
console.log(class2);



// style 
let ironman = document.querySelector("#myId");
ironman.children[0].innerText = ironman.children[0].innerText.toUpperCase();
ironman.style.fontSize = "30px";
// ironmann.style.textAlign = "baseline";
ironman.style.backgroundColor = "red";



// insert element
  //create element
  let newElementButton = document.createElement("button");
  newElementButton.innerText = "Click Me";
div.append(newElementButton);
// div.before(newElementButton);
// div.after(newElementButton);


// delete an element
para.remove();