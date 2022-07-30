// this is the background code...

// listen for our browerAction to be clicked
chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      files: ['main.js']
    });
  });