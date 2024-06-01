'use strict'
var gBooks = createBooks()

function createBook() {}

function createBooks() {
  return [
    {
      id: 'grstt',
      title: 'Harry Potter',
      price: 120,
      imgUrl: 'harry-potter.jpg',
    },
    {
      id: '1114',
      title: 'Game Of Thrones',
      price: 110,
      imgUrl: 'game-of-thrones.jpeg',
    },
    {
      id: '1224',
      title: 'Moby Dick',
      price: 230,
      imgUrl: 'moby-dick.jpg',
    },
  ]
}

function getBooks() {
  return gBooks
}

function removeBook(bookId) {
  var bookIDX = gBooks.findIndex((book) => book.id === bookId)
  gBooks.splice(bookIDX, 1)
  if (!gBooks.length) gBooks = createBooks() //never live your app empty
}

function updateBook(bookId, title, price) {
  var book = gBooks.find((book) => book.id === bookId)
  book.price = price
  book.title = title
}

function addbook(title, price) {
  var id = makeId(5)
  var book = {
    id,
    title,
    price: +price,
    imgUrl: '',
  }
  gBooks.push(book)
}

function getBookById(bookId) {
  return gBooks.find((book) => book.id === bookId)
}
