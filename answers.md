1) Which of the following methods of Document return collections of elements? Select all that apply.

a. getElementById()

b. ***answer getElementsByTagName()***

c. querySelector()

d. ***answer querySelectorAll()***

---

2) Can you iterate over collections of html elements (HTMLCollection) using forEach()?

a. yes

b. ***answer no***

---

3) Which of the following can you use to remove an element from the DOM?

a. document.remove()

b. parentNode.remove(child)

c. ***answer element.remove()***

d. document.remove(parentNode, element)

---

4) Which method can you use to add a new item (newItem) to an unordered list (parentNode)?

a. document.addItemTo(parentNode, newItem)

b. ***answer parentNode.appendChild()***

c. new Item().addToParent(parentNode)

d. parentNode.push(newItem)

---

5) What is the programatic representation of HTML source code in a browser called?

a. HTML

b. ***answer The Document Object Model***

c. Source code

d. JavaScript

---

6) What is the DOM made up of?

a. A collection of JavaScript objects

b. A webpage's domain name

c. ***answer A tree of nodes representing HTML elements***

d. A collection of security restrictions and permissions

---

7) How are the DOM and HTML documents related?

a. The DOM controls the HTML that can be rendered

b. HTML dictates a static DOM

c. ***answer Elements in the DOM map to elements in the HTML document***

d. There is no relationship

---

8) What do all HTMLElements in the DOM derive from? Select all that apply.

a. HTMLDivElement

b. HTMLElement

c. ***answer Element***

d. Node

---

9) Which window objects are available to a given JavaScript program?

a. All of the tabs in the same browser window

b. ***answer Only the tab or window that contains the current HTML document***

c. All tabs across all browser windows

d. All instances of in the history of the current tab

---

10) To which object do the location, console, and document properties belong?

a. ***answer Window***

b. Document

c. Tab

d. Global

---

11) What JavaScript function is used to run code after a specified delay?

a. wait()

b. setInterval()

c. ***answer setTimeout()***

d. sleep()

---

12) What JavaScript function is used to run code periodically?

a. wait()

b. ***answer setInterval()***

c. setTimeout()

d. sleep()

---

# Short Answer

####In your own words, explain what the DOM is and how it relates to HTML documents.
The DOM is a node representation of our HTML structure.  With JavaScript we can manipulate the DOM changing content, structure, and style.

---

####In your own words, explain what nodes are and how they relate to elements in HTML documents.
In the DOM everything is a node and we represent HTML elements through nodes

---

####In your own words explain the role played by the window object.
If we compare the DOM tree with a file system structure the window object represent our root folder.

---

####Explain how the Window object relates to the global scope.
The Window object is our global scope and we cannot go above it.  The global scope holds All global JavaScript objects, functions, and variables. When we create a function we are nesting a new scope inside of the global scope.
