const images = document.querySelectorAll('#carouselImages img');
  let current = 0;

  function updateCarousel() {
    images.forEach((img, i) => {
      img.className = '';
      if (i === current) {
        img.classList.add('active');
      } else if (i === (current - 1 + images.length) % images.length) {
        img.classList.add('prev');
      } else if (i === (current + 1) % images.length) {
        img.classList.add('next');
      }
    });
  }

  function nextSlide() {
    current = (current + 1) % images.length;
    updateCarousel();
  }

  function prevSlide() {
    current = (current - 1 + images.length) % images.length;
    updateCarousel();
  }

  updateCarousel();