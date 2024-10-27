import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./movies.css";
import { motion } from "framer-motion";

const API_URL = "https://api.themoviedb.org/3/discover/movie?api_key=d7c0a70a1adb796f3cd7b050e54736e4&language=en-US";
const GENRE_URL = "https://api.themoviedb.org/3/genre/movie/list?api_key=d7c0a70a1adb796f3cd7b050e54736e4&language=en-US";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState(""); // New state for year filtering
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetchMovies(currentPage); // Fetch all movies on initial load
    fetchGenres(); // Fetch genres on initial load
  }, []);

  const fetchMovies = async (page, genre = "", year = "") => {
    try {
      const genreQuery = genre ? `&with_genres=${genre}` : ""; // Add genre filter if selected
      const yearQuery = year ? `&primary_release_year=${year}` : ""; // Add year filter if selected
      const response = await axios.get(`${API_URL}&page=${page}${genreQuery}${yearQuery}`); // Correct API for filtering by genre and year
      setMovies(response.data.results);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      console.error("Error fetching the movie data", error);
    }
  };

  const fetchGenres = async () => {
    try {
      const response = await axios.get(GENRE_URL);
      setGenres(response.data.genres); // Set genres state
    } catch (error) {
      console.error("Error fetching genres", error);
    }
  };

  const handleFilter = () => {
    setCurrentPage(1); // Reset to first page on filter
    fetchMovies(1, genre, year); // Fetch movies with selected genre and year
  };

  // Generate pagination numbers
  const generatePaginationNumbers = () => {
    const pages = [];
    const maxPages = Math.min(totalPages, 10); // Limit to 10 pages
    for (let i = 1; i <= maxPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="">
      {/* Inline Header with left-aligned title and right-aligned breadcrumbs */}
      <div>
        <div className="background-container">
          <div className="container">
            <div className="row h-100">
              <div className="col-12">
                <div className="contentt h-100 w-100 d-flex align-items-center justify-content-between">
                  {/* Title on the left */}
                  <motion.div
                    initial={{ y: -250 }}
                    animate={{ y: -10 }}
                    transition={{ duration: 0.9999, type:'spring' ,stiffness:120 }}
                  >
                    <h1 className="tittle">Movies Catalog</h1>
                  </motion.div>

                  {/* Breadcrumbs on the right */}

                  <ul className="d-flex list m-0 align-items-center">
                    <motion.div
                      initial={{ y: -250 }}
                      animate={{ y: -10 }}
                      transition={{ duration: 0.5 }}
                    >
                      {" "}
                      <li className="l-design">
                        <Link to="/home">Home</Link>
                      </li>
                    </motion.div>
                    <motion.div
                      initial={{ y: -250 }}
                      animate={{ y: -10 }}
                      transition={{ duration: 0.7 }}
                    >
                      <li>
                        <i className="fa-solid fa-arrow-right mx-2"></i>
                      </li>
                    </motion.div>
                    <motion.div
                      initial={{ y: -250 }}
                      animate={{ y: -10 }}
                      transition={{ duration: 0.9 }}
                    >
                      <li>Movies</li>
                    </motion.div>
                  </ul>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        
        <div className="line"></div>
      </div>

      {/* Buttons for Movies, Series, and Anime */}
      <div className="d-flex justify-content-center mt-3">
        <motion.div
          initial={{ y: -250 }}
          animate={{ y: -1 }}
          transition={{ duration: 0.5555 }}
          style={{ width: "300px" }}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1, color: "black" }}
          // transition={{ duration: 0.15 }}
        >
          <Link
            to="/movies"
            className=" btn w-100 me-3"
            style={{ backgroundColor: "#FF5599", borderRadius: "25px" }}
          >
            Movies
          </Link>{" "}
        </motion.div>

        <motion.div
          style={{ width: "300px", marginLeft: "20px", marginRight: "20px" }}
          initial={{ y: -250 }}
          animate={{ y: -1 }}
          transition={{ duration: 0.7777 }}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1, color: "black" }}
          className=" "
        >
          <Link
            to="/series"
            className=" btn w-100 me-3"
            style={{ backgroundColor: "#FF5599", borderRadius: "25px" }}
          >
            series
          </Link>{" "}
        </motion.div>

        <motion.div
          style={{ width: "300px" }}
          initial={{ y: -250 }}
          animate={{ y: -1 }}
          transition={{ duration: 0.9999 }}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1, color: "black" }}
        >
          <Link
            to="/anime"
            className=" btn w-100 me-3"
            style={{ backgroundColor: "#FF5599", borderRadius: "25px" }}
          >
            anime
          </Link>{" "}
        </motion.div>
      </div>
      <div className="d-flex justify-content-end align-items-center mt-3">
        <div className="d-flex align-items-center me-2">
          <select 
            className="form-select me-2 custom-dropdown"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            <option value="">Select Genre</option>
            {genres.map((g) => (
              <option key={g.id} value={g.id}>{g.name}</option>
            ))}
          </select>

          <select
            className="form-select me-2 custom-dropdown"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option value="">Select Year</option>
            {Array.from(new Array(30), (_, i) => new Date().getFullYear() - i).map((yr) => (
              <option key={yr} value={yr}>{yr}</option>
            ))}
          </select>
        </div>
        <button className="btn custom-btn me-5" onClick={handleFilter}>
          Filter
        </button>
        
      </div>

      <hr />
      <div className="container w-100">
        <div className="row">
          {" "}

          {movies.length > 0 ? (
            movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
          ) : (
            <div className="vh-100 d-flex align-items-center justify-content-center flex-column">
              <p>Loading...</p>
            </div>
            
          )}

        </div>
      </div>
       {/* Pagination */}
       <nav aria-label="...">
        <ul className="pagination pagination-lg my-5 d-flex justify-content-center">
          {generatePaginationNumbers().map((num) => (
            <li
              key={num}
              className={`page-item ${currentPage === num ? 'active' : ''}`}
              onClick={() => {
                setCurrentPage(num);
                fetchMovies(num, genre, year); // Fetch new movies when changing page
              }}
            >
              <span className="page-link bg-transparent">{num}</span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
    
  );
};


// MovieCard Component
const MovieCard = ({ movie }) => {
  return (
   
    

      <motion.div
       whileHover={{scale:1.1}}
      className="col-md-2 mb-4 movie-card-container">
    <Link to={`/movies/${movie.id}`} className="text-decoration-none">
      <div className="card h-100 bg-dark text-light movie-card">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title || "Movie Poster"}
          className="card-img-top"
        />
        <div className="overlay">
          <i className="fas fa-play play-icon"></i>
        </div>
        <div className="card-body">
          <h5 className="card-title">
            {movie.title ||
              movie.original_title ||
              movie.name ||
              "Untitled Movie"}
          </h5>
          <p className="card-text">
            <span className="rating">
              <i className="fa fa-star" aria-hidden="true"></i>{" "}
              {` ${movie.vote_average}`}
            </span>
          </p>
        </div>
      </div>
    </Link>
  </motion.div>
    
  );
};

export default Movies;
