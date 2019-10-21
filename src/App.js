import React, { useState, useEffect } from 'react';
import Movie from './Movie';
import axios from 'axios';
import yargsParser from 'yargs-parser';

export default function App() {
  const [isLoading, setLoading] = useState(true)
  const [movies, setMovie] = useState([])

  const getMovies = async () => {

    const {data: {data: { movies }}} = await axios.get("https://yts.lt/api/v2/list_movies.json?sort_by=rating");
    setMovie(movies)
    // setMovie({movies})
    setLoading(false)

  }

  useEffect(() => {
    getMovies();
  }, [])
  
  return (
    <div className="App">
      {isLoading ? "we are loading bunch of movies" : movies.map(movie => (
        <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image}  />
      ))}
    </div>
  );
}


