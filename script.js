const startButton = document.querySelector(".start-btn");
const pauseButton = document.querySelector(".pause-btn");
const resetButton = document.querySelector(".reset-btn");
const display = document.querySelector(".display");
let secondsIn25Minutes = 1499;
let intervalID;
let isRunning = false;

startButton.addEventListener("click", startCountdown);

pauseButton.addEventListener("click", stopCounting);

resetButton.addEventListener("click", resetTimer);

function startCountdown() {
    if (!isRunning) {
        intervalID = window.setInterval(updateDisplay, 10);
        isRunning = true;
    }
}

function updateDisplay() {
    secondsIn25Minutes--;
    display.innerHTML = convertSeconds();
    if (secondsIn25Minutes <= 0) {
        reset();
    }
}

function convertSeconds() {
    let minutes = Math.floor(secondsIn25Minutes / 60);
    let seconds = secondsIn25Minutes % 60;
    if (seconds < 10) {
        seconds = `0${seconds}`
    }
    return `${minutes}:${seconds}`;
}

function resetTimer() {
    window.clearInterval(intervalID);
    display.innerHTML = "25:00";
    secondsIn25Minutes = 1499;
    isRunning = false;
}

function stopCounting() {
    window.clearInterval(intervalID);
    isRunning = false;
}

function reset() {
    window.clearInterval(intervalID);
    secondsIn25Minutes = 1499;
    isRunning = false;
}