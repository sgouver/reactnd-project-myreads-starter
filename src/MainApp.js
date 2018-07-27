import React from 'react'
import { Link } from 'react-router-dom'
import BookList from './BookList';


class MainApp extends React.Component {
  render() {
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
                <BookList books={this.props.books
                    .filter((book) => book.shelf === "currentlyReading")}
                    UpdateShelf={this.props.UpdateShelf}
                  currentShelf='currentlyReading'
                />
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
                <BookList books={this.props.books
                    .filter((book) => book.shelf === 'wantToRead')}
                    UpdateShelf={this.props.UpdateShelf}
                  currentShelf='wantToRead'
                />
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
                <BookList books={this.props.books
                    .filter((book) => book.shelf === 'read')}
                  UpdateShelf={this.props.UpdateShelf}
                  currentShelf='read'
                />
            </div>
          </div>
        </div>
        <div className="open-search">
        <Link
          to="/search"
          >Add a book</Link>
        </div>
      </div>
    )
  }
}

export default MainApp
