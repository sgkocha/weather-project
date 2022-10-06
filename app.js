fetch('https://api.openweathermap.org/data/2.5/weather?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19') .then((response) => response.json()) .then((data) =>  {
   // console.log(data);
   let weatherData = document.createElement("div");
    weatherData.classList.add("weather-data");
    let date = new Date();
    weatherData.innerHTML = `<div class = "weather-data-item"> ${date.getDate() + "." + date.getMonth() } </div>
    <div class = "weather-data-item"> ${data.name} </div>
    <div class = "weather-data-item"> Temperature: ${Math.floor(data.main.temp)}°</div>
    <div class = "weather-data-item"> Humidity: ${data.main.humidity}% </div>
    <div class = "weather-data-item"> Pressure: ${data.main.pressure} <span>m</span></div>
    <div class = "clouds weather-data-item"> 
      <div class = "clouds-title"> ${data.weather[0].description} </div>
      <img src = "https://openweathermap.org/img/w/${data.weather[0].icon}.png">
    </div>
     <div class = "weather-data-item"> Wind: ${data.wind.speed} <span>m/sec</span> </div>
     <div class = "weather-data-item"> Wind deg: ${data.wind.deg} </div>`;
  
    document.body.append(weatherData);
})
