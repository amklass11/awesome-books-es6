const booksBtn = document.getElementById('booksBtn');
const addBookbtn = document.getElementById('addbookBtn');
const contactBtn = document.getElementById('contactBtn');
const containerBooks = document.getElementById('container');
const books = document.getElementById('books');
const addNew = document.getElementById('addbook');
const contact = document.getElementById('contact');
const titulo = document.getElementById('titulo');
const autor = document.getElementById('autor');
const addBtn = document.getElementById('btn');
let dataBooks = JSON.parse(localStorage.getItem('book')) || [];

// This code below was recovered from https://programacion.net/

// This code above was recovered from https://programacion.net/

window.onload = startTime();





printList();

addBtn.addEventListener('click', () => {
  const libro = new Libro(titulo.value, autor.value);
  libro.addBook(libro);
});

booksBtn.addEventListener('click', () => {
  containerBooks.style.display = 'flex';
  addNew.style.display = 'none';
  contact.style.display = 'none';
  printList();
});

addBookbtn.addEventListener('click', () => {
  containerBooks.style.display = 'none';
  addNew.style.display = 'flex';
  contact.style.display = 'none';
});

contactBtn.addEventListener('click', () => {
  containerBooks.style.display = 'none';
  addNew.style.display = 'none';
  contact.style.display = 'flex';
});