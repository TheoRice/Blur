chrome.webNavigation.onCommitted.addListener(function (details) {
    function findEpisode() {
        var epCredits = document.getElementsByClassName("credit");
        for (i = 0; i < epCredits.length; i++) {
            epCredits[i].style.color = "transparent";
            epCredits[i].style.textShadow = "0 0 5px rgba(0,0,0,0.5)";
        };
        var episodes = document.getElementsByClassName("toggle-episodes");
        for (i = 0; i < episodes.length; i++) {
            episodes[i].style.color = "transparent";
            episodes[i].style.textShadow = "0 0 5px rgba(0,0,0,0.5)";
        };
        var actorEps = document.getElementsByClassName("filmo-episodes");
        for (i = 0; i < actorEps.length; i++) {
            if (actorEps[i].innerHTML.includes("Show all") && actorEps[i].innerHTML.includes("episodes")) {
                var showEps = actorEps[i].getElementsByTagName('a');
                showEps[0].innerHTML = "Show all episodes"
            }
        };
    }

    chrome.tabs.executeScript(details.tabId, {
        code: '(' + findEpisode + ')();'
    });
}, {
    url: [{
        hostContains: '.imdb.'
    }],
});