//function to toggle the nav bar
function toggleMenu(){
    document.querySelector("#primaryNav").classList.toggle("open");
    document.querySelector("#burguerBtn").classList.toggle("open");
}
//add an event listener to the button to call the function toggle menu
document.querySelector("#burguerBtn").addEventListener("click", toggleMenu);
//get the current date and year to place it in the footer
const dt = new Date();
const year = dt.getFullYear();
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
//add the companies to the spotlights
const spotlight1 = document.querySelector("spotlight1");
const spotlight2 = document.querySelector("spotlight2");
const spotlight3 = document.querySelector("spotlight3");
//asynchronous function
async function getCompanies(){
    //fetch the data from the json file
    const response = await fetch("json/data.json");
    if (response.ok){
        const data = await response.json();
        displaySpotlights(data.companies);
    }
}
//function to display 3 random companies to the home page (gold or silver)
function displaySpotlights(companies){
    let importantCompanies = [];
    companies.forEach(company => {
        //if the company membership is gold or silver proceed
        if (company.membership == "Gold Level" || company.membership == "Silver Level"){
            importantCompanies.push(company);
            console.log(company);
        }
    });
    //display to the page 3 random companies
    
}
getCompanies();