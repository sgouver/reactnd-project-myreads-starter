import React from 'react'
import { Link } from 'react-router-dom'
import BookList from './BookList';


const MainApp = (props) => {

  const { books, UpdateShelf } = props

    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              {books.filter(book => book.shelf === "currentlyReading")
                    .map(book => <BookList />)
              }
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
                {books.filter(book => book.shelf === "wantToRead")
                      .map(book => <BookList />)
                }
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
                {books.filter(book => book.shelf === "read")
                      .map(book => <BookList />)
                }
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

export default MainApp
