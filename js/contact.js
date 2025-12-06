
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
