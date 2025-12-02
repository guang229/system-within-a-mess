
 let blobs = document.querySelectorAll(".blob");
  let container = document.querySelector(".wrapper");
  // place our blobs randomly
  blobs.forEach(function (blob) {
    blob.style.right = (100 * Math.random()) + '%';
    blob.style.top = (100 * Math.random()) + '%';
  });
  container.addEventListener("click", function (event) {
    if (event.target.classList.contains("blob")) {
      event.target.remove();
    }
  });