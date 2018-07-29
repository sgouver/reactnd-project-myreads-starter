import React from 'react'

//use a stateless component because there is no change of state
const BookList = (props) => {

//set some variables to avoid repetitive writing
const { UpdateShelf, book, currentShelf  } = props

return(
    <div className="book">
      <div className="book-top">
        <div key={book.title} className="book-cover"
        style={{
          width: 128,
          height: 193,
          //Set an argument in the image to avoid error, if there is no image a stock image appear
          backgroundImage: `url(${book.imageLinks ?
          book.imageLinks.thumbnail : 'http://via.placeholder.com/128x193?text=No%20Cover'})`
          }}>
        </div>
          <div className="book-shelf-changer">
            {/*The basic function to change the shelf of the book
            Our currentShelf value is defined in MainApp and Search page*/}
            <select
              onChange = {(event) => UpdateShelf(
                book, event.target.value
              )}
              value = {currentShelf}
              >
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
      </div>
        {/*Book title*/}
      <div className="book-title">{book.title}</div>
        {/*Book author*/}
      <div className="book-authors">{book.authors}</div>
  </div>
   )
}

export default BookList
