let hr = 0;
let min = 0;
let sec = 0;
let mSec = 0;
let tm = 0;

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

function displayTime() {
  $("#timer").text(`${hr}:${min}:${sec}:${mSec}`);
}

startButton.addEventListener('click', () => {
  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = true;

  tm = setInterval(count, 100);
})

stopButton.addEventListener('click', function() {
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;

  clearInterval(tm);
  })

resetButton.addEventListener('click', function() {
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;

  hr = 0;
  min = 0;
  sec = 0;
  mSec = 0;

  displayTime();
})

function count() {
  mSec++;
  if (mSec >= 10) {
    sec++;
    mSec = 0;
  }
  if (sec >= 60) {
    min++;
    sec = 0;
  }
  if (min >= 60) {
    hr++;
    min = 0;
  }
  displayTime();
}