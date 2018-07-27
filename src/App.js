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
          <Route exact path='/' render={() => (
            <MainApp
              books={this.state.books}
              UpdateShelf={this.UpdateShelf}
            />
          )}/>
          <Route path='/search' render={() => (
            <Search
              UpdateShelf={this.UpdateShelf}
            />
          )}/>

      </div>
    )
  }
}

export default BooksApp
