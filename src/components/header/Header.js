import React from 'react';
import style from './header.css';


const Header = ( {props} ) => {

  return (
    <header className="header">
      <a className="website-name"
         href="https://swapi.co/"
         target="_blank">
        <h2 >
          SWAPI BOX
        </h2>
      </a>

      <div className="movie-name-and-header-container">
        <h3 className="movie-title-box">
          {/* movie name Object  */} PlaceHolder Movie Title
        </h3>
        <div className="header-box"
            // this is where well pass in a function that displays all the favorited items
            //  onClick={ () => {  }}
             >
          Favorites: {/*  <p>passed in value</p> */} 24 
        </div>
      </div>
    </header>
  )
}

export default Header;
