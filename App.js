let now = new Date();
let h3 = document.querySelector("h3");
let date = now.getDate();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[now.getDay()];
let hour = now.getHours();
let minutes = now.getMinutes();
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let month = months[now.getMonth()]; 
h3.innerHTML = (day)+"&nbsp" +" "+ (hour)+ ":"+ (minutes)+"&nbsp"+" " +(month)+":"+ (date);

// writing this part was hard
function ShowForecast() {
    let forecastElement = document.querySelector("#forcast");
    
    let days = ["Thu", "Fri", "Sat", "Sun", "Mon", "Tue"]

    let forecastHTML = `<div class="row">`;
    days.forEach(function (day) {
        
        forecastHTML = forecastHTML + `<div class="col-2" >
        <div id="forcast-date">${day}</div>
        <img  id="forcast-imag" src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"/>
        <div class="forcast-temperature" id="forcast-min-max-tem">
            <span class="forcast-temperature-max" id="tem-max">18°C |</span>
            <span class="forcast-temperature-min">15°C</span>

        </div>
    </div>`;
    });
   
     forecastHTML = forecastHTML + `</div>`;
     forecastElement.innerHTML = forecastHTML;
     console.log(forecastHTML);
}



function showData(response) {
    console.log(response.data);
   
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#my-city");
    let humElement = document.querySelector("#Humidity");
   let windElement = document.querySelector("#wind");
  let imag = document.querySelector("#weather-imag")

    temperatureElement.innerHTML = Math.round (response.data.main.temp);
    cityElement.innerHTML = (response.data.name);
    humElement.innerHTML = ("Humidity"+ " " + response.data.main.humidity+" " +"%");
    windElement.innerHTML = ("wind" + " " + response.data.wind.speed+ " "+ "Km/h");
    imag.setAttribute(
        "src",
        `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      );
imag.setAttribute("alt", response.data.weather[0].description);
    }


function showCity(event) {
    event.preventDefault();
    let cityInputElement = document.querySelector("#formInput");
    let apiKey = '34f95b5e87d4683b0836302b1b590869';
    let city = "Sydney";
    
    
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInputElement.value}&appid=34f95b5e87d4683b0836302b1b590869&units=metric`;
    
    axios.get(apiUrl).then(showData);
}
    


let form = document.querySelector("#form-inpyt");
form.addEventListener("submit", showCity);

ShowForecast(); 
