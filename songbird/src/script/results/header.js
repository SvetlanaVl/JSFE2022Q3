import mainImage from '../../assets/logo.svg';

const header = document.createElement("header");
const wrapper = document.createElement("div");
const logoContainer = document.createElement("div");
const logoImg = document.createElement("img");
// const navigation = document.createElement("nav");
// const list = document.createElement("ul");


function createElementHtml (nameElement, nameClass, elementContainer) {

  nameElement.classList.add(nameClass);

  elementContainer.append(nameElement);
}

createElementHtml (header, "header", document.body);

createElementHtml (wrapper, "wrapper", header);

createElementHtml (logoContainer, "logo", wrapper);

createElementHtml (logoImg, "logo-img", logoContainer);

logoImg.src = mainImage;
logoImg.alt = "Logo, name of the quiz - Song Bird";

// createElementHtml (navigation, "nav", wrapper);

// createElementHtml (list, "list", navigation);

// const menu = {
//   "About" : "index.html",
//   "Start" : "startQuiz.html",
//   "Results" : "results.html",
// };

// function createListHtml (elementContainer, nameClass) {
//   for(let key in menu) {

//     const li = document.createElement("li");
  
//     createElementHtml (li, "li", elementContainer);
  
//     const link = document.createElement("a");
    
//     link.textContent = key;
  
//     createElementHtml (link, nameClass, li);
  
//     if(link.textContent = key) {
//       link.href = menu[key];
//     }
//   }
// }

// createListHtml(list, "link");

// const hamburger = document.createElement("div");
// createElementHtml (hamburger, "hamburger", wrapper);

// for(let i = 0; i < 3; i++) {
//   const hamburgerLine = document.createElement("span");
//   createElementHtml (hamburgerLine, "hamburger-line", hamburger);
// }


// const hamburgerScreenDimming = document.createElement("div");
// createElementHtml (hamburgerScreenDimming, "hamburger-screen-dimming", wrapper);

// const burgerMenu = document.createElement("div");
// createElementHtml (burgerMenu, "burger-menu", wrapper);

// const burgerMenuHeader = document.createElement("div");
// createElementHtml (burgerMenuHeader, "burger-menu-header", burgerMenu);

// const logoImage = document.createElement("img");
// logoImage.src = mainImage;
// logoImage.alt = "Logo, name of the quiz - Song Bird";
// createElementHtml (logoImage, "logo-img", burgerMenuHeader);

// const hamburgerClose = document.createElement("div");
// createElementHtml (hamburgerClose, "hamburger-close", burgerMenuHeader);

// for(let i = 0; i < 2; i++) {
//   const lineBurger = document.createElement("span");
//   createElementHtml (lineBurger, "line-burger", hamburgerClose);
// }

// const burgerNav = document.createElement("nav");
// createElementHtml (burgerNav, "burger-nav", burgerMenu);

// const burgerNavList = document.createElement("ul");
// createElementHtml (burgerNavList, "burger-nav-list", burgerNav);

// createListHtml(burgerNavList, "burger-nav-link");

// hamburger.addEventListener('click', () => {
//   burgerMenu.classList.add('burger-menu-active');
//   hamburgerScreenDimming.classList.add('hamburger-screen-dimming-active');
//   document.body.style.overflow = 'hidden';
// });

// const closeMenu = () => {
//   burgerMenu.classList.remove('burger-menu-active');
//   hamburgerScreenDimming.classList.remove('hamburger-screen-dimming-active');
//   document.body.style.overflow = '';
// };

// hamburgerClose.addEventListener('click', closeMenu);
  
// hamburgerScreenDimming.addEventListener('click', closeMenu);

// const burgerLinks = document.querySelectorAll('.burger-nav-link');

// for (let i = 0; i < burgerLinks.length; i += 1) {
//   burgerLinks[i].addEventListener('click', closeMenu);
// }