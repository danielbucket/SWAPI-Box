import React from 'react';
import PropTypes from 'prop-types';

import './categorySelect.css'


const CategorySelect = ({selectCategory,activeButton}) => {
    return (
    <div className="category-select">
      <button className={activeButton==='people'?"active":"not-active"} onClick={ () => { selectCategory('people') }}>
        People
      </button>

      <button className={activeButton==='planets'?"active":"not-active"} onClick={ () => { selectCategory('planets') }}>
        Planets
      </button>

      <button className={activeButton==='vehicles'?"active":"not-active"} onClick={ () => { selectCategory('vehicles') }}>
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
