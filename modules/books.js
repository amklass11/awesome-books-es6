const dataBooks = JSON.parse(localStorage.getItem('book')) || [];
class Libro {
  constructor(title, author) {
    this.dataBooks = [title, author];
    this.title = title;
    this.author = author;
  }

    deleteBook = (index) => {
      dataBooks.splice(index, 1);
      localStorage.setItem('book', JSON.stringify(dataBooks));
    }

    addBook = (libro) => {
      dataBooks.push(libro);
      localStorage.setItem('book', JSON.stringify(dataBooks));
    }
}

export default { Libro };
