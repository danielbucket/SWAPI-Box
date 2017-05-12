import React        from 'react';
import People       from '../Person/Person';
import Planets      from '../Planets/Planets';
import Vehicle      from '../Vehicle/Vehicle';
import MovieDetails from '../MovieDetails/MovieDetails.js'
import PropTypes    from 'prop-types';
import                   './categoryDisplay.css';
import                   './categoryDisplay-break550.css';



const CategoryDisplay = ({ favorites, presentCategory, typeCategory, selectedFavorites, movieSummary,displayMovieInfo,showFavorites }) => {
  let list;
  let isFavorite;

  if (displayMovieInfo) {
    list = <MovieDetails movieSummary={ movieSummary } />
  } else {
    switch(typeCategory) {
      case "people":
       list = presentCategory.map( (data, i) => {
        isFavorite = favorites.indexOf(data.name) > -1
                                                  ? "favorite"
                                                  : "not-favorite"
          return <People  isFavorite={ isFavorite }
                   selectedFavorites={ selectedFavorites }
                                 key={ i }
                                data={ data } />
        })
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
        })
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
        })
      break;
      default:
      console.log("CategoryDisplay ain't recieved no props, bro")
    }
  }

  if (showFavorites) {
  list =  list.filter(val=>{
      return val.props.isFavorite === "favorite"
    })
  };

  return (
    <div className='category-display'>
      { list }
    </div>
  );
};

CategoryDisplay.PropTypes = {
  isFavorite        : PropTypes.string,
  presentCategory   : PropTypes.array,
  selectedFavorites : PropTypes.func,
  favorites         : PropTypes.array,
  typeCategory      : PropTypes.string,
  selectedFavorites : PropTypes.func,
  movieSummary      : PropTypes.obj,
  displayMovieInfo  : PropTypes.bool
}

export default CategoryDisplay;
