document.addEventListener("DOMContentLoaded", function () {
  const images = ["image1.jpg", "image2.jpg", "image3.jpg"];

  let currentIndex = 0;
  const slideImg = document.getElementById("slide-img");

  function changeImage() {
    if (!slideImg) return; // Safety check

    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    slideImg.src = images[currentIndex];
  }

  // Change image every 3 seconds
  setInterval(changeImage, 3000);
});
