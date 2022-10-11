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
const input = document.querySelector('input[type="number"]')



console.log(dollars)
circles.forEach((element) => {
  console.log(circles[5])
  if(window.matchMedia("(max-width: 640px)").matches) {
    circles[2].classList.add('circle-active');
  } else if(window.matchMedia("(max-width: 1000px)").matches) {
    circles[4].classList.add('circle-active');
    circles[5].classList.remove('circle-active');
  } else {
    circles[5].classList.add('circle-active');
    circles[4].classList.remove('circle-active');
  }
});

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
    input.placeholder = element.innerHTML
  });
});

hoverCircles.forEach((element, index) => {
  dollars.forEach((el, ind) => {
    element.addEventListener('click', () => {
      el.style.color = '#333b41';
      if(window.matchMedia("(max-width: 640px)").matches) {
        input.placeholder = dollars[index + 3].innerHTML
        dollars[index + 3].style.color = '#FE9013';

      } else if(window.matchMedia("(max-width: 1000px)").matches) {
        input.placeholder = dollars[index + 1].innerHTML
        
        dollars[index + 1].style.color = '#FE9013';
      } else {
        input.placeholder = dollars[index].innerHTML
        dollars[index].style.color = '#FE9013';

      }
    });
    
  });
  
});
