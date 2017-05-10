import React    from 'react';
import People   from '../Person/Person';
import Planets  from '../Planets/Planets';
import Vehicle  from '../Vehicle/Vehicle';
import './categoryDisplay.css';

const CategoryDisplay = ({ favorites, presentCategory, typeCategory, selectedFavorites, movieSummary }) => {
  let list;
  let isFavorite;

  // console.log(movieSummary);

  switch(typeCategory) {

    case "people":
     list = presentCategory.map( (data, i) => {
      isFavorite = favorites.indexOf(data.name) > -1
                                                ? "favorite"
                                                : "not-favorite"
      return <People  isFavorite={ isFavorite }
                      selectedFavorites={ selectedFavorites }
                      key={ i }
                      data={ data }/>
    });
    break;

    case 'planets':
    list = presentCategory.map( (data, i) => {
      isFavorite = favorites.indexOf(data.name) > -1
                                                 ? "favorite"
                                                 : "not-favorite"
      return <Planets isFavorite={ isFavorite }
                      selectedFavorites={ selectedFavorites }
                      key={ i }
                      data={ data } />
    });
    break;

    case 'vehicles':
    list = presentCategory.map( (data, i) => {
      isFavorite = favorites.indexOf(data.name) > -1
                                                ? "favorite"
                                                : "not-favorite"
      return <Vehicle isFavorite={ isFavorite }
                      selectedFavorites={ selectedFavorites }
                      key={ i }
                      data={ data } />
    });
    break;
    default:
    console.log("CategoryDisplay has revieved no props");
  };

  return (
    <div className='category-display'>
      { list }
    </div>
  );
};

export default CategoryDisplay;
