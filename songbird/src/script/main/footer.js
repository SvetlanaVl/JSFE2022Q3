import imgGithub from '../../assets/github1.png';
import imgRs from '../../assets/rs_school_js.svg';

const footer = document.createElement("footer");
const wrapper = document.createElement("div");

function createElementHtml (nameElement, nameClass, elementContainer) {

  nameElement.classList.add(nameClass);

  elementContainer.append(nameElement);
}

createElementHtml (footer, "footer", document.body);

createElementHtml (wrapper, "wrapper", footer);

const linkGithub = document.createElement("a");
// link.textContent = ;
linkGithub.href = "https://github.com/SvetlanaVl";
linkGithub.target = '_blank';
createElementHtml (linkGithub, "link", wrapper);

const githubImg = document.createElement("img");
createElementHtml (githubImg, "img-github", linkGithub);
githubImg.src = imgGithub;
githubImg.alt = "my github";

const year = document.createElement("p");
year.textContent = '2022';
createElementHtml (year, "footer-text", wrapper);

const linkRs = document.createElement("a");
// link.textContent = ;
linkRs.href = "https://rs.school/js/";
linkRs.target = '_blank';
createElementHtml (linkRs, "link", wrapper);

const rsImg = document.createElement("img");
createElementHtml (rsImg, "img-rsschool", linkRs);
rsImg.src = imgRs;
rsImg.alt = "logo rs school";
