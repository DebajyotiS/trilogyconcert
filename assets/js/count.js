function NewYear(){
  const ConcertDate = new Date(2024, 3, 20, 18, 0, 0, 0); // April is 3, not 4
  const currentdate = new Date();
  const remainigTime = ConcertDate - currentdate;

  // get days
  const days = Math.floor(remainigTime / 86400000);

  // remainig hour
  const remainigHr = remainigTime - days * 1000 * 60 * 60 * 24;
  const hours = Math.floor(remainigHr / 3600000);

  // remaining Minute
  const remainigMin =
    remainigTime - days * 1000 * 60 * 60 * 24 - hours * 1000 * 60 * 60;
  const minutes = Math.floor(remainigMin / 60000);

  // remainig second
  const remainigSec =
    remainigTime -
    days * 1000 * 60 * 60 * 24 -
    hours * 1000 * 60 * 60 -
    minutes * 1000 * 60;
  const seconds =Math.floor(remainigSec / 1000);

  const  containerDay = document.querySelector(".cont-days")
  const  containerHour = document.querySelector(".cont-hour")
  const  containerMin = document.querySelector(".cont-minute")
  const  containerSec = document.querySelector(".cont-second")
  if (+containerDay.textContent<10) {
    containerDay.textContent=`0${days}`
  }
  else{
    containerDay.textContent=`${days}`
  }

  if (containerHour.textContent<10) {
    containerHour.textContent=`0${hours}`
  }
  else{
    containerHour.textContent=`${hours}`
  }

  if (containerMin.textContent<10) {
    containerMin.textContent=`${"0"+minutes}`
  }
  else{
    containerMin.textContent=`${minutes}`
  }

  if (+containerSec.textContent<10) {
    containerSec.textContent=`${"0"+seconds}`
  }
  else{
    containerSec.textContent=`${seconds}`
  }
}
setInterval(NewYear,1000) // Update every second

document.addEventListener('DOMContentLoaded', function() {
var button = document.querySelector('.navigate-button');
if (button) {
    button.addEventListener('click', function() {
        window.location.href = 'event.html';
    });
}
});