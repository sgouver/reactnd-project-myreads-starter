import React from 'react';
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI';
import './App.css';
import MainApp from './MainApp';
import Search from './Search';

class BooksApp extends React.Component {

//Gather all initial books in books array and set a value.
  state = {
    books : [],
  }

  UpdateShelf = (book, shelf) => {

    let match = false
    for (let b of this.state.books) {
      if (b.id === book.id) {
        match = true
      }
    }
    BooksAPI.update(book, shelf).then(() => {
      if (match === true) {
          this.setState(state => ({
          books: state.books.map(b => {
            b.shelf = shelf
          })
        }))
      } else {
        this.setState(state => ({
          books: state.books.concat([book])
        }))
      }

    }).then(BooksAPI.getAll().then((books) => {
          this.setState({books})
    }))
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
          <Route exact path='/' render={() => (
            <MainApp
              books={this.state.books}
            />
          )}/>
          <Route path='/search' render={() => (
            <Search
              changeshelf={this.UpdateShelf}
              booksShelfs={this.state.books}
            />
          )}/>

      </div>
    )
  }
}

export default BooksApp
