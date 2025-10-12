(function () {

  document.addEventListener('click', burgerInit)

  function burgerInit(e) {

    const burgerIcon = e.target.closest('.burger-icon')
    const burgerNavLink = e.target.closest('.nav__link')

    if(!burgerIcon && !burgerNavLink)return
if(document.documentElement.clientWidth > 900) return

if (!document.body.classList.contains('body--opened-menu')){
  document.body.classList.add('body--opened-menu')
}else(document.body.classList.remove('body--opened-menu'))

  }
})()

const modalButton = document.querySelector('.company__img-button')
const modal = document.querySelector('.modal')


modalButton.addEventListener('click', openModal)
modal.addEventListener('click', closeModal)

function openModal(e) {

e.preventDefault()

document.body.classList.toggle('body--opened-modal')
}
function closeModal(e){

  e.preventDefault()

  const target = e.target
  
  if(target.closest('.modal__close-btn') || target.classList.contains('modal')){
    document.body.classList.remove('body--opened-modal')
  }

}
