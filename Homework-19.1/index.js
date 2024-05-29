const loader = document.querySelector("[data-loader]");
const apiKey = "c92361d825c3b727352e57ae9cfa2b10";

document.getElementById("update-button").addEventListener("click", () => {
  const city = document.getElementById("citySelect").value;
  getWeather(city);
});

function getWeather(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=uk&appid=${apiKey}`;
  showLoader("loading");
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      showLoader("success");
      weatherInfo(data);
    })

    .catch((error) => {
      showLoader("error");
      document.getElementById("weather-info").textContent = error;
    });
}

function weatherInfo(data) {
  const weatherInfo = document.getElementById("weather-info");
  weatherInfo.textContent = "";

  const dataTime = new Date();
  const formattedDateTime = dataTime.toLocaleString("uk-UA");
  weatherInfo.append(formattedDateTime);

  const cityName = document.createElement("div");
  cityName.classList.add("cityName");
  cityName.textContent = data.name;
  weatherInfo.append(cityName);

  const temp = document.createElement("p");
  temp.textContent = `Температура: ${data.main.temp}°C`;
  weatherInfo.append(temp);

  const feelsLike = document.createElement("p");
  feelsLike.textContent = `Відчувається як: ${data.main.feels_like}°C`;
  weatherInfo.append(feelsLike);

  const weather = document.createElement("p");
  weather.textContent = `Погода: ${data.weather[0].description}`;
  weatherInfo.append(weather);

  const humidity = document.createElement("p");
  humidity.textContent = `Вологість: ${data.main.humidity}%`;
  weatherInfo.append(humidity);

  const wind = document.createElement("p");
  wind.textContent = `Швидкість вітру: ${data.wind.speed} м/с`;
  weatherInfo.append(wind);
}

function showLoader(status) {
  if (!status) return;

  switch (status) {
    case "loading": {
      loader.classList.remove("d-none");
      break;
    }
    case "success": {
      loader.classList.add("d-none");
      break;
    }
    case "error": {
      loader.classList.add("d-none");
      break;
    }
    default: {
      break;
    }
  }
}

getWeather(document.getElementById("citySelect").value);
