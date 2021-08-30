async function prayerTimes() {
  let url = "https://mmzaini.github.io/PTCalculations/"
  let response = await fetch(url);
  let data = await response.json()
  console.log(data.data.JAFARI)
}

// prayerTimes()


// https://api.aladhan.com/v1/calendar?latitude=51.508515&longitude=-0.1254872&method=0&month=4&year=2017

let year = new Date();
let month = new Date();
let latitude = ""
let longitude = ""

let url = "https://api.aladhan.com/v1/calendar?latitude=" + latitude + "&longitude=" + longitude + "&method=0&month=" + month.getMonth() + "&year=" + year.getFullYear()
console.log(url)