import React from 'react';
import Movie from './Movie';

const movieData = [
  {
    id: 1,
    name: "blade",
    img: "https://eu.movieposter.com/posters/archive/main/22/A70-11370"
  }, 
  {
    id: 2,
    name: "what ever this is",
    img: "https://eu.movieposter.com/posters/archive/main/50/MPW-25074"
  }, 
  {
    id: 3,
    name: "the shining",
    img: "https://eu.movieposter.com/posters/archive/main/12/A70-6457"
  }, 
  {
    id: 4,
    name: "anchorman",
    img: "https://eu.movieposter.com/posters/archive/main/72/MPW-36265"
  }
];

function App() {
  return (
    <div className="App">
      {movieData.map(movie => (
        <Movie key={movie.id} title={movie.name} img={movie.img} />
      ))}
    </div>
  );
}

export default App;
