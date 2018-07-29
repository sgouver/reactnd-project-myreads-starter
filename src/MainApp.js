import React from 'react'
import { Link } from 'react-router-dom'
import BookList from './BookList';

//use a stateless component because there is no change of state
const MainApp = (props) => {

//set some variables to avoid repetitive writing
  const { UpdateShelf, books } = props

    return(
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
                   {/*loop to filter the books for each category
                   loop to create an array based on the filtered array
                   set attributes for each item of the final array*/}
                  { books.filter(book =>
                    book.shelf === 'currentlyReading').map(book => (
                      <li key={book.id}>
                        <BookList
                          book={book}
                          UpdateShelf={UpdateShelf}
                          currentShelf='currentlyReading' />
                      </li>
                    ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                 <ol className="books-grid">
                   {/*loop to filter the books for each category
                   loop to create an array based on the filtered array
                   set attributes for each item of the final array*/}
                  { books.filter(book =>
                    book.shelf === 'wantToRead').map(book => (
                      <li key={book.id}>
                        <BookList
                          book={book}
                          UpdateShelf={UpdateShelf}
                          currentShelf='wantToRead' />
                      </li>
                    ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                 <ol className="books-grid">
                   {/*loop to filter the books for each category
                   loop to create an array based on the filtered array
                   set attributes for each item of the final array*/}
                  { books.filter(book =>
                    book.shelf === 'read').map(book => (
                      <li key={book.id}>
                        <BookList
                          book={book}
                          UpdateShelf={UpdateShelf}
                          currentShelf='read' />
                      </li>
                    ))}
                </ol>
              </div>
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
