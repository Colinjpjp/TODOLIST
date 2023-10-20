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
  spanError.innerHTML = "";
  inputTXT.value = "";
}

function setTask(value) {
  list.push(value);
  localStorage.setItem("List", JSON.stringify(list));
  rendering();
}

function main() {
  let key = localStorage.getItem("List");
  let parse = JSON.parse(key);
  list = parse;
}
main();

function clear() {
  list = [];
  localStorage.List = JSON.stringify(list);
  rendering();
  spanError = "";
}
button2.onclick = () => {
  clear();
};

function rendering() {
  const List = document.querySelector(".contentList");
  function addElements(list) {
    return function (elements) {
      List.innerHTML = "";
      elements.forEach((element) => {
        list.innerHTML += `<li class="item">${element}</li>`;
      });
    };
  }

  const addElementsToMyList = addElements(List);
  addElementsToMyList(list);
}
rendering();
