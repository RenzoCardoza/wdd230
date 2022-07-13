const urlWeather = "https://api.openweathermap.org/data/2.5/weather?id=3448433&appid=6ea909c44918475a8f20085878e2613b&units=metric";
const urlForecast = "https://api.openweathermap.org/data/2.5/forecast?lat=-22.0&lon=-49.0&appid=6ea909c44918475a8f20085878e2613b&units=metric";
//elements to change in the page
const temp = document.querySelector("#temperature");
const description = document.querySelector("#desc");
const wSpeed = document.querySelector("#wind-speed");
const humidityContainer = document.querySelector("#humidity");
const iconContainer = document.querySelector("#icon");
const forecastContainer = document.querySelector("#days");
const feeling = document.querySelector("#feels-like")

async function apiFetch() {
    try {
        const weatherResponse = await fetch(urlWeather);
        const forecastResponse = await fetch(urlForecast);
        if (weatherResponse.ok && forecastResponse.ok) {
            const weatherData = await weatherResponse.json();
            const forecastData = await forecastResponse.json();
            console.log(weatherData); // this is for testing the call
            console.log(forecastData);
            displayResults(weatherData, forecastData);
        }   
        else {
            throw Error(await weatherResponse.text());
        }
        } catch (error) {
            console.log(error);
        }
}

function displayResults(weatherdata, forecastdata){
    temp.innerHTML = `${weatherdata.main.temp.toFixed(0)}`;
    //attributes for the weather icon 
    const iconSrc = `https://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`;
    let desc = weatherdata.weather[0].description;
    wSpeed.textContent = weatherdata.wind.speed;
    let newdesc = capitalizeDesc(desc);
    description.textContent = newdesc;
    //create the image element
    let weatherIcon = document.createElement("img");
    weatherIcon.setAttribute("src", iconSrc);
    weatherIcon.setAttribute("alt", desc);
    iconContainer.prepend(weatherIcon);
    //add the himidity and feels like sensation
    const humidity = weatherdata.main.humidity;
    humidityContainer.textContent = humidity;
    const feelsLike = weatherdata.main.feels_like.toFixed(0);
    feeling.textContent = feelsLike;

    //FORECAST DATA
    let day1 = document.createElement("section");
    day1.classList.add("day1");
    //forecast date 1
    let date1 = forecastdata.list[4].dt_txt;
    let dateDay1 = getForecastDate(date1);

    const daySection1 = document.createElement("section");
    const day = document.createElement("h3");
    day.textContent = "Day";
    const day1date = document.createElement("p");
    day1date.textContent = dateDay1;
    //icon 1
    const icon1Container = document.createElement("div");
    const icon1 = document.createElement("img");
    const icon1Src = `https://openweathermap.org/img/w/${forecastdata.list[4].weather[0].icon}.png`;
    const desc1 = forecastdata.list[4].weather[0].description;
    let descDay1 = capitalizeDesc(desc1); 
    const weather1 = document.createElement("p");
    weather1.classList.add("day-1-desc");
    weather1.textContent = descDay1;
    icon1.setAttribute("src", icon1Src);
    icon1.setAttribute("alt", descDay1);
    icon1Container.appendChild(icon1);

    daySection1.appendChild(day);
    daySection1.appendChild(day1date);
    day1.appendChild(daySection1);
    day1.appendChild(icon1Container);
    day1.appendChild(weather1);

    //day2
    let day2 = document.createElement("section");
    day2.classList.add("day2");
    //date 2
    let date2 = forecastdata.list[12].dt_txt;
    let dateDay2 = getForecastDate(date2);

    const daySection2 = document.createElement("section");
    const day2elem = document.createElement("h3");
    day2elem.textContent = "Day";
    const day2date = document.createElement("p");
    day2date.textContent = dateDay2;
    //icon 2
    const icon2Container = document.createElement("div");
    const icon2 = document.createElement("img");
    const icon2Src = `https://openweathermap.org/img/w/${forecastdata.list[12].weather[0].icon}.png`;
    const desc2 = forecastdata.list[12].weather[0].description;
    let descDay2 = capitalizeDesc(desc2);
    const weather2 = document.createElement("p");
    weather2.classList.add("day-2-desc");
    weather2.textContent = descDay2;
    icon2.setAttribute("src", icon2Src);
    icon2.setAttribute("alt", descDay2);
    icon2Container.appendChild(icon2);

    daySection2.appendChild(day2elem);
    daySection2.appendChild(day2date);
    day2.appendChild(daySection2);
    day2.appendChild(icon2Container);
    day2.appendChild(weather2);

    //day3
    let day3 = document.createElement("section");
    day3.classList.add("day3");
    //day 3 date
    let date3 = forecastdata.list[20].dt_txt;
    let dateDay3 = getForecastDate(date3);
    
    const daySection3 = document.createElement("section");
    const day3elem = document.createElement("h3");
    day3elem.textContent = "Day";
    const day3date = document.createElement("p");
    day3date.textContent = dateDay3;
    //icon 2
    const icon3Container = document.createElement("div");
    const icon3 = document.createElement("img");
    const icon3Src = `https://openweathermap.org/img/w/${forecastdata.list[20].weather[0].icon}.png`;
    const desc3 = forecastdata.list[20].weather[0].description;
    let descDay3 = capitalizeDesc(desc3);
    const weather3 = document.createElement("p");
    weather3.classList.add("day-3-desc");
    weather3.textContent = descDay3;
    icon3.setAttribute("src", icon3Src);
    icon3.setAttribute("alt", descDay3);
    icon3Container.appendChild(icon3);

    daySection3.appendChild(day3elem);
    daySection3.appendChild(day3date);
    day3.appendChild(daySection3);
    day3.appendChild(icon3Container);   
    day3.appendChild(weather3);

    forecastContainer.appendChild(day1);
    forecastContainer.appendChild(day2);
    forecastContainer.appendChild(day3);
}

function capitalizeDesc(string){
    let desc = ``;
    let array = string.split(" ");
    array.forEach(word => {
        let newDesc = word.charAt(0).toUpperCase() + word.slice(1);
        desc += `${newDesc} `;
    });
    return desc;
}

function getForecastDate(date){
    let split = date.split(" ");
    let datesplit = split[0].split("-");

    return `${datesplit[2]}-${datesplit[1]}`;
}

apiFetch();