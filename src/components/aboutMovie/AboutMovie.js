import React from 'react';
import './aboutMovie.css';

const AboutMovie = ({ movieSummary, selectCategory }) => {
  // console.log(movieSummary);
  return (
    <div className="about-movie-container">
      <div className="star-wars-logo">
        <div className="movie-title">
          <h4>{ movieSummary[0]}</h4>
          <h4>Episode { movieSummary[1] }</h4>
          <button className="learn-more"
                  onClick={ () => { selectCategory(movieSummary[1]) } }>
            Click here to learn more about { movieSummary[0] }
          </button>
        </div>
        <p className="movie-describer">
          { movieSummary[2] }
        </p>
      </div>
    </div>
  );
};

export default AboutMovie;
