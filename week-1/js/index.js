const navBar = document.querySelector('.navigation-bar');

function toggleNavBar() {
  const mainNav = document.querySelector('.main-nav');
  mainNav.classList.toggle('show');
}

navBar.addEventListener('click', toggleNavBar);