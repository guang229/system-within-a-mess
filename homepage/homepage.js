// homepage.js

const ele = document.documentElement; // scroll the whole page
let isDown = false;
let startX;
let startY;
let scrollLeft;
let scrollTop;

window.addEventListener('mousedown', (e) => {
  isDown = true;
  document.body.classList.add('dragging');
  startX = e.clientX;
  startY = e.clientY;
  scrollLeft = ele.scrollLeft;
  scrollTop = ele.scrollTop;
});

window.addEventListener('mouseleave', () => {
  isDown = false;
  document.body.classList.remove('dragging');
});

window.addEventListener('mouseup', () => {
  isDown = false;
  document.body.classList.remove('dragging');
});

window.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.clientX;
  const y = e.clientY;
  const walkX = x - startX;
  const walkY = y - startY;
  ele.scrollLeft = scrollLeft - walkX;
  ele.scrollTop = scrollTop - walkY;
});


// Array of pages to choose from
const sites = [
  'https://guang229.github.io/system-within-a-mess/homepage/music/igor/igor.html',
  'https://guang229.github.io/system-within-a-mess/homepage/music/anti/anti.html',
  'https://guang229.github.io/system-within-a-mess/homepage/music/ctrl/ctrl.html',
  'https://guang229.github.io/system-within-a-mess/homepage/music/cinema/cinema.html',
  'https://guang229.github.io/system-within-a-mess/homepage/music/lostandfound/lostandfound.html'
];

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.absolute3');
  if (!container) return;

  // Pick an initial random url and render the speaker as a link to that url
  const initialUrl = randomItem(sites);
  container.innerHTML = `
    <a id="randomLink" href="${initialUrl}">
      <img id="speaker" src="imgs/speaker.png" alt="speaker" style="width: 500px; height: 500px; cursor: pointer;">
    </a>
  `;

  // When the user clicks the speaker/link, navigate to a (new) random site
  // We listen on the container to be resilient if the element is re-rendered.
  container.addEventListener('click', (e) => {
    e.preventDefault();
    const newUrl = randomItem(sites);
    // Navigate to the randomly chosen page
    window.location.href = newUrl;
  });
});