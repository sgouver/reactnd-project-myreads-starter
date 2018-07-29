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
    this.setState({ query })
    this.getBooks(query)
  }

  getBooks = (query) => {
  if(query) {
      BooksAPI.search(query).then((BooksSearch) => {
        if(BooksSearch.error){
          this.setState({BooksSearch: []})
        } else {
          this.setState({BooksSearch})
        }
      })
    }else{
      this.setState({BooksSearch: []});
    }
  }

  render() {

    const { UpdateShelf } = this.props
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
                value={query}
                onChange={event => this.updateQuery(event.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {/* cannot implement to sync books with searchBook lists --> {
                this.state.BooksSearch.map(this.props.BookList => {
                  let shelf ='none';
                    book.id === searchBook.id ?
                    shelf = book.shelf : ''
                })
              }*/}
              <BookList
                books={BooksSearch}
                UpdateShelf={UpdateShelf}
              />
            </ol>
          </div>
        </div>
      )
  }
}

export default Search
