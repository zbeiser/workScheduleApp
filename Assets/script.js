var currentDayEl = $('#currentDay');

function displayCurrentDay() {
  var currentDay = moment().format('dddd, MMM DD, YYYY');
  currentDayEl.text(currentDay);
}

setInterval(displayCurrentDay, 1000);