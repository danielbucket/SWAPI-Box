import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Person extends Component {
  constructor() {
    super()
    this.state = {
       homeworld: "",
         species: "",
      population: ""
    };
  };

  componentDidMount() {
    let p1 = fetch(`${this.props.data.homeworld}`)
    .then( resp => resp.json() )
    .then( info => {
      this.setState({
          homeworld: info.name,
         population: info.population
      });
    })
    .catch( e => {
      console.log(e)
    })

    let p2 = fetch(`${this.props.data.species[0]}`)
    .then( resp => resp.json() )
    .then( info => {
      this.setState({
            species: info.name
      });
    })
    .catch( e => {
      console.log(e)
    });

    Promise.all([p1, p2])
  };

  render() {
    return (
      <article className={ this.props.isFavorite } >
        <div className="card-title">
          { this.props.data.name }
          <div
            onClick={ () => {this.props.selectedFavorites(this.props.data.name)} }
            className={ this.props.isFavorite+"-button" }>
         </div>
        </div>
        <div className="card-info-container">
          <div className="card-info">
            <span className="info-cat">Homeworld:</span>
            { this.state.homeworld }
          </div>
          <div className="card-info">
            <span className="info-cat">Species:</span>
            { this.state.species }
          </div>
          <div className="card-info">
            <span className="info-cat">Population:</span>
            { this.state.population }
          </div>
        </div>
      </article>
    );
  };
};
Person.PropTypes = {
  isFavorite:PropTypes.string,
  data: PropTypes.object,
  selectedFavorites: PropTypes.func
}

export default Person;
