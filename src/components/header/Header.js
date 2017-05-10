import React,{Component} from 'react';
import style from './header.css';


class Header extends Component {
  constructor(){
    super()
    this.state = {
      hasBeenClicked : false
    }
  }


  render(){
    let active = this.state.hasBeenClicked?"isActive":"isInactive"
    let list = this.state.hasBeenClicked? this.props.favorites.map(i=>{
      return <li>{i}</li>
    }):""

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
          onClick={ () => {this.setState({hasBeenClicked:!this.state.hasBeenClicked})}}
             >
             <div className = {active}>
          Favorites:{this.props.favorites.length}
            <ul>
            {list}
            </ul>
            </div>
        </div>
      </div>
    </header>
  )
  }
}

export default Header
