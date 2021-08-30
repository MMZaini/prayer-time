// gets the latitude and longitude of the user
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by your browser.";
  }
}

// gets location of user and shows result
async function showPosition(position) {
  let date = new Date();
  let day = parseInt(date.getDate()) - 1
  let latitude = position.coords.latitude
  let longitude = position.coords.longitude
  let url = "https://api.aladhan.com/v1/calendar?latitude=" + latitude + "&longitude=" + longitude + "&method=0&month=" + date.getMonth() + "&year=" + date.getFullYear()
  let response = await fetch(url);
  let data = await response.json()
  let dayData = data.data["day"]
  document.getElementById("result").innerText == dayData
  console.log(dayData)
  document.getElementById("Day").innerText == "Date: " + date.getDate() + date.getMonth() + date.getFullYear()
}