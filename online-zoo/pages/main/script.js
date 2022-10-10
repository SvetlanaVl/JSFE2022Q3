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

// Testimonials slider

const input = document.querySelector('input[type=range]');
const reviews = document.querySelector('.reviews');

input.addEventListener("input", e => {
  let valueTranslate
  if(window.matchMedia("(max-width: 1220px)").matches) {
    valueTranslate = input.value * (- 34.4);
  } else {
    valueTranslate = input.value * (- 25.8);
  }
  reviews.classList.add('reviews-active');
  reviews.style.transform = `translateX(${valueTranslate}%)`;
});

// Testimonials pop up

const reviewsCard = document.querySelectorAll('.review');
const popUpReview = document.querySelector('.pop-up-review');
const close = document.querySelector('.pop-up-review-img');
const popupReviewScreenDimming = document.querySelector('.pop-up-review-screen-dimming');
const containerPopup = document.querySelector('.container-popup-content');
const containerPopupScroll = document.querySelector('.container-popup-background');
const containerRewiewText = document.querySelector('.container-rewiew-text');

reviewsCard.forEach((element, index) => {
  element.addEventListener('click', () => {
    popUpReview.classList.add('pop-up-review-active');
    popupReviewScreenDimming.classList.add('pop-up-review-screen-dimming-active');
    document.body.style.overflow = 'hidden';
    containerPopup.innerHTML = element.innerHTML;
    containerPopupScroll.style.overflow = 'auto';
    if(window.matchMedia("(max-width: 786px)").matches) {
      containerPopup.style.paddingLeft = '3%';
    }
  });
});

const closeReviews = () => {
  popUpReview.classList.remove('pop-up-review-active');
  popupReviewScreenDimming.classList.remove('pop-up-review-screen-dimming-active');
  document.body.style.overflow = '';
  containerPopup.style.paddingLeft = '';
  containerPopupScroll.style.overflow = '';
};

close.addEventListener('click', closeReviews);

popupReviewScreenDimming.addEventListener('click', closeReviews);


// slider Pets

const containerCards = document.querySelector('.container-cards');
const containersCard = document.querySelectorAll('.container-card');

const wrappersCards = document.querySelectorAll('.wrapper-cards');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

let valueTranslate = 0;

arrowLeft.addEventListener("click", e => {
  if (valueTranslate == 0) {
    valueTranslate = -66.4
    containerCards.style.transform = `translateX(${valueTranslate}%)`;
    arrowLeft.style.pointerEvents = 'none';
    arrowLeft.style.backgroundColor = 'grey';
    containerCards.addEventListener("transitionend", function() {
      arrowLeft.style.pointerEvents = '';
      arrowLeft.style.backgroundColor = '#F9804B';
    });
  } else {
    valueTranslate += + 33.2
    containerCards.style.transform = `translateX(${valueTranslate}%)`;
    arrowLeft.style.pointerEvents = 'none';
    arrowLeft.style.backgroundColor = 'grey';
    containerCards.addEventListener("transitionend", function() {
      arrowLeft.style.pointerEvents = '';
      arrowLeft.style.backgroundColor = '#F9804B';
    });
  }
  
});


arrowRight.addEventListener("click", e => {
  if (valueTranslate > -65) {
    valueTranslate += - 33.2
    containerCards.style.transform = `translateX(${valueTranslate}%)`;
    arrowRight.style.pointerEvents = 'none';
    arrowRight.style.backgroundColor = 'grey';
    containerCards.addEventListener("transitionend", function() {
      arrowRight.style.pointerEvents = '';
      arrowRight.style.backgroundColor = '#F9804B';
    });
    
  } else {
    valueTranslate = 0
    containerCards.style.transform = `translateX(${valueTranslate}%)`;
    arrowRight.style.pointerEvents = 'none';
    arrowRight.style.backgroundColor = 'grey';
    containerCards.addEventListener("transitionend", function() {
      arrowRight.style.pointerEvents = '';
      arrowRight.style.backgroundColor = '#F9804B';
    });
  }
  
});



// let arrCards = [];
// containersCard.forEach(function(element){
//   arrCards.push(element)
// })
// arrCards = arrCards.slice(0, 6);
// // console.log(shuffle(Array.from(arrCards)))
  
// let sortArrCards = arrCards.sort(() => Math.round(Math.random() * 100) - 50);

// let sdf = sortArrCards.reduce(function(target, key, index) {
//   target[index] = key;
//   return target;
// })

// console.log(sdf)
