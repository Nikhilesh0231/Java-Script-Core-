// alert("Welcome to my world");

console.log(document.body);

let heading1 = document.getElementById("heading");

console.log(heading1);

let head1 = document.getElementsByClassName("head");

console.log(head1);

let para = document.getElementsByTagName("p");

console.log(para);

let felements = document.querySelector("button");

console.log(felements);

let Allelements = document.querySelectorAll("h1");

console.log(Allelements);

let fiselements = document.querySelector(".btn");

console.log(fiselements);

let allelements = document.querySelectorAll(".head");

console.log(allelements);

let idelements = document.querySelector("#heading");

console.log(idelements);


console.log(idelements.tagName);

let intext = document.querySelector("h6");

console.log(intext.innerText);

intext.innerText = "Nikhilesh";

console.log(intext.innerText);
//Queston --> Create a H2 element with text - "Hello JavaScript" . Append "Tutorial with Nikhilesh Tiwari" to this rext using Js .

let h2 = document.querySelector("h2");
console.log(h2.innerText);

h2.innerText = h2.innerText + "Tutorial with Nikhilesh Tiwari";

console.log(h2.innerText);


//Question Create three divs with three common class names - "box" .Access them and some text to each of them .

let divs = document.querySelectorAll(".box");

console.log(divs);

for(let div of divs){
  console.log(div.innerText);
}

divs[0].innerText = "New unique value 1";
divs[1].innerText = "New unique value 2";
divs[2].innerText = "New unique value 3";

//Attributes

let div = document.querySelector("div");

console.log(div);

let atr = div.getAttribute("id");

console.log(atr);

let name = div.getAttribute("name");

console.log(name);


let paragraph = document.querySelector("p");
console.log(paragraph);

let classN = paragraph.getAttribute("class");

console.log(classN);

paragraph.setAttribute("class","newClass");



// Node style

console.log(div.style);


div.style.backgroundColor = "green"; 

div.style.fontSize = "23px";

div.innerText = "Hello EveryOne";

// div.style.visibility ="hidden";