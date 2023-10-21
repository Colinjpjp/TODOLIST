const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const inputTXT = document.querySelector(".inputTXT");
const spanError = document.querySelector(".spanError");
// las variables globales deben estar arriba!
// no te sirve declarar esto cada ves que ejecutes la funcion
const listElement = document.querySelector(".contentList");

let list = [];
const CACHE_KEY = "list";

button1.onclick = () => {
  validation(inputTXT.value.trim());
};

function validation(value) {
  if (value === "") {
    spanError.innerHTML = "No hay texto";
    return;
  }

  // si ya usaste el trim para pasar el valor a esta funcion
  // pq vuelves a usar el valor sin trim?
  setTask(value);
  spanError.innerHTML = "";
  inputTXT.value = "";
}

function setTask(value) {
  list.push(value);
  localStorage.setItem(CACHE_KEY, JSON.stringify(list));
  rendering();
}

function main() {
  let key = localStorage.getItem(CACHE_KEY);
  let parse = JSON.parse(key);
  // parse puede estar indefine o null si es la primera ves que se guarda el valor 
  // en el cache o si se ha borrado el cache
  // por eso si parse es invalido se pasa un arreglo vacio
  list = parse ?? [];
  // lo mejor es renderisar solo despues de haber obtenido los valores del cache
  rendering();
}

main();

function clear() {
  list = [];
  // No es buena practica hacer esto,puede inducir errores siempre usa el metodo set, get o remove
  // localStorage.List = JSON.stringify(list);
  localStorage.removeItem(CACHE_KEY);
  rendering();
  // lo que debes eliminar aqui no es el elemento html sino su contenido
  spanError.innerText = "";
}

// no necesitas una funcion de flecha que invoque la funcion clear,
// solo debes pasar la declaracion de la funcion al evento
button2.onclick = clear;

function rendering() {
  // para que hiciste esto aqui?
  // currying innecesario, si ya vas a a usar fijo listElement no sirve de nada abstraer la funcion interna
  listElement.innerHTML = "";
  list.forEach((element) => {
    listElement.innerHTML += `<li class="item">${element}</li>`;
  });
}
