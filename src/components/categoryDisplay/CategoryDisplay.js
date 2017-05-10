import React from 'react';
import style from './categoryDisplay.css'

import People from '../Person/Person'

import Planets from '../Planets/Planets'

import Vehicle from '../Vehicle/Vehicle'

const CategoryDisplay = ({favorites, presentCategory, typeCategory, selectedFavorites }) => {
  let list;
  let isFavorite;
  switch(typeCategory){
    case "people":
     list = presentCategory.map((data,i)=>{
      isFavorite=  favorites.indexOf(data.name)>-1?
      "favorite":"not-favorite"
       return <People
       isFavorite={isFavorite}
        selectedFavorites={selectedFavorites} key ={i} data={data}/>
     })
     break;

    case 'planets':
    list = presentCategory.map((data,i)=>{
      isFavorite=  favorites.indexOf(data.name)>-1?
      "favorite":"not-favorite"
      return <Planets isFavorite={isFavorite} selectedFavorites={selectedFavorites} key={i} data={data}/>
    })
    break;


    case 'vehicles':
    list = presentCategory.map((data,i) =>{
      isFavorite=  favorites.indexOf(data.name)>-1?
      "favorite":"not-favorite"
      return <Vehicle isFavorite={isFavorite} selectedFavorites={selectedFavorites} key={i} data={data}/>
    })
    break;
  }

  return (
    <div className='category-display'>
    {list}

    </div>
  )
}

export default CategoryDisplay;
