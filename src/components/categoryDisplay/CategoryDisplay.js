import React, { Component } from 'react';

import People from '../Person/Person'

import Planets from '../Planets/Planets'

import Vehicle from '../Vehicle/Vehicle'

const CategoryDisplay = ({ presentCategory, typeCategory, selectedFavorites }) => {
  let list;
  switch(typeCategory){
    case "people":
     list = presentCategory.map((data,i)=>{
       return <People key ={i} data={data}/>
     })
     break;

    case 'planets':
    list = presentCategory.map((data,i)=>{
      return <Planets key={i} data={data}/>
    })
    break;


    case 'vehicles':
    list = presentCategory.map((data,i) =>{
      return <Vehicle key={i} data={data}/>
    })
    break;
  }



  return (
    <div>
    {list}
    </div>
  )
}

export default CategoryDisplay;
