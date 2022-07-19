//get the menu buttons
const serviceBtn = document.querySelector("#serviceBtn");
const receptionBtn = document.querySelector("#receptionBtn");
const missionaryBtn = document.querySelector("#missionaryBtn");
//content
const serviceAmenitieContent = document.querySelector("#services-amenities");
const receptionContent = document.querySelector("#reception");
const templeMissionaries = document.querySelector("#temple-missionaries");
//event listners
serviceBtn.addEventListener("click", () =>{
    //add and remove the corresponding class
    serviceBtn.classList.add("activeBtn");
    receptionBtn.classList.remove("activeBtn");
    missionaryBtn.classList.remove("activeBtn");
    //change the layout of the page
    receptionContent.classList.add("hide");
    // templeMissionaries.classList.remove("show");
    serviceAmenitieContent.classList.remove("hide");
});
receptionBtn.addEventListener("click", () =>{
        //add and remove the corresponding class
        serviceBtn.classList.remove("activeBtn");
        receptionBtn.classList.add("activeBtn");
        missionaryBtn.classList.remove("activeBtn");
        //change the layout of the page
        // templeMissionaries.classList.remove("show");
        serviceAmenitieContent.classList.add("hide");
        receptionContent.classList.remove("hide");
});
missionaryBtn.addEventListener("click", () =>{
    //add and remove the corresponding class
    serviceBtn.classList.remove("activeBtn");
    receptionBtn.classList.remove("activeBtn");
    missionaryBtn.classList.add("activeBtn");
    //change the layout of the page
    serviceAmenitieContent.classList.add("hide");
    // receptionContent.classList.remove("show");
    // templeMissionaries.classList.add("show");
});