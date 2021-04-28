let lastRequest;
function logURL(requestDetails) {
    console.log("IN LOG URL");
    console.log("Loading: " + requestDetails.url);
    console.log(requestDetails);
    lastRequest = requestDetails;
    console.log("EXIT LOG URL");
}

chrome.webRequest.onBeforeRequest.addListener(logURL, {
    urls: ["*://vtop.vit.ac.in/*"],
});
chrome.webRequest.onBeforeSendHeaders.addListener(
    (data) => {
        console.log("onBeforeSendHeaders", data, data.requestHeaders);
    },
    { urls: ["*://vtop.vit.ac.in/*"] },
    ["requestHeaders"]
);
chrome.webRequest.onSendHeaders.addListener(
    (data) => {
        console.log("onSendHeaders", data, data.requestHeaders);
    },
    { urls: ["*://vtop.vit.ac.in/*"] },
    ["requestHeaders"]
);
