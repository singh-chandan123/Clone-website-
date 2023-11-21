let inputbox1 = document.querySelector(".inputbox");
let searchbuton = document.querySelector(".buton");
let tempimg = document.querySelector(".imagess");
let temperature = document.querySelector(".temperature");
let cityname = document.querySelector(".city-name");
let humiditypercent = document.querySelector(".humidity-per");
let windspeed = document.querySelector(".wind-speed");

const apikey = "134bffa7246f7835d679fb4bc517b730";
const url ="https://api.openweathermap.org/data/2.5/weather?&appid=134bffa7246f7835d679fb4bc517b730&units=metric&q="

async function checkweather(city_name) {
  const response = await fetch(url + city_name ) ;
 if(response.status==404){
   let error_data= document.getElementById('errordata');
   error_data.style.display="block";
 }

 else{
  const data = await response.json();
  console.log(data);

  temperature.innerHTML = Math.round(data.main.temp) + "° c";
  cityname.innerHTML = data.name;
  humiditypercent.innerHTML = data.main.humidity + "%";
  windspeed.innerHTML = data.wind.speed + "km/h";
  //changing image
  if (data.weather[0].main == "Haze") {
    tempimg.src = "haze.png";
  } else if (data.weather[0].main == "Clear") {
    tempimg.src = "clear.png";
  } else if (data.weather[0].main == "Clouds") {
    tempimg.src = "clouds.png";
  } else if (data.weather[0].main == "Rain") {
    tempimg.src = "rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    tempimg.src = "drizzle.png";
  } else if (data.weather[0].main == "Snow") {
    tempimg.src = "snow.png";
  } else if (data.weather[0].main == "Mist") {
    tempimg.src = "mist.png";
  }
  document.querySelector('.optionalpart').style.display="block";
  document.querySelector('#errordata').style.display="none"
}

}
searchbuton.addEventListener("click", function () {
  checkweather(inputbox1.value);
});
