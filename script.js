async function prayerTimes() {
  let url = "https://mmzaini.github.io/PTCalculations/"
  let response = await fetch(url);
  let data = await response.json()
  console.log(data.data.JAFARI)
}

// gets the latitude and longitude of the user
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

async function showPosition(position) {
  let date = new Date();
  let day = parseInt(date.getDate()) - 1
  let latitude = position.coords.latitude
  let longitude = position.coords.longitude
  let url = "https://api.aladhan.com/v1/calendar?latitude=" + latitude + "&longitude=" + longitude + "&method=0&month=" + date.getMonth() + "&year=" + date.getFullYear()
  let response = await fetch(url);
  let data = await response.json()
  document.getElementById("result") == data.data.day
}

// asks users for location when site is loaded
getLocation()
