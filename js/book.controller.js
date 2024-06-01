'use strict'

var gFillterBy = ''
function onInit() {
  getBooksAtLoad()
  console.log('gBooks :', gBooks[0].title)
  render()
}

function render() {
  const elbooks = document.querySelector('.books-containor')

  var books = getBooks()

  var strHtml = books.map(
    (book) => `<tr class="row">
    <td>${book.title}</td>
    <td>${book.price}</td>
    <td>
        <button class="read" onclick="onShowDetails(event, '${book.id}')">Read</button>   
        <button class="update" onclick="onUpdateBook('${book.id}')">Update</button>
        <button class="delete" onclick="onRemoveBook('${book.id}')">Delete</button>
    </td>
  </tr>`
  )
  elbooks.innerHTML = strHtml.join('')
}

function onRemoveBook(bookId) {
  removeBook(bookId)
  render()
}

function onUpdateBook(bookId) {
  var title = prompt('enter title')
  var price = prompt('Enter the new price:')

  updateBook(bookId, title, price)
  render()
}

function onAddBook() {
  var title = prompt('enter title')
  var price = prompt('Enter the new price:')

  addbook(title, price)
  render()
}

function onShowDetails(ev, bookId) {
  ev.stopPropagation()

  var book = getBookById(bookId)

  const elModal = document.querySelector('.modal')
  const elData = elModal.querySelector('pre')

  elData.innerHTML = `
      <section class="book-details-container">
      <div>${book.title}</div>
      <img src="img/${book.imgUrl}" alt="Img of ${book.title}" />
      <div>${book.price}</div>
      <button onClick="onRemoveBook()">buy</button>
      </section>`

  elModal.showModal()
}

function onFillterBooks() {
  fillterBooks()
}
