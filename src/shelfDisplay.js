import React, { Component } from 'react'
import BookList from "./BookList"

function ShelfDisplay (props) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.currentShelf}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books.map((book) => (
            <BookList
              key={book.id}
              onChangeShelf={props.bookMove}
              bookShow={book}
              />
          ))}
        </ol>
      </div>
    </div>
  )
}

export default ShelfDisplay
