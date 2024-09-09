// console.log("welcome to the new page !");

// name = "Tony Stark";
// console.log(name);

// fullname = 'Nkhilesh';
// fullName = 'Veeru';
// console.log(fullname);
// console.log(fullName);  

// let fatherName = "Tribhuwan Prasad Tiwari"
// console.log(fatherName);


// var age = 24 ;
// console.log(age);
// var age = 23;
// console.log(age);// here we are able to declare the age twice and update as well .

// let Age = 43;
// console.log(Age);

// // let Age = 34;// here we get an error as w cannnot declare a same variable using let keyword on;ly we can update the value .


// Age = 35;
// console.log(Age);//we are able to update the value .



// const salary = 350000;//Now once we declare the variable with const keyword now we cannot redeclare the  or update the value of salary ;



// let number = 100;
// let dataType = typeof(number);
// console.log(dataType);


// let number1 = 100.4;
// let dataType1 = typeof(number1);
// console.log(dataType1);

// let cast = 'Hindu';
// let dataType2 = typeof(cast);
// console.log(dataType2);

// let isfollow = true;
// let dataType3 = typeof(isfollow);
// console.log(dataType3);



// // declaring Object 


// const Student = {
//   name: "Rajesh  Tiwari",
//   age : 24 ,
//   address : "Kathmandu",
//   isPass : true,
//   cgpa : 9.8
// }

// console.log(Student);

// console.log(Student.age);
// console.log(Student["name"]);

// // Updating Value in Object 

// Student["age"] = Student["age"] + 1 ;

// console.log(Student['age']);


// // practice Question create a const Object 


// const product = {
//   productName : "Parker Jotter Standard CT ball Pen",
//   color : "Black",
//   rating : "****",
//   noOfBuyers : 7002,
//   Deal : "Deal Of The Day",
//   MRP : 285,
//   Discount : "5%",
//   price : 270
// }

// console.log(product);



// this is single line comment 

/* This 
is used  
to write the 
multi line 
comment*/


// // Operators
// //Arithematic Operator

// let a = 30;
// let b = 20;

// console.log("a + b = ",a+b);
// console.log("a - b = ",a-b);
// console.log("a * b = ",a*b);
// console.log("a / b = ",a/b);
// console.log("a % b = ",a%b);

// let c = 2;
// let d = 3;

// console.log("c ** d = ",c**d)

// console.log("a++  = " , a++);
// console.log("++a  = " , ++a);
// console.log("--a  = " , b--);
// console.log("--b  = " , --b);


// console.log(a+=b);


// // comparision Operator
// let f = 6 ;
// let g = "6" ;

// console.log("f==g",f==g)
// console.log("f===g",f===g)


// // Logical Operator

// console.log((a==b)&&(f==g));
// console.log((a==b)||(f==g));
// console.log(!(a==b));

// //Conditional Statement

// //if Statement

// let Age1 = 18;
// if (Age1 >= 18) {
//   console.log("You can vote !!!")
// }

// // let mode = "dark";
// let mode = "light";
// let color;
  
// if(mode == "light"){
//   color = "red";
// }
// console.log(color);
// if(mode == "dark"){
//   color = "black";
// }
// if(mode === "dark"){
//   color = "black";
// }
// else{
//   color = "white";
// }


// console.log(color);


// let ageToVote = 18;
// if (ageToVote >= 18) {
//   console.log("You can vote!!!");
// } else {
//   console.log("You cannot vote!!!!!");
// }


// // else if  Statement 

// let mode1 = "purple";
// let color1;

// if (mode1 === "dark") {
//   color1 = "black";
// } else if(mode1 === "blue") {
//   color1 = "blue"; 
// } else if(mode1 === "purple"){
//   color1 = "purple";
// } else {
//   color1 = "white";
// }

// console.log(color1);


// //ternary Operator


// let umar = 25;
// let result =  umar >= 18 ? "adult" :" not adult";//simpler or compact if else statement   
// // umar >= 18 ? console.log("adult") : console.log(" not adult");

// console.log(result);


// //Switch Statement 

// const Animal = "Giraffe";
// switch (Animal) {
//   case "Cow":
//   case "Giraffe":
//   case "Dog":
//   case "Pig":
//     console.log("This animal is not extinct.");
//     break;
//   case "Dinosaur":
//   default:
//     console.log("This animal is extinct.");
// }


// // Practice Question 
// //1.
// // get user to input a number using prompt (" Enter a number : "). Check if number is a multiple of 5 or not.

// let x = prompt("Enter a number : ");
// console.log(x);

// if (x%5 == 0) {
//   console.log("Entered number is multiple of 5");
// } else {
//   console.log("Entred number is not a multiple of 5");
// }
// //2.

// let score = prompt("Enter Your Score :");
// if(score >= 90 && score <=100){
//   console.log("Grade A");
// }
// else if(score >= 70 && score <=89){
//   console.log("Grade B");
// }
// else if(score >= 60 && score <=69){
//   console.log("Grade C");
// }
// else if(score >= 50 && score <=59){
//   console.log("Grade D");
// }
// else if(score >= 0 && score <=49){
//   console.log("Fail");
// }

// //Loops in java Script 
// // for Loop 
//  for (let i = 0; i < score; i++) {
//   console.log("Nihkilesh Tiwari");
//  }

// console.log("Loop has ended");

// // Calculating sum of first n numbers 

// let num = prompt("Enter The Count Of The Number : ");

// let sum = 0;
// for( let i =1 ; i <= num ; i++ ){
//   sum = sum + i;
// }
// console.log(sum);

// // While loop 

// let i = 1;
// while (i<=5) {
//   console.log("i = ",i);
//   i++;
// }

// // Do while loop

// let i = 1 ;
// do{
//   console.log(i);
//   i++;
// }while(i <= 6);

// for-of loop 

let str = "MYNAMEISKHAN";
for (let val of str) {
  console.log(val);
}

let name = "Nikhilesh";
for (const i of name) {
  console.log(i);
} 


// for-in loop 

const student = {
  name:"nikhilesh",
  age : 24,
  city : "delhi",
  cgpa : 9.9,
  isPass : true
}

for(let i in student){
  console.log(i,student[i]);
}