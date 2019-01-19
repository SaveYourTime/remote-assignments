const navBar = document.querySelector('.navigation-bar');
navBar.addEventListener('click', toggleNavBar);

function toggleNavBar(e) {
  const mainNav = document.querySelector('.main-nav');
  mainNav.classList.toggle('show');
}