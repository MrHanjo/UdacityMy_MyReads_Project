import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from './BooksAPI';

class SearchPage extends Component {
  state = {
    query: '',
    searchResults: []
  }

  updateQuery = (query) => {
    this.setState({
      query: query
    })
    this.updateSearchResults(query);
  }
  
  updateSearchResults = (query) => { //QUERY fetches results, screens for errors and assigns to state ELSE there yields an empty array
    if (query) {
      BooksAPI.search(query).then((searchResults) => {
        searchResults.error ? this.setState({ searchResults: [] }) : this.setState({ searchResults: searchResults })
      })    
    } else {
      this.setState({ searchResults: [] })
    }
  }
//-----------------------------------------------------------------------------------------------------------

    render () {
        return (
            <div className="search-books">
            <div className="search-books-bar">

              <Link to='/' className="close-search">Return to Home Page</Link>

              <div className="search-books-input-wrapper">
                <input 
                  type="text"
                  placeholder="Search by title or author"
                  value={this.state.query}
                  onChange={(event) => this.updateQuery(event.target.value)}
                />
              </div>
            </div>


            <div className="search-books-results">
              <ol className="books-grid">  {/*for each book in the books array you display a book in the UI*/}
                {this.state.searchResults.map(searchResult => {
                  let shelf= "none";

                  this.props.books.map(book => (
                    book.id === searchResult.id ? shelf = book.shelf : ''
                  ));

                  return (
                    <li key={searchResult.id}>
                      <Book
                        book={searchResult}
                        changeShelf={this.props.changeShelf}
                        currentShelf={shelf}
                      />
                    </li>
                  ); 
                })}               
              </ol>
            </div>
          </div>
        );
    }
}


export default SearchPage;