// Question --> create a new button element.give it a text "click me" ,background color of red and text color of white .
// insert the button as the first element inside the body tag 

let newbtn = document.createElement("button");

newbtn.innerText = "click me";

newbtn.style.backgroundColor = "red";

newbtn.style.color = "white"; 

document.querySelector("body").prepend(newbtn);


// question --> Create a <p> tag in html give it a class and some styling .
//now create a new class in css and try to append this class to p element 

//did you notice how we overwrite the class name when you Add a new one ?
//solve this problem using class list .


let para = document.querySelector("p");
let atr=para.getAttribute("class");
// para.setAttribute("class","newClass");

para.classList.add("newClass");