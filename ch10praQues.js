//Question --> You are creating a website for your college. create a class User with 2 properties , name and email .It also has a method called viewData() that allowa user to view website data .

let  DATA = "Secret Informatation";

class User {
  constructor(name,email) {
    this.name = name ;
    this.email = email;
  }
  viewData(){
    console.log(`Data = ${DATA}`);
  }
}
// let student1 = new User("Nikhilesh Tiwari","Tnikilesh0231@gmail.com");
// console.log(student1.viewData());
// Question --> Create a new class called Admin which inherits From User . Add a new method called editData to Admin data that allows it to edit website data.
class Admin extends User {
  constructor(name,email){
    super(name,email);
  }
  editData(){
    DATA = "Some new Value";
  }
}

let admin1 = new Admin();
console.log(admin1);

admin1 = new Admin("nikhil","tveeru@gmail.com");
console.log(admin1);
admin1.editData();
console.log(admin1.viewData());
