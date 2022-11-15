// // const header = document.createElement("header");
// const header = document.querySelector(".header");
// const wrapper = document.createElement("div");
// const logoContainer = document.createElement("div");
// const logoImg = document.createElement("img");
// const navigation = document.createElement("nav");
// const list = document.createElement("ul");


// function createElementHtml (nameElement, nameClass, elementContainer, index) {
//   // const nameElement = document.createElement(`"${element}"`);

//   nameElement.classList.add(`"${nameClass}"`);

//   elementContainer.insertBefore(nameElement, document.body.childNodes[index]);
// }

// // createElementHtml (header, header, document.body, 0);

// createElementHtml (wrapper, wrapper, header, 0);

// createElementHtml (logoContainer, logo, wrapper, 0);

// createElementHtml (logoImg, logo-img, logoContainer, 0);

// createElementHtml (navigation, nav, logoContainer, 1);

// createElementHtml (list, list, navigation, 0);

import mainImage from '../assets/logo.svg';

const header = document.createElement("header");
header.classList.add("header");
document.body.insertBefore(header, document.body.childNodes[0]);


const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
header.insertBefore(wrapper, header.childNodes[0]);


const logoContainer = document.createElement("div");
logoContainer.classList.add("logo");
wrapper.insertBefore(logoContainer, wrapper.childNodes[0]);


const logoImg = document.createElement("img");
logoImg.src = mainImage;
logoImg.alt = "Logo, name of the quiz - Song Bird";
logoImg.classList.add("logo-img");
logoContainer.insertBefore(logoImg, logoContainer.childNodes[0]);


const navigation = document.createElement("nav");
navigation.classList.add("nav");
wrapper.insertBefore(navigation, wrapper.childNodes[1]);


const list = document.createElement("ul");
list.classList.add("list");
navigation.insertBefore(list, navigation.childNodes[0]);

const menu = {
  "About" : "#",
  "Start" : "#Start",
};

for(let key in menu) {

  const li = document.createElement("li");

  list.append(li);

  const link = document.createElement("a");
  
  link.textContent = key;
  
  link.classList.add("link");
  
  li.append(link);

  if(link.textContent = key) {
    link.href = menu[key];
  }
}


const hamburger = document.createElement("div");
hamburger.classList.add("hamburger");
wrapper.insertBefore(hamburger, wrapper.childNodes[2]);

for(let i = 0; i < 3; i++) {
  const hamburgerLine = document.createElement("span");

  hamburgerLine.classList.add("hamburger-line");

  hamburger.append(hamburgerLine);
}

const hamburgerScreenDimming = document.createElement("div");
hamburgerScreenDimming.classList.add("hamburger-screen-dimming");
wrapper.insertBefore(hamburgerScreenDimming, wrapper.childNodes[3]);


const burgerMenu = document.createElement("div");
burgerMenu.classList.add("burger-menu");
wrapper.insertBefore(burgerMenu, wrapper.childNodes[4]);

const burgerMenuHeader = document.createElement("div");
burgerMenuHeader.classList.add("burger-menu-header");
burgerMenu.insertBefore(burgerMenuHeader, burgerMenu.childNodes[0]);

const logoImage = document.createElement("img");
logoImage.src = mainImage;
logoImage.alt = "Logo, name of the quiz - Song Bird";
logoImage.classList.add("logo-img");
burgerMenuHeader.insertBefore(logoImage, burgerMenuHeader.childNodes[0]);

const hamburgerClose = document.createElement("div");
hamburgerClose.classList.add("hamburger-close");
burgerMenuHeader.insertBefore(hamburgerClose, burgerMenuHeader.childNodes[1]);

for(let i = 0; i < 2; i++) {
  const lineBurger = document.createElement("span");

  lineBurger.classList.add("line-burger");

  hamburgerClose.append(lineBurger);
}

const burgerNav = document.createElement("nav");
burgerNav.classList.add("burger-nav");
burgerMenu.insertBefore(burgerNav, burgerMenu.childNodes[1]);


const burgerNavList = document.createElement("ul");
burgerNavList.classList.add("burger-nav-list");
burgerNav.insertBefore(burgerNavList, burgerNav.childNodes[0]);

for(let key in menu) {

  const li = document.createElement("li");

  burgerNavList.append(li);

  const link = document.createElement("a");
  
  link.textContent = key;
  
  link.classList.add("burger-nav-link");
  
  li.append(link);

  if(link.textContent = key) {
    link.href = menu[key];
  }
}

hamburger.addEventListener('click', () => {
  burgerMenu.classList.add('burger-menu-active');
  hamburgerScreenDimming.classList.add('hamburger-screen-dimming-active');
  document.body.style.overflow = 'hidden';
});
const closeMenu = () => {
  burgerMenu.classList.remove('burger-menu-active');
  hamburgerScreenDimming.classList.remove('hamburger-screen-dimming-active');
  document.body.style.overflow = '';
};

hamburgerClose.addEventListener('click', closeMenu);
  
hamburgerScreenDimming.addEventListener('click', closeMenu);

const burgerLinks = document.querySelectorAll('.burger-nav-link');

for (let i = 0; i < burgerLinks.length; i += 1) {
  burgerLinks[i].addEventListener('click', closeMenu);
}