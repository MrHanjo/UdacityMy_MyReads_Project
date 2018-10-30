import React, { Component } from 'react';

function Book(props) {
      
  let bookImage = props.book.imageLinks ? props.book.imageLinks.thumbnail : '' ;  

    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${bookImage}"` }}></div>
          <div className="book-shelf-changer">                                                 {/* ^  */}
                        
            <select 
              onChange={ (evt) => props.changeShelf(props.book, evt.target.value) }
              value={props.currentShelf}
            >
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
            
          </div>
        </div>
        <div className="book-title">{props.book.title}</div>
        <div className="book-authors">{props.book.authors}</div>
      </div>
    )
}

export default Book;