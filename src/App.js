import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BookList from './BookList';
import Search from './Search';

class BooksApp extends React.Component {

//Gather all initial books in books array and set a value.
  state = {
    books : [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
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
        {this.state.showSearchPage ? (<Search />) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                  {
                    this.state.books
                        .filter(book => book.shelf === "currentlyReading")
                        .map(book => (<BookList book={book} UpdateShelf={this.UpdateShelf} />)
                    )}
                      </ol>
                    </div>
                  </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                  {
                    this.state.books
                        .filter(book => book.shelf === "wantToRead")
                        .map(book => (<BookList book={book} UpdateShelf={this.UpdateShelf} />)
                    )}
                      </ol>
                    </div>
                  </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                  {
                    this.state.books
                        .filter(book => book.shelf === "read")
                        .map(book => (<BookList book={book} UpdateShelf={this.UpdateShelf} />)
                    )}
                      </ol>
                  </div>
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
