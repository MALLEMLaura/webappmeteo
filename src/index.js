var cityId = selectCityId();
var apiKey = '7304e7d3db4dec5dd2f833aec5449465';
var data;

function selectCityId(){
  var option = document.getElementById("selectCity");
  cityId = option.value;
  return cityId;
}
  
function weather(cityId){
window.fetch('http://api.openweathermap.org/data/2.5/weather?id=' + cityId + '&appid=' + apiKey + '&units=metric')
  .then(function(resp) { 
    return resp.json() 
  }) 
  .then(function(data) {
    drawWeather(data);
    changeBackground(data);
    changeIcon(data);
  })  
}


function drawWeather(d){
  document.getElementById('location').innerHTML = d.name;
  document.getElementById('description').innerHTML = d.weather[0].description;
  document.getElementById('temp').innerHTML = d.main.temp + ' &deg;C';
  document.getElementById('temp_min').innerHTML = d.main.temp_min + ' &deg;C';
  document.getElementById('temp_max').innerHTML = d.main.temp_max +' &deg;C';
  document.getElementById('temp_feel').innerHTML = d.main.feels_like + ' &deg;C';
}



function changeBackground(d){
  var description = d.weather[0].main;
  console.log(description);
  if( description == "Clear" ) {
    return document.getElementById('Background').style.backgroundImage = "url('assets/sunny.jpg')";
  } else if( description == "Clouds" ) {
    return document.getElementById('Background').style.backgroundImage = "url('assets/cloudy.jpg')";
  } else if( description == "Rain" ) {
    return document.getElementById('Background').style.backgroundImage = "url('assets/rainy.jpg')";
  } else if( description == "Snow" ) {
    return document.getElementById('Background').style.backgroundImage = "url('assets/snow.jpg')";
  } else if( description == "Thunderstorm" ) {
    return document.getElementById('Background').style.backgroundImage = "url('assets/thunderstorm.jpg')";
  } else if( description == "Drizzle" ) {
    return document.getElementById('Background').style.backgroundImage = "url('assets/drizzle.JPG')";
  } else {
    return document.getElementById('Background').style.backgroundImage = "url('assets/storm.jpg')";
  }

}

function changeIcon(d){
  var iconId = d.weather[0].id;
  if(iconId >= 200 && iconId <= 232) {
    return document.getElementById('icon').src = "http://openweathermap.org/img/wn/11d@2x.png";
  } else if(iconId >= 300 && iconId <= 321) {
    return document.getElementById('icon').src = "http://openweathermap.org/img/wn/09d@2x.png";
  } else if(iconId >= 500 && iconId <= 504) {
    return document.getElementById('icon').src = "http://openweathermap.org/img/wn/10d@2x.png";
  } else if(iconId == 511 && iconId >= 600 && iconId <= 622) {
    return document.getElementById('icon').src = "http://openweathermap.org/img/wn/13d@2x.png";
  } else if(iconId >= 520 && iconId <= 531) {
    return document.getElementById('icon').src = "http://openweathermap.org/img/wn/09d@2x.png";
  } else if(iconId >= 701 && iconId <= 781) {
    return document.getElementById('icon').src = "http://openweathermap.org/img/wn/50d@2x.png";
  } else if(iconId == 801) {
    return document.getElementById('icon').src = "http://openweathermap.org/img/wn/02d@2x.png";
  } else if(iconId == 802) {
    return document.getElementById('icon').src = "http://openweathermap.org/img/wn/03d@2x.png";
  } else if(iconId == 803 || iconId == 804) {
    return document.getElementById('icon').src = "http://openweathermap.org/img/wn/04d@2x.png";
  }
  else {
    return document.getElementById('icon').src = "http://openweathermap.org/img/wn/01d@2x.png";
  }

}






function weatherDay(cityId){
window.fetch('http://api.openweathermap.org/data/2.5/forecast?id=' + cityId + '&appid=' + apiKey + '&units=metric')
  .then(function(resp) { 
    return resp.json() 

  }) 
  .then(function(data) {
    drawWeather1(data);
    changeIcon1(data);
    drawWeather2(data);
    changeIcon2(data);
    drawWeather3(data);
    changeIcon3(data);
    console.log(data);
  })  
}

function drawWeather1(d){
  document.getElementById('description1').innerHTML = d.list[8].weather[0].description;
  document.getElementById('temp1').innerHTML = d.list[8].main.temp + ' &deg;C';
  document.getElementById('temp_min1').innerHTML = d.list[8].main.temp_min + ' &deg;C';
  document.getElementById('temp_max1').innerHTML = d.list[8].main.temp_max +' &deg;C';
  document.getElementById('temp_feel1').innerHTML = d.list[8].main.feels_like + ' &deg;C';
}

