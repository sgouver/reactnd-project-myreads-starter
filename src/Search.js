import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI';
import BookList from './BookList';
import { Link } from 'react-router-dom'

//The  search page is a component with class because it changes the state
class Search extends Component {

// Our initial state
  state = {
      query: "",
      BooksSearch: []
    }
// A query function to update the state of the BooksSearch array
  updateQuery = (query) => {
    this.setState({ query })
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

    //set some variables to avoid repetitive writing
    const { UpdateShelf, books } = this.props
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
                placeholder="Search by title"
                value={query}
                //initiate the above updateQuery when the query changes
                onChange={event => this.updateQuery(event.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {/*loop through the BooksSearch array*/}
              {BooksSearch.map(search => {
                //set the initial state of a book
                  let shelf ='none'
                  //loop through books array
                  books.map(book => {
                    //if there are similar books
                    if (book.id === search.id)
                      //set them to the same shelf
                      {return shelf = book.shelf}
                    else
                    // or do nothing
                    {return ''}
                })
                return(
                  <li key={search.id}>
                    <BookList
                      //loop book for each in the BooksSearch array
                      book={search}
                      currentShelf={shelf}
                      UpdateShelf={UpdateShelf}
                    />
                  </li>
                 )
               })
             }
            </ol>
          </div>
        </div>
      )
  }
}

export default Search
