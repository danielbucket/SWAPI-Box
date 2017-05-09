import React, { Component } from 'react';

import People from '../Person/Person'

import Planets from '../Planets/Planets'

import Vehicle from '../Vehicle/Vehicle'

const CategoryDisplay = ({ presentCategory, typeCategory, selectedFavorites }) => {
  let list;
  switch(typeCategory){
    case "people":
     list = presentCategory.map(data=>{
       return <People data={data}/>
     })
     break;

    case 'planets':
    list = presentCategory.map(data=>{
      return <Planets data={data}/>
    })
    break;


    case 'vehicles':
    list = presentCategory.map(data=>{
      return <Vehicle data={data}/>
    })
    break;


    default :
    // alert("BAh!")
  }



  return (
    <div>
    {list}
    </div>
  )
}

export default CategoryDisplay;
