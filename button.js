// Define the list of text to cycle through
var textList = [
  "But before we go on.. Are you really S?",
  "Really really really?",
  "Final really?"
];

var currentIndex = 0;

function nextButtonClick() {
  // Update the h2 text when the "Yes" button is clicked
  var h2Element = document.querySelector("h2");

  if (currentIndex < textList.length) {
    h2Element.textContent = textList[currentIndex];
    currentIndex++;
  }
}
