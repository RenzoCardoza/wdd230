//add the companies to the spotlights
const spotlight1 = document.querySelector("#spotlight1");
const spotlight2 = document.querySelector("#spotlight2");
const spotlight3 = document.querySelector("#spotlight3");
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
let importantCompanies = [];
function displaySpotlights(companies){
    companies.forEach(company => {
        //if the company membership is gold or silver proceed
        if (company.membership == "Gold Level" || company.membership == "Silver Level"){
            importantCompanies.push(company);
        }
    });
    //display to the page 3 random companies
    let spotlightNum = 1;
    let companiesArr = getRandomCompanies(importantCompanies);
    companiesArr.forEach(company => {
        console.log(spotlightNum);
        createSpotlight(company, spotlightNum);
        spotlightNum++; //increment 1 the number
    });
}
//get 3 random companies 
function getRandomCompanies(array){
    let shuffledArr = array;
    while (shuffledArr.length >= 4){
        shuffledArr = shuffledArr.sort(() => 0.5 - Math.random());
        shuffledArr.pop();
    }
    return shuffledArr;
}
//create spotlights elements
function createSpotlight(company, spotNum){
    let companyName = document.createElement("h2");
    companyName.textContent = company.name;
    let logoImg = document.createElement("img");
    let logoSrc = company.logos.small;
    let logoAlt = `${company.name}'s logo`;
    logoImg.setAttribute("src", logoSrc);
    logoImg.setAttribute("alt", logoAlt);
    let slogan = document.createElement("h3");
    slogan.textContent = `"${company.slogan}"`;
    let email = document.createElement("p");
    email.classList.add("spotlight-email");
    email.textContent = company.email;
    let informations = document.createElement("p");
    informations.innerHTML = `${company.phone} | <a href="${company.website}" target="_blank">Website</a>`;
    //dependin the number of the spotlight place the spotlights
    if (spotNum === 1){
        spotlight1.appendChild(companyName);
        spotlight1.appendChild(logoImg);
        spotlight1.appendChild(slogan);
        spotlight1.appendChild(email);
        spotlight1.appendChild(informations);
    } if (spotNum === 2){
        spotlight2.appendChild(companyName);
        spotlight2.appendChild(logoImg);
        spotlight2.appendChild(slogan);
        spotlight2.appendChild(email);
        spotlight2.appendChild(informations);
    } if (spotNum === 3){
        spotlight3.appendChild(companyName);
        spotlight3.appendChild(logoImg);
        spotlight3.appendChild(slogan);
        spotlight3.appendChild(email);
        spotlight3.appendChild(informations);
    }
}
getCompanies();