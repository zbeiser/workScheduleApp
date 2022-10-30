// Declare DOM hooks

var currentDayEl = $('#currentDay');
var saveEventBtnEl = $('.saveBtn');

// Declare state variables

var eventsArray = [
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

// Display the day at top of page

function displayCurrentDay() {
  var currentDay = moment().format('dddd, MMM DD, YYYY');
  currentDayEl.text(currentDay);
}

// Save event inside time-block textarea to localStorage

function saveEvent(ev) {
  var saveClick = ev.target
  // Retargets button if they click span icon
  if (saveClick.className == "fas fa-save") {
    saveClick = saveClick.parentNode
  }
  
  var eventText = saveClick.previousElementSibling.value;
  // Hooks save buttons up to their respective textareas
  for (var i = 0 ; i < eventsArray.length; i++) {
    if (i == saveClick.id) {
      eventsArray[i] = eventText;
    }
  }

  localStorage.setItem("Stored Events", JSON.stringify(eventsArray));
}

// Adds click event listener to all save buttons with one for loop

for (var i = 0 ; i < saveEventBtnEl.length; i++) {
  saveEventBtnEl[i].addEventListener('click', saveEvent); 
}

// Load events saved in local storage to the time-blocks' textarea upon webpage loading.
// First if/else prevents null reading if there's no localStorage saved. 
// For loop matches buttons up to their respective textareas by adding 9, since their ids
// have a numerical difference of 9 between them.

function updateEvents() {
  var loadEvents = JSON.parse(localStorage.getItem("Stored Events"));
  if (loadEvents === null) {
    eventsArray = [
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
  } else {
    eventsArray = loadEvents;
  }

  for (var i = 0 ; i < eventsArray.length; i++) {
    var loadText = document.getElementById(i + 9);
    if (i == (loadText.id - 9)) {
      loadText.value = eventsArray[i];
    }
  }
}



updateEvents();

setInterval(displayCurrentDay, 1000);