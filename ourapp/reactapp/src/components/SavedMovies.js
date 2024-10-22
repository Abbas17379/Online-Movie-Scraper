import React, { useState, useEffect } from 'react';

export default function SavedMovies() {
  const [movies, setMovies] = useState([]);  // State to hold movies data
  const [error, setError] = useState(null);  // State to hold errors, if any

  // Fetching data from the Rails API when the component mounts
  useEffect(() => {
    fetch('http://localhost:3000/movies')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setMovies(data);  // Update state with fetched movies data
      })
      .catch((error) => {
        setError(error.message);  // Set error state if there's an issue
      });
  }, []);

  return (
    <div>
      <h1>Saved Movies</h1>
      
      {/* Error handling */}
      {error && <p>Error fetching movies: {error}</p>}
      
      {/* Display fetched movies */}
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <a href={movie.link} target="_blank" rel="noopener noreferrer">
              {movie.link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
