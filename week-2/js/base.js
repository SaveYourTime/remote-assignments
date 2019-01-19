const mainNav = document.querySelector('.main-nav');
const navBar = document.querySelector('.navigation-bar');
navBar.addEventListener('click', toggleNavBar);

function toggleNavBar(e) {
  mainNav.classList.toggle('show');
}

const closeButton = document.querySelector('.close-button');
closeButton.addEventListener('click', closeNavBar);

function closeNavBar(e) {
  mainNav.classList.remove('show');
}

function changeWelcomeText(e) {
  const welcomeText = document.querySelector('.tagline');
  welcomeText.textContent = '親善、便捷、永續發展的首都商務機場';
}
const bannerDiv = document.querySelector('.banner');
bannerDiv.addEventListener('click', changeWelcomeText);

const showMoreButton = document.querySelector('.show-more-button');
showMoreButton.addEventListener('click', () => {
  const row2 = document.querySelector('.row-2');
  row2.classList.remove('row-hidden');
});