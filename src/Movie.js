import React from 'react'
import PropTypes from 'prop-types';

export default function Movie({ year, title, summary, poster }){
    return <div class="movie">
                <img class="movie-poster" src={poster} alt={title} title={title}></img>
                <div class="movie-data">
                    <h2 class="movie-title">{title}</h2>
                    <h4 class="movie-year">{year}</h4>
                    <p class="movie-summary">{summary}</p>
                </div>
            </div>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}