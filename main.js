  // // Slider logic
  // var images = document.getElementsByClassName('slider-image');
  // var currentImageIndex = 0;
  // var interval = setInterval(changeImage, 2000);

  // function changeImage() {
  //   images[currentImageIndex].classList.remove('active');
  //   currentImageIndex = (currentImageIndex + 1) % images.length;
  //   images[currentImageIndex].classList.add('active');
  // }
  var carousel = document.getElementById("carouselExampleControls");
var carouselInstance = new bootstrap.Carousel(carousel, {
  interval: 500 // Set the interval (in milliseconds) for auto-sliding
});

carouselInstance.pause(); // Pause the carousel initially

function startCarousel() {
  carouselInstance.cycle(); // Start the auto-sliding of carousel
}

function stopCarousel() {
  carouselInstance.pause(); // Stop the auto-sliding of carousel
}

