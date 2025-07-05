
const button = document.querySelector('#weather-button');
const cityInput = document.querySelector('#cityInput');

const cardCity = document.querySelector('#city-name');
const day = document.querySelector('#day');
const temperature = document.querySelector('#temperature');
const climate = document.querySelector('#climate');
const emoji = document.querySelector('#emoji');


async function getData(city){
  const url = `https://api.weatherapi.com/v1/current.json?key=3616ffd7e7dc4e7d823163529250507&q=${city}&aqi=no`;

  //<--You can do this way too but like do with fetch then and error way it is way nicer-->
    
  /*const response = await fetch(url); //send request
  const data = await response.json(); //convert data to json/usable format
  
  cardCity.innerText = data.location.name;
  day.innerText = data.location.localtime;
  temperature.innerText = `${data.current.temp_c}°C`;
  climate.innerText = data.current.condition.text;
  emoji.src = "https:" + data.current.condition.icon;*/

  
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      cardCity.innerText = data.location.name;
      day.innerText = data.location.localtime;
      temperature.innerText = `${data.current.temp_c}°C`;
      climate.innerText = data.current.condition.text;
      emoji.src = "https:" + data.current.condition.icon;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error.message);
    });
    
}

button.addEventListener('click', () => {
  const city = cityInput.value.toLowerCase();
  
  getData(city);
});
