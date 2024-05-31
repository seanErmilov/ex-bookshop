'use strict'

function onInit() {
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
        <button class="read">Read</button>   
        <button class="update">Update</button>
        <button class="delete">Delete</button>
    </td>
  </tr>`
  )
  elbooks.innerHTML = strHtml.join('')
}
