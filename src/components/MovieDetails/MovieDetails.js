import React from 'react'
import './MovieDetails.css'
import PropTypes from 'prop-types';

const MovieDetails = ({movieSummary})=>{
  return(
    <div className = "movie-summary">
      <div className = "movie-title">
      {movieSummary.title}
      </div>
      <div className = "movie-info">
      <span className = "movie-cat">Director:</span>{movieSummary.director}
      </div>
      <div className = "movie-info">
      <span className = "movie-cat">Producer:</span>{movieSummary.producer}
      </div>
      <div className = "movie-info">
      <span className = "movie-cat">ReleaseDate:</span>{movieSummary.release_date}
      </div>
      <div className = "movie-info">
      <span className = "movie-cat">Movie-Info:</span>{movieSummary.opening_crawl}
      </div>
    </div>
  )

}

MovieDetails.PropTypes = {
  movieSummary: PropTypes.object,
}


export default MovieDetails
