import React from 'react';
import Movie from './Movie';
import PropTypes from 'prop-types';

const movieData = [
  {
    id: 1,
    name: "blade",
    rating: 4,
    img: "https://eu.movieposter.com/posters/archive/main/22/A70-11370"
  }, 
  {
    id: 2,
    name: "what ever this is",
    rating: 2,
    img: "https://eu.movieposter.com/posters/archive/main/50/MPW-25074"
  }, 
  {
    id: 3,
    name: "the shining",
    rating: 4,
    img: "https://eu.movieposter.com/posters/archive/main/12/A70-6457"
  }, 
  {
    id: 4,
    name: "anchorman",
    rating: 3.5,
    img: "https://eu.movieposter.com/posters/archive/main/72/MPW-36265"
  }
];

Movie.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired
}

function App() {
  return (
    <div className="App">
      {movieData.map(movie => (
        <Movie key={movie.id} name={movie.name} img={movie.img} rating={movie.rating} />
      ))}
    </div>
  );
}

export default App;
