import React from 'react'


export default function Movie({ name, img, rating }){
    return <div>
                <h2>watch {name} now</h2>
                <h4>{rating}/5</h4>
                <img src={img} alt={name}/>
            </div>
}