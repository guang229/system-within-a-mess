const img = document.getElementById("anim-frame");

// List of frame image paths
const frames = [
  "/Users/gloriaguan/Desktop/cif25/Harmonic Collection/GitHub/system-within-a-mess/homepage/orchid/imgs/frame1.png",
  "/Users/gloriaguan/Desktop/cif25/Harmonic Collection/GitHub/system-within-a-mess/homepage/orchid/imgs/frame2.png",
  "/Users/gloriaguan/Desktop/cif25/Harmonic Collection/GitHub/system-within-a-mess/homepage/orchid/imgs/frame3.png",
  "/Users/gloriaguan/Desktop/cif25/Harmonic Collection/GitHub/system-within-a-mess/homepage/orchid/imgs/frame4.png",
  "/Users/gloriaguan/Desktop/cif25/Harmonic Collection/GitHub/system-within-a-mess/homepage/orchid/imgs/frame5.png",
  "/Users/gloriaguan/Desktop/cif25/Harmonic Collection/GitHub/system-within-a-mess/homepage/orchid/imgs/frame6.png",
  "/Users/gloriaguan/Desktop/cif25/Harmonic Collection/GitHub/system-within-a-mess/homepage/orchid/imgs/frame7.png",
  "/Users/gloriaguan/Desktop/cif25/Harmonic Collection/GitHub/system-within-a-mess/homepage/orchid/imgs/frame8.png",
];

let current = 0;
const fps = 3;                   // frames per second
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