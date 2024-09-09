//functions

function myFunction() {
  console.log("Nikhilesh Tiwari");
}

myFunction();

function print(msg) {
  console.log(msg);
}

print("we are writing some piece of code");

// write a function to calculate sum of two numbers 
function sum(a, b) {
  console.log(a + b);
}
sum(9, 8);

// arrow function 

const sub = (a, b) => {
  return a - b;
};

let result = sub(14, 6);

console.log(result);

//Question --> create a function using "function" keyword that takes a String as an argument & returns the numbers of vowels in the String and same using arrow function 


function countVowels(str) {
  let count = 0;
  for (const char of str) {
    if (char == "a" || char === "e" || char === "i" || char === "o" || char === "u") {
      count++;
    }
  }
  console.log(count);
}

let fcount = countVowels("Nikhilesh");

//using Arrow function

const countVow = (str) => {
  let count = 0;
  for (const char of str) {
    if (char == "a" || char === "e" || char === "i" || char === "o" || char === "u") {
      count++;
    }
  }
  console.log(count);
}

let finalCount = countVow("Ripunjai");


// Example for forEach Loop over Callback function 

let arr = [1,2,3,4,5];
arr.forEach((val) => {
  console.log(val);
});
 

let city = ["kanpur","gurgaon","delhi"];
city.forEach((val,idx,city) => {
  console.log(val.toUpperCase(),idx,city);
});


//Question --> For a given array of numbers ,Print the square of each value using the for each loop .

let narr = [1,2,3,4,5,6];

narr.forEach((val) => {
  console.log(val*val);
});


// another way to write same code 

let newarr = [11,21,31,41,51,61];

let calSquare = (val) => {
  console.log(val*val);
}

newarr.forEach(calSquare);

//Map 

let NewArray = [1,2,3,4,5];

let NewArr = NewArray.map((val)=>{
  return (val*val)/2;
})
console.log(NewArr);

//Filter

let number = [1,3,5,65,332,213,45324,4214,1231,213124,2143];

let fnumber = number.filter((val) => {
  return val%2 === 0;
})

console.log(fnumber);

// reduce 
 let values = [2,3,4,5];
 
 const output1 = values.reduce((res,val) => {
  return res + val;
 })

 console.log(output1);


 // Question --> We are given an array of marks of Student ,filter the students that scored 90+;


 let marks2 = [90,98,77,99,80];

 let stud90 = marks2.filter((val) => {
  return val > 90;
 }) ;

 console.log(stud90);

// Question --> Take a number n as input from user. Create an array of numbers from 1 to n .
// 1. use the reduce method to calculate sum of all the numbers in the array 2.and with the same method to calculate the product of all numbers in the array .

let n = prompt("Enter a positive number ");

let a1 = [];

for(let i = 0 ; i <= n ; i++){
  a1[i-1] = i;
}

console.log(a1);

let c1 = a1.reduce((prev,curr) => {
  return prev +curr;
})

console.log(`the sum of the numbers is ${c1}`);

let c2 = a1.reduce((prev,curr) => {
  return prev*curr;
})

console.log(`the product of nthe numbers is ${c2}`);
