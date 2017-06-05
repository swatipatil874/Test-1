

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserLocation() {
  var myLocation = prompt('Please enter your location.');
  localStorage.setItem('location', myLocation);
  myHeading.innerHTML = 'West Corporation, ' + myLocation;
}

if(!localStorage.getItem('location')) {
  setUserLocation();
} else {
  var storedLocation = localStorage.getItem('location');
  myHeading.innerHTML = 'West Corporation, ' + storedLocation;
}

myButton.onclick = function() {
  setUserLocation();
}


