'use strict'

function onInit() {
  createBooks()
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

  const elModal = document.querySelector('.modal')
  const elData = elModal.querySelector('pre')

  elModal.showModal()
}
