
import HeaderFixed from './header.js';
import initBurger from './burger.js';
import initSlider from './slider.js';
import initModal from './modal.js';
import initSizes from './sizes.js';

document.addEventListener('DOMContentLoaded', () => {

  const headerConfig = {
    HEADER: 'header',
    HEADER_FIXED: 'header--fixed',
  };
  new HeaderFixed(headerConfig);
  initBurger();
  initSlider();
  initModal();
  initSizes();
});
