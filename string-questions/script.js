//Question: Generate UserName With @ as prefix & name cound ae postfix.

let userName = prompt("Please enter your full name :");
userName = userName.replaceAll(" ", "");
let nameLength = userName.length;
let symbol = "@";
let handel1 = symbol.concat(userName);
let handel = handel1.concat(nameLength);
console.log(handel);