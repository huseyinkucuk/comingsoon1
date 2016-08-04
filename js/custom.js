
/* navigation bar */
console.log("dasad");
$(".nav-menu-link").click(function () {
   	$(".menu-items").slideToggle();
   	console.log("hilu");
});


/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
//  PLEASE TYPE YEAR, MONTH, DAY, TIME and TIME ZONE HERE  //
//  TYPE TO JUST THIS AREA      /////////////////////////////
var year      = '2017';         //<== year      /////////////
var month     = '2';           //<== month     /////////////
var day       = '28';           //<== day       /////////////
var time      = '23:59:59';     //<== time      /////////////
var time_zone = 'GMT+0200';     //<== time zome /////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////



/* 
  =>     timing area      <=
*/
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  console.log(t);
  console.log(new Date(Date.parse(new Date()) ));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = ''+month+' '+day+' '+year+' '+time+' '+time_zone+'';
initializeClock('clockdiv', deadline);


