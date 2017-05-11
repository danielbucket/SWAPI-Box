import React from 'react';
import PropTypes from 'prop-types';

const Vehicle = ({ data, isFavorite, selectedFavorites }) => {

  return (
    <article className={ isFavorite }>
      <div className="card-title">
        { data.name }
        <div
          onClick={ () => {selectedFavorites(data.name)} }
          className={ isFavorite+"-button" }>
        </div>
      </div>
      <div className="card-info-container">
        <div className="card-info"><span className="info-cat">Model:</span> { data.model }</div>
        <div className="card-info"><span className="info-cat">Class:</span> {data.vehicle_class}</div>
        <div className="card-info">
          <span className="info-cat">Passengers:</span>{ data.passengers }
        </div>
      </div>
    </article>
  );
};

Vehicle.PropTypes = {
  isFavorite:PropTypes.string,
  data: PropTypes.object,
  selectedFavorites: PropTypes.func
}

export default Vehicle
