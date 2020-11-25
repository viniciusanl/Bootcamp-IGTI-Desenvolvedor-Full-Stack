window.addEventListener('load', startPage);
let inputCont = null;
let valueForm = null;

function startPage() {
  inputCont = document.querySelector('#lengthName');
  inputCont.textContent = 0;

  let inputName = document.querySelector('#inputName');
  inputName.addEventListener('keyup', CountNameLength);

  valueForm = document.querySelector('form');
  valueForm.addEventListener('submit', PreventSubmit);
}

function CountNameLength(event) {
  let count = event.currentTarget.value.length;
  inputCont.textContent = count;
}

function PreventSubmit(event) {
  event.preventDefault();
  inputCont.textContent !== '0' ? alert('Dados salvos com sucesso!') : alert('Nome não foi preenchido!');
}