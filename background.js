chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([
      { conditions: [
          new chrome.declarativeContent.PageStateMatcher({}),
        ],
        actions: [
          new chrome.declarativeContent.ShowPageAction(),
        ],
      },
    ]);
  });
});

chrome.commands.onCommand.addListener(function(command) {
  debugger
  console.log('Command:', command);
});