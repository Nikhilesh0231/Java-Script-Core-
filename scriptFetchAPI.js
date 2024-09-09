const URL = "https://cat-fact.herokuapp.com/facts";

const factpara = document.getElementById("fact");

const button = document.getElementById("btn");



const getFacts = async () => {
  console.log("Getting data ......")
  let response = await fetch(URL);
  console.log(response);//JSON FORMAT 
  let data = await response.json(); 
  console.log(data);
  factpara.innerText = data[0].text;
};


button.addEventListener("click",getFacts);