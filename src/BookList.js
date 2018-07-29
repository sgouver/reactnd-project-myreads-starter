import React, {Component} from 'react'

class BookList extends Component {

//Create a component to delete the majority of spagetti code of App.js.
render () {

return(
<div className="bookshelf-books">
 <ol className="books-grid">
        <li key={book.id} >
          <div className="book">
            <div className="book-top">
              <div key={book.title} className="book-cover"
              style={{
                width: 128,
                height: 193,
                //Set the book image
                backgroundImage: `url(${book.imageLinks ?
                book.imageLinks.thumbnail : ''})`
                }}>
              </div>
                <div className="book-shelf-changer">
                  <select
                    onChange = {(event) => props.UpdateShelf(
                      book, event.target.value
                    )}
                    value={currentShelf}
                    >
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option selected value="none">None</option>
                  </select>
                </div>
            </div>
              {/* set book title */}
            <div className="book-title">{book.title}</div>
              {/* set book author */}
            <div className="book-authors">{book.authors}</div>
          </div>
          </li>
    </ol>
  </div>

)}}

export default BookList
