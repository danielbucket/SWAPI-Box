import React from 'react';
import PropTypes from 'prop-types';

import './categorySelect.css'


const CategorySelect = ({selectCategory,activeButton}) => {
    return (
    <div className="category-select">
      <button className={ activeButton === 'people' ? "active" : "not-active" }
              onClick={ () => { selectCategory('people') }}
              id="people-btn">
        People
      </button>

      <button className={ activeButton === 'planets' ? "active" : "not-active" }
              onClick={ () => { selectCategory('planets') } }
              id="planet-btn">
        Planets
      </button>

      <button className={ activeButton === 'vehicles' ? "active" : "not-active" }
              onClick={ () => { selectCategory('vehicles') } }
              id="vehicle-btn">
        Vehicles
      </button>
    </div>
    )
  }

  CategorySelect.PropTypes = {
    activeButton:PropTypes.string,
    selectCategory: PropTypes.func
  }

export default CategorySelect;
