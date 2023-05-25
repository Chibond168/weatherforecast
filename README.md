# weatherforecast

The web site allows the user to type in a city.  The site returns the current temperature, wind speed, and humidity for the city and current date.  A weather icon indicates the current weather condition.  In addition, the weather forecast is displayed with the same elements for the next five days.

The web site saves the requested city to the local storage and creates an add-on button.  It provides the convenience for the user to not re-type the city.  The user can click on the button instead.  If the user does not enter a city and presses the ‘Search’ key, the page will issue an error message ‘Please enter a city’.  if the user types in an invalid city name, the page will issue a message - “No Information found - city name’

Technical highlight:

Use Openweathermap API - to request weather information
Use DayJS API - to format the date
Apply Javascript functions - 
document.querySelector, document.querySelectorAll to retrieve the elements of the screen. 
document.createElement, document.createTextNode to create a new button
.replace to replace the text with desired text
.setAttribute to set font size
.style.display to hide and unhide the grid
Use JSON to store and retrieve the data from local storage
Use fetch function to retrieve response from remote server
Use .then function to validate if the response is good

![Screen Shot 2023-05-25 at 4 29 14 PM](https://github.com/Chibond168/weatherforecast/assets/130376566/532edf4b-160f-4c1e-877c-8fd7ec48024e)
![Screen Shot 2023-05-25 at 4 29 46 PM](https://github.com/Chibond168/weatherforecast/assets/130376566/205942f1-ebac-4e8c-a5c8-707534f67a1e)
![Screen Shot 2023-05-25 at 4 30 05 PM](https://github.com/Chibond168/weatherforecast/assets/130376566/71bc2c4d-e07c-4334-9cca-6cf584eb3f9a)
![Screen Shot 2023-05-25 at 4 25 07 PM](https://github.com/Chibond168/weatherforecast/assets/130376566/566c72b4-c9b9-40e5-a827-e7f9fb82a5d1)
![Screen Shot 2023-05-25 at 4 30 50 PM](https://github.com/Chibond168/weatherforecast/assets/130376566/60c75791-9eb6-4f3a-8118-1d51754dc6c3)
