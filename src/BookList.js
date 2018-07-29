import React, { Component } from 'react'


class BookList extends Component {

//Create a component to delete the majority of spagetti code of App.js.

render() {

const { bookShow, changeshelf } = this.props

return(
        <li>
          <div className="book">
            <div className="book-top">
              <div key={bookShow.title} className="book-cover"
              style={{
                width: 128,
                height: 193,
                //Set the book image
                backgroundImage: `url(${bookShow.imageLinks ?
                bookShow.imageLinks.thumbnail : ''})`
                }}>
              </div>
                <div className="book-shelf-changer">
                  <select
                    onChange = {(event) => changeshelf(
                      booksShelfs, event.target.value
                    )}
                    defaultValue={bookShow.shelf}
                    >
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
            </div>
              {/* set book title */}
            <div className="book-title">{bookShow.title}</div>
              {/* set book author */}
            <div className="book-authors">{bookShow.authors}</div>
          </div>
          </li>
        )
  }
}

export default BookList
