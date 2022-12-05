const button = document.getElementById("btn");
const url = "https://api.gameofthronesquotes.xyz/v1/random";

function fetchdata(){
fetch(x,{
           cache: "no-store",
         })
.then(response => {
    return response.json();
})
.then(data => {
    
    document.getElementById("main-quote").innerHTML = data.sentence ;
    document.getElementById("character").innerHTML = "- "+data.character.name.toUpperCase();

});
}

const load = true; 
load ? fetchdata() : null;

function getVal() {
    const val = document.querySelector('input').value;
     return url.concat(val);
}

button.addEventListener("click",function(){
    const x = getVal();
    fetchdata();
});

