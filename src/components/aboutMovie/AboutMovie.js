import React, { Component, PropTypes } from 'react';

const AboutMovie = ({ movieSummary }) => {
  
  return (
    <div className="about-movie-container">
      <title className="movieTitle">
        <h4>{ movieSummary[0]}</h4>
        <h4>{ movieSummary[1] }</h4>
      </title>
      <p className="movie-describer">
        { movieSummary }
      </p>
    </div>
  )
}

export default AboutMovie;
