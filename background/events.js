// This will blindly redirect to Google Cache, does not guarantee to be successful
// This is to bypass DNS-blocking from several IPS
chrome.webRequest.onErrorOccurred.addListener(
  // This function will blindly try to redirect current site to Google Cache directly
  (details) => {
    const googleCacheUrl =
      "http://webcache.googleusercontent.com/search?q=cache:";
    const currentUrl = details.url;

    chrome.tabs.update(details.tabId, {
      url: `${googleCacheUrl}${currentUrl}`,
    });
  },
  {
    urls: ["*://*.medium.com/*", "*://medium.com/*"],
  },
);

chrome.action.onClicked.addListener(async (tab) => {
  try {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["scripts/enhance.js"],
    });
  } catch (error) {
    // TODO: Think of a better way to trigger onErrorOccurred scripts
    chrome.tabs.reload(tab.id);
  }
});
