// Write JavaScript that will select all of the div tags with a class of
// foo and log them to the console.
var divFooElements = document.querySelectorAll('div.foo')
for (var i = 0; i < divFooElements.length; i++) {
  console.log('foo element #' + (i + 1), divFooElements[i].innerHTML)
}
