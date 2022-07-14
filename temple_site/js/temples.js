//div element to display the temples
let divElem = document.querySelector("#cards");
//asynchronous function
async function getTemples(){
    //fetch the data from the json file
    const response = await fetch("json/temples.json");
    if (response.ok){
        const data = await response.json();
        console.log(data.temples);
        showTemples(data.temples);
    }
}
//function to display the temples into cards
function showTemples(temples){
    temples.forEach(temple => {
        //element to represent the temple card
        const card = document.createElement("div");
        card.classList.add("temple-card");
        //temple image 
        const templeContainer = document.createElement("img");
        templeContainer.setAttribute("src", temple.photos.small);
        templeContainer.setAttribute("alt", `${temple.name} photo`);
        //element for the name of the temple
        const nameElem = document.createElement("p");
        nameElem.textContent = temple.name;
        //like button element
        const likeBtn = document.createElement("button");
        likeBtn.classList.add("likeBtn");
        likeBtn.textContent = "Like";

        card.appendChild(templeContainer);
        card.appendChild(nameElem);
        card.appendChild(likeBtn);

        divElem.appendChild(card);
    });
}
getTemples();