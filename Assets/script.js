//// Declare DOM hooks

var currentDayEl = $('#currentDay');
var saveEventBtnEl = $('.saveBtn');
console.log(saveEventBtnEl);
//// Declare state variables

var kEventsArray = [
  [""],
  [""],
  [""],
  [""],
  [""],
  [""],
  [""],
  [""],
  [""],
];

//// Display the day at top of page

function displayCurrentDay() {
  var currentDay = moment().format('dddd, MMM DD, YYYY');
  currentDayEl.text(currentDay);
}

//// Save event inside time-block textarea to localStorage

function saveEvent(ev) {
  var saveClick = ev.target
  // Retargets button if they click span icon
  if (saveClick.className == "fas fa-save") {
    saveClick = saveClick.parentNode
  }
  
  var eventText = saveClick.previousElementSibling.value;
  // Hooks save buttons up to their respective textareas
  for (var i = 0 ; i < kEventsArray.length; i++) {
    if (i == saveClick.id) {
      kEventsArray[i] = eventText;
    }
  }

  localStorage.setItem("Stored Events", JSON.stringify(kEventsArray));
}

//// Adds click event listener to all save buttons with one for loop

for (var i = 0 ; i < saveEventBtnEl.length; i++) {
  saveEventBtnEl[i].addEventListener('click', saveEvent); 
}

//// Load events saved in local storage to the time-blocks' textarea upon webpage loading

// function loadEvents() {
// 
// }



// loadEvents();

setInterval(displayCurrentDay, 1000);