function changeIcon1(d){
  var iconId = d.list[8].weather[0].id;
  if(iconId >= 200 && iconId <= 232) {
    return document.getElementById('icon1').src = "http://openweathermap.org/img/wn/11d@2x.png";
  } else if(iconId >= 300 && iconId <= 321) {
    return document.getElementById('icon1').src = "http://openweathermap.org/img/wn/09d@2x.png";
  } else if(iconId >= 500 && iconId <= 504) {
    return document.getElementById('icon1').src = "http://openweathermap.org/img/wn/10d@2x.png";
  } else if(iconId == 511 && iconId >= 600 && iconId <= 622) {
    return document.getElementById('icon1').src = "http://openweathermap.org/img/wn/13d@2x.png";
  } else if(iconId >= 520 && iconId <= 531) {
    return document.getElementById('icon1').src = "http://openweathermap.org/img/wn/09d@2x.png";
  } else if(iconId >= 701 && iconId <= 781) {
    return document.getElementById('icon1').src = "http://openweathermap.org/img/wn/50d@2x.png";
  } else if(iconId == 801) {
    return document.getElementById('icon1').src = "http://openweathermap.org/img/wn/02d@2x.png";
  } else if(iconId == 802) {
    return document.getElementById('icon1').src = "http://openweathermap.org/img/wn/03d@2x.png";
  } else if(iconId == 803 || iconId == 804) {
    return document.getElementById('icon1').src = "http://openweathermap.org/img/wn/04d@2x.png";
  }
  else {
    return document.getElementById('icon1').src = "http://openweathermap.org/img/wn/01d@2x.png";
  }

}



function drawWeather2(d){
  document.getElementById('description2').innerHTML = d.list[15].weather[0].description;
  document.getElementById('temp2').innerHTML = d.list[15].main.temp + ' &deg;C';
  document.getElementById('temp_min2').innerHTML = d.list[15].main.temp_min + ' &deg;C';
  document.getElementById('temp_max2').innerHTML = d.list[15].main.temp_max +' &deg;C';
  document.getElementById('temp_feel2').innerHTML = d.list[15].main.feels_like + ' &deg;C';
}

function changeIcon2(d){
  var iconId = d.list[15].weather[0].id;
  if(iconId >= 200 && iconId <= 232) {
    return document.getElementById('icon2').src = "http://openweathermap.org/img/wn/11d@2x.png";
  } else if(iconId >= 300 && iconId <= 321) {
    return document.getElementById('icon2').src = "http://openweathermap.org/img/wn/09d@2x.png";
  } else if(iconId >= 500 && iconId <= 504) {
    return document.getElementById('icon').src = "http://openweathermap.org/img/wn/10d@2x.png";
  } else if(iconId == 511 && iconId >= 600 && iconId <= 622) {
    return document.getElementById('icon2').src = "http://openweathermap.org/img/wn/13d@2x.png";
  } else if(iconId >= 520 && iconId <= 531) {
    return document.getElementById('icon2').src = "http://openweathermap.org/img/wn/09d@2x.png";
  } else if(iconId >= 701 && iconId <= 781) {
    return document.getElementById('icon2').src = "http://openweathermap.org/img/wn/50d@2x.png";
  } else if(iconId == 801) {
    return document.getElementById('icon2').src = "http://openweathermap.org/img/wn/02d@2x.png";
  } else if(iconId == 802) {
    return document.getElementById('icon2').src = "http://openweathermap.org/img/wn/03d@2x.png";
  } else if(iconId == 803 || iconId == 804) {
    return document.getElementById('icon2').src = "http://openweathermap.org/img/wn/04d@2x.png";
  }
  else {
    return document.getElementById('icon2').src = "http://openweathermap.org/img/wn/01d@2x.png";
  }

}



function drawWeather3(d){
  document.getElementById('description3').innerHTML = d.list[24].weather[0].description;
  document.getElementById('temp3').innerHTML = d.list[24].main.temp + ' &deg;C';
  document.getElementById('temp_min3').innerHTML = d.list[24].main.temp_min + ' &deg;C';
  document.getElementById('temp_max3').innerHTML = d.list[24].main.temp_max +' &deg;C';
  document.getElementById('temp_feel3').innerHTML = d.list[24].main.feels_like + ' &deg;C';
}

function changeIcon3(d){
  var iconId = d.list[24].weather[0].id;
  if(iconId >= 200 && iconId <= 232) {
    return document.getElementById('icon3').src = "http://openweathermap.org/img/wn/11d@2x.png";
  } else if(iconId >= 300 && iconId <= 321) {
    return document.getElementById('icon3').src = "http://openweathermap.org/img/wn/09d@2x.png";
  } else if(iconId >= 500 && iconId <= 504) {
    return document.getElementById('icon3').src = "http://openweathermap.org/img/wn/10d@2x.png";
  } else if(iconId == 511 && iconId >= 600 && iconId <= 622) {
    return document.getElementById('icon3').src = "http://openweathermap.org/img/wn/13d@2x.png";
  } else if(iconId >= 520 && iconId <= 531) {
    return document.getElementById('icon3').src = "http://openweathermap.org/img/wn/09d@2x.png";
  } else if(iconId >= 701 && iconId <= 781) {
    return document.getElementById('icon3').src = "http://openweathermap.org/img/wn/50d@2x.png";
  } else if(iconId == 801) {
    return document.getElementById('icon3').src = "http://openweathermap.org/img/wn/02d@2x.png";
  } else if(iconId == 802) {
    return document.getElementById('icon3').src = "http://openweathermap.org/img/wn/03d@2x.png";
  } else if(iconId == 803 || iconId == 804) {
    return document.getElementById('icon3').src = "http://openweathermap.org/img/wn/04d@2x.png";
  }
  else {
    return document.getElementById('icon3').src = "http://openweathermap.org/img/wn/01d@2x.png";
  }

}


window.onload = function() {
  weather(cityId);
  weatherDay(cityId);
}

function Refresh(){
  onclick=document.location.reload(false);
}

