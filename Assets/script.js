// Declare DOM hooks
var currentDayEl = $("#currentDay");
var saveEventBtnEl = $(".saveBtn");
var textAreaEl = $(".description");

// Declare state variables
var eventsArray = ["", "", "", "", "", "", "", "", ""];

// Display the current day at top of page
function displayCurrentDay() {
  var currentDay = moment().format("dddd, MMM DD, YYYY");
  currentDayEl.text(currentDay);
}

// Changes colors of textareas in reference to past, present, or future hours.
var currentTime = moment().format("H");

for (var i = 0; i < textAreaEl.length; i++) {
  if (Number(currentTime) > Number(textAreaEl[i].id)) {
    textAreaEl[i].classList.add("past");
  } else if (Number(currentTime) === Number(textAreaEl[i].id)) {
    textAreaEl[i].classList.add("present");
  } else if (Number(currentTime) < Number(textAreaEl[i].id)) {
    textAreaEl[i].classList.add("future");
  }
}

// Save event inside time-block textarea to localStorage
function saveEvent(ev) {
  var saveClick = ev.target;
  var eventText = saveClick.previousElementSibling.value;
  // Hooks save buttons up to their respective textareas
  for (var i = 0; i < eventsArray.length; i++) {
    if (i == saveClick.id) {
      eventsArray[i] = eventText;
    }
  }

  localStorage.setItem("Stored Events", JSON.stringify(eventsArray));
}

// Adds click event listener to all save buttons
for (var i = 0; i < saveEventBtnEl.length; i++) {
  saveEventBtnEl[i].addEventListener("click", saveEvent);
}

// Load events saved in local storage to the time-blocks' textarea upon webpage loading.
// First if statement prevents null reading if there's no localStorage saved.
function updateEvents() {
  var loadEvents = JSON.parse(localStorage.getItem("Stored Events"));

  if (loadEvents) {
    eventsArray = loadEvents;
  }

  // Loads eventsArray index values up to their respective textareas.
  for (var i = 0; i < eventsArray.length; i++) {
    var loadText = document.getElementById(i + 9);
    if (i == loadText.id - 9) {
      loadText.value = eventsArray[i];
    }
  }
}

updateEvents();

setInterval(displayCurrentDay, 1000);
