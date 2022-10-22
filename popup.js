document.addEventListener("DOMContentLoaded", runFunction);
console.log("DOM is loaded!")
function runFunction() {
  let button = document.getElementById("button1");
  button.addEventListener("click", clickFunction);

  function clickFunction() {
    document.body.style.backgroundColor = "blue";
  }
}
