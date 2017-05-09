import React from 'react';
import styles from './aboutMovie.css'

const AboutMovie = ( { movieSummary, selectCategory }) => {

  return (
    <div className="about-movie-container">
      <div  className="movie-title">
        <h4>{ movieSummary[0]}</h4>
        <h4>Episode { movieSummary[1] }</h4>

        <button className="learn-more"
                onClick={ () => { selectCategory(movieSummary[1]) } }>
          Learn More About {movieSummary[0]}
        </button>

      </div>
      <p className="movie-describer">
        { movieSummary }
      </p>
    </div>
  )
}

export default AboutMovie;
