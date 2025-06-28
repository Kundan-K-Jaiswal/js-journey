// Preform Operations to the given arry
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(companies);
console.log("\n");

companies.shift();
console.log(`List after removing 'Bloomberg' :\n ${companies}`);
console.log("\n");

companies.splice(1,1,"Ola");
console.log(`List after replacing 'Uber' whith 'Ola' :\n ${companies}`);
console.log("\n");

companies.push("Amazon");
console.log(`List after adding 'Amazon' :\n ${companies}`);