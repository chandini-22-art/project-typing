let time = 60;
let timerStarted = false;

const input = document.getElementById("input");
const timeDisplay = document.getElementById("time");
const wpmDisplay = document.getElementById("wpm");

input.addEventListener("input", () => {

    if(!timerStarted){
        timerStarted = true;
        startTimer();
    }

    calculateWPM();
});

function startTimer(){
    let countdown = setInterval(() => {

        time--;
        timeDisplay.textContent = time;

        if(time <= 0){
            clearInterval(countdown);
            input.disabled = true;
            alert("Time's Up!");
        }

    },1000);
}

function calculateWPM(){
    let words = input.value.trim().split(/\s+/).length;

    if(input.value.trim() === ""){
        words = 0;
    }

    let minutes = (60 - time) / 60;

    if(minutes > 0){
        let wpm = Math.round(words / minutes);
        wpmDisplay.textContent = wpm;
    }
}

function restartTest(){
    location.reload();
}
