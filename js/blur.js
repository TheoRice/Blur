document.addEventListener('DOMContentLoaded', buttonControl, false);

function buttonControl() {

    document.getElementById("unblur").addEventListener('click', () => {
        function unblur() {
            var credit = document.getElementsByClassName("credit");
            for (i = 0; i < credit.length; i++) {
                credit[i].style.color = "";
                credit[i].style.textShadow = "";
            };
            var episodes = document.getElementsByClassName("toggle-episodes");
            for (i = 0; i < episodes.length; i++) {
                episodes[i].style.color = "";
                episodes[i].style.textShadow = "";
            };
        }

        chrome.tabs.executeScript({
            code: '(' + unblur + ')();'
        })
    });

    document.getElementById("reblur").addEventListener('click', () => {
        function reblur() {
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
        };

        chrome.tabs.executeScript({
            code: '(' + reblur + ')();'
        })
    });
}