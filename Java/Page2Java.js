const items = document.querySelectorAll('#carouselimages .carouselitem');
let current = 0;

function updateCarousel() {
  items.forEach((item, i) => {
    item.className = 'carouselitem';
    if (i === current) {
      item.classList.add('active');
    } else if (i === (current - 1 + items.length) % items.length) {
      item.classList.add('prev');
    } else if (i === (current + 1) % items.length) {
      item.classList.add('next');
    }
  });
}

function nextSlide() {
  current = (current + 1) % items.length;
  updateCarousel();
}

function prevSlide() {
  current = (current - 1 + items.length) % items.length;
  updateCarousel();
}

updateCarousel();
