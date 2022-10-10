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
  let sum
  if(window.matchMedia("(max-width: 1220px)").matches) {
    sum = input.value * (- 34.9);
  } else {
    sum = input.value * (- 25.8);
  }
  reviews.classList.add('reviews-active');
  reviews.style.transform = `translateX(${sum}%)`;

  if(window.matchMedia("(max-width: 1220px)").matches) {
    let sum = input.value * (- 25.8);
  }
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