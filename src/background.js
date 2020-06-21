chrome.tabs.onUpdated.addListener(createANewTabIfNoneExist);
chrome.tabs.onRemoved.addListener(createANewTabIfNoneExist);

function createANewTabIfNoneExist() {
    let queryInfo = {active : false, currentWindow : true, title : "New Tab"}
    window.setTimeout(function() {
        chrome.tabs.query(queryInfo, function(result) {
            if(result.length == 0) {
                let createProperties = {active : false};
                chrome.tabs.create(createProperties, function(){});
            }
        })
    }, 1000 + Math.floor(Math.random() * 5000));
}


