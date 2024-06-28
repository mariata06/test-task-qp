const initSlider = () => {

  const slides = document.querySelector('.slider__slides');
  const prevButton = document.querySelector('.slider__btn-prev');
  const nextButton = document.querySelector('.slider__btn-next');
  let currentIndex = 0;

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? slides.children.length - 1 : currentIndex - 1;
    updateSlider();
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === slides.children.length - 1) ? 0 : currentIndex + 1;
    updateSlider();
  });

  function updateSlider() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
};

export {initSlider};
