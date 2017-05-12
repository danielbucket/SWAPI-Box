import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import                           './header.css';



class Header extends Component {
  constructor() {
    super()
    this.state = {
      hasBeenClicked : false
    }
  }

  render() {
    let active = this.state.hasBeenClicked ? "isActive" : "isInactive"
    let list = this.state.hasBeenClicked
               ? this.props.favorites.map( i => { return <li>{ i }</li> })
               : ""

  return (
    <header className="header">
      <a className="website-name"
         href="https://swapi.co/"
         target="_blank">
        <h2 >
          SWAPI BOX
        </h2>
      </a>

      <div onClick={ () => {this.props.displayFavorites()} } className="favorites-container">

        <div  className="header-box"
              onClick={ () => { this.setState({ hasBeenClicked: !this.state.hasBeenClicked }) } }>
             <div className={ active }>
              <p className="favorites-title">Favorites:<span>{ this.props.favorites.length }</span></p>
              <div className="list-container">
                <ul className="favorites-list">
                { list }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
};

Header.PropTypes = {
  favorites:PropTypes.array
}

export default Header
