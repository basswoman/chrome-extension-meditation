// event listener for the button click that loads page --> visuals and music


document.addEventListener("DOMContentLoaded", () => {
const medButton = document.getElementById('load-meditation-page');
medButton.addEventListener('click', () => {
   
    // send a message to the content script (content.js) to change the webpage when the button is clicked.
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { type: "load-page" });
      });
    })
})