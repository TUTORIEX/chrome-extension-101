console.log("I am content script!");

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  // console.log(message);
  const paragraphs = document.getElementsByTagName("p");
  for (elt of paragraphs) {
    elt.textContent = message.value;
  }
});
