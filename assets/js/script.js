// save reference to important DOM elements
var buttonGoSearch = document.querySelector('#go-search');
var apikey = '&APPID=619585d8879c30ef87ab6a89c84609be';
//var requesturl = "https://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}";
var requesturl = "https://api.openweathermap.org/data/2.5/forecast?";
var requestloc = "https://api.openweathermap.org/geo/1.0/direct?q="; 
//var findlocation = "https://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}"

var handleCFindCityLat = function (event) {

    goFindMyStuff(39.7392364, -104.984862);
    var parseParm = $('#search-city').val()
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

  for (var i = 0; i < weatherrepos.length; i++) {
    
    var reposDate = weatherrepos[i].dt_txt;
    var reposHumidity = weatherrepos[i].main.humidity;
    var reposWind = weatherrepos[i].wind.speed;
    var reposWeather = weatherrepos[i].weather[0].main;
    var reposTemp = weatherrepos[i].main.temp;

    //var repoEl = document.createElement('div');
    //repoEl.classList = 'list-item flex-row justify-space-between align-center';

    //var titleEl = document.createElement('span');
    //titleEl.textContent = repoName;

    //repoEl.appendChild(titleEl);

    //var statusEl = document.createElement('span');
    //statusEl.classList = 'flex-row align-center';

    //if (repos[i].open_issues_count > 0) {
    //  statusEl.innerHTML =
    //    "<i class='fas fa-times status-icon icon-danger'></i>" + repos[i].open_issues_count + ' issue(s)';
    //} else {
    //  statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
    //}

    //repoEl.appendChild(statusEl);

    //repoContainerEl.appendChild(repoEl);
  
  }
}

buttonGoSearch.addEventListener('click', handleCFindCityLat);
