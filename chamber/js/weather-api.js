//elements to change in the page
const temp = document.querySelector("#temp");
const description = document.querySelector("#condition");
const wSpeed = document.querySelector("#w-speed");
const iconContainer = document.querySelector("#img-temp");
//url for the weather
const url = "https://api.openweathermap.org/data/2.5/weather?q=Guayaquil&appid=6ea909c44918475a8f20085878e2613b&units=metric";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // this is for testing the call
            console.log("evidence") // you copied this
            displayResults(data);
        }   
        else {
            throw Error(await response.text());
        }
        } catch (error) {
            console.log(error);
        }
}

function displayResults(weatherdata){
    temp.innerHTML = `${weatherdata.main.temp.toFixed(0)}`;
    //attributes for the weather icon 
    const iconSrc = `https://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`;
    let desc = weatherdata.weather[0].description;
    wSpeed.textContent = weatherdata.wind.speed;
    //capitalize the description
    let weatherDesc = ``;
    const descArray = desc.split(" ");
    descArray.forEach(word => {
        let newDesc = word.charAt(0).toUpperCase() + word.slice(1);
        weatherDesc += `${newDesc} `;
    });
    description.textContent = weatherDesc;

    let weatherIcon = document.createElement("img");
    weatherIcon.setAttribute("src", iconSrc);
    weatherIcon.setAttribute("alt", desc);

    iconContainer.prepend(weatherIcon);
}
apiFetch();