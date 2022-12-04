const button = document.getElementById("btn");


function fetchdata(){
fetch("https://api.gameofthronesquotes.xyz/v1/random",{
           cache: "no-store",
         })
.then(response => {
    return response.json();
})
.then(data => {
    
    document.getElementById("main-quote").innerHTML = data.sentence ;
    document.getElementById("character").innerHTML = data.character.name.toUpperCase();

});
}

const load = true; 
load ? fetchdata() : null;

button.addEventListener("click",fetchdata);




// let p = document.querySelector("#p");
// const button = document.getElementById("btn");

// function fetchdata() {
//     fetch("https://api.adviceslip.com/advice?", {
//       cache: "no-store",
//     })
//       .then((response) => response.json())

      
//       .then((slipObj) => (textArea.innerText = slipObj.slip.advice));
//   }

// const load = true; 
// load ? fetchdata() : null // first time load

// button.addEventListener("click", fetchdata);