//Strings

//Create Strings
let str1 = "Kundan Kumar Jaiswal";
console.log(str1);
let str2 = 'Anshika Singh';
console.log(str2);
console.log("\n");


//String Length
console.log(str1.length);
console.log(str2.length);
console.log("\n");

//String Indices
console.log(str1[0], str2[1]);
console.log("\n");

//Template Literals
let str3 = `Hey! I am a Template Literal as I start and end with backtick.`;
console.log(str3);
let str4 = `Hey! I am ${str1} & ${str2} is my best friend.`;
console.log(str4);
console.log("\n");

//Escape Character
let str5 = "hello \n my name is kkj.";
let str6 = "hello \t my name is kkj.";
console.log(str5);
console.log(str6);
console.log(str5.length, str6.length); // expected: 24, output: 23(escape character is counted once)
console.log("\n");

//String Methods
let str7 = "       hey 123, How are you ?              ";
console.log("Main String :", str7);
console.log("To UpperCase :", str7.toUpperCase());
console.log("To LowerCase :", str7.toLowerCase());
console.log("Trim :", str7.trim());
console.log("\n");

let str8 = "0123456";
let str9 = "7890";;
console.log(str8.slice(1,5));
console.log(str8.concat(str9));
console.log(str8.replace("345", "67890"));
console.log(str8.charAt(5));
console.log("\n");
