var today = document.getElementById("today")
var find = document.getElementById("find")
var deg = document.getElementById("deg")
var image = document.getElementById("image")

getData("cairo")
find.previousElementSibling.addEventListener("keyup", function (e) {
  var search = find.previousElementSibling.value
  getData(search)
  if(e.key=="Enter")
  {
    find.previousElementSibling.value = "";
  }
  
})

find.addEventListener("click", function () {

  var search = find.previousElementSibling.value
  getData(search)
  find.previousElementSibling.value = ""


})
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
async function getData(search) {
  var response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${search}&days=3`);
  var data = await response.json();
  firstDay(data);
  secondDAy(data);
  thirdDAy(data);

  // a.location   // a.current
  // a.name   // t.temp_c   // t.condition.icon  // t.condition.text
}
function firstDay(data) {
  var day = new Date(data.current.last_updated.replace(" ", "T"));
  today.textContent = days[day.getDay()]
  today.nextElementSibling.textContent = day.getDate() + " " + monthNames[day.getMonth()]
  deg.previousElementSibling.textContent = data.location.name
  deg.textContent = data.current.temp_c
  image.setAttribute("src", data.current.condition.icon)
  image.nextElementSibling.textContent = data.current.condition.text
}
var second = document.getElementById("second")
var secondImage = document.getElementById("secondImage")
var secondTemp = document.getElementById("secondTemp")
function secondDAy(data) {
  var day = new Date(data.forecast.forecastday[1].date.replace(" ", "T"));
  second.textContent = days[day.getDay()]
  secondImage.setAttribute("src", data.forecast.forecastday[1].day.condition.icon)
  secondTemp.previousElementSibling.textContent = data.forecast.forecastday[1].day.maxtemp_c
  secondTemp.textContent = data.forecast.forecastday[1].day.mintemp_c
  secondTemp.nextElementSibling.textContent = data.forecast.forecastday[1].day.condition.text

}

var third = document.getElementById("third")
var thirdImage = document.getElementById("thirdImage")
var thirdTemp = document.getElementById("thirdTemp")
function thirdDAy(data) {
  var day = new Date(data.forecast.forecastday[2].date.replace(" ", "T"));
  third.textContent = days[day.getDay()]
  thirdImage.setAttribute("src", data.forecast.forecastday[2].day.condition.icon)
  thirdTemp.previousElementSibling.textContent = data.forecast.forecastday[2].day.maxtemp_c
  thirdTemp.textContent = data.forecast.forecastday[2].day.mintemp_c
  thirdTemp.nextElementSibling.textContent = data.forecast.forecastday[2].day.condition.text
}


// clock

function updateClockAndDate() {
  var now = new Date();

  var hours = now.getHours().toString().padStart(2, "0");
  var minutes = now.getMinutes().toString().padStart(2, "0");
  var seconds = now.getSeconds().toString().padStart(2, "0");

  document.getElementById("clock").textContent = hours + ":" + minutes + ":" + seconds;

  var day = now.getDate().toString().padStart(2, "0");
  var month = (now.getMonth() + 1).toString().padStart(2, "0");
  var year = now.getFullYear();

  document.getElementById("date").textContent = day + "/" + month + "/" + year;
}

updateClockAndDate();

setInterval(updateClockAndDate, 1000);
