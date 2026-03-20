const wSituation = document.querySelector("#wSituations");
const wDescription = document.querySelector("#wDescription");

const wTemp = document.querySelector("#wTemp");
const wPressure = document.querySelector("#wPressure");
const wHumidity = document.querySelector("#wHumidity");
const wProvinceName = document.querySelector("#wProvinceName");
const wWind = document.querySelector("#wWind");

const city = document.querySelector("#cityName");
const addBtn = document.querySelector("#addBtn");

const apiKey = "e40e739c9f3a5b7f35364806c48e6fa4";

function changeVal(res) {
    if (res.cod === 200) {
        wSituation.innerHTML = res.weather[0].main;
        wDescription.innerHTML =
            '"Weather is like ' + res.weather[0].description + '"';
        wTemp.innerHTML = "Temperature: " + res.main.temp + " °C";
        wPressure.innerHTML = "Pressure: " + res.main.pressure + " hPa";
        wHumidity.innerHTML = "Humidity: " + res.main.humidity + "%";
        wWind.innerHTML = `Wind Speed: ${res.wind.speed} m/s <br> Wind Degree: ${res.wind.deg}°`;
        wProvinceName.innerHTML = "Province Name: " + res.name;
    } else {
        wProvinceName.innerHTML = "❌ City not found!";
        wSituation.innerHTML = "";
        wDescription.innerHTML = "";
        wTemp.innerHTML = "";
        wPressure.innerHTML = "";
        wHumidity.innerHTML = "";
        wWind.innerHTML = "";
    }
}

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const cityName = city.value.trim();
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    fetch(api)
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            changeVal(res);
            city.value = "";
        })
        .catch((err) => {
            console.log(err);
        });
});

city.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        e.preventDefault();
        const cityName = city.value.trim();
        const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
        fetch(api)
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                changeVal(res);
                city.value = "";
            })
            .catch((err) => {
                console.log(err);
            });
    }
});
