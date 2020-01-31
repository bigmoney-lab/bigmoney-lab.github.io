	$(function(){
//     function startTimer(duration, display) {
//     var timer = duration, minutes, seconds;
//     setInterval(function () {
//         minutes = parseInt(timer / 60, 10)
//         seconds = parseInt(timer % 60, 10);

//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.text(minutes + ":" + seconds);

//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
// }

	// jQuery(function ($) {
	//     var fiveMinutes = 60 * 3,
	//         display = $('#time');
	//     startTimer(fiveMinutes, display);
	// });


	var secondsDiv = $("#seconds");
	var minsDiv = $("#mins");
	var hoursDiv = $("#hours");
	var interval = null;
	var timer = false;
	// return the value of a given div
function getCurrentValue(value) {
    return value.html();
}

// reset the value of a chosen div to 00
function resetValue(value){
    value.html("00");
}

// check if values are more than 59 to progress the timer
function check59() {
    var currentSec = getCurrentValue(secondsDiv);
    var currentMins = getCurrentValue(minsDiv);
    var currentHours = getCurrentValue(hoursDiv);
    // check the seconds to become a minute
    if (currentSec > 59) {
        currentMins++;
        if (currentMins < 10) {
            minsDiv.html("0" + currentMins);
        } else {
            minsDiv.html(currentMins);
        }
        resetValue(secondsDiv);
    }
    // check the minutes to become an hour
    if (currentMins > 59) {
        currentHours++;
        if (currentHours < 10) {
            hoursDiv.html("0" + currentHours);
        } else {
            hoursDiv.html(currentHours);
        }
        resetValue(minsDiv);
    }
}

// add seconds
function addSecond() {
    var currentSec = getCurrentValue(secondsDiv);
    currentSec++;
    if (currentSec < 10) {
        secondsDiv.html("0" + currentSec);
    } else {
        secondsDiv.html(currentSec);
    }
    check59();
}

$(document).ready(function(){
       if (timer===false) {
        timer = true;
        interval = setInterval(addSecond, 1000);
    }
    })

// function func() {
//   goto();
// }

// setTimeout(func, 180000);

});