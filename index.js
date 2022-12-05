const button = document.getElementById("btn");
const url = "https://api.gameofthronesquotes.xyz/v1/random";
var k = url;

function fetchdata() {
    fetch(k, {
        cache: "no-store",
    })
        .then(response => {
            return response.json();
        })
        .then(data => {

            document.getElementById("main-quote").innerHTML = data.sentence;
            document.getElementById("character").innerHTML = "- " + data.character.name.toUpperCase();

        });
}

const load = true;
load ? fetchdata() : null;

function getVal() {
    const val = document.querySelector('input').value.toLowerCase();
    if (val === "") {
        return url;
    }
    else {
        return url.substring(0, url.length - 6).concat("author/").concat(val);
    }
}

button.addEventListener("click", function () {
    k = getVal();
    fetchdata();
});

