const hamburger = document.querySelector('.hamburger');
const navCenter = document.querySelector('.nav-center');

hamburger.addEventListener('click', () => {
  navCenter.classList.toggle('active');
});


/* ------------------------------ product image ----------------------------- */
// Select the main image
const mainImage = document.getElementById('mainDisplay');

// Select all thumbnails
const thumbnails = document.querySelectorAll('.thumbnail');

// Loop through thumbnails and add click event
thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    // Change the main image's src to the clicked thumbnail's src
    mainImage.src = thumbnail.src;

    // Optionally, update the alt text too
    mainImage.alt = thumbnail.alt;
  });
});

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
      // Change main image
      mainImage.src = thumbnail.src;
      mainImage.alt = thumbnail.alt;
  
      // Remove active class from all thumbnails
      thumbnails.forEach(t => t.classList.remove('active'));
  
      // Add active class to clicked thumbnail
      thumbnail.classList.add('active');
    });
  });
  