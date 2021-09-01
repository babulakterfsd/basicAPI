//global variables
const userCity = document.getElementById('city-name');
const temperature = document.getElementById('temp');
const feelsLike = document.getElementById('feels-like');
const humidity = document.getElementById('humidity');
const pressure = document.getElementById('pressure');
const country = document.getElementById('country');
const deg = document.getElementById('deg');
const speed = document.getElementById('speed');
const error = document.getElementById('error');
const iconImage = document.getElementById('icon-image');
const weatherReport = document.getElementById('report');

//take users city as input
const city = document.getElementById('users-city');
let cityName = city.value;
city.addEventListener('keyup', (event) => {
   cityName = event.target.value
})


//get weather data
const getWeather = async () => {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=bb4b5f8ea0d571edde81c90f5003d194&units=metric`

    try {
        const response = await fetch(apiURL);
    const weatherData = await response.json();
    
    console.log(weatherData);

    if(weatherData.cod === '404') {
        error.innerText = `${cityName} is not a valid city`;
        error.classList.add('p-2','text-danger', 'bg-white', 'text-center', 'w-75', 'mx-auto','d-block', 'fw-bold', 'rounded-1');
        error.classList.remove('d-none');
        iconImage.removeAttribute( 'style')
        iconImage.removeAttribute( 'src');
        weatherReport.textContent = ''
    } else if(weatherData.cod === 200) {
        displayWeatherData(weatherData);
        error.classList.add('d-none')
    } else {
        alert('you have not given proper city name')
    }
    } catch (error) {
        console.log(error.message);
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
    deg.textContent = ''
    speed.textContent = ''
})

//display weather data in the UI
const displayWeatherData = (weatherDataObj) => {
    userCity.innerText = weatherDataObj.name
    temperature.innerText = `${weatherDataObj.main.temp}`
    feelsLike.innerText = weatherDataObj.main.feels_like
    humidity.innerText = weatherDataObj.main.humidity
    pressure.innerText = weatherDataObj.main.pressure
    country.innerText = weatherDataObj.sys.country
    deg.innerText = weatherDataObj.wind.deg
    speed.innerText = weatherDataObj.wind.speed

    if(weatherDataObj.weather[0].main === 'Haze') {
        iconImage.setAttribute('src','./images/haze.svg');
        iconImage.style.height = '150px';
        iconImage.style.width = '180px';
        weatherReport.innerText = `Weather in ${weatherDataObj.name} is Hazy now`
        weatherReport.classList.add('d-block')
        weatherReport.classList.remove('d-none')
    } else if(weatherDataObj.weather[0].main === 'Clouds') {
        iconImage.setAttribute('src','./images/clouds.svg');
        iconImage.style.height = '150px';
        iconImage.style.width = '180px';
        weatherReport.innerText = `Weather in ${weatherDataObj.name} is Cloudy now`
        weatherReport.classList.add('d-block')
        weatherReport.classList.remove('d-none')
    } else if(weatherDataObj.weather[0].main === 'Rain') {
        iconImage.setAttribute('src','./images/rain.svg');
        iconImage.style.height = '150px';
        iconImage.style.width = '180px';
        weatherReport.innerText = `Weather in ${weatherDataObj.name} is Rainy now`
        weatherReport.classList.add('d-block')
        weatherReport.classList.remove('d-none')
    }  else if(weatherDataObj.weather[0].main === 'Clear') {
        iconImage.setAttribute('src','./images/clear.svg');
        iconImage.style.height = '150px';
        iconImage.style.width = '180px';
        weatherReport.innerText = `Weather in ${weatherDataObj.name}  is Clear now`
        weatherReport.classList.add('d-block')
        weatherReport.classList.remove('d-none')
    }
}

// Weather By Geolocation
window.addEventListener('load', () => {
    navigator.geolocation.getCurrentPosition(function (success) {
        const lat = success.coords.latitude
        const lon = success.coords.longitude
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=bb4b5f8ea0d571edde81c90f5003d194&units=metric`
        fetch(url)
            .then(Response => Response.json())
            .then(data => {
                displayWeatherData(data)
            })
    })
})
