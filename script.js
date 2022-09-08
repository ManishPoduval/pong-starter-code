let canvas = document.querySelector("canvas");
canvas.style.backgroundColor = "#302c2c";

// getting the paintbrush
let ctx = canvas.getContext("2d");

// The DOM of the start and the restart buttons
let startBtn = document.querySelector("#start");
let restartBtn = document.querySelector("#restart");

let circleX = 150,
  circleY = 100,
  radius = 20;
let intervalId = 0;
let gameOver = false;
let incrX = 2;
let incrY = 2;

function drawCircle() {
  ctx.beginPath();
  ctx.arc(circleX, circleY, 20, 0, 2 * Math.PI);
  ctx.fillStyle = "#a6efff";
  ctx.fill();
  ctx.closePath();
}

// recursion
function animation() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawCircle();
  circleX = circleX + incrX;
  circleY = circleY + incrY;

  //collision
  if (circleX + radius > canvas.width) {
    incrX = -incrX;
  }

  if (circleY + radius > canvas.height) {
    incrY = -incrY;
  }

  // if (circleX + radius <= canvas.width) {
  //   incrX++;
  // }

  // if (circleY + radius <= canvas.height) {
  //   incrY++;
  // }

  intervalId = requestAnimationFrame(animation);
  if (gameOver) {
    cancelAnimationFrame(intervalId);
  }
}

function play() {
  startBtn.style.display = "none";
  canvas.style.display = "block";
  animation();
}

//Everything begins here
window.addEventListener("load", () => {
  canvas.style.display = "none";
  restartBtn.style.display = "none";
  play();

  startBtn.addEventListener("click", () => {
    play();
  });

  restartBtn.addEventListener("click", () => {
    // do something when the user clicks the restart button
  });
});
