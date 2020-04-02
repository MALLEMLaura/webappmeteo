var cityId = selectCityId();
var apiKey = '7304e7d3db4dec5dd2f833aec5449465';
var data;

function selectCityId(){
  var option = document.getElementById("selectCity");
  cityId = option.value;
  return cityId;
}

console.log(cityId);


  
function weather(cityId){
window.fetch('http://api.openweathermap.org/data/2.5/weather?id=' + cityId + '&appid=' + apiKey + '&units=metric')
  .then(function(resp) { 
    return resp.json() 
  }) 
  .then(function(data) {
    drawWeather(data);
    changeBackground(data);
    console.log(data)
  })  
}


function drawWeather(d){
  document.getElementById('location').innerHTML = d.name;
  document.getElementById('description').innerHTML = d.weather[0].description;
  document.getElementById('temp').innerHTML = d.main.temp;
  document.getElementById('temp_min').innerHTML = d.main.temp_min;
  document.getElementById('temp_max').innerHTML = d.main.temp_max;
  document.getElementById('temp_feel').innerHTML = d.main.feels_like;
}



function changeBackground(d){
  var description = d.weather[0].main;;
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


window.onload = function() {
  weather(cityId);
}

function Refresh(){
  onclick=document.location.reload(false);
}

