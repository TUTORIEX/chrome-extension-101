
console.log("I am background script!")


//-----------------------------------------------------------------------//

// chrome.tabs.onCreated.addListener(function(tab) {
//     console.log(tab)
// })

//-----------------------------------------------------------------------//
// chrome.tabs.onActivated.addListener(function(tab) {
//     console.log(tab)
// })
//-----------------------------------------------------------------------//

// listen to bookmark creation
chrome.bookmarks.onCreated.addListener(function (id, bookmark) {
  console.log(id)
  console.log(bookmark)
});
//-----------------------------------------------------------------------//

//Context menu

chrome.contextMenus.create({
  id: "sampleContextMenu",
  title: "Sample Context Menu uuu",
  contexts: ["all"]
});
chrome.contextMenus.create({
  id: "sampleContextMenu2",
  title: "Sample Context Menu 673e3672",
  contexts: ["all"]
});
chrome.contextMenus.create({
  id: "sampleContextMenu3",
  title: "Sample Context Menu hfiuehuiqegbqe",
  contexts: ["all"]
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  console.log(info);
  console.log(tab);
});


//-----------------------------------------------------------------------//

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(request);
});