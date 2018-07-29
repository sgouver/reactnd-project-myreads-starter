import React from 'react'
import { Link } from 'react-router-dom'
import ShelfDisplay from './shelfDisplay';


class MainApp extends React.Component {
  render() {

  const { books, UpdateShelf } = this.props

    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
                <ShelfDisplay books={books
                    .filter((book) => book.shelf === "currentlyReading")}
                    UpdateShelf={UpdateShelf}
                />
              <ShelfDisplay books={books
                    .filter((book) => book.shelf === 'wantToRead')}
                    UpdateShelf={UpdateShelf}
                />
              <ShelfDisplay books={books
                    .filter((book) => book.shelf === 'read')}
                  UpdateShelf={UpdateShelf}
                />
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
