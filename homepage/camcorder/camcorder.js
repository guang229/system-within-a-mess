const video = document.querySelector('.frame-video');

const playlist = [
    'imgs/vid1.mov',
    'imgs/vid2.mov',
    'imgs/vid3.mov',
    'imgs/vid4.mov',
    'imgs/vid5.mov'
];

let index = 0;
video.src = playlist[index];

// Optional autoplay: mute required on most browsers to autoplay.
const WANT_AUTOPLAY = false; // set true to autoplay (video.muted must be true)
if (WANT_AUTOPLAY) {
  video.muted = true;
  video.autoplay = true;
  video.play().catch(() => { /* user gesture required on some browsers */ });
}

// Toggle play/pause on click of the frame
document.querySelector('.frame').addEventListener('click', () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});

// Go to next video when ended
video.addEventListener('ended', () => {
  index = (index + 1) % playlist.length; // loop; remove modulus to stop at end
  video.src = playlist[index];
  // small delay helps on some browsers:
  video.load();
  video.play().catch(() => {/* autoplay blocked, will start on user gesture */});
});