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
