import React, { useState, useEffect } from "react";
import "./Home.css"; // Importing the CSS

export default function Home() {
  // State for demo data (movies, recommendations, reminders, watchlist)
  const [movies, setMovies] = useState([
    { id: 1, title: "Harry Potter And The Goblet of Fire", status: "Working", img: "https://m.media-amazon.com/images/I/71opdcUCGjL._AC_UF894,1000_QL80_.jpg" },
    { id: 2, title: "Joker", status: "Broken", img: "https://m.media-amazon.com/images/I/51E+o6036kL._AC_UF894,1000_QL80_.jpg" },
    { id: 3, title: "Dune", status: "Working", img: "https://storage.googleapis.com/pod_public/1300/216439.jpg" }
  ]);

  const [recommendations, setRecommendations] = useState([]);
  const [reminders, setReminders] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Simulate fetching recommendations and reminders after component mounts
  useEffect(() => {
    // Simulating delay for recommendations and reminders
    setTimeout(() => {
      setRecommendations(["Recommended Movie 1", "Recommended Movie 2", "Recommended Movie 3"]);
    }, 2000);

    setTimeout(() => {
      setReminders(["Complete your assignment by Friday!", "Watch Joker for relaxation"]);
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
      <div className="intro-section">
        <h1 className="intro-title">Welcome to the Movie Scraper Demo</h1>
        <p className="intro-subtitle">An enhanced pirated movie experience!</p>

        <div className="filter-buttons">
          <button onClick={() => filterMovies("All")}>All Movies</button>
          <button onClick={() => filterMovies("Working")}>Working</button>
          <button onClick={() => filterMovies("Broken")}>Broken</button>
        </div>

        {/* Movie List Section */}
        <h2>Available Movies</h2>
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

        {/* Recommendations Section */}
        <h2>Recommended for You</h2>
        <ul className="recommendations">
          {recommendations.length > 0 ? (
            recommendations.map((rec, index) => <li key={index}>{rec}</li>)
          ) : (
            <p>Loading recommendations...</p>
          )}
        </ul>

        {/* Reminders Section */}
        <h2>Your Reminders</h2>
        <ul className="reminders">
          {reminders.length > 0 ? (
            reminders.map((reminder, index) => <li key={index}>{reminder}</li>)
          ) : (
            <p>Loading reminders...</p>
          )}
        </ul>

        {/* Watchlist Section */}
        <h2>Your Watchlist</h2>
        <ul className="watchlist-section">
          {watchlist.length > 0 ? (
            watchlist.map((movie, index) => <li key={index}>{movie.title}</li>)
          ) : (
            <p>No movies in your watchlist</p>
          )}
        </ul>

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
      </div>
    </main>
  );
}

/*Frontend sample (done mostly)*/
