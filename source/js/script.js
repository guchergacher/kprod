// Меню
const nav = document.querySelector('.nav');
const buttonNav = nav.querySelector('.nav__toggle');

nav.classList.toggle('nav--js');

buttonNav.addEventListener('click', (evt) => {
  evt.preventDefault();

  nav.classList.toggle('nav--open');
  buttonNav.setAttribute('aria-label', 'Закрыть меню');

  if (!nav.classList.contains('nav--open')) {
    buttonNav.setAttribute('aria-label', 'Открыть меню');
  }
});
