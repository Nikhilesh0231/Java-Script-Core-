// const student = {
//   name : "Nikhil" ,
//   age :24,
//   grade:"A",
//   marks : 98,
//   printMarks : function () {
//     console.log("marks =",this.marks)
//   }
// }


// prototype in js 


// const employee = {
//   calcTax () {
//     console.log("Tax rate is 10%");
//   },
// };

// const karanArjun1 = {
//   salary : 5000,
// };

// const karanArjun2 = {
//   salary : 5000,
// };

// const karanArjun3 = {
//   salary : 5000,
// };

// const karanArjun4 = {
//   salary : 5000,
// };

// const karanArjun5 = {
//   salary : 5000,
// };

// karanArjun1.__proto__ = employee;
// karanArjun2.__proto__ = employee;
// karanArjun3.__proto__ = employee;
// karanArjun4.__proto__ = employee;
// karanArjun5.__proto__ = employee;


// console.log(`karanArjun1 salary = ${karanArjun1.salary}`);
// console.log(`karanArjun2 salary = ${karanArjun2.salary}`);
// console.log(`karanArjun3 salary = ${karanArjun3.salary}`);
// console.log(`karanArjun4 salary = ${karanArjun4.salary}`);
// console.log(`karanArjun5 salary = ${karanArjun5.salary}`);

// classes in js 


// class ToyotaCar {
//   constructor(color,mileage){
//    console.log("Creating new object"); 
//    this.color = color;
//    this.mileage = mileage;
//   }
//   start (){
//     console.log("Car is Started");
//   }

//   stop (){
//     console.log("Car is Stopped");
//   }

//   setBrand(brand){
//     this.brandName = brand;
//   }
// }

// let myCar = new ToyotaCar();

// myCar.start();
// myCar.stop();

// myCar.setBrand("Scorpio"); 

// let fortuner = new ToyotaCar("black",15);

// console.log(fortuner);

// Inheritance in JavaScript 

class Parent {
  hello (){
    console.log("hello");
  }
}
class Child extends Parent {

}
let newChild = new Child();

newChild.hello();


class Person {
  constructor(){
    console.log(`Enter Parent constructor`);
    this.species = "homo sapiens";
  }
  eat (){
    console.log("eat");
  }
  sleep (){
    console.log("sleep");
  }
}


class Engineer extends Person {
  constructor(branch){
    console.log(`Enter child constructor`);
    super();// to invoke parent class constructor
    this.branch = branch;
    console.log(`Exit child constructor`);

  }
  work (){
    super.eat();
    console.log("solve Problems , build something");
  }
}

let Nikhil = new Engineer();

Nikhil.work();
Nikhil.eat();
Nikhil.sleep();
console.log(Nikhil);

// super keyword

let engObj = new Engineer("Chemical engg");

console.log(engObj);
// Error Handling 



let a = 4;
let b = 5;

console.log("a=",a);
console.log("b=",b);
console.log("a+b = ", a+b);
try{
  console.log("a+b = ", a+c);//error
}catch(err){
  console.log(err);
}
console.log("a+b = ", a+b);
console.log("a+b = ", a+b);
console.log("a+b = ", a+b);
console.log("a+b = ", a+b);
console.log("a+b = ", a+b);
console.log("a+b = ", a+b);
console.log("a+b = ", a+b);