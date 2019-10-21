import React from 'react'
import PropTypes from 'prop-types';
import './Movie.css'

export default function Movie({ year, title, summary, poster, genres }){
    return <div className="movie">
                <img className="movie-poster" src={poster} alt={title} title={title}></img>
                <div className="movie-data">
                    <h2 className="movie-title">{title}</h2>
                    <h4 className="movie-year">{year}</h4>
                    <h5 className="movie-genre">{genres}</h5>
                    <p className="movie-summary">{summary}</p>
                </div>
            </div>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}