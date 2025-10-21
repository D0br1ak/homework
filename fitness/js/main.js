(function () {
  document.addEventListener('click', burgerInit)

  function burgerInit(e) {

    const burgerIcon = e.target.closest('.burger-icon')
    const burgerNavLink = e.target.closest('.nav__link')

    if (!burgerIcon && !burgerNavLink) return
    if (document.documentElement.clientWidth > 1100) return

    if (!document.body.classList.contains('body--opened-menu')) {
      document.body.classList.add('body--opened-menu')
    } else (document.body.classList.remove('body--opened-menu'))

  }

  // Слайдер
  const swiper = new Swiper('.product__slider', {
    direction: "vertical",
    slidesPerView: 1,
    
      mousewheel: true,
      
    pagination: {
      el: ".product__pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index === 0 ? '1' : '') + '</span>';
      },
    },
on: {
  slideChange: function () {
    document.querySelectorAll('.product__pagination span').forEach((bullet, index) => {
      if (index === this.activeIndex) {
        bullet.innerHTML = index + 1;
      } else {
        bullet.innerHTML = '';
      }
    });
  },
},
  });
  
})()