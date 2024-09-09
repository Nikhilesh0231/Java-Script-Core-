//Understanding the asychronus nature of the programming 
console.log("1");
console.log("2");
function hello (){
  console.log("hello");
}
setTimeout(hello,2000);//this method execute the function after 2000 miliseconds
//2secs = 2000miliseconds
console.log("3");
console.log("4");
//we can do the same code in the below manner using arrow function concept
setTimeout(() => {
console.log("hello");
}, 4000);
console.log("5");
console.log("6");

//Cllbacks

// function sum (a,b) {
//   console.log(a+b);
// }

//  function calculator (a ,b ,sumCallback){
//   sumCallback(a,b);
//  }

//  calculator(4,5,sum);// here is sum is a function but passing as an argument thsat,s why we called as callback function.

// using arrow function 
function calculator(a,b,sumCallback) {
  sumCallback(a,b);
}
calculator(1,5,(a,b)=>{
  console.log(a+b);
})


//Callback Hells 

 //callback hell is a situation where we have multiple callback functions inside each other.

 function getData(dataId,getNextData){
  setTimeout(()=>{
    console.log("data id is",dataId);
    if (getNextData) {
      getNextData();
    }
  },2000);
 }
 getData(1,()=> {
  getData(2,()=>{
    getData(3,()=>{
      getData(4,()=>{
        console.log("completed");
      });
    })
  });
 });