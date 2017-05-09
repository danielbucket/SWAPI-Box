import React from 'react';
import style from './categorySelect.css'


const CategorySelect = ({selectCategory,activeButton}) => {
    return (
    <div>
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




export default CategorySelect;
