// eslint-disable-next-line max-classes-per-file
import BookCollection from './modules/bookCollection.js';



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
  case '/index.html':
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
