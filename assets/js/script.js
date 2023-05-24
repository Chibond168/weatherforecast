// save reference to important DOM elements
var buttonGoSearch = document.querySelector("#go-search");
var searchcity = document.querySelector("#search-city");
var apikey = '&APPID=619585d8879c30ef87ab6a89c84609be';
//var requesturl = "https://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}";
var requesturl = "https://api.openweathermap.org/data/2.5/forecast?";
var requestloc = "https://api.openweathermap.org/geo/1.0/direct?q="; 
//var findlocation = "https://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}"

var weathericon = "https://openweathermap.org/img/wn/???@2x.png"
var currentcity = document.querySelector("#current-city");
var currenttemp = document.querySelector("#current-temp");
var currentwind = document.querySelector("#current-wind");
var currentweathericon = document.querySelector("#current-weather-icon");
var currenthumidity = document.querySelector("#current-humidity");
var day1date = document.querySelector("#day1-date");
var day1temp = document.querySelector("#day1-temp");
var day1wind = document.querySelector("#day1-wind");
var day1weathericon = document.querySelector("#day1-weather-icon");
var day1humidity = document.querySelector("#day1-humidity");
var day2date = document.querySelector("#day2-date");
var day2temp = document.querySelector("#day2-temp");
var day2wind = document.querySelector("#day2-wind");
var day2weathericon = document.querySelector("#day2-weather-icon");
var day2humidity = document.querySelector("#day2-humidity");
var day3date = document.querySelector("#day3-date");
var day3temp = document.querySelector("#day3-temp");
var day3wind = document.querySelector("#day3-wind");
var day3weathericon = document.querySelector("#day3-weather-icon");
var day3humidity = document.querySelector("#day3-humidity");
var day4date = document.querySelector("#day4-date");
var day4temp = document.querySelector("#day4-temp");
var day4wind = document.querySelector("#day4-wind");
var day4weathericon = document.querySelector("#day4-weather-icon");
var day4humidity = document.querySelector("#day4-humidity");
var day5date = document.querySelector("#day5-date");
var day5temp = document.querySelector("#day5-temp");
var day5wind = document.querySelector("#day5-wind");
var day5weathericon = document.querySelector("#day5-weather-icon");
var day5humidity = document.querySelector("#day5-humidity");

