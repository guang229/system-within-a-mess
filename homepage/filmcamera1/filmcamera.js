const img = document.getElementById("anim-frame");

const frames = [
  'homepage/filmcamera1/imgs/frame1.PNG',
  'homepage/filmcamera1/imgs/frame2.PNG',
  'homepage/filmcamera1/imgs/frame3.PNG',
  'homepage/filmcamera1/imgs/frame4.PNG',
  'homepage/filmcamera1/imgs/frame5.PNG',
  'homepage/filmcamera1/imgs/frame6.PNG',
  'homepage/filmcamera1/imgs/frame7.PNG',
  'homepage/filmcamera1/imgs/frame8.PNG',
];

let current = 0;
const fps = 4;                   // frames per second
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