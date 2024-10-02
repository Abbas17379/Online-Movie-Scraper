

import React, { useState, useEffect } from "react";
import "./Home.css"; // Importing the CSS

export default function Home() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Harry Potter And The Goblet of Fire",
      status: "Working",
      img: "https://m.media-amazon.com/images/I/71opdcUCGjL._AC_UF894,1000_QL80_.jpg"
    },
    {
      id: 2,
      title: "Joker",
      status: "Broken",
      img: "https://m.media-amazon.com/images/I/51E+o6036kL._AC_UF894,1000_QL80_.jpg" // Example of local image for Joker
    },
    {
      id: 3,
      title: "Dune",
      status: "Working",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwmyve73jpaX8KcqTs4XQ-KSAKW1lUtaXjrg&s" // Example of local image for Dune
    }
  ]);

  const [recommendations, setRecommendations] = useState([]);
  const [reminders, setReminders] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    // Simulating delay for recommendations and reminders
    setTimeout(() => {
      setRecommendations(["Recommended Movie 1", "Recommended Movie 2", "Recommended Movie 3"]);
    }, 2000);

    setTimeout(() => {
      setReminders(["Complete your assignment by Friday!", "Watch Movie A for relaxation"]);
    }, 3000);
  }, []);

  const addToWatchlist = (movie) => {
    if (!watchlist.includes(movie)) {
      setWatchlist([...watchlist, movie]);
    }
  };

  const filterMovies = (status) => {
    if (status === "All") {
      setFilteredMovies(movies);
    } else {
      setFilteredMovies(movies.filter(movie => movie.status === status));
    }
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedMovie(null);
  };

  return (
    <main className="layout-container">
      {/* Introduction Section */}
      <div className="intro-section">
        <h1 className="intro-title">Welcome to My Streaming App</h1>
        <p className="intro-subtitle">Your gateway to personalized movie recommendations.</p>
      </div>

      {/* Movie Section */}
      <div className="intro-section">
        <h2>Available Movies</h2>
        <div className="filter-buttons">
          <button onClick={() => filterMovies("All")}>All Movies</button>
          <button onClick={() => filterMovies("Working")}>Working</button>
          <button onClick={() => filterMovies("Broken")}>Broken</button>
        </div>

        <div className="movie-grid">
          {filteredMovies.map((movie) => (
            <div key={movie.id} className="movie-card" onClick={() => handleMovieClick(movie)}>
              <img src={movie.img} alt={movie.title} className="movie-poster" />
              <h3>{movie.title}</h3>
              <p>
                Status: <span className={`status ${movie.status.toLowerCase()}`}>{movie.status}</span>
              </p>
              <button onClick={(e) => { e.stopPropagation(); addToWatchlist(movie); }}>Add to Watchlist</button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Movie Details */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedMovie.title}</h2>
            <img src={selectedMovie.img} alt={selectedMovie.title} className="modal-poster" />
            <p>Status: <span className={`status ${selectedMovie.status.toLowerCase()}`}>{selectedMovie.status}</span></p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </main>
  );
}