var handleCFindCityLat = function (event) {

    //goFindMyStuff(39.7392364, -104.984862);
    var parseParm = searchcity.value;
    parseParm = parseParm.trim();
    if (parseParm.length == 0)
    {
      //error
    }
    else
    {
      var findlocation = requestloc + parseParm + "&limit=5" + apikey;

      fetch(findlocation)
      .then(function (locresponse) {
        if (locresponse.ok) {
          locresponse.json().then(function (locdata) {
            retrieveLatRepos(locdata);
          });
        } else {
          alert('Error: ' + locresponse.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to connect to GitHub');
      });

    }
}

var retrieveLatRepos = function (repos) {
  if (repos.length === 0) {
    repoContainerEl.textContent = 'No repositories found.';
    return;
  }

  var reposLat = repos[0].lat;
  var reposLon = repos[0].lon;

  goFindMyStuff(reposLat, reposLon)

}

var goFindMyStuff = function(parlat, parlon){

    var findweather = requesturl + "lat=" + parlat + "&lon=" + parlon + apikey + "&units=imperial";

    fetch(findweather)
    .then(function (weatherresponse) {
      if (weatherresponse.ok) {
        weatherresponse.json().then(function (weatherdata) {
          currentcity.innerHTML = weatherdata.city.name;
          rendorWeatherRepos(weatherdata.list);
        });
      } else {
        alert('Error: ' + weatherresponse.statusText);
      }
    })
    .catch(function (error) {
      alert('Unable to connect to GitHub');
    });
}

var rendorWeatherRepos = function(weatherrepos)
{
    if (weatherrepos.length === 0) {
      //repoContainerEl.textContent = 'No repositories found.';
      return;
    }
 
    var reformatDate = weatherrepos[0].dt_txt;
    var reposDate = dayjs(reformatDate).format('MM/DD/YYYY');

    var reposHumidity = weatherrepos[0].main.humidity;
    var reposWind = weatherrepos[0].wind.speed;
    var reposWeather = weatherrepos[0].weather[0].icon;
    var reposTemp = weatherrepos[0].main.temp;

    var imgicon = weathericon.replace("???", reposWeather)

    currentcity.innerHTML = currentcity.innerHTML + " " + reposDate;
    currenttemp.innerHTML = reposTemp;
    currentwind.innerHTML = reposWind;
    currenthumidity.innerHTML = reposHumidity;
    currentweathericon.src = imgicon;
    
    reformatDate = weatherrepos[6].dt_txt;
    reposDate = dayjs(reformatDate).format('MM/DD/YYYY');
    reposHumidity = weatherrepos[6].main.humidity;
    reposWind = weatherrepos[6].wind.speed;
    reposWeather = weatherrepos[6].weather[0].icon;
    reposTemp = weatherrepos[6].main.temp;
    imgicon = weathericon.replace("???", reposWeather)

    day1date.innerHTML = reposDate;
    day1temp.innerHTML = reposTemp;
    day1wind.innerHTML = reposWind;
    day1humidity.innerHTML = reposHumidity;
    day1weathericon.src = imgicon;
    
    reformatDate = weatherrepos[14].dt_txt;
    reposDate = dayjs(reformatDate).format('MM/DD/YYYY');
    reposHumidity = weatherrepos[14].main.humidity;
    reposWind = weatherrepos[14].wind.speed;
    reposWeather = weatherrepos[14].weather[0].icon;
    reposTemp = weatherrepos[14].main.temp;
    imgicon = weathericon.replace("???", reposWeather)

    day2date.innerHTML = reposDate;
    day2temp.innerHTML = reposTemp;
    day2wind.innerHTML = reposWind;
    day2humidity.innerHTML = reposHumidity;
    day2weathericon.src = imgicon;
    
    reformatDate = weatherrepos[22].dt_txt;
    reposDate = dayjs(reformatDate).format('MM/DD/YYYY');
    reposHumidity = weatherrepos[22].main.humidity;
    reposWind = weatherrepos[22].wind.speed;
    reposWeather = weatherrepos[22].weather[0].icon;
    reposTemp = weatherrepos[22].main.temp;
    imgicon = weathericon.replace("???", reposWeather)

    day3date.innerHTML = reposDate;
    day3temp.innerHTML = reposTemp;
    day3wind.innerHTML = reposWind;
    day3humidity.innerHTML = reposHumidity;
    day3weathericon.src = imgicon;
    
    reformatDate = weatherrepos[30].dt_txt;
    reposDate = dayjs(reformatDate).format('MM/DD/YYYY');
    reposHumidity = weatherrepos[30].main.humidity;
    reposWind = weatherrepos[30].wind.speed;
    reposWeather = weatherrepos[30].weather[0].icon;
    reposTemp = weatherrepos[30].main.temp;
    imgicon = weathericon.replace("???", reposWeather)

    day4date.innerHTML = reposDate;
    day4temp.innerHTML = reposTemp;
    day4wind.innerHTML = reposWind;
    day4humidity.innerHTML = reposHumidity;
    day4weathericon.src = imgicon;
    
    reformatDate = weatherrepos[38].dt_txt;
    reposDate = dayjs(reformatDate).format('MM/DD/YYYY');
    reposHumidity = weatherrepos[38].main.humidity;
    reposWind = weatherrepos[38].wind.speed;
    reposWeather = weatherrepos[38].weather[0].icon;
    reposTemp = weatherrepos[38].main.temp;
    imgicon = weathericon.replace("???", reposWeather)

    day5date.innerHTML = reposDate;
    day5temp.innerHTML = reposTemp;
    day5wind.innerHTML = reposWind;
    day5humidity.innerHTML = reposHumidity;
    day5weathericon.src = imgicon;
  
}

buttonGoSearch.addEventListener('click', handleCFindCityLat);
