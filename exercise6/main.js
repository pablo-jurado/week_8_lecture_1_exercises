// Write a small HTML and JavaScript program that outputs the current time like a clock.
// This will most easily be accomplished using setInterval()
function addCeroToSingleDigit (input) {
  if (input.toString().length === 1) return '0' + input

  return input
}

function renderTime (element) {
  var clockElement = document.querySelector('div.clock')
  var time = new Date()
  var hour = addCeroToSingleDigit(time.getHours())
  var minutes = addCeroToSingleDigit(time.getMinutes())
  var seconds = addCeroToSingleDigit(time.getSeconds())
  clockElement.innerHTML = hour + ':' + minutes + ':' + seconds
}

var oneSecondTimer = setInterval(renderTime, 1000)
