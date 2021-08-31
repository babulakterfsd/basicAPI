//global variables
const userCity = document.getElementById('city-name');
const temperature = document.getElementById('temp');
const feelsLike = document.getElementById('feels-like');
const humidity = document.getElementById('humidity');
const pressure = document.getElementById('pressure');
const country = document.getElementById('country');
const sunrise = document.getElementById('sunrise');
const sunset = document.getElementById('sunset');
const deg = document.getElementById('deg');
const speed = document.getElementById('speed');
const error = document.getElementById('error');
const iconImage = document.getElementById('icon-image');

//take users city as input
const city = document.getElementById('users-city');
let cityName = city.value;
city.addEventListener('keyup', (event) => {
   cityName = event.target.value
})


//get weather data
const getWeather = async () => {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=bb4b5f8ea0d571edde81c90f5003d194&units=metric`

    const response = await fetch(apiURL);
    const weatherData = await response.json();
    console.log(weatherData);

    if(weatherData.cod === '404') {
        error.innerText = `${cityName} is not a valid city`;
        error.classList.add('p-2','text-danger', 'bg-white', 'text-center', 'w-75', 'mx-auto','d-block', 'fw-bold', 'rounded-1');
        error.classList.remove('d-none');
        iconImage.removeAttribute( 'style')
        iconImage.removeAttribute( 'src')
    } else if(weatherData.cod === 200) {
        displayWeatherData(weatherData);
        error.classList.add('d-none')
    } else {
        alert('something error happend, open console')
    }
}

//search button handler
const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', () => {
    getWeather();
    city.value = '';
    userCity.textContent = '';
    temperature.textContent = ''
    feelsLike.textContent = ''
    humidity.textContent = ''
    pressure.textContent = ''
    country.textContent = ''
    sunrise.textContent = ''
    sunset.textContent = ''
    deg.textContent = ''
    speed.textContent = ''
})

//display weather data in the UI
const displayWeatherData = (weatherDataObj) => {
    userCity.innerText = weatherDataObj.name
    temperature.innerText = `${weatherDataObj.main.temp}(celcius)`
    feelsLike.innerText = weatherDataObj.main.feels_like
    humidity.innerText = weatherDataObj.main.humidity
    pressure.innerText = weatherDataObj.main.pressure
    country.innerText = weatherDataObj.sys.country
    sunrise.innerText = weatherDataObj.sys.sunrise
    sunset.innerText = weatherDataObj.sys.sunset
    deg.innerText = weatherDataObj.wind.deg
    speed.innerText = weatherDataObj.wind.speed

    if(weatherDataObj.weather[0].main === 'Haze') {
        iconImage.setAttribute('src','./images/haze.svg');
        iconImage.style.height = '150px';
        iconImage.style.width = '180px';
    } else if(weatherDataObj.weather[0].main === 'Clouds') {
        iconImage.setAttribute('src','./images/clouds.svg');
        iconImage.style.height = '150px';
        iconImage.style.width = '180px';
    }else if(weatherDataObj.weather[0].main === 'Rain') {
        iconImage.setAttribute('src','./images/rain.svg');
        iconImage.style.height = '150px';
        iconImage.style.width = '180px';
    }
}