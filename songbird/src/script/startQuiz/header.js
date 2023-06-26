import mainImage from '../../assets/logo.svg';

const header = document.createElement("header");
const wrapper = document.createElement("div");
const logoContainer = document.createElement("div");
const logoImg = document.createElement("img");
const containerScore = document.createElement("div");
const nameScore = document.createElement("div");
const score = document.createElement("div");


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

createElementHtml (containerScore, "container-moves", wrapper);

createElementHtml (nameScore, "name-moves", containerScore);

nameScore.textContent = 'Score: ';

createElementHtml (score, "score", containerScore);

score.textContent = '0';
