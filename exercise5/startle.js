/*
The following index.html contains a "BOO!" button that, when clicked, runs a
function named startle() in the startle.js file. Right now this function
doesn't do anything. Your job is to make the application have a delayed
reaction when started.
*/

// startle.js
function playGif () {
  var bodyElement = document.querySelector('body')
  bodyElement.classList.remove('star')
  bodyElement.classList.add('speed')
}

function startle() {
  // todo: write code that produces a delayed reaction.
  var delay3Sec = setTimeout(playGif, 3 * 1000)
}
