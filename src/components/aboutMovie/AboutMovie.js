import React, { Component, PropTypes } from 'react';

const AboutMovie = ({ movieSummary }) => {
  console.log({movieSummary});
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

// AboutMovie.propTypes = {
//   movieSummary: propTypes.string
// }

export default AboutMovie;
