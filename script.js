const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('open', open);
});
nav.addEventListener('click', event => {
  if (event.target.closest('a')) {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }
});
document.querySelector('#year').textContent = new Date().getFullYear();
