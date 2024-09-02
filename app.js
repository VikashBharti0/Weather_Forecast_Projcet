let city = document.querySelector(".input-box");
let search = document.querySelector(".btn");
let img = document.querySelector(".weather-img");
let temp = document.querySelector(".temp");
let desc = document.querySelector(".description");
let humidity = document.querySelector("#humidity");
let wind = document.querySelector("#wind-speed");
let wDetail = document.querySelector(".weather-details");
let err = document.querySelector(".location_not_found");
let weatherDetails = document.querySelector(".weather-body");


async function checkWeather(city) {
    let key = "be9fffbb0dc402ac1114e063407233ae";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

    let data =await fetch(url).then((res) => {
        return res.json();
    });
       
       if(data.cod ==='404'){
            err.style.display="flex";
            weatherDetails.style.display="none";
            return;
            
       } 
      
        err.style.display="none";
        weatherDetails.style.display="flex";
        temp.innerText = `${Math.round((data.main.temp) - 273.15)}°C`;
        desc.innerText = data.weather[0].main;

        humidity.innerText = `${data.main.humidity}%`;
        wind.innerText = `${data.wind.speed}Km/H`;
        

        switch ((data.weather[0].main)) {
            case 'Clear':
                img.src = "/weather_img/clear.png";
                break;
            case 'Clouds':
                img.src = "/weather_img/cloud.png";
                break;
            case 'Mist':
                img.src = "/weather_img/mist.png";
                break;
            case 'Haze':
                img.src = "/weather_img/haze.png";
                break;
            case 'Rain':
                img.src = "/weather_img/rain.png";
                break;
            case 'Snow':
                img.src = "/weather_img/snow.png";
                break;
            case 'Humidity':
                img.src = "/weather_img/humidity.png";
                break;
            default:
                img.src = "/weather_img/clear.png";
        }
     
}



search.addEventListener("click", () => {
    checkWeather(city.value);
})