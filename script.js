function getURLParameter(name) {
    return decodeURI(
        (RegExp(name + '=' + '(.*?)(&|$)').exec(location.search) || [, null])[1] || ''
    );
}

var sec = 31;
var min = 00;

function countDown() {
    sec--;
    if (sec == -01) {
        sec = 59;
        min = min - 1;
    } else {
        min = min;
    }

    if (sec <= 9) { sec = "0" + sec; }

    time = (min <= 9 ? "" + min : min) + " minutes and " + sec + " seconds";

    if (document.getElementById) { document.getElementById('theTime').innerHTML = time; }

    SD = window.setTimeout("countDown();", 1000);
    if (min == '00' && sec == '00') {
        sec = "00";
        window.clearTimeout(SD);
    }
}
window.onload = countDown;