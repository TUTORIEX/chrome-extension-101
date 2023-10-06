console.log("I am content script!");
// document.body.style.backgroundColor = "blue";

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(request);
  if (request.message === "turn_blue") {
    document.body.style.backgroundColor = "blue";
  }
});
