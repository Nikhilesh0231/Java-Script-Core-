let marks = [98,99,87,76,56];

console.log(marks);
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);

console.log(marks.length);


let heroes = ['shaktiman','spiderman','halk','superman','batman','antman'];
console.log(heroes); 

console.log(typeof(heroes)); 
marks[0] = 66;

console.log(marks);

// Looping over an array 


for(let i = 0 ; i < heroes.length ; i++){
  console.log(heroes[i]);
}

//for-of

for( let el of heroes){
  console.log(el);
}


let cities = ['allahabad','delhi','kanpur','lucknow','gurgaon','jaipur'];

for( let city of cities){
  console.log(city.toUpperCase()); 
}

//Question--> for a given array with marks of students -> [85,97,44,37,76,60] . find the average marks of entire class.

let smarks = [85,97,44,37,76,60];
let tMarks = 0;
for(let i = 0 ; i < smarks.length ; i++){
   tMarks = tMarks + smarks[i];
}

console.log(tMarks);

let avMarks = tMarks/smarks.length;
console.log(avMarks);


console.log(`The Average Marks of the students is = ${avMarks}`);


// Question -> for a given array with prices of 5 items -> [250,645,300,900,50] . all items of an offer of 10% OFF on them . change the array to store final price after applying offer.


let itemPrices = [250,645,300,900,50];
for(let i = 0 ; i < itemPrices.length ;i++){
  // console.log(`The Price of item at index ${i} = ${itemPrices[i]}`);

  let offer = itemPrices[i]/10;
  itemPrices[i] = itemPrices[i] - offer;
  console.log(`The Price of item after applying the offer at index ${i} = ${itemPrices[i]}`);
}

console.log(itemPrices);


//Array Methods 

let veggies = ['Potato','Tomato','Onion','Pumpkin','Garlic','Ginger','Chillies'];

console.log(veggies);

veggies.push('Spinach');

console.log(veggies); 

veggies.push('Radish','Carrot');

console.log(veggies); 


let deletedVeggies=veggies.pop();

console.log(veggies); 
console.log(deletedVeggies); 

console.log(veggies.toString());


let fruits = ['Apple','Banana','Grapes','Mango','Litichi','Orange'];

let dryFruits = ['Cashew','Almond','Rasin','DryDates'];

let collectionOfFruits = fruits.concat(dryFruits);


console.log(collectionOfFruits); 
//and we can also do that  

let moreFruits = ['JackFruit','Pomegranate'];

collectionOfFruits = fruits.concat(dryFruits,moreFruits);

console.log(collectionOfFruits); 
 
collectionOfFruits.unshift('Guavava');

console.log(collectionOfFruits); 

let newCollection = collectionOfFruits.shift();

console.log(newCollection);

console.log(collectionOfFruits); 

console.log(fruits.slice(2,4));



//Splice Method

let newArr = [1,2,3,4,5,6];

console.log(newArr.splice(2,2,8,9));//[3,4]

console.log(newArr);// [1, 2, 8, 9, 5, 6]



// Question -->  Create an array to store companies -> "Bloomberg","Microsoft","Uber","Google","IBM","Netflix".
//a.Remove The first Comapny from Array b.Remove Uber and add Ola at its Place c.Add amazon At The end 


let companieNames = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

companieNames.shift();

console.log(companieNames);

companieNames.splice(1,1,"Ola");

console.log(companieNames);

companieNames.push("Amazon");

console.log(companieNames);
