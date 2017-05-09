import React from 'react';
import style from './categoryDisplay.css'

const CategoryDisplay = ({ presentCategory, typeCategory, selectedFavorites }) => {

  // not recieving any props...?
  console.log('looking for props :', presentCategory);

  // if (typeCategory === "people") {
  //   list =
  // }
  //   list =
  //

  return (
    <div className="category-display">
      { presentCategory }some shtuff about Darth Skywalker and his posse
    </div>
  )
}

export default CategoryDisplay;
