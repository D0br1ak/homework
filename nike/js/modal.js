export default function initModal() {
  const modal = document.querySelector('.modal');
  const modalWindow = document.querySelector('.modal__window');
  const modalClose = document.querySelector('.modal__close');
  const modalBuy = document.querySelector('.modal-buy');
  const openModalButtons = document.querySelectorAll('.product__buy-button');

  if (!modal || !modalWindow || !modalClose || !modalBuy || !openModalButtons) {
    console.error('Не найдены необходимые элементы для работы модального окна.');
    return;
  }

  function openModal() {
    modal.classList.add('modal--open');
    modalWindow.classList.add('modal__window--open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('modal--open');
    modalWindow.classList.remove('modal__window--open');
    document.body.style.overflow = '';
  }

  openModalButtons.forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      openModal();
    });
  });

  modalClose.addEventListener('click', closeModal);

  modal.addEventListener('click', function(event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.classList.contains('modal--open')) {
      closeModal();
    }
  });
}