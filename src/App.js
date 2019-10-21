import React, { useState } from 'react';
import Movie from './Movie';
import PropTypes from 'prop-types';

Movie.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired
}

function App() {
  const [movie, setMovie] = useState("")

  return (
    <div className="App">
    </div>
  );
}

export default App;
