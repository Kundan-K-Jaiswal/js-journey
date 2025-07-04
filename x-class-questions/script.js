/* 
Question : Create a user and a admin account where users can enter their name, email & view 
their data where as adimn gets an extra feature which is they can edit data.
*/

//user class with 2 properties and a method
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  viewData() {
    console.log("Name :", this.name);
    console.log("Email :", this.email);
  }
}

//adding data to the database...
let uuser1 = new User("Kundan", "asda@gmail.com");
let uuser2 = new User("Anshika Singh", "jkl@gmail.com");
//viewing data form the database...
console.log("Viewing data from user id.");
uuser1.viewData();
uuser2.viewData();
console.log("\n");


//admin class with a new method
class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }

  editData(name, email) {
    super.name = name;
    super.email = email;
  }
}

let auser1 = new Admin("Kundan", "asda@gmail.com");
let auser2 = new Admin("Anshika Singh", "jkl@gmail.com");
console.log("Viewing data from admin id.");
auser1.viewData();
auser2.viewData();
auser1.editData("Kundan Kumar Jaiswal", "asdf@gmail.com");
console.log("Viewing data from admin id after editing the data.");
auser1.viewData();
auser2.viewData();
console.log("\n");