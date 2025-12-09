const img = document.getElementById("anim-frame");

// List of frame image paths
const frames = [
  "imgs/frame1.png",
  "imgs/frame2.png",
  "imgs/frame3.png",
  "imgs/frame4.png",
  "imgs/frame5.png",
  "imgs/frame6.png",
  "imgs/frame7.png",
  "imgs/frame8.png",
  "imgs/frame9.png",
  "imgs/frame10.png",
  "imgs/frame11.png",
];

let current = 0;
const fps = 12;                 
const frameDuration = 1000 / fps; // ms per frame
let lastTime = 0;

function animate(timestamp) {
  if (!lastTime) lastTime = timestamp;
  const elapsed = timestamp - lastTime;

  if (elapsed >= frameDuration) {
    current = (current + 1) % frames.length; // loop through frames
    img.src = frames[current];
    lastTime = timestamp;
  }

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);