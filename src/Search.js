import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI';
import BookList from './BookList';
import { Link } from 'react-router-dom'

class Search extends Component {

  state = {
      query: "",
      BooksSearch: []
    }

  updateQuery = (query) => {
    if(query) {
      BooksAPI.search(query).then((books) => {
        if('error' in books) {
          this.setState ({
            BooksSearch: [],
            query: query
         })
        }
      else{ //got results
        books.map(b => {
          for (let sBooks of this.props.booksShelfs) {
            if (sBooks.id === b.id) {
              b['shelf'] = 'none'
              return b
            }
          }
          b['shelf'] = 'none'
          return b
        })
        this.setState ({
          query: query,
          BooksSearch: books
        })
      }
    })
  }
  else {
    this.setState ({
      query: '',
      BooksSearch: []
    })
  }
  return
}



  render() {

    const { changeshelf } = this.props
    const { query, BooksSearch } = this.state

    return(
        <div className="search-books">
          <div className="search-books-bar">
            <Link
              to="/"
              className="close-search">
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                onChange={event => this.updateQuery(event.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
                {
                  BooksSearch.map(book => {
                      <BookList
                          booksShelfs={book}
                          changeshelf={changeshelf}
                      />
                    })
                }
            </ol>
          </div>
        </div>
      )
  }
}

export default Search
