// Given the following HTML, write JavaScript that selects the span elements
// in the HTML below and logs them to the console.
var spanElements = document.querySelectorAll('SPAN')
for (var i = 0; i < spanElements.length; i++) {
  console.log(spanElements[i].innerHTML)
}
