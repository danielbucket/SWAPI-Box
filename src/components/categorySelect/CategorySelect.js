import React     from 'react';
import PropTypes from 'prop-types';
import                './categorySelect.css'
import                './categorySelect-break550.css'


const CategorySelect = ({ selectCategory, activeButton, displayFavorites }) => {
    return (
    <div className="category-select">
      <button className={ activeButton === 'people' ? "active" : "not-active" }
                     id="people-btn"
                onClick={ () => {selectCategory('people')
                                 displayFavorites()} } >
        People
      </button>

      <button className={ activeButton === 'planets' ? "active" : "not-active" }
                     id="planet-btn"
                onClick={ () => {selectCategory('planets')
                                 displayFavorites()} } >
        Planets
      </button>

      <button className={ activeButton === 'vehicles' ? "active" : "not-active" }
                     id="vehicle-btn"
                onClick={ () => {selectCategory('vehicles')
                                 displayFavorites()} } >
        Vehicles
      </button>
    </div>
  );
};

  CategorySelect.PropTypes = {
    activeButton:PropTypes.string,
    selectCategory: PropTypes.func
  };

export default CategorySelect;
