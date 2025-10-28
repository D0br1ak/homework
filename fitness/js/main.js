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
  let swiper;

  function initSwiper(isVertical) {
    if (swiper) {
      swiper.destroy(true, true);
    }
    swiper = new Swiper('.product__slider', {
      direction: isVertical ? 'vertical' : 'horizontal',
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
  }
  initSwiper(window.innerWidth >= 1400);
  window.addEventListener('resize', () => {
    initSwiper(window.innerWidth >= 1400);
  });
  // Таббар
  const tabControlsInfo = document.querySelector('.information__tab-controls')

  tabControlsInfo.addEventListener('click', toggleTabInfo)

  function toggleTabInfo(e) {

    const tabControlInfo = e.target.closest('.information__tab-controls__link')

    if (!tabControlInfo) return
    e.preventDefault()
    if (tabControlInfo.classList.contains('information__tab-controls__link--active')) return

    const tabContentIDInfo = tabControlInfo.getAttribute('href')
    const tabContentInfo = document.querySelector(tabContentIDInfo)
    const activeControlInfo = document.querySelector('.information__tab-controls__link--active')
    const activeContentInfo = document.querySelector('.information__tab-content--show')

    if (activeControlInfo) {
      activeControlInfo.classList.remove('information__tab-controls__link--active')
    }
    if (activeContentInfo) {
      activeContentInfo.classList.remove('information__tab-content--show')
    }

    tabControlInfo.classList.add('information__tab-controls__link--active')
    tabContentInfo.classList.add('information__tab-content--show')
  }
  // Таббар таблицы
  const tabControls = document.querySelector('.timetable__tab-controls')

  tabControls.addEventListener('click', toggleTabTable)

  function toggleTabTable(e) {

    const tabControl = e.target.closest('.timetable__tab-controls__link')

    if (!tabControl) return
    e.preventDefault()
    if (tabControl.classList.contains('timetable__tab-controls__link--active')) return

    const tabContentID = tabControl.getAttribute('href')
    const tabContent = document.querySelector(tabContentID)
    const activeControl = document.querySelector('.timetable__tab-controls__link--active')
    const activeContent = document.querySelector('.timetable__tab-content--show')

    if (activeControl) {
      activeControl.classList.remove('timetable__tab-controls__link--active')
    }
    if (activeContent) {
      activeContent.classList.remove('timetable__tab-content--show')
    }

    tabControl.classList.add('timetable__tab-controls__link--active')
    tabContent.classList.add('timetable__tab-content--show')
  }

  // Аккордеон
  const accordionLists = document.querySelectorAll('.accordion-list');

  accordionLists.forEach(el => {

    el.addEventListener('click', (e) => {

      const accordionList = e.currentTarget
      const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
      const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

      const accordionControl = e.target.closest('.accordion-list__control');
      if (!accordionControl) return
      e.preventDefault()
      const accordionItem = accordionControl.parentElement;
      const accordionContent = accordionControl.nextElementSibling;

      if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
        accordionOpenedItem.classList.remove('accordion-list__item--opened');
        accordionOpenedContent.style.maxHeight = null;
      }
      accordionItem.classList.toggle('accordion-list__item--opened');

      if (accordionItem.classList.contains('accordion-list__item--opened')) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      } else {
        accordionContent.style.maxHeight = null;
      }

    });
    });
  })()