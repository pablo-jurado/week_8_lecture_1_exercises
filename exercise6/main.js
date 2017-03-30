// Write a small HTML and JavaScript program that outputs the current time like a clock.
// This will most easily be accomplished using setInterval()
function renderTime () {
  var clockElement = document.querySelector('div.clock')
  var time = new Date()
  clockElement.innerHTML = time.toLocaleTimeString()
}

var oneSecondTimer = setInterval(renderTime, 1000)
