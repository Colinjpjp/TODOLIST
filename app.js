const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const inputTXT = document.querySelector(".inputTXT");
const spanError = document.querySelector(".spanError");
let list = [];

button1.onclick = () => {
  validation(inputTXT.value.trim());
};

function validation(value) {
  if (value === "") {
    spanError.innerHTML = "No hay texto";
    return;
  }
  setTask(inputTXT.value);
  inputTXT.value = "";
}

function setTask(value) {
  list.push(value);
  localStorage.setItem("List", JSON.stringify(list));
  rendering();
}

// IIFE - Immediately Invoked Function Expression

(function () {
  let key = localStorage.getItem("List");
  let parse = JSON.parse(key);
  list = parse;
})();

function rendering() {
  const ListContainer = document.querySelector(".contentList");
  function addElements(list) {
    return function (elements) {
      ListContainer.innerHTML = "";
      elements.forEach((element) => {
        list.innerHTML += `<li class="name">${element}</li>`;
      });
    };
  }
  const addElementsToMyContainer = addElements(ListContainer);
  addElementsToMyContainer(list);
}
rendering();
