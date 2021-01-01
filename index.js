document.addEventListener("DOMContentLoaded", function() {
  console.log("ready")
  const timerList = document.querySelector("#timer-list");
  const timers = {
    "snack-time": {name: "Snack Time", countDownTime: 5},
    "grandma-visits": {name: "Grandma Visits", setTime: Date("2pm")}
  }

  Object.keys(timers).map(function(timerKey) {
    const timer = timers[timerKey];
    timerList.innerHTML += `<a data-timer-id="${timerKey}"><li>${timer.name}<li/><a/>`;
  })


})

function safeName(name) {
  return String(name).toLowerCase().replace(/\s/g, "-");
}