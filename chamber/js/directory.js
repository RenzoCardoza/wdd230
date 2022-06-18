//div element to display data
let divElem = document.querySelector(".grid");

//asynchronous function
async function getCompanies(){
    //fetch the data from the json file
    const response = await fetch("json/data.json");
    if (response.ok){
        const data = await response.json();
        console.log(data.companies);
        showcompanies(data.companies);
    }
}
//function to display info for each company
function showcompanies(companies){
    companies.forEach(company => {
        //div to contain company information
        let businessCard = document.createElement("section");
        businessCard.classList.add("business-card");
        //create the image container
        let companyLogo = document.createElement("img");
        companyLogo.setAttribute("src", company.logos.small);
        companyLogo.setAttribute("alt", `${company.name}'s logo`);
        //p element for the name 
        let name = document.createElement("h2");
        name.textContent = company.name;
        name.classList.add("company-name");
        //p element for the address
        let address = document.createElement("p");
        address.textContent = company.address;
        //p element for the phone
        let phone = document.createElement("p");
        phone.textContent = company.phone;
        //p element for the email
        let email = document.createElement("p");
        email.textContent = company.email;
        //a element for the website link
        let website = document.createElement("a");
        website.href = company.website;
        website.target = "_blank";
        website.innerHTML = `<p>${company.website}</p>`;

        //append child elements to the business card
        businessCard.appendChild(companyLogo);
        businessCard.appendChild(name);
        businessCard.appendChild(address);
        businessCard.appendChild(phone);
        businessCard.appendChild(email);
        businessCard.appendChild(website);
        //get the container and append the bussiness card
        divElem.appendChild(businessCard);
    });
}
//default view
getCompanies();

//add or remove class attributes with DOM
const gridBtn = document.querySelector("#grid");
const listBtn = document.querySelector("#list");
gridBtn.addEventListener("click", () => {
    divElem.classList.remove("list");
    divElem.classList.add("grid");
    gridBtn.style.background = "rgba(0, 0, 0, 0.35)";
    listBtn.style.background = "#EFEFF0";
});
listBtn.addEventListener("click", () => {
    divElem.classList.remove("grid");
    divElem.classList.add("list");
    listBtn.style.background = "rgba(0, 0, 0, 0.35)";
    gridBtn.style.background = "#EFEFF0";
});