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