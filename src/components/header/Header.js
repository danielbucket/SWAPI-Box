import React from 'react';
import './header.css';


const Header = ({ favorites, movieSummary }) => {
  console.log(movieSummary);
  return (
    <header className="header">
      <a className="website-name"
         href="https://swapi.co/"
         target="_blank" >
        <h2>
          SWAPI BOX
        </h2>
      </a>

      <div className="movie-name-and-header-container">
        <h3 className="movie-title-box">
          { movieSummary.title }
        </h3>
        <div className="header-box"
            // this is where we'll pass in a function that displays all the favorited items
            //  onClick={ () => {  }}
             >
          Favorites: {/*  <p>passed in value</p> */} 24
        </div>
      </div>
    </header>
  )
}

export default Header;
