'use strict'
var gBooks = createBooks()

var zBook = {
  id: 1234,
  title: 'harry',
  price: 120,
  imgUrl: 'lori-harry.jpg',
}

function createBooks() {
  return [
    {
      id: 1234,
      title: 'harry potter',
      price: 120,
      imgUrl: 'lori-harry.jpg',
    },
    {
      id: 1114,
      title: 'loli',
      price: 110,
      imgUrl: 'lori-harry.jpg',
    },
    {
      id: 1224,
      title: 'giti',
      price: 230,
      imgUrl: 'lori-harry.jpg',
    },
  ]
}
function getBooks() {
  return gBooks
}

function removeBook(bookId) {
  var bookIDX = gBooks.findIndex((book) => book.id === bookId)
  gBooks.splice(bookIDX, 1)
  console.log('gBooks.length :', gBooks.length)
  if (!gBooks.length) gBooks = createBooks() //never live your app empty
}

function updateBook(bookId, title, price) {
  var book = gBooks.find((book) => book.id === bookId)
  book.price = price
  book.title = title
}
