// save reference to important DOM elements
var buttonClickMe = $('#click-me');

var requesturl = "https://loc.gov/";

function handleClickMe(event) {
    var firstParseParm;
    var secondParseParm;
    var parseParm;


    firstParseParm = $('#myList').val();
   
      var str = $('#search').val()
      var newstr;
      str = str.trim();
      if (str.length > 0)
      {
        newstr = str.replace(" ", "+");
        secondParseParm = "?q" + newstr;
      }
      else
      {
        secondParseParm = "";
      }
  
      if (firstParseParm.indexOf("search") >= 0)
      {
        if (secondParseParm == "")
        {
          secondParseParm = "q=";
        }
        parseParm = firstParseParm + "&" + secondParseParm + "&new=true";

      }
      else
      {
        parseParm = firstParseParm + secondParseParm;

      }

      goFindMyStuff(parseParm);

  }


function goFindMyStuff(parvalue){
  requesturl = requesturl + parvalue;
console.log(requesturl);

  fetch(requesturl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
}


buttonClickMe.on('click', handleClickMe);
