var time = new Date().getHours();
var messageText;
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 3; // 3PM
// set isPartyTime to false
var isPartyTime = false;
var partyTimeButton = document.getElementById('partyTimeButton');
var wakeUpTimeSelector=document.getElementById('wakeUpTimeSelector');
var napTimeSelector=document.getElementById('napTimeSelector');
var lunchTimeSelector = document.getElementById('lunchTimeSelector');

var updateClock = function(){


var blockQuoteJS=document.getElementById('timeEvent'); //make quote into variable
var image="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg"; //set image to "normal"
var lolcat=document.getElementById('lolcat'); //make lolcat image a variable

// set time based image and text
if (time == partyTime){
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
    messageText = "IZ PARTEE TIME!!";
} else if (time == napTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "IZ NAP TIME...";
} else if (time == lunchTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "IZ NOM NOM NOM TIME!!";
} else if (time == wakeupTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "IZ TIME TO GETTUP.";
} else if (time < noon) {
    messageText = "Good morning!";
} else if (time > evening) {
    messageText = "Good Evening!";
} else {
    messageText = "Good afternoon!";
}
blockQuoteJS.innerText=messageText; //set quote variable to message text
lolcat.src=image; //set lolcat image to variable image

//make clock
var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    // Set hours
    if (hours >= noon)
    {
        meridian = "PM";
    }
    if (hours > noon)
    {
        hours = hours - 12;
    }

    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

    clock.innerText = clockTime;
};
showCurrentTime();
};
updateClock();
var oneSecond=1000;
setInterval(updateClock, oneSecond);


   var partyEvent = function() {

     if (isPartyTime === false) {
        isPartyTime = true;
        time = partyTime;
        partyTimeButton.style.background = "#0A8DAB";
        partyTimeButton.innerText="PARTY TIME!";


     }
     else {
        isPartyTime = false;
        time = new Date().getHours();
        partyTimeButton.innerText="Party Over";
        partyTimeButton.style.background = "#222";

     };

  };

var wakeUpEvent = function()
{
    wakeupTime = wakeUpTimeSelector.value;
};

var napTimeEvent = function()
{
    napTime = napTimeSelector.value;
};

var lunchTimeEvent = function()
{
    lunchTime = lunchTimeSelector.value;
};
partyTimeButton.addEventListener("click", partyEvent);
napTimeSelector.addEventListener('change', napTimeEvent);
lunchTimeSelector.addEventListener('change', lunchTimeEvent);
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
