let bookCount = 0;
function Book(title, author, pages = 0, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.position = bookCount++;
  this.info = () => {
    let readMeassage = "";
    if (this.read) {
      readMeassage = "has been read";
    } else {
      readMeassage = "not read yet";
    }
    let response = `${this.title} by ${this.author}, ${this.pages} pages, ${readMeassage}`;
    return response;
  };
}

let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
let theHobbit2 = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);
let theHobbit3 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
let theHobbit4 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
let theHobbit5 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
let theHobbit6 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);

const myLibrary = [
  theHobbit,
  theHobbit2,
  theHobbit3,
  theHobbit4,
  theHobbit5,
  theHobbit6,
];
let bookForm = document.querySelector("#book-form");
let bookGrid = document.querySelector("#book-grid");

function addBookToLibrary() {
  let inputTitle = bookForm.querySelectorAll("input")[0];
  let inputAuthor = bookForm.querySelectorAll("input")[1];
  let book = new Book(inputTitle.value, inputAuthor.value, 0, false);
  inputTitle.value = "";
  inputAuthor.value = "";
  myLibrary.pop(book);
  createBookInLibrary(book);
}

function createBookInLibrary(book = {}) {
  let newEntry = document.createElement("div");
  let title = document.createElement("div");
  let author = document.createElement("div");
  let pages = document.createElement("div");
  let readContainer = document.createElement("div");
  let read = document.createElement("input");
  let deleteButton = document.createElement("button");
  newEntry.setAttribute("class", "book");
  title.setAttribute("class", "title");
  author.setAttribute("class", "author");
  read.setAttribute("type", "checkbox");
  read.addEventListener("click", () => {
    if (book.read == true) {
      book.read = false;
    } else {
      book.read = true;
    }
  });
  title.textContent = book.title;
  author.textContent = book.author;
  pages.textContent = "page:" + book.pages;
  read.checked = book.read;
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    newEntry.remove();
    myLibrary.splice(book.position, 1);
  });
  newEntry.appendChild(title);
  newEntry.appendChild(author);
  newEntry.appendChild(pages);
  readContainer.appendChild(read);
  newEntry.appendChild(readContainer);
  newEntry.appendChild(deleteButton);
  bookGrid.appendChild(newEntry);
}

let addBookButton = bookForm.querySelector("button");
addBookButton.addEventListener("click", () => addBookToLibrary());

for (let book of myLibrary) {
  createBookInLibrary(book);
}
