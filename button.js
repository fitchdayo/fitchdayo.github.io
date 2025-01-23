// Define the list of text to cycle through
var textList = [
  "are you really s?",
  "eh? hontou? hontou hontou??",
  "ah I see.. ok can u press next plweasee :x",
  "firstly i'm sorry for this :x",
  "but i would like to say, i'm very thankful to have met you",
  "you have helped me alot during my dark times with just your va works.. :3",
  "thank you for always making everyone feels safer with your work",
  "lastly..",
  "I would like to tell you that..",
  "I like you.",
  "would you be okay if I were to ask you out? :3",
  "you don't have to give me an answer now.",
  "hehe"
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
