const main = document.createElement("main");
const wrapper = document.createElement("div");
const containerResult = document.createElement("div");
const textCongratulate = document.createElement("p");
const textScore = document.createElement("p");
const buttonStart = document.createElement("button");
const separator = document.createElement("div");

function createElementHtml (nameElement, nameClass, elementContainer) {

  nameElement.classList.add(nameClass);

  elementContainer.append(nameElement);
}

createElementHtml (main, "main-results", document.body);

createElementHtml (wrapper, "wrapper", main);

createElementHtml (containerResult, "container-result", wrapper);

createElementHtml (textCongratulate, "text-congratulate", containerResult);

textCongratulate.textContent = 'Поздравляем!';

createElementHtml (textScore, "text-score", containerResult);
let scoreSum = 0;
textScore.textContent = `Вы набрали ${scoreSum} из 30 возможных баллов!`;

createElementHtml (separator, "separator", containerResult);

createElementHtml (buttonStart, "button-start", containerResult);

buttonStart.textContent = 'Попробовать ещё раз!';

function startNewQuiz() {
  location.href='startQuiz.html';
}

buttonStart.addEventListener("click", startNewQuiz);
