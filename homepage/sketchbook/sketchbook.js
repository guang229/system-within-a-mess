document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  if (!container) return;

  // Collect existing image srcs (from markup) then replace the inner HTML
  const originalImgs = Array.from(container.querySelectorAll('img'));
  const srcs = originalImgs.map(i => i.getAttribute('src'));
  if (srcs.length === 0) return;

  // Create a single slideshow image using the first src
  let currentIndex = 0;
  container.innerHTML = '';
  const img = document.createElement('img');
  img.className = 'slideshow-image';
  img.src = srcs[currentIndex];
  img.alt = 'slideshow';
  container.appendChild(img);

  let transitioning = false;
  const TRANSITION_MS = 500; // matches CSS 0.45s

  function showAt(index) {
    if (transitioning) return;
    transitioning = true;
    const slideshowImg = container.querySelector('.slideshow-image');
    if (!slideshowImg) { transitioning = false; return; }

    // normalize index
    const nextIndex = ((index % srcs.length) + srcs.length) % srcs.length;

    // fade out
    slideshowImg.style.opacity = '0';

    // after transition, change src and fade back in
    setTimeout(() => {
      slideshowImg.src = srcs[nextIndex];
      currentIndex = nextIndex;
      // allow reflow then fade in
      requestAnimationFrame(() => requestAnimationFrame(() => {
        slideshowImg.style.opacity = '1';
      }));
      // end transitioning after animation finishes
      setTimeout(() => { transitioning = false; }, TRANSITION_MS);
    }, TRANSITION_MS);
  }

  function next() { showAt(currentIndex + 1); }
  function prev() { showAt(currentIndex - 1); }

  // click container to go next (keeps previous behavior)
  container.addEventListener('click', (e) => {
    // ignore clicks on controls if that ever happens
    next();
  });

  // Prev / Next buttons
  const btnPrev = document.querySelector('.slide-btn.prev');
  const btnNext = document.querySelector('.slide-btn.next');
  if (btnPrev) btnPrev.addEventListener('click', (e) => { e.stopPropagation(); prev(); });
  if (btnNext) btnNext.addEventListener('click', (e) => { e.stopPropagation(); next(); });

  // Keyboard controls: Left / Right / Space
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
      e.preventDefault();
      next();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prev();
    }
  });
});
