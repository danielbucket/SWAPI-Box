import React from 'react';


const CategorySelect = ({selectCategory}) => {

    return (
    <div>
      <button onClick={ () => { selectCategory('people') }}>
        People
      </button>

      <button onClick={ () => { selectCategory('planets') }}>
        Planets
      </button>

      <button onClick={ () => { selectCategory('vehicles') }}>
        Vehicles
      </button>
    </div>

    )

}

export default CategorySelect;
