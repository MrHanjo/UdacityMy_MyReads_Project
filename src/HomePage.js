import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';

function HomePage(props) {

        return(
          
               //... continued from above... if the above is false then do this below
          <div className="list-books">
          <div className="list-books-title">
           
            <h1>MyReads</h1>

            <Link   //maybe change className to a pre-existing class, I just made one up here
              to='/search'                
              className="perform-search-link" 
            >
              Go to Search Page
            </Link>

          </div>

{/* ---------------------------------CURRENTLY READING SHELF------------------------------------------------ */}

          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {
                      //this.props.books
                      props.books
                        .filter(book => book.shelf === 'currentlyReading')
                        .map(book => (
                          <li key={book.id}>
                            <Book
                              book={book}
                              changeShelf={props.changeShelf}
                              currentShelf="currentlyReading"  //this is just manually giving the property of the filtered shelf value from above
                            />
                          </li>
                        ))
                    }     
                  </ol>
                </div>
              </div>


{/* ----------------------------------------WANT TO READ shelf---------------------------------------------- */}

              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {
                      props.books
                        .filter(book => book.shelf === 'wantToRead')
                        .map(book => (
                          <li key={book.id}>
                            <Book 
                              book={book}
                              changeShelf={props.changeShelf}
                              currentShelf="wantToRead"
                            />
                          </li>
                        ))
                    }          
                  </ol>
                </div>
              </div>


{/* ------------------------------------------- READ shelf--------------------------------------------------- */}

              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {
                      props.books
                        .filter(book => book.shelf === 'read')
                        .map(book => (
                          <li key={book.id}>
                            <Book 
                              book={book}
                              changeShelf={props.changeShelf} 
                              currentShelf="read"
                            />
                          </li>
                        ))
                    }                  
                  </ol>
                </div>
              </div>
            </div>
          </div>
          
          {/* Potential additional feature for later...
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div> */}
        </div>
        )
    //}
}

export default HomePage;