function generateRandom() {
  return Math.random();
}

let businessName = "";
let num;

num = generateRandom();
if (num < 0.33) {
  businessName += "Crazy ";
} else if (num >0.67) {
  businessName += "Amazing ";
} else {
  businessName += "Fire ";
}

num = generateRandom();
if (num < 0.33) {
  businessName += "Engine ";
} else if (num >0.67) {
  businessName += "Food ";
} else {
  businessName += "Graments ";
}

num = generateRandom();
if (num < 0.33) {
  businessName += "Bros";
} else if (num >0.67) {
  businessName += "Limited"
} else {
  businessName += "Hub"
}

console.log(businessName);