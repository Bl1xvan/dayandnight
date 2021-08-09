const dayNight = document.getElementById("daynight");
const container = document.getElementById("container");
const h1change = document.getElementById("h1change");
const ipsum = Array.from(document.querySelectorAll(".ipsum"));
const middle = document.getElementById("middle");
const thirdp = Array.from(document.querySelectorAll(".thirdp"));

dayNight.addEventListener("click", changeClass);

//Just need the class elements to be toggled
function changeClass(){
    dayNight.classList.toggle("btndark");
    h1change.classList.toggle("h1night");
    for(let i in ipsum){
        ipsum[i].classList.toggle("ipsumnight");
    }
    for(let t in thirdp){
        thirdp[t].classList.toggle("thirdnight");
    }
}



