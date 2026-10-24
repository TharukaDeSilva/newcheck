// ===== YOUR TASK =====
// Build the weather lookup: when Search is clicked, fetch weather.json and
// show the matching city's weather (or "City not found").
// Full details are in the problem description.
//
// TODO: select the button, input, and the city/temperature/conditions
//       elements; on click, read the (trimmed, lowercased) city, fetch
//       weather.json, and show that city's data or a "City not found"
//       message.

const searchButton = document.querySelector("#searchButton");
const cityInput = document.querySelector("#cityInput");
const cityName = document.querySelector("#cityName");
const temperature = document.querySelector("#temperature");
const conditions = document.querySelector("#conditions");

searchButton.addEventListener("click", () => {
    const city = cityInput.value.trim().toLowerCase();
    fetch('weather.json').then(response => response.json()).then((data)=>{
        const weather  = data[city];
        console.log(weather)
        if (weather){
            cityName.textContent = weather.city;
            temperature.textContent = weather.temperature + '°F'
            conditions.textContent = weather.conditions;
        }else{
            cityName.textContent =  "City not found";
            temperature.textContent = ""
            conditions.textContent = ""
        }
    })



});
