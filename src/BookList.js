import React, { Component } from 'react'

class BookList extends Component {

//Create a component to delete the majority of spagetti code of App.js.

render() {

  return(
        <li key={this.props.book.id} >
          <div className="book">
            <div className="book-top">
              <div key={this.props.book.title} className="book-cover"
              style={{
                width: 128,
                height: 193,
                //Set the book image
                backgroundImage: `Url(${this.props.book.imageLinks.thumbnail})`
                }}>
              </div>
                <div className="book-shelf-changer">
                  <select
                    onChange = {(event) => this.props.UpdateShelf(
                      this.props.book, event.target.value
                    )}
                    >
                    <option value="move" disabled>Move to...</option>
                    <option value="none">None</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                  </select>
                </div>
            </div>
              {/* set book title */}
            <div className="book-title">{this.props.book.title}</div>
              {/* set book author */}
            <div className="book-authors">{this.props.book.authors}</div>
          </div>
          </li>
      )}
}

export default BookList
