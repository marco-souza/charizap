function allowIframe(details) {
  return {
    responseHeaders: details.responseHeaders
      .filter(header =>
        header.name.toLowerCase() !== 'x-frame-options'
      )
  };
}

chrome.webRequest.onHeadersReceived.addListener(
  allowIframe,
  { urls: ["<all_urls>"] },
  ["blocking", "responseHeaders"]
);
