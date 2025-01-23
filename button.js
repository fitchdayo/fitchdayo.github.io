// Define the list of text to cycle through
var textList = [
  "So.. you have been sent here… right?",
  "Serious SERIOUS?",
  "Phew, okay, you can press next?"
];

var currentIndex = 0;

function resizeButton(selector, scaleFactor) {
  var button = document.querySelector(selector);
  var currentSize = parseFloat(getComputedStyle(button).fontSize);
  var newSize = currentSize * scaleFactor;
  button.style.fontSize = newSize + "px";
}

function noButtonClick() {
  resizeButton(".yes-button", 1.1);
  resizeButton(".button:not(.yes-button)", 0.9);
}

function yesButtonClick() {
  // Update the h2 text when the "Yes" button is clicked
  var h2Element = document.querySelector("h2");
  h2Element.textContent = textList[currentIndex];

  currentIndex++;

  // Check if it's the last page
  if (currentIndex === textList.length) {
    replaceWithNextButton();
  } else {
    currentIndex = currentIndex % textList.length;
  }
}

function replaceWithNextButton() {
  // Hide original buttons
  var buttons = document.querySelectorAll(".button");
  buttons.forEach(function (button) {
    button.style.display = "none";
  });

  // Create the "Next" button
  var nextButton = document.createElement("button");
  nextButton.textContent = "Next";
  nextButton.className = "next-button button";
  nextButton.onclick = function () {
    alert("You pressed Next!"); // Add functionality for "Next" button here
  };

  // Append the "Next" button to the body or a specific container
  document.body.appendChild(nextButton);
}
