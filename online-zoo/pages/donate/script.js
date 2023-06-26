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



circles.forEach((element) => {
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
    input.value = element.innerHTML
  });
});

hoverCircles.forEach((element, index) => {
  dollars.forEach((el, ind) => {
    element.addEventListener('click', () => {
      el.style.color = '#333b41';
      if(window.matchMedia("(max-width: 640px)").matches) {
        input.value = dollars[index + 3].innerHTML
        dollars[index + 3].style.color = '#FE9013';
      } else if(window.matchMedia("(max-width: 1000px)").matches) {
        input.value = dollars[index + 1].innerHTML
        dollars[index + 1].style.color = '#FE9013';
      } else {
        input.value = dollars[index].innerHTML
        dollars[index].style.color = '#FE9013';
      }
    });

  });
});

document.addEventListener('DOMContentLoaded', function() {
  input.addEventListener('input', function() {
    dollars.forEach((element, index) => {
      element.style.color = '#333b41';
      circles[index].classList.remove('circle-active');

      if (input.value == dollars[index].innerHTML) {
        dollars[index].style.color = '#FE9013';
        if(window.matchMedia("(max-width: 640px)").matches) {
          bigCircle.style.setProperty('--pos', index - 3);
          mediumCircle.style.setProperty('--pos', index - 3);
        } else if(window.matchMedia("(max-width: 1000px)").matches) {
          bigCircle.style.setProperty('--pos', index - 1);
          mediumCircle.style.setProperty('--pos', index - 1);
        } else {
          bigCircle.style.setProperty('--pos', index);
          mediumCircle.style.setProperty('--pos', index);
        }

        circles.forEach((elem, ind) => {
          elem.classList.remove('circle-active');
          if(window.matchMedia("(max-width: 640px)").matches) {
            circles[index - 3].classList.add('circle-active');
          } else if(window.matchMedia("(max-width: 1000px)").matches) {
            circles[index - 1].classList.add('circle-active');
          } else {
            circles[index].classList.add('circle-active');
          }
        });
      }
    maxInput()
    });
  })
  
});
  

function maxInput() {   
  if (Number(input.value) > input.max) {
    alert('Вы ввели число более 4-х символов, попробуйте меньше')
    input.value = 100
  }

}