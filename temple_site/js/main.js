//copyright year
const dt = new Date();
const year = dt.getFullYear();
document.querySelector("#year").textContent = year;
const fullDate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(dt);
document.querySelector("#date").innerHTML = `${fullDate}`;
//last modification
const lmodified = document.querySelector("#lmodified");
lmodified.textContent = document.lastModified;
//function to toggle the nav bar
function toggleMenu(){
    document.querySelector("#primaryNav").classList.toggle("open");
    document.querySelector("#burguerBtn").classList.toggle("open");
}
//add an event listener to the button to call the function toggle menu
document.querySelector("#burguerBtn").addEventListener("click", toggleMenu);