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

        listenLikes();
    }
}
//function to display the temples into cards
function showTemples(temples){
    temples.forEach(temple => {
        //container of the card front and back
        const card = document.createElement("div");
        card.classList.add("card");
        //element to represent the temple card
        const templeCard = document.createElement("div");
        templeCard.classList.add("temple-card");
        ////FRONT SIDE
        const frontCard = document.createElement("div");
        frontCard.classList.add("card-face")
        frontCard.classList.add("temple-card-front");
        //temple image 
        const templeContainer = document.createElement("img");
        templeContainer.setAttribute("src", temple.photos.small);
        templeContainer.setAttribute("alt", `${temple.name} photo`);
        //element for the name of the temple
        const nameElem = document.createElement("h3");
        nameElem.textContent = temple.name;
        //container for buttons
        const btnContainer = document.createElement("div");
        btnContainer.classList.add("btn-container");
        //like button element
        const likeBtn = document.createElement("button");
        likeBtn.classList.add("likeBtn");
        likeBtn.classList.add("unclicked");
        likeBtn.textContent = "Like"; 
        btnContainer.appendChild(likeBtn);  
        //reserve now button
        const reserveBtn = document.createElement("button");
        reserveBtn.classList.add("reserveBtn");
        reserveBtn.textContent = "Reserve Now";
        reserveBtn.setAttribute("onclick", "location.href = 'reservations.html'");
        btnContainer.appendChild(reserveBtn);
        //BACK SIDE
        const backCard = document.createElement("div");
        backCard.classList.add("card-face");
        backCard.classList.add("temple-card-back");
        //temple info
        const templeInfo = document.createElement("div");
        templeInfo.classList.add("temple-info");
        const name2Elem = document.createElement("h3");
        name2Elem.textContent = temple.name;
        const address = document.createElement("p");
        address.innerHTML = `<strong>Address: </strong>${temple.address}`;
        const phone = document.createElement("p");
        phone.innerHTML = `<strong>Phone: </strong> ${temple.phone}`;
        const dedication =  document.createElement("p");
        dedication.innerHTML = `<strong>Dedication: </strong>${temple.milestones.dedication}`;

        templeInfo.appendChild(name2Elem);
        templeInfo.appendChild(address);
        templeInfo.appendChild(phone);
        templeInfo.appendChild(dedication);
        templeInfo.appendChild(btnContainer);

        //append front side
        frontCard.appendChild(templeContainer);
        frontCard.appendChild(nameElem);
        //append back side
        backCard.appendChild(templeInfo);

        templeCard.appendChild(frontCard);
        templeCard.appendChild(backCard);
        card.appendChild(templeCard);
        
        divElem.appendChild(card);

    });
}
getTemples(); 

function listenLikes(){
    let likeBtns = document.querySelectorAll(".likeBtn");
        likeBtns.forEach(likeBtn => {
            likeBtn.addEventListener("click", (ebent) =>{
                ebent.target.classList.toggle("clicked");
                ebent.target.classList.toggle("unclicked");
                if (ebent.target.classList.contains("clicked")){
                    likeBtn.textContent = "Liked!";
                    localStorage.setItem("likes", likeBtn);
                }
                else{
                    likeBtn.textContent = "Like";
                }
            });
        });
}