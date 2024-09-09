let btn = document.getElementById("btn1");
// btn.onclick = () => {
//   console.log("Button Clicked");
// };
// btn.onclick = (e) => {
//   console.log(e);
//   console.log(e.type);
// };

// let box1 = document.getElementsByTagName("div");

// for (let i = 0; i < box1.length; i++) {
//   box1[i].onmouseover = (e) => {
//     console.log("this is a div");
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX, e.clientY);
//   };
// }

// btn.addEventListener("click",()=>{
//    console.log("Button Was Clicked handler1");
// });
// btn.addEventListener("click",()=>{
//    console.log("Button Was Clicked handler2");
// });
// const handler3 =()=>{
//   console.log("Button Was Clicked handler3 ");
// }
// btn.addEventListener("click",handler3)
// btn.addEventListener("click",(e)=>{
//    console.log("Button Was Clicked handler4");
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX, e.clientY);
// });

// btn.removeEventListener("click" ,handler3);

//Question-->  Create a toggle button that changes the screen to dark mode when clicked and light mode when clicked again .


let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");

let currMode = "light";

modeBtn.addEventListener("click", ()=>{
  console.log("You are to change the mode of the color");
  if(currMode === "light"){
    currMode = "dark";
    // document.querySelector("body").style.backgroundColor = "black";
    body.classList.add("dark");
    body.classList.remove("light");
  }else{
    currMode = "light";
    // document.querySelector("body").style.backgroundColor = "white"; 
    body.classList.add("light");
    body.classList.remove("dark");


  }
  console.log(currMode);
})