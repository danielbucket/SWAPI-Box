import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Planets extends Component {
  constructor() {
    super();
    this.state = {
      residents: ["Gredo"]
    };
  };

  componentDidMount() {
    let residentList = []

    this.props.data.residents.forEach(person => {
    fetch(`${person}`)
    .then( resp => resp.json() )
    .then( info => {
       residentList.push(info.name)
       this.setState({ residents:residentList })
    }).catch( e => {
      console.log(e);
    })
  })
    this.setState({
      residents:residentList
    });
};

  render() {
    return (
      <article   onClick={ () => {  this.props.selectedFavorites(this.props.data.name)} }
       className={ this.props.isFavorite }>
        <div className="card-title">
          { this.props.data.name }
          <div className={ this.props.isFavorite+"-button" }>
          </div>
        </div>
        <div className="card-info-container">
          <div className="card-info">
            <span className="info-cat">Terrain:</span>
            { this.props.data.terrain }
          </div>
          <div className="card-info">
            <span className="info-cat">Population:</span>
            { this.props.data.population }
          </div>
          <div className="card-info">
            <span className="info-cat">Climate:</span>
            { this.props.data.climate }
          </div>
          <div className="card-info">
            <span className="info-cat">Residents:</span>
            { this.state.residents.map( i => <div>{i}</div>) }
          </div>
        </div>
      </article>
    );
  };
};

Planets.PropTypes = {
  isFavorite:PropTypes.string,
  data: PropTypes.object,
  selectedFavorites: PropTypes.func
}

export default Planets;
