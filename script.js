let notas = [];
let notaHTML = '';

let notatitle = document.getElementById('title');
let notacontent = document.getElementById('content');
let submitButton = document.getElementById('submit');
let container = document.getElementById('container');
showNotes();

document.addEventListener('DOMContentLoaded', function () {
  notas = JSON.parse(localStorage.getItem('nota')) || [];
});

submitButton.addEventListener('click', function () {
  let nota = {
    notatitle: notatitle.value,
    notacontent: notacontent.value,
  };

  // Hacer una copia del array antes de agregar la nueva nota
  let updatedNotas = [...notas];
  updatedNotas.push(nota);

  localStorage.setItem('nota', JSON.stringify(updatedNotas));

  notas=updatedNotas;

  showNotes();
});


function showNotes() {
  let _notas = JSON.parse(localStorage.getItem('nota')) || [];
  notaHTML = '';

  _notas.forEach((nota, index) => {
    notaHTML += `
      <div class="notestyle">
        <h2>${nota.notatitle}</h2>
        <p>${nota.notacontent}</p>
        <button onclick="editNote(${index})">Editar</button>
        <button onclick="deleteNote(${index})">Borrar</button>
      </div>
    `;
  });

  container.innerHTML = notaHTML;
}

function editNote(index) {
  let _notas = JSON.parse(localStorage.getItem('nota')) || [];

  let updatedTitle = prompt('Ingrese el nuevo nombre:', _notas[index].notatitle);
  let updatedContent = prompt('Ingrese el nuevo precio:', _notas[index].notacontent);

  if (updatedTitle !== null && updatedContent !== null) {
    _notas[index].notatitle = updatedTitle;
    _notas[index].notacontent = updatedContent;

    localStorage.setItem('nota', JSON.stringify(_notas));
    showNotes();
  }
}

function deleteNote(index) {
  let _notas = JSON.parse(localStorage.getItem('nota')) || [];

  // Hacer una copia del array antes de eliminar la nota
  let updatedNotas = [..._notas];
  updatedNotas.splice(index, 1);

  notas=updatedNotas;


  localStorage.setItem('nota', JSON.stringify(updatedNotas));

  showNotes();
}