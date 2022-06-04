//function to toggle the nav bar
function toggleMenu(){
    document.querySelector("#primaryNav").classList.toggle("open");
    document.querySelector("#burguerBtn").classList.toggle("open");
}
//add an event listener to the button to call the function toggle menu
document.querySelector("#burguerBtn").addEventListener("click", toggleMenu);
//get the current date
const dt = new Date();
//get the current year
const year = dt.getFullYear();
//place the year in the footer
document.querySelector("#year").textContent = year;
//get the date from last modified and place it in the span tag
let lmodified = document.lastModified;
document.querySelector("#lmodified").textContent = lmodified;
//place the date into the div element with ID of date
const fullDate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(dt);
document.querySelector("#date").innerHTML = `${fullDate}`;
//Now for the Banner that shows only on Mondays and Tuesdays
//get the join banner element by its id
let joinBanner = document.querySelector("#join-banner");
//depending the day the style.display property will change
if (dt.getDay() == 1 || dt.getDay() == 2){
    joinBanner.style.display = "block";
}else{
    joinBanner.style.display = "none";
}
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
