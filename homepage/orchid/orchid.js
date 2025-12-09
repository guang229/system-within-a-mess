const img = document.getElementById("anim-frame");

// List of frame image paths (relative to this HTML file)
const frames = [
  'homepage/orchid/imgs/frame1.PNG',
  'homepage/orchid/imgs/frame2.PNG',
  'homepage/orchid/imgs/frame3.PNG',
  'homepage/orchid/imgs/frame4.PNG',
  'homepage/orchid/imgs/frame5.PNG',
  'homepage/orchid/imgs/frame6.PNG',
  'homepage/orchid/imgs/frame7.PNG',
  'homepage/orchid/imgs/frame8.PNG',
];

let current = 0;
const fps = 3;                   // frames per second
const frameDuration = 1000 / fps; // ms per frame
let lastTime = 0;

function animate(timestamp) {
  if (!img) return; // guard: stop if element missing
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