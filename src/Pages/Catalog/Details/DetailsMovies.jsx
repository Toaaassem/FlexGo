import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { LifeLine } from 'react-loading-indicators'; // Import LifeLine component
import './details.css'; // External CSS file for styling
import {motion} from 'framer-motion'

const API_KEY = "c9fac173689f5f01ba1b0420f66d7093"; // Movie API key
const imgPath = (path) => `https://image.tmdb.org/t/p/w500${path}`; // Image base URL

export default function DetailsMovies() {
  const { id } = useParams(); // Capture the movie id from URL
  const [details, setDetails] = useState(null);

  // Fetch movie details from the API
  function getDetails() {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => {
        console.error("Error fetching movie details:", err);
      });
  }

  useEffect(() => {
    getDetails();
  }, [id]);

  return (
    <div className="movie-details-container">
      {details ? (
        <div
         className="row my-5">
          <motion.div
          initial={{ x: -250 }}
          animate={{ x: 1 }}
          transition={{ duration: 0.999999, type:'spring' ,stiffness:50 }}
          className="col-md-4">
            <img className="w-100 movie-poster" src={imgPath(details.poster_path)} alt={details.title} />
          </motion.div>
          <motion.div
          initial={{ y: -250 }}
          animate={{ y: -10 }}
          transition={{ duration: 0.9999, type:'spring' ,stiffness:100 }}
           className="col-md-7 offset-md-1 movie-details-content overflow-hidden">
            <h1 className="movie-title">{details.title}</h1>
            <div className="movie-rating">
              <span className="stars">
                {Array(Math.round(details.vote_average / 2)).fill('⭐').join('')}
              </span>
              <span className="rating-text">{details.vote_average} / 10</span>
            </div>
            <p className="movie-overview">{details.overview}</p>
            <p><strong>Release Date:</strong> {details.release_date}</p>
            <p><strong>Genres:</strong> {details.genres.map((genre) => genre.name).join(", ")}</p>
            <motion.div 
                    className=""
                    whileTap={{ scale: 0.999 }}
                    whileHover={{ scale: 1.1, color:"black" }}
                    transition={{ duration: 0.15 }}
                    style={{width:'fit-content'}}>
            
            <Link to="/movies" className="btn back-to-list-btn w-100" style={{ backgroundColor: '#FF5599', borderRadius: '25px' }}>
              Back to movies List
            </Link>
            </motion.div>
          </motion.div>
        </div>
      ) : (
        <div className="vh-100 d-flex align-items-center justify-content-center flex-column">
          <LifeLine color="#FF5599" size="medium" text="Loading" textColor="#FF5599" />
        </div>
      )}
    </div>
  );
}
