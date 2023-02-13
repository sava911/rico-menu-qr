$(function () {
  document.querySelector('.click').onclick = t1
  function t1() {
    let modal = document.querySelector('.modal')
    modal.classList.toggle('active');

    let icon = document.querySelector('.header__btn')
    icon.classList.toggle('start');
    icon.classList.toggle('close');
  }
})