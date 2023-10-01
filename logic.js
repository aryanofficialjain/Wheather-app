const apiKey = 'da899d00cec112e665fabcc6bf32863a';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
const input = document.querySelector('#search');
var button = document.querySelector('#button');
var wheatherimage = document.querySelector('#climate');
var down = document.querySelector('#down');



async function check(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`+ '&units=metric');
    const data  = await response.json();
    console.log(data);

    document.querySelector('#temp').innerHTML = Math.round(data.main.temp) + '℃';
    document.querySelector('#city').innerHTML = data.name;
    document.querySelector('#humid').innerHTML = data.main.humidity + ' %';
    document.querySelector('#wind').innerHTML = data.wind.speed + ' Km/hr';

    if(data.weather[0].main == "Clouds"){
        wheatherimage.src = 'img/clouds.png';

    }
    else if(data.weather[0].main == "Clear"){
        wheatherimage.src = 'img/clear.png';
    }
    else if(data.weather[0].main == "Rain"){
        wheatherimage.src = 'img/rain.png';
    }
    else if(data.weather[0].main == "Drizzle"){
        wheatherimage.src = 'img/drizzle.png';
        
    }
    else if(data.weather[0].main == "Mist"){
        wheatherimage.src = 'img/drizzle.png';
    }

    // down.style.visibility = 'visible';
    down.style.display = 'inline-flex';


}

input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      check(input.value); // Call the check function when Enter key is pressed
    }
  });


button.addEventListener('click', () => check(input.value));


