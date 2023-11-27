document.addEventListener("DOMContentLoaded", runFunction);
console.log("DOM is loaded!")
function runFunction() {
  let button = document.getElementById("button1");
  button.addEventListener("click", clickFunction);

  function clickFunction() {
    // document.body.style.backgroundColor = "blue";
    // chrome.runtime.sendMessage({ message: "just-a-message" });
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      console.log(tabs[0]);
    });

  }
}
