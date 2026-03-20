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
    if (res.cod == 200) {
        wSituation.innerHTML = res.weather[0].main;
        wDescription.innerHTML =
            '"Weather is like ' + res.weather[0].description + '"';
        wTemp.innerHTML = "Temperature: " + res.main.temp + " °C";
        wPressure.innerHTML = "Pressure: " + res.main.pressure + " hPa";
        wHumidity.innerHTML = "Humidity: " + res.main.humidity + "%";
        wWind.innerHTML = `Wind Speed: ${res.wind.speed} m/s <br> Wind Degree: ${res.wind.deg}°`;
        wProvinceName.innerHTML = "Province Name: " + res.name;
    } else {
        document.body.innerHTML = "";

        const h3 = document.createElement("h3");
        h3.classList.add("alert", "alert-danger");
        h3.innerText = "City not found!";

        document.body.appendChild(h3);
    }
}

addBtn.addEventListener("click", () => {
    const cityName = city.value.trim();
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`;
    fetch(api)
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            changeVal(res);
        })
        .catch((err) => {
            console.log(err);
        });
});

city.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        const cityName = city.value.trim();
        const api = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`;
        fetch(api)
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                changeVal(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }
});
