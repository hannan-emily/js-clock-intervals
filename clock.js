document.addEventListener('DOMContentLoaded', function() {
  //code and events (DOM) go here - this is an event listener for the entire document

  var degrees = 0;

  //rotate second hand
  var second = document.getElementById("second");

  setInterval(function(){
    second.style.transform = "rotate(" + degrees + "deg)";
    degrees = degrees + 6;
  }, 1000);

  //rotate minute hand

  var degrees2 = 0;

  var minute = document.getElementById("minute");

  setInterval(function(){
    minute.style.transform = "rotate(" + degrees2 + "deg)";
    degrees2 = degrees2 + 6;
  }, 60000);

  //rotate hour hand
  var degrees3 = 0;

  var hour = document.getElementById("hour");

  setInterval(function(){
    hour.style.transform = "rotate(" + degrees3 + "deg)";
    degrees3 = degrees3 + 6;
  }, 3.6e+6);


});
