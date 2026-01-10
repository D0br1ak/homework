export default function initBurger() {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.header__menu');
  const burgerIconMenu = document.querySelector('.burger__icon-menu');
  const burgerIconCross = document.querySelector('.burger__icon-cross');

  if (!burger || !menu || !burgerIconMenu || !burgerIconCross) return;

  burger.addEventListener('click', () => {
    menu.classList.toggle('header__menu--open');

    burgerIconMenu.style.display =
      burger.classList.contains('burger--open') ? 'none' : 'block';
    burgerIconCross.style.display =
      burger.classList.contains('burger--open') ? 'block' : 'none';

    burger.classList.toggle('burger--open');
  });
}