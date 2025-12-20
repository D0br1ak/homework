// Бургер
(function () {

  document.addEventListener('click', burgerInit)

  function burgerInit(e) {

    const burgerIcon = e.target.closest('.burger-icon')
    const burgerNavLink = e.target.closest('.nav_link')

    if (!burgerIcon && !burgerNavLink) return
    if (document.documentElement.clientWidth > 768) return

    if (!document.body.classList.contains('body--opened-menu')) {
      document.body.classList.add('body--opened-menu')
    } else (document.body.classList.remove('body--opened-menu'))

  }
  // Слайдер
  const swiper = new Swiper('.hero__slider', {
    slidesPerView: 1,
    spaceBetween: 15,

    navigation: {
      nextEl: '.hero_next',
      prevEl: '.hero_prev',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

  });


})()