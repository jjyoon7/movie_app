import React from 'react';
import Movie from './Movie';

const movieData = [
  {
    name: "blade",
    img: "https://eu.movieposter.com/posters/archive/main/22/A70-11370"
  }, 
  {
    name: "what ever this is",
    img: "https://eu.movieposter.com/posters/archive/main/50/MPW-25074"
  }, 
  {
    name: "the shining",
    img: "https://eu.movieposter.com/posters/archive/main/12/A70-6457"
  }, 
  {
    name: "anchorman",
    img: "https://eu.movieposter.com/posters/archive/main/72/MPW-36265"
  }
];

function App() {
  return (
    <div className="App">
      {movieData.map(movie => (
        <Movie title={movie.name} img={movie.img} />
      ))}
    </div>
  );
}

export default App;
