//use local storage to obtain the number of visits / use DOM to get the span tags
const visitElem = document.querySelector("#n-visits");
const daysElem = document.querySelector("#n-days");
let visitNum = Number(window.localStorage.getItem("visit-ls"));
let miliseconds = Number(window.localStorage.getItem("miliseconds"));
//if less than 0 show first visit; otherwise, show the number of visits
if (visitNum !== 0){
    visitElem.textContent = visitNum;
} else{
    visitElem.textContent = "This is your first visit!";
}
//calculate the days if the miliseconds obtained are different than 0
if (miliseconds !== 0){
    let daysNum = Math.round((Date.now() - miliseconds) / 86400000);
    daysElem.textContent = daysNum;
} else{
    daysElem.textContent = 0;
}
//increment by one and save it into the localstorage
visitNum++;
localStorage.setItem("visit-ls", visitNum);
//store the current date into the local storage in miliseconds
localStorage.setItem("miliseconds", Date.now());
