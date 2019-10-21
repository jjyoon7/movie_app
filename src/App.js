import React, { useState, useEffect } from 'react';
import Movie from './Movie';
import PropTypes from 'prop-types';
import axios from 'axios';

Movie.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired
}

function App() {
  const [movie, setMovie] = useState("")

  useEffect(() => {
    axios.get("https://yts.lt/api/v2/list_movies.json");
    console.log("useEffect is called")
  })
  return (
    <div className="App">

    </div>
  );
}

export default App;
