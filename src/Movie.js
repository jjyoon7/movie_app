import React from 'react'


export default function Movie({ title, img, rating }){
    return <div>
                <h2>watch {title} now</h2>
                <h4>{rating}/5</h4>
                <img src={img} alt={title}/>
            </div>
}