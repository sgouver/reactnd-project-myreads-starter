import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BookList from './BookList';
import Search from './Search';

class BooksApp extends React.Component {

//Gather all initial books in books array and set a value.
  state = {
    books : [],
    showSearchPage: false
  }

  UpdateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);

    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  render() {
    console.log(this.state.books)
    return (
      <div className="app">
        {this.state.showSearchPage ? (<Search
          UpdateShelf={this.UpdateShelf} />) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                    <BookList books={this.state.books
                        .filter((book) => book.shelf === "currentlyReading")}
                      UpdateShelf={this.UpdateShelf}
                      currentShelf='currentlyReading'
                    />
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                    <BookList books={this.state.books
                        .filter((book) => book.shelf === 'wantToRead')}
                      UpdateShelf={this.UpdateShelf}
                      currentShelf='wantToRead'
                    />
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                    <BookList books={this.state.books
                        .filter((book) => book.shelf === 'read')}
                      UpdateShelf={this.UpdateShelf}
                      currentShelf='read'
                    />
                </div>
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
