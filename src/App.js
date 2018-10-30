import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

import HomePage from './HomePage';
import SearchPage from './SearchPage';
import './App.css'

//----------------------------------------------------------------------------------------------------------

class BooksApp extends React.Component {

  state = {
    books: []
  }

  //this fills the components with data afer the the component this mounts
  //THIS IS A LIFECYCLE EVENT... First thing you do is make the state or array of books, then you break it down
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    BooksAPI.getAll().then((books) => {   //THIS IS THE SAME AS JUST ABOVE... ALL THIS IS DOING 
      this.setState({ books: books })     //IS SETTING THE STATE AGAIN SO YOU NEED TO 
    })                                    //REFRESH THE PAGE WHICH IS WHAT THIS DOES
  }
//----------------------------------------------------------------------------------------------------------

  render() {
    return (
      <div className="app">
        
        <Route
          exact path='/'
          render={()=> (
            <HomePage
              books={this.state.books}
              changeShelf={this.changeShelf}
            />
          )}
        />
        
        <Route
          path='/search'
          render={() => (
            <SearchPage
              books={this.state.books}  
              changeShelf={this.changeShelf}              
            />
          )}
        />   
                 
      </div>
    )
  }
}

export default BooksApp
