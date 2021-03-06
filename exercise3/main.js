// Given the following HTML document, write JavaScript code that will remove any
// list elements containing the letter "a". For all remaining list items, set
// the element's title to the text of the item. EG: If the item's text is
// "sandwich" it would be removed. If the item's text is "egg" the item's
// title would be set to "egg".

var liElements = document.querySelectorAll('li')

for (var i = 0; i < liElements.length; i++) {
  if (liElements[i].textContent.indexOf('a') !== -1) {
    liElements[i].remove()
  } else {
    liElements[i].title = liElements[i].textContent
  }
}
