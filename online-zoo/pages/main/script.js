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



// Testimonials pop up

const reviews = document.querySelectorAll('.review');
const popUpReview = document.querySelector('.pop-up-review');
const close = document.querySelector('.pop-up-review-img');
const popupReviewScreenDimming = document.querySelector('.pop-up-review-screen-dimming');
const containerPopup = document.querySelector('.container-popup-background');
const containerRewiewText = document.querySelector('.container-rewiew-text');



reviews.forEach((element, index) => {
  element.addEventListener('click', () => {
    console.log(element)
    popUpReview.classList.add('pop-up-review-active');
    popupReviewScreenDimming.classList.add('pop-up-review-screen-dimming-active');
    document.body.style.overflow = 'hidden';
    containerPopup.innerHTML = element.innerHTML;
    if(window.matchMedia("(max-width: 786px)").matches) {
      containerPopup.style.height = '196%';
      containerPopup.style.width = '90%';
      containerPopup.style.paddingLeft = '3%';
      popUpReview.style.left = '20%';
    } else {
      containerPopup.style.height = '93%';
      containerPopup.style.width = '100%';
    }
  });
});

const closeReviews = () => {
  popUpReview.classList.remove('pop-up-review-active');
  popupReviewScreenDimming.classList.remove('pop-up-review-screen-dimming-active');
  document.body.style.overflow = '';
};

close.addEventListener('click', closeReviews);

popupReviewScreenDimming.addEventListener('click', closeReviews);