random = Math.random();

console.log("Faulty Calculator")

function calc (a,sym,b) {
  if(sym ==="+") {
    return a+b;
  } else if (sym === "-") {
    return a-b;
  } else if (sym === "*") {
    return a*b;
  } else if (sym === "/") {
    return a/b;
  } 
}

function faultycalc (a,sym,b) {
  if(sym ==="+") {
    return a-b;
  } else if (sym === "-") {
    return a*b;
  } else if (sym === "*") {
    return a/b;
  } else if (sym === "/") {
    return a**b;
  } 
}

if (random < 0.2) {
  res = faultycalc (2,'+',3);
} else {
  res = calc(2,'+',3);
}

console.log("Showing the result of 2 + 3 :", res);