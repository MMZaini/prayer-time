async function prayerTimes() {
  let url = "https://api.aladhan.com/v1/timingsByCity?city=London&country=United%Kingdom&method=15&midnightMode=1"
  let response = await fetch(url);
  let data = await response.json()
  let dayData = data.data.timings
  console.log(dayData)

  document.getElementById("result").innerHTML = "Imsaak: " + dayData.Imsak + "<br>" + "Fajr: " + dayData.Fajr + "<br>" + "Sunrise: " + dayData.Sunrise + "<br>" + "Dhuhr: " + dayData.Dhuhr + "<br>" + "Sunset: " + dayData.Sunset + "<br>" + "Maghrib: " + dayData.Maghrib;

}

prayerTimes()