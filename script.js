//Form
var button= document.querySelector('#icon'); 
var input= document.querySelector('#city-input'); 
//City & weather
var city= document.querySelector('.city'); 
var weather= document.querySelector('.weather');
var feels = document.querySelector(".feeling")
//Temperature
var currentTemp= document.querySelector('#current');
var minTemp= document.querySelector('#min');
var maxTemp= document.querySelector('#max');
//Info
var wind= document.querySelector('#wind');
var humidity= document.querySelector('#humidity');
var pressure= document.querySelector('#pressure');
var icon= document.querySelector('#weather-icon');

//Open weather API key: 
const apiKey= 'fa883df31dbc52721932410bfaf8bf9c'; 


//Button Event listener 'click' 
button.addEventListener('click', function(){
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=fa883df31dbc52721932410bfaf8bf9c`)
    .then(function(response){ return response.json()})
    .then(function(data){
    console.log(data)
    
    //Variables
   const city = data.name; 
    const weather= data.weather[0].description;
    const feels= Math.floor(data.main.feels_like);
    const temp= Math.floor(data.main.temp);
    const minTemp= Math.floor(data.main.temp_min);
    const maxTemp= Math.floor(data.main.temp_max);
    const wind=data.wind.speed ; 
    const pressure=data.main.pressure ; 
    const humidity=data.main.humidity ; 
    const icon= data.weather[0].icon;
    const iconSrc= ` http://openweathermap.org/img/wn/${icon}@2x.png`;


    //place the value
    window.city.innerHTML= city;
    window.weather.innerHTML= weather; 
    window.feels.innerHTML= `<b>feels like</b> ${feels} <sup>°</sup>`;
    window.currentTemp.innerHTML= `${temp}<sup>°</sup>`; 
    window.minTemp.innerHTML= `${minTemp}<sup>°</sup>`
    window.maxTemp.innerHTML= `${maxTemp}<sup>°</sup>`

    window.wind.innerHTML=`<b>Wind</b> ${wind} <b>m/s</b>` ;
    window.humidity.innerHTML= `<b>Humidity</b> ${humidity}<b>%</b>` ;
    window.pressure.innerHTML=`<b>Pressure</b> ${pressure}<b>hPa</b>` ;
    window.icon.src= iconSrc;  

})
});
//style as animation card view
