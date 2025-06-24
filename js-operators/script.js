// Arithmetic Operator :
console.log("Arithmetic Operators");

let a = 5
let b = 10

console.log("a =", a, ", b =", b);
console.log("a + b :", a+b);
console.log("a - b :", a-b);
console.log("a * b :", a*b);
console.log("a / b :", a/b);
console.log("a % b :", a%b);
console.log("a ** b :", a**b);
console.log("++a :", ++a);
console.log("--b :", --b);
console.log("\n");


//Assignment Operation
console.log("Assignment Operators");

let c = 5;

c = 6;
console.log("c =", c);
c+=1;
console.log("c += 1 :", c);
c-=1;
console.log("c -= 1 :", c);
c*=1;
console.log("c *= 1 :", c);
c/=1;
console.log("c /= 1 :", c);
c%=1;
console.log("c %= 1 :", c);
c**=1;
console.log("c **= 1 :", c);
console.log("\n");



//Comparison Operators
console.log("Comparison Operators");

let d = 5;
let e = 6;
console.log ("d =", d, ", e =", e);
console.log("d == e :", d==e);
console.log("d != e :", d!=e);
console.log("d === e :", d===e);
console.log("d === 5 :", d===5);
console.log("d === '5' :", d==="5");
console.log("d !== e :", d!==e);
console.log("d !== 5 :", d!==5);
console.log("d !== '5' :", d!=="5");
console.log("d <= e :", d<=e);
console.log("d >= e :", d>=e);
console.log("d < e :", d<e);
console.log("d > e :", d>e);
console.log("\n");



//Logical Operators
console.log("Logical Operators");

let f = 7;
let g = 8;

let cond1 = f<g; //ture
let cond2 = f==7; //ture
console.log ("cond1 = true , cond2 = true");

console.log("cond1 && cond2 :", cond1&&cond2);
console.log("cond1 || cond2 :", cond1||cond2);
console.log("!cond1 :", !cond1 );

cond1 = f>g; //false
cond2 = f==7; //ture
console.log ("cond1 = false , cond2 = true");

console.log("cond1 && cond2 :", cond1&&cond2);
console.log("cond1 || cond2 :", cond1||cond2);
console.log("!cond1 :", !cond1 );

cond1 = f>g; //false
cond2 = f==8; //false
console.log ("cond1 = false , cond2 = false");

console.log("cond1 && cond2 :", cond1&&cond2);
console.log("cond1 || cond2 :", cond1||cond2);
console.log("!cond1 :", !cond1 );
console.log("\n");




// Ternary Operators
console.log("Ternary Operators");

g < 10 ? console.log("less than 10") : console.log("more than 10");
// g < 10 ? "less than 10" : "more than 10";
