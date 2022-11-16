const main = document.createElement("main");
// const wrapper = document.createElement("div");

function createElementHtml (nameElement, nameClass, elementContainer) {

  nameElement.classList.add(nameClass);

  elementContainer.append(nameElement);
}

createElementHtml (main, "main", document.body);

// createElementHtml (wrapper, "wrapper", footer);