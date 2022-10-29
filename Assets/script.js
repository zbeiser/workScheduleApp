var currentDayEl = $('#currentDay');

function displayCurrentDay() {
  var currentDay = moment().format('dddd, MMM DD, YYYY');
  currentDayEl.text(currentDay);
}

// function loadEvents(); {
//   // Load events saved in local storage to UI elements
// };

// loadEvents();
setInterval(displayCurrentDay, 1000);