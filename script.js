// Function to change text content
const changeTextButton = document.getElementById('changeTextButton');
const textParagraph = document.getElementById('textParagraph');

changeTextButton.addEventListener('click', function() {
  textParagraph.textContent = 'The text has been changed!';
});

// Function to modify CSS styles
const toggleStyleButton = document.getElementById('toggleStyleButton');

toggleStyleButton.addEventListener('click', function() {
  textParagraph.classList.toggle('highlighted');
});

// Function to add a new element
const addElementButton = document.getElementById('addElementButton');

addElementButton.addEventListener('click', function() {
  const newElement = document.createElement('p');
  newElement.textContent = 'This is a new dynamically added paragraph.';
  document.body.appendChild(newElement);
});
