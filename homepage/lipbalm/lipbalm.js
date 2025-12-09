const area = document.querySelector('.sparkle-area');
if (area) {
  const EMOJIS = ['✨', '💫', '🌟', '✦', '⭐'];

  // throttle creation to avoid too many elements on fast mousemove
  let lastAt = 0;

  // target the image inside the sparkle area so sparkles only appear when hovering the image
  const img = area.querySelector('img');
  if (!img) return;

  function spawnSparkleAt(clientX, clientY) {
    const now = Date.now();
    if (now - lastAt < 60) return; // ~16 per second max
    lastAt = now;

    const rect = area.getBoundingClientRect();
    const x = clientX - rect.left; // position inside area
    const y = clientY - rect.top;

    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    // pick a random emoji
    sparkle.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];

    // add slight random offset so sparkles appear scattered
    const offsetX = (Math.random() - 0.5) * 24; // -12..12
    const offsetY = (Math.random() - 0.5) * 8;  // -4..4

    sparkle.style.left = (x + offsetX) + 'px';
    sparkle.style.top = (y + offsetY) + 'px';

    area.appendChild(sparkle);

    sparkle.addEventListener('animationend', () => {
      sparkle.remove();
    });
  }

  // Burst helper: spawn several sparkles around a point
  function burstAt(clientX, clientY, count = 8) {
    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        const rx = clientX + (Math.random() - 0.5) * 80;
        const ry = clientY + (Math.random() - 0.5) * 60;
        spawnSparkleAt(rx, ry);
      }, i * 30);
    }
  }

  img.addEventListener('mousemove', (e) => {
    spawnSparkleAt(e.clientX, e.clientY);
  });

  // create a small burst on hover enter (image only)
  img.addEventListener('mouseenter', (e) => {
    burstAt(e.clientX, e.clientY, 6);
  });

  // click-to-burst (mouse)
  img.addEventListener('click', (e) => {
    e.stopPropagation();
    burstAt(e.clientX, e.clientY, 10);
  });

  // touch support: tap to burst. Use passive:false to allow preventDefault.
  img.addEventListener('touchstart', (e) => {
    // prevent synthetic mouse events and page scroll on some browsers
    e.preventDefault();
    const t = e.touches && e.touches[0];
    if (t) burstAt(t.clientX, t.clientY, 12);
  }, { passive: false });
}