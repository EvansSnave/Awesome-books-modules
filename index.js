// eslint-disable-next-line max-classes-per-file
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class BookCollection {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
  }

  displayBooks() {
    const bookCollection = document.getElementById('bookCollection');
    if (bookCollection) {
      bookCollection.innerHTML = '';

      this.books.forEach((book, index) => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book-entry');

        const titlePara = document.createElement('p');
        titlePara.textContent = `${book.title} by ${book.author}`;
        bookDiv.appendChild(titlePara);

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-button');
        removeButton.addEventListener('click', () => {
          this.removeBook(index);
        });

        bookDiv.appendChild(removeButton);

        bookCollection.appendChild(bookDiv);
      });
    }
  }

  addBook(title, author) {
    this.books.push(new Book(title, author));
    localStorage.setItem('books', JSON.stringify(this.books));
    this.displayBooks();
  }

  removeBook(index) {
    this.books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.displayBooks();
  }
}

const myBookCollection = new BookCollection();

// Get current pathname
const pathName = window.location.pathname;

switch (pathName) {
  case '/addbook.html':
    // eslint-disable-next-line no-case-declarations
    const addButton = document.getElementById('addButton');
    if (addButton) {
      addButton.addEventListener('click', () => {
        const newBookTitle = document.getElementById('newBookTitle');
        const newBookAuthor = document.getElementById('newBookAuthor');
        myBookCollection.addBook(newBookTitle.value, newBookAuthor.value);
        newBookTitle.value = '';
        newBookAuthor.value = '';
      });
    }
    break;
  case '/main.html':
    myBookCollection.displayBooks();
    break;
  default:
    // do nothing
}

const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});
