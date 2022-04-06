const calendarText = document.querySelector(".calendar span");

function getCalendar() {
  const calendar = new Date();
  let options = {month: "long"};
  const WEEKDAY = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",];
  const week = WEEKDAY[calendar.getDay()];
  const year = calendar.getFullYear();
  const month = calendar.toLocaleDateString("en-Us", options);
  const date = calendar.getDate();
  calendarText.innerText = `[ ${week} ${month} ${date} ${year} ]`;
}

getCalendar();

