// Creating Object
console.log("Creating Object Named Student to Store Student Details.")
const Student = {
  fullName: "Kundan Kumar Jaiwal",
  mymarks: 8.88,
  printMarks: function() {
    console.log("Printing marks through function :", this.mymarks);
  },
};
console.log(Student);
console.log("Name :", Student['fullName']);
console.log("Marks :", Student['mymarks']);
Student.printMarks();
console.log("\n");



// learning about prototype
console.log("Learning About Prototype.");
const TaxCalculation = {
  calTax(salary) {
    calculatedTax = salary * 0.1;
    console.log(`The tax to be paid for ${salary} is 10% which equals to ${calculatedTax}`);
  },
  hero(){
    console.log("I am TaxCalculation");
  },
};
console.log("Creating two functions without using key :", TaxCalculation);
TaxCalculation.calTax(100);

const Kundan = {
  salary: 500,
  hero(){                             //this method will work instead of that in TaxCalculation
    console.log("I am Kundan");
  },
}

Kundan.__proto__ = TaxCalculation;   // adds the functions of the TaxCalculation as Kundan's prototype
console.log("After adding TaxCalculation as Kundan's prototype check it's prototype :", Kundan);
Kundan.calTax(Kundan['salary']);
console.log("\n");



// creating objects through class
console.log("Learning about the Class & Object.");
class Students {
  rollNo() {
    console.log("I have a unique roll number");
  }
  idCard() {
    console.log("I have a id card");
  }
  setrollNo(roll) {
    this.MyRoll = roll;
  } 
}

let kundan = new Students();
kundan.setrollNo(109);
console.log(kundan);
let anshika = new Students();
console.log("\n");




//constructors 
console.log("Learning About Constructors");
class myClass {
  constructor(sec) {
    console.log("Our constructor is invoked");
    this.section = sec;
  }
}

let aiml = new myClass('B');
console.log(aiml);
console.log("\n");



//inheritance
console.log("Learning Inheritance");

class Parent {
  constructor() {
    console.log("I am printed through parent class");
  }
  
  whoAmI() {
    console.log("I am Parent");
  }

  property() {
    console.log("I have a car");
  }
}

class Child extends Parent {
  whoAmI() {
    console.log("I am a child");
  }
}

let newObjP = new Parent
let newObjC = new Child;  // parent constructor also works on creating child object
newObjP.whoAmI();
newObjC.whoAmI();
newObjC.property();  //using parent functions through child
console.log("\n");



//super keyword
console.log("Learning About Super Keyword");
class Person {
  constructor(){
    console.log("I am person");
  }
}

class Doctor extends Person {
  constructor() {
    super();    //if we have constructor in both parent and child then we have to use super in child class constructor
    console.log("I am doctor");
  }
}

let newObject = new Doctor();
