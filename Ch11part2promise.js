
// let promise = new Promise((resolve, reject) => {
//   console.log("I am new Promise");
//   resolve("hey promise is fulfilled");
// })
// console.log(promise);

// let promise1 = new Promise((resolve, reject) => {
//   console.log("I am new Promise");
//   reject("some error occured");
// })
// console.log(promise1);

// function getData(dataId , getNextData){
//   return new Promise ((resolve,reject)=>{
//     setTimeout(() => {
//       console.log("data",dataId);
//       resolve("success");
//       if (getNextData) {
//         getNextData();
//       }
//     }, 5000);
//   })
// }
// let promise = getData(123);
// console.log(promise);   
// let result = setTimeout(() => {
//   console.log(promise); 
// }, 6000);

// const getPromise = () =>{
//   return new Promise((resolve, reject) => {
//     console.log("I am promise");
//     // resolve("success");
//     reject("error");
//   });
// };


// let promise =  getPromise();
// promise.then((res)=>{
//   console.log("Promise fulfilled",res);
// });

// promise.catch((err)=>{
//   console.log("Promise rejected",err);
// })


//Promise Chaining 

function asyncFunc1(){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      console.log("Data 1");
      resolve("success");
    }, 4000);
  })
}

function asyncFunc2(){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      console.log("Data 2");
      resolve("success");
    }, 4000);
  })
}
console.log("Fetching Data 1.......");
let P1 = asyncFunc1();
P1.then((res)=>{
  console.log(res); 
  console.log("Fetching Data 2.......");
  let P2 = asyncFunc2();
  P2.then((res)=>{
    console.log(res);
  });
});
