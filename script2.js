let newbtn = document.createElement("button");

newbtn.innerText = "Click!!"

console.log(newbtn);

let div = document.querySelector("div");
// div.append(newbtn); // for adding element in the element at the last 
// div.prepend(newbtn); // For adding element in the element  at the first position 

// div.before(newbtn);// for adding elemnet of the element at the top 
div.after(newbtn);// for adding elemnet of the element at the bottom


let newheading = document.createElement("h1");
// newheading.innerText = "Inserting Element";
newheading.innerHTML = "<i>hello</i>";

// div.before(newheading);
document.querySelector("body").prepend(newheading);


//removing a node 

let para = document.querySelector("p");

para.remove();
newheading.remove();
