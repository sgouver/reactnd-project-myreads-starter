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
                value={this.state.query}
                onChange={event => this.updateQuery(event.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
                <BookList
                  books={this.state.BooksSearch}
                  UpdateShelf={this.props.UpdateShelf}
                />
            </ol>
          </div>
        </div>
      )
  }
}

export default Search
