import React, { useState, useEffect } from 'react';
import Movie from './Movie';
import axios from 'axios';

Movie.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired
}

function App() {
  const [isLoading, setLoading] = useState(true)
  const [movies, setMovie] = useState([])

  const getMovies = async () => {
    const {data: {data: { movies }}} = await axios.get("https://yts.lt/api/v2/list_movies.json?sort_by=rating");
    setMovie({movies})
    setLoading(false)
  }

  useEffect(() => {
    getMovies();
  })
  return (
    <div className="App">
      {isLoading ? "we are loading bunch of movies" : "we are ready"}
    </div>
  );
}

export default App;
