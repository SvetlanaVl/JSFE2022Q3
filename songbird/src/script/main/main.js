const main = document.createElement("main");
const wrapperMain = document.createElement("div");
const buttonStartQuiz = document.createElement("button");

function createElementHtml (nameElement, nameClass, elementContainer) {

  nameElement.classList.add(nameClass);

  elementContainer.append(nameElement);
}

createElementHtml (main, "main", document.body);

createElementHtml (wrapperMain, "wrapper", main);

createElementHtml (buttonStartQuiz, "button-start-quiz", wrapperMain);

buttonStartQuiz.textContent = 'Начать викторину!';

function startQuiz() {
  location.href='startQuiz.html';
}

buttonStartQuiz.addEventListener("click", startQuiz);