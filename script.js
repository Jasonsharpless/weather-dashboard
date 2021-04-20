var searchInput = document.getElementById("search-input");
var searchBtn = document.getElementById("search-btn");
var searchCities = document.getElementById("searched-cities-list");
var currentWeather = document.getElementById("current-weather-conditions");
var fiveDay = document.getElementById("five-day-forecast");
var apiKey = "8a3cd8f9dddecb0039164ba30beb99ba"

//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


function getApi(userInput) {
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+userInput+'&appid='+apiKey+'&units=imperial';
    fetch(requestUrl)
    .then((res) => res.json())
    .then(function (response) {
      console.log(response);
      
     var cityName = document.createElement("h1")
     cityName.textContent=response.name 
     var currentTemp = document.createElement("h2")
     currentTemp.textContent=" current temp: "+response.main.temp+" F"
     var windSpeed = document.createElement("h2")
     windSpeed.textContent=response.wind.speed+" mph"
     var humidity = document.createElement("h2")
     humidity.textContent=response.main.humidity+" %"
     currentWeather.append(cityName)
     currentWeather.append(currentTemp)
     currentWeather.append(windSpeed)
     currentWeather.append(humidity)
  });
}

//getApi();

searchBtn.addEventListener("click", function(event){
    event.preventDefault()
    var userInput = searchInput.value 
    getApi(userInput)
});


//next I need to call the weather forecast

function getApi(userInput) {
    var getUrl = 'api.openweathermap.org/data/2.5/forecast?q='+userInput+'&appid='+apiKey+'&units=imperial';
    fetch(getUrl)
    .then((res) => res.json())
    .then(function (response) {
        console.log(response);

    var city = document.createElement("h1")
    city.textContent=response.name
    var fiveDayTemp = document.createElement("h2")
    fiveDayTemp.textContent=" temp: "+response.main.temp+" F"
    var wind = document.createElement("h2")
    wind.textContent=response.wind.speed+" mph"
    var humid = document.createElement("h2")
    humid.textContent=response.main.humidity+" %"

        fiveDay.append(city)
        fiveDay.append(fiveDayTemp)
        fiveDay.append(wind)
        fiveDay.append(humid)
    
    });
} 

searchBtn.addEventListener("click", function(event){
    event.preventDefault()
    var userInput = searchInput.value 
    getApi(userInput)
});