chrome.webNavigation.onCommitted.addListener(function (details) {
    function findEpisode() {
        var epCredits = document.getElementsByClassName("credit");
        for (i = 0; i < epCredits.length; i++) {
            epCredits[i].style.color = "transparent";
            epCredits[i].style.textShadow = "0 0 5px rgba(0,0,0,0.5)";
        }
        var episodes = document.getElementsByClassName("toggle-episodes");
        for (i = 0; i < episodes.length; i++) {
            episodes[i].style.color = "transparent";
            episodes[i].style.textShadow = "0 0 5px rgba(0,0,0,0.5)";
        }
    }

    chrome.tabs.executeScript(details.tabId, {
        code: '(' + findEpisode + ')();'
    });
}, {
    url: [{
        hostContains: '.imdb.'
    }],
});