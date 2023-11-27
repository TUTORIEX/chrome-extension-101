document.addEventListener("DOMContentLoaded", runFunction);

function runFunction() {
  const inputBox = document.getElementById("inputTX");

  inputBox.addEventListener("input", function (event) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { value: inputBox.value });
    });
  });
}
