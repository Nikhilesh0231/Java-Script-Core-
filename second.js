console.log("second");

// String in js

let str1 = "Nikhilesh";
let str2 = 'Tiwari';
console.log(str1 + " " + str2);

console.log(str1[0],str1[1]);


//template literals 

let specialString = `This is template literal`;
console.log(specialString);
console.log(typeof specialString);


let obj = {
  name : "Rajesh",
  age : 45
}

console.log("The name is ", obj.name,"and the age is",obj.age);

let output = `The name is ${obj.name} and the age is ${obj.age}`;
console.log(output);


console.log("Welcome To the new \n era of life");
console.log("Welcome To the new\tera of life");

let str3 =   " inTerpolation   ";
console.log(str3.toUpperCase());
console.log(str3.toLowerCase());
console.log(str3.trim());

newStr = str3.slice(3,8);
console.log(newStr);


console.log(str1.concat(str2));

console.log(str3.replace('T','t'));

console.log(str3.charAt(5));


//Question -->  Prompy to user to enter their fullname generate a username for them based on input . start user name with @ , followed by their full name and ending with full nmae length. 



let uName = prompt("Enter your full name without spaces : ");
console.log(uName);
let uLength = uName.length;
console.log(uLength);
let userName = ("@"+uName+uLength)
console.log("Your user name will be : " + userName);