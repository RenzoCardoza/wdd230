//get the two elements holding the temperature and the wind speed
const windSpeed = parseFloat(document.querySelector("#w-speed").textContent);
const temperature = parseFloat(document.querySelector("#temp").textContent);
//convert the temperature from celsius to farenheit and windspeed to mph
let tempFarenheit = (temperature * 1.8) + 32;
let speedMph = windSpeed / 1.609344;
//check if wind chill conditions are met
let windChill = 0;
if (tempFarenheit <= 50 && speedMph > 3.0) {
    const f = 35.74 + (0.6215 * tempFarenheit) - (35.75 * (speedMph ** 0.16)) + (0.4275 * (tempFarenheit * (speedMph ** 0.16)));
    //transform it into celsius
    const wcCelsius =   (f - 32) * 0.5556;
    windChill = `${wcCelsius.toFixed(1)}°C`;
} else {
    windChill = "N/A";
}
//add the windchill value to the span tag
document.querySelector("#w-chill").textContent = windChill;