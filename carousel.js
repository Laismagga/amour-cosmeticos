let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide img');

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  const currentSlide = slides[slideIndex];
  const slideWidth = currentSlide.clientWidth;
  const offset = slideWidth * slideIndex;

  slides.forEach(slide => {
    slide.style.transition = 'transform 0.5s ease';
    slide.style.transform = `translateX(-${offset}px)`;
  });

  // Ajuste adicional para a última imagem
  if (slideIndex === slides.length - 1) {
    slides[0].style.transform = `translateX(-${offset + slideWidth}px)`;
  }
}

function moveSlide(n) {
  slideIndex += n;
  showSlide(slideIndex);
}

function autoSlide() {
  moveSlide(1);
  setTimeout(autoSlide, 5000);
}

showSlide(slideIndex);
autoSlide();