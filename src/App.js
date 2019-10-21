import React, { useState, useEffect } from 'react';
import Movie from './Movie';
import axios from 'axios';
import yargsParser from 'yargs-parser';
import './App.css'

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
  
  const movieMap = movies.map(movie => (
    <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} genres={movie.genres} />
  ))

  return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="looader-text">Loading...</span>
        </div>
      ) : (
        <div className="movies">
          {movieMap}
        </div>
      )}
    </section>
  );
}


