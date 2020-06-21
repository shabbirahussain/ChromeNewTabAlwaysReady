//chrome.tabs.onRemoved.addListener(createANewTabIfNoneExist);
chrome.webNavigation.onTabReplaced.addListener(createANewTabIfNoneExist);
chrome.webNavigation.onBeforeNavigate.addListener(createANewTabIfNoneExist);

var isLocked = false;
function createANewTabIfNoneExist() {
    if (isLocked) return;
    isLocked = true;

    let queryInfo = {active : false, currentWindow : true, title : "New Tab"}
    chrome.tabs.query(queryInfo, function(result) {
        if(result.length == 0) {
            let createProperties = {active : false};
            chrome.tabs.create(createProperties, function(){});
        }
    });

    isLocked = false;
}


