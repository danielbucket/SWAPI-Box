import React from 'react';
import './aboutMovie.css';

const AboutMovie = ({ movieSummary, selectCategory }) => {
  return (
    <div className="about-movie-container">
      <div className="star-wars-logo"></div>
      <div className="movie-title">
        <h4>{ movieSummary.title }</h4>
        <h4>Episode { movieSummary.episode_id }</h4>
        <button className="learn-more"
                onClick={ () => { selectCategory(movieSummary.episode_id) } }>
          Click here to learn more about { movieSummary.title }
        </button>
      </div>
      <p className="movie-describer">
        { movieSummary.opening_crawl }
      </p>
    </div>
  );
};

export default AboutMovie;
