import React from 'react'
import PropTypes from 'prop-types';

export default function Movie({ id, year, title, summary, poster }){
    return <div>
                <h2>{title}</h2>
                <h4>{year}</h4>
                <img src={poster}></img>
                <p>{summary}</p>
            </div>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}