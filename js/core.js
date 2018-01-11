var UNBLURRED = 'blr_unblurred';
var BLURRED = 'blr_blurred';

var prevDOM = document.createElement('div');

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', afterDOMLoaded);
} else {
    afterDOMLoaded();
}

function afterDOMLoaded() {
    var epCredits = document.getElementsByClassName("credit");
    for (i = 0; i < epCredits.length; i++) {
        epCredits[i].classList.add(BLURRED);
    };
    var episodes = document.getElementsByClassName("toggle-episodes");
    for (i = 0; i < episodes.length; i++) {
        episodes[i].classList.add(BLURRED);
    };
    var actorEps = document.getElementsByClassName("filmo-episodes");
    for (i = 0; i < actorEps.length; i++) {
        if (actorEps[i].innerHTML.includes("Show all") && actorEps[i].innerHTML.includes("episodes")) {
            var showEps = actorEps[i].getElementsByTagName('a');
            showEps[0].innerHTML = "Show all episodes"
        }
    };
    document.addEventListener('mousemove', function (e) {
        var srcElement = e.srcElement || e.target;
        if ((prevDOM.className === "toggle-episodes blr_unblurred" && srcElement.className !== "toggle-episodes blr_unblurred") ||
            (prevDOM.className === "credit blr_unblurred" && srcElement.className !== "credit blr_unblurred")) {
            prevDOM.classList.remove(UNBLURRED);
            prevDOM.classList.add(BLURRED);
        }
        if (srcElement.className === 'credit blr_blurred' || srcElement.className === 'toggle-episodes blr_blurred') {
            srcElement.classList.remove(BLURRED);
            srcElement.classList.add(UNBLURRED);
            prevDOM = srcElement;
        }
    }, false);
}
