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
}
else{
    joinBanner.style.display = "none";
}
