import React from 'react'
import PropTypes from 'prop-types';
import { prototype } from 'module';


export default function Movie({ name, img, rating }){
    return <h1></h1>
}

Movie.PropTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: prototype.string.isRequired,
    poster: prototype.string.isRequired
}