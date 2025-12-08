// homepage.js

// Array of pages to choose from
const sites = [
  'https://guang229.github.io/system-within-a-mess/homepage/music/igor.html',
  'https://guang229.github.io/system-within-a-mess/homepage/music/anti.html',
  'https://guang229.github.io/system-within-a-mess/homepage/music/ctrl/ctrl.html',
  'https://guang229.github.io/system-within-a-mess/homepage/music/cinema.html',

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