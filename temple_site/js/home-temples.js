//current date
const fullDate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(dt);
document.querySelector("#date").innerHTML = `${fullDate}`;
//get the elements for the temples
const temple1 = document.querySelector("#temple1");
const temple2 = document.querySelector("#temple2");
const temple3 = document.querySelector("#temple3");
//asynchronous function
async function getTemples(){
    //fetch the data from the json file
    const response = await fetch("json/temples.json");
    if (response.ok){
        const data = await response.json();
        displayTemple(data.temples, temple1, 0);
        displayTemple(data.temples, temple2, 1);
        displayTemple(data.temples, temple3, 2);
    }
}
//function to display the temples to the home page 
function displayTemple(temples, templeNum, num){
    //create img container
    let imgContainer = document.createElement("div");
    const temple1img = document.createElement("img");
    const templeSrc = `${temples[num].photos.small}`;
    const templeAlt = `${temples[num].name}`;
    temple1img.setAttribute("src", templeSrc);
    temple1img.setAttribute("alt", templeAlt);
    let templeCaption = document.createElement("h4");
    templeCaption.textContent = temples[num].name;

    imgContainer.appendChild(temple1img);
    templeNum.appendChild(imgContainer);
    templeNum.appendChild(templeCaption);
}

getTemples();