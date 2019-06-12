function toggleNavBar() {
  document.querySelector('.main-nav').classList.toggle('show');
  document.querySelector('body').classList.toggle('dimmed');
}
document.querySelector('.navigation-bar').addEventListener('click', toggleNavBar);
document.querySelector('.close-button').addEventListener('click', toggleNavBar);

function changeWelcomeText() {
  document.querySelector('.tagline').textContent = '親善、便捷、永續發展的首都商務機場';
}
document.querySelector('.banner').addEventListener('click', changeWelcomeText);

function toggleLoadMore() {
  document.querySelector('.row-2').classList.toggle('row-hidden');
}
document.querySelector('.show-more-button').addEventListener('click', toggleLoadMore);