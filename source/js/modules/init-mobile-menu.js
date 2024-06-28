const initMobileMenu = () => {

  let toggleMenu = document.querySelector('.btn-reset');
  let mobileMenu = document.querySelector('.main-nav__mobile-menu');
  let mainNav = document.querySelector('.main-nav');

  toggleMenu.addEventListener('click', () => {
    toggleMenu.classList.toggle('is-active');

    mobileMenu.classList.toggle('is-active');

    mainNav.classList.toggle('is-active');
  });
};

export {initMobileMenu};
