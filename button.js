// Define the list of text to cycle through
var textList = [
  "are you really s?",
  "eh? hontou? hontou hontou??",
  "ah I see.. ok can u press next plweasee :x"
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
