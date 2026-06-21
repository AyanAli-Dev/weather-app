async function getWeather() {
    let city = document.getElementById("city").value;

 let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8f58b5ce3a0a67ccac5ae99f4ad957c9&units=metric`;

    let response = await fetch(url);
    let data = await response.json();

    document.getElementById("result").innerHTML =
        "Temperature: " + data.main.temp + "°C";
}
