
import HeaderFixed from '.js/header.js';
import initBurger from '.js/burger.js';
import initSlider from '.js/slider.js';
import initModal from '.js/modal.js';
import initSizes from '.js/sizes.js';

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

// // Fixed-header
// (function () {
//   const headerFixed = document.querySelector('.header');
//   if (!headerFixed) return;

//   let lastScrollY = window.scrollY || 0;
//   let ticking = false;

//   const onScroll = () => {
//     const currentY = window.scrollY || 0;

//     if (currentY > 0) {
//       headerFixed.classList.add('header--fixed');
//     } else {
//       headerFixed.classList.remove('header--fixed');
//     }
//     lastScrollY = currentY;
//     ticking = false;
//   };

//   const requestTick = () => {
//     if (!ticking) {
//       window.requestAnimationFrame(onScroll);
//       ticking = true;
//     }
//   };
//   window.addEventListener('scroll', requestTick, { passive: true });
//   requestTick();
// })();

// // Burger-menu
// const burger = document.querySelector('.burger');
// const menu = document.querySelector('.header__menu'); 
// const burgerIconMenu = document.querySelector('.burger__icon-menu');
// const burgerIconCross = document.querySelector('.burger__icon-cross');


// burger.addEventListener('click', () => {

//   menu.classList.toggle('header__menu--open');

//   burgerIconMenu.style.display = 
//     burger.classList.contains('burger--open') ? 'none' : 'block';
//   burgerIconCross.style.display = 
//     burger.classList.contains('burger--open') ? 'block' : 'none';


//   burger.classList.toggle('burger--open');
// });

// // Slider
//   new Swiper(".product__slider", {
//     slidesPerView: "auto",
//     centeredSlides: true,
//     loop: true,
//     mousewheel: {
//       forceToAxis: true,
//     },
//     navigation: {
//       prevEl: ".product__slider-button--prev",
//       nextEl: ".product__slider-button--next",
//     },
//   });

// // Modal
// document.addEventListener('DOMContentLoaded', function() {

//   const modal = document.querySelector('.modal');
//   const modalWindow = document.querySelector('.modal__window');
//   const modalClose = document.querySelector('.modal__close');
//   const modalBuy = document.querySelector('.modal-buy'); 
//   const openModalButtons = document.querySelectorAll('.product__buy-button');

 
//   if (!modal || !modalWindow || !modalClose || !modalBuy || !openModalButtons) {
//     console.error('Не найдены необходимые элементы для работы модального окна.');
//     return;
//   }


//   function openModal() {
//     modal.classList.add('modal--open');
//     modalWindow.classList.add('modal__window--open');
//     document.body.style.overflow = 'hidden'; 
//   }


//   function closeModal() {
//     modal.classList.remove('modal--open');
//     modalWindow.classList.remove('modal__window--open');
//     document.body.style.overflow = ''; 
//   }


//   openModalButtons.forEach(button => {
//     button.addEventListener('click', function(event) {
//       event.preventDefault(); 
//       openModal();
//     });
//   });

//   modalClose.addEventListener('click', closeModal);

//   modal.addEventListener('click', function(event) {
//     if (event.target === modal) {
//       closeModal();
//     }
//   });

//   document.addEventListener('keydown', function(event) {
//     if (event.key === 'Escape' && modal.classList.contains('modal--open')) {
//       closeModal();
//     }
//   });
// });

// // Sizes

//   const sizesList = document.querySelector('[data-sizes="list"]');
//   const sizesButtons = document.querySelectorAll('[data-sizes="button"]');

//   const handleSizeClick = (event) => {
//     const target = event.target;

//     if (!target?.classList.contains("product__sizes-button")) return;

//     sizesButtons.forEach((button) =>
//       button.classList.remove("product__sizes-button--active")
//     );
//     target.classList.add("product__sizes-button--active");
//   };

//   sizesList.addEventListener("click", handleSizeClick);
