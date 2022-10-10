/*menu hamburger*/

const burgerItem = document.querySelector('.hamburger');
const menu = document.querySelector('.burger-menu');
const menuCloseItem = document.querySelector('.hamburger-close');
const screenDimming = document.querySelector('.hamburger-screen-dimming');
const burgerLinks = document.querySelectorAll('.burger-nav-link');

burgerItem.addEventListener('click', () => {
  menu.classList.add('burger-menu-active');
  screenDimming.classList.add('hamburger-screen-dimming-active');
  document.body.style.overflow = 'hidden';
});
const closeMenu = () => {
  menu.classList.remove('burger-menu-active');
  screenDimming.classList.remove('hamburger-screen-dimming-active');
  document.body.style.overflow = '';
};

menuCloseItem.addEventListener('click', closeMenu);
  
screenDimming.addEventListener('click', closeMenu);

for (let i = 0; i < burgerLinks.length; i += 1) {
  burgerLinks[i].addEventListener('click', closeMenu);
}

// Amount

const circles = document.querySelectorAll('.circle');
const hoverCircles = document.querySelectorAll('.hover-circle');
const bigCircle = document.querySelector('.big-circle')
const mediumCircle = document.querySelector('.medium-circle')
const dollars = document.querySelectorAll('.dollar')

console.log(dollars)


hoverCircles.forEach((element, index) => {
  element.addEventListener('click', () => {
    circles.forEach((elem) => {
      elem.classList.remove('circle-active');
      element.children[0].classList.add('circle-active');
    });
    bigCircle.style.setProperty('--pos', index);
    mediumCircle.style.setProperty('--pos', index);
  });
});

dollars.forEach((element, index) => {
  element.addEventListener('click', () => {
    console.log(element)
    console.log(element.innerHTML)
    console.log(index)
  });
});

