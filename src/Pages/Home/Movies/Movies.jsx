import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=d7c0a70a1adb796f3cd7b050e54736e4&language=en-US&page=1";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();  // Using React Router's useNavigate hook for navigation

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching the movie data", error);
        setError("Failed to load movie data.");
      });
  }, []);

  // Function to handle button click for navigation
  const handleNavigate = () => {
    navigate("/movies"); // Navigate to the "movies" catalog
  };

  return (
    <div className="container">
      <h1 className="mt-2">Recently Updated</h1>
      <div className="row d-flex justify-content-around Movies">
        {error && <div className="error-message">{error}</div>}
        {movies.length === 0 && !error && <div>Loading movies...</div>} {/* Loading state */}
        {movies.slice(0, 6).map((movie, index) => (
          <div className="col-md-4 col-sm-6 col-12 d-flex Movie g-4" key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} // Fixed URL
              alt={movie.title || "Movie Poster"} // Improved alt text for accessibility
              className="w-50 rounded-start"
            />
            <div className="content d-flex flex-column px-3">
              <h3 className="mb-2">{movie.title || movie.original_title || movie.name || "Untitled Movie"}</h3>
              <span className="rating mb-2" style={{ color: '#ff568e' }}>
                <i className="fa fa-star" aria-hidden="true" style={{ color: '#ff568e' }}></i>
                {` ${movie.vote_average}`}
              </span>
              <p className="text-White">{movie.overview.length > 100 ? movie.overview.slice(0, 100) + "..." : movie.overview}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Button in the middle to navigate to the catalog */}
      <div className="d-flex justify-content-center mt-5">
        <motion.button 
          animate={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.2 }}
          className="btn btn-outline-info mb-2 text-white" 
          onClick={handleNavigate}
        >
          To Catalog
        </motion.button>
      </div>
    </div>
  );
}
