const wSituation = document.querySelector("#wSituations");
const wDescription = document.querySelector("#wDescription");

const wTemp = document.querySelector("#wTemp");
const wPressure = document.querySelector("#wPressure");
const wHumidity = document.querySelector("#wHumidity");
const wProvinceName = document.querySelector("#wProvinceName");
const wWind = document.querySelector("#wWind");

let city = prompt("Enter City Name");

const apiKey = "e40e739c9f3a5b7f35364806c48e6fa4";
const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
fetch(api)
    .then((res) => {
        return res.json();
    })
    .then((res) => {
        wSituation.innerHTML = res.weather[0].main;
        wDescription.innerHTML =
            "Description: " +
            '" Weather is like ' +
            res.weather[0].description +
            '"';
        wTemp.innerHTML = "Temperature: " + res.main.temp + " °C";
        wPressure.innerHTML = "Pressure: " + res.main.pressure + " hPa";
        wHumidity.innerHTML = "Humidity: " + res.main.humidity + "%";
        wWind.innerHTML = `Wind Speed: ${res.wind.speed} m/s <br> Wind Degree: ${res.wind.deg}°`;
        wProvinceName.innerHTML = "Province Name: " + res.name;
    })
    .catch((err) => {
        console.log(err);
    });
