const container = document.getElementById('image-container');
const original  = document.getElementById('click-image');

original.addEventListener('click', () => {
  const clone = original.cloneNode(true); // copy the same image
  container.appendChild(clone);           // add it to the container
});