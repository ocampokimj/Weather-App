const apiKey = "393b405724d0d0eecf5dba95fc8737e4";
const searchBar = document.querySelector(".search-bar");
const humidityPercentage = document.querySelector(".humidity-temp");
const windPercentage = document.querySelector(".wind-percentage");
const weatherForecast = document.querySelector(".weather-forecast");
const sunset = document.querySelector(".sunset-temp");
const sunrise = document.querySelector(".sunrise-temp");
const min = document.querySelector(".min-temp");
const max = document.querySelector(".max-temp");

// `https://api.openweathermap.org/data/2.5/weather?q=chicago&APPID=${apiKey}`

async function getApi() {
  const currentCity = document.querySelector(".current-city");
  const degree = document.querySelector(".degree");
  const weatherIcon = document.querySelector(".weather-icon");
  const sgv = document.querySelector(".icon");
  let citySearch = searchBar.value;

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&units=imperial&APPID=${apiKey}`,
    { mode: "cors" }
  );
  const weatherData = await response.json();
  console.log(weatherData.name);
  console.log(response);
  console.log(weatherData);
  let roundedTemperature = Math.floor(weatherData.main.temp);
  currentCity.innerText = `${weatherData.name}`;
  degree.innerText = `${roundedTemperature}°`;

  // functions for sunset, sunrise, min-max temp
  function getSunset() {
    // getting the hour and minutes of sunset
    const sunsetDate = new Date(weatherData.sys.sunset * 1000);
    const sunsetHour = sunsetDate.getHours() + ":" + sunsetDate.getMinutes();
    sunset.innerText = sunsetHour;
  }

  function getSunrise() {
    //hours and minutes for sunrise
    const sunriseDate = new Date(weatherData.sys.sunrise * 1000);
    const sunriseHour = sunriseDate.getHours() + ":" + sunriseDate.getMinutes();
    sunrise.innerText = sunriseHour;
  }

  function getHumidity() {
    humidityPercentage.innerText = `${weatherData.main.humidity}%`;
    weatherForecast.innerText = weatherData.weather[0].description;
    console.log(weatherForecast.innerText);
  }

  function getMinMaxTemp() {
    min.innerText = weatherData.main.temp_min;
    max.innerText = weatherData.main.temp_max;
  }

  // Calling the functions for sunset, sunrise, min-max temp
  getSunset();
  getSunrise();
  getHumidity();
  getMinMaxTemp();

  // windPercentage.innerText = weatherData.wind.speed

  // sunrise.innerText = weatherData.sys.sunrise;

  const getIcon = weatherData.weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/wn/${getIcon}@2x.png`;

  const imageIcon = document.querySelector(".icon-image");
  const imageIcon1 = document.querySelector(".icon-image1");
  const imageIcon2 = document.querySelector(".icon-image2");

  // console.log(iconUrl)
  imageIcon.src = iconUrl;
  imageIcon1.src = iconUrl;
  imageIcon2.src = iconUrl;
  // iconImage.src = sgv.src

  // console.log(sgv.src)

  searchBar.value = "";
  return weatherData;
}

// Get API temperature from popular cities LA
async function getLaApi() {
  const laTemp = document.querySelector(".los-angeles-popular-cities-temp");

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=los%20angeles&units=imperial&APPID=${apiKey}`,
    { mode: "cors" }
  );
  const laData = await response.json();
  let roundedTemperature = Math.floor(laData.main.temp);

  laTemp.innerText = `${roundedTemperature}°`;
}
// Get API temperature from popular cities NY
async function getNewYorkApi() {
  const newYorkTemp = document.querySelector(".new-york-popular-cities-temp");

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=new%20york&units=imperial&APPID=${apiKey}`,
    { mode: "cors" }
  );
  const newYorkData = await response.json();
  let roundedTemperature = Math.floor(newYorkData.main.temp);

  newYorkTemp.innerText = `${roundedTemperature}°`;
}
// Get API temperature from popular cities SF
async function getSanFranciscoApi() {
  const sanFranciscoTemp = document.querySelector(
    ".san-francisco-popular-cities-temp"
  );

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=san%20francisco&&units=imperial&APPID=${apiKey}`,
    { mode: "cors" }
  );
  const sanFranciscoData = await response.json();
  let roundedTemperature = Math.floor(sanFranciscoData.main.temp);

  sanFranciscoTemp.innerText = `${roundedTemperature}°`;
}
// Get API temperature from popular cities Seattle
async function getSeattleApi() {
  const seattleTemp = document.querySelector(".seattle-popular-cities-temp");
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=seattle&units=imperial&APPID=${apiKey}`,
    { mode: "cors" }
  );
  const seattleData = await response.json();
  let roundedTemperature = Math.floor(seattleData.main.temp);

  seattleTemp.innerText = `${roundedTemperature}°`;
}

function changeBackgroundOnWeather() {
  const body = document.body;
  body.style.backgroundImage =
    "url('https://i0.wp.com/whatsupnewp.com/wp-content/uploads/2015/10/16292-rain-window.jpg?fit=1200%2C675&ssl=1')";
  body.style.backgroundSize = "cover";
}

// changeBackgroundOnWeather();

getLaApi();
getNewYorkApi();
getSanFranciscoApi();
getSeattleApi();

searchBar.addEventListener("change", getApi);

// Japan    new york   long beach   mexico
