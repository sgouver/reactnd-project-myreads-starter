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


// Use the prodifined update() function from BooksAPI to initite a refresh
  UpdateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);

//After the update recall all the BooksAPI array
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

//The initial mount of the array
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

//rendering the two children of the App.js
  render() {
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
              books={this.state.books}
            />
          )}/>

      </div>
    )
  }
}

export default BooksApp
