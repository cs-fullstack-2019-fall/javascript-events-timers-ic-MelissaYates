//get references
let timer = document.getElementById("seconds");
let buttonID = document.getElementById("tbutton");
let seconds = 0;
//update timer to reflect current timer in seconds
function timer_callback() {
    timer.innerText = seconds;
    seconds++
}

//set up event listener for timer start
function timerstart(){
    seconds= 0;
    intervalID = window.setInterval(timer_callback, 1000);
}

buttonID.addEventListener("click",timerstart);
