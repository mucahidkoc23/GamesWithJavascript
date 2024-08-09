const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');

let result = 0;
let hitPositin;
let currentTime = 10;
let timerId = null;


function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('mole');
  })
  let randomPosition = squares[Math.floor(Math.random() * 9)];
  randomPosition.classList.add('mole');
  hitPositin = randomPosition.id;
}
squares.forEach(square => {square.addEventListener('mousedown', ()=>{
  if (square.id == hitPositin) {
    result ++;
    score.textContent = result;
    hitPositin = null;
  }
})})

function moveMole() {
  timerId = setInterval(randomSquare, 1000);
}

moveMole();

function countDown() {
  currentTime --;
  timeLeft.textContent = currentTime;

  if(currentTime==0) {
    clearInterval(countDownTımerId);
    clearInterval(timerId)
    alert('Game Over!  Your fibal score is ' + result);
  }
}

let countDownTımerId = setInterval(countDown, 1000);