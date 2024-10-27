import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../Movies/movies.css';
import { LifeLine } from 'react-loading-indicators';
import {motion} from 'framer-motion'

const API_URL = 'https://api.jikan.moe/v4/seasons/upcoming';

const Anime = () => {
  const [anime, setAnime] = useState([]);
  const [filteredAnime, setFilteredAnime] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState({
    genre: '',
    type: 'TV',
    status: 'Not yet aired',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [animePerPage] = useState(12);  // Set the number of anime per page

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        setAnime(response.data.data);
        setFilteredAnime(response.data.data); // Set initial data without filter
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching the anime data", error);
        setLoading(false);
      });
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter(prevFilter => ({
      ...prevFilter,
      [name]: value
    }));
  };

  const filterAnime = () => {
    let filtered = anime;

    // Filter by genre if selected
    if (filter.genre) {
      filtered = filtered.filter(animeItem => 
        animeItem.genres.some(genre => genre.name === filter.genre)
      );
    }

    // Filter by type (TV, Movie, etc.)
    if (filter.type) {
      filtered = filtered.filter(animeItem => animeItem.type === filter.type);
    }

    // Filter by airing status (Not yet aired, Airing, Finished)
    if (filter.status) {
      filtered = filtered.filter(animeItem => animeItem.status === filter.status);
    }

    setFilteredAnime(filtered);
  };

  // Get current anime for the page
  const indexOfLastAnime = currentPage * animePerPage;
  const indexOfFirstAnime = indexOfLastAnime - animePerPage;
  const currentAnime = filteredAnime.slice(indexOfFirstAnime, indexOfLastAnime);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="">
      {/* Inline Header with left-aligned title and right-aligned breadcrumbs */}
      <div>
        <div className="background-container"> 
          <div className='container'>
            <div className='row h-100'>
              <div className='col-12'>
                <div className="contentt h-100 w-100 d-flex align-items-center justify-content-between">
               
                <motion.div
                    initial={{ y: -250 }}
                    animate={{ y: -10 }}
                    transition={{ duration: 0.9999,type:'spring' ,stiffness:120 }}
                  >
                    <h1 className="tittle">Anime Catalog</h1>
                  </motion.div>
                  
                
                  <ul className='d-flex list m-0 align-items-center'>
                  <motion.div
                      initial={{ y: -250 }}
                      animate={{ y: -10 }}
                      transition={{ duration: 0.5 }}
                    >
                      {" "}
                      <li className="l-design">
                        <Link to="/">Home</Link>
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
                      <li>Anime</li>
                    </motion.div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> 
        <div className='line'></div>
      </div>

      {/* Buttons for Movies, Series, and Anime */}
      <div className="d-flex justify-content-center mt-3">
      <motion.div
          style={{ width: "300px" }}
          initial={{ y: -250 }}
          animate={{ y: -1 }}
          transition={{ duration: 0.5555 }}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1,color:"black" }}
          
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
          style={{ width: "300px" , marginRight:"20px"  ,marginLeft:"20px" }}
          initial={{ y: -250 }}
          animate={{ y: -1 }}
          transition={{ duration: 0.7777 }}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 ,color:"black"}}
          
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
          whileHover={{ scale: 1.1 ,color:"black"}}
          
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
            name="genre"
            value={filter.genre}
            onChange={handleFilterChange}
          >
            <option value="">Select Genre</option>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
          </select>

          <select 
            className="form-select me-2 custom-dropdown"
            name="type"
            value={filter.type}
            onChange={handleFilterChange}
          >
            <option value="TV">TV</option>
            <option value="Movie">Movie</option>
            <option value="OVA">OVA</option>
          </select>

          <select 
            className="form-select me-2 custom-dropdown"
            name="status"
            value={filter.status}
            onChange={handleFilterChange}
          >
            <option value="Not yet aired">Not yet aired</option>
            <option value="Airing">Airing</option>
            <option value="Finished">Finished</option>
          </select>
        </div>

        <button className="btn custom-btn me-5" onClick={filterAnime}>
          Filter
        </button>
      </div>

      <hr />
      <div className="container  ">
      <div className="row">       
      {loading ? (
          <div className="vh-100 d-flex align-items-center justify-content-center flex-column">
            <LifeLine color="#FF5599" size="medium" text="Loading" textColor="#FF5599" />
          </div>
        ) : currentAnime.length > 0 ? (
          currentAnime.map(animeItem => (
            <AnimeCard key={animeItem.mal_id} anime={animeItem} />
          ))
        ) : (
          <div className="vh-100 d-flex align-items-center justify-content-center flex-column">
            <p>No anime found with the selected filters.</p>
          </div>
        )}
      </div>
      </div>
      {/* Pagination */}
      <div className="d-flex justify-content-center mt-4">
        <ul className="pagination">
          {Array.from({ length: Math.ceil(filteredAnime.length / animePerPage) }).map((_, index) => (
            <li key={index} className="page-item">
              <span
                className={`page-link ${currentPage === index + 1 ? 'active' : ''}`}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// AnimeCard Component
const AnimeCard = ({ anime }) => {
  return (
    <motion.div 
    whileHover={{scale:1.1}}
    className="col-md-2 mb-4 movie-card-container">
      <Link to={`/anime/${anime.mal_id}`} className="text-decoration-none">
        <div className="card h-100 bg-dark text-light movie-card">
          <img
            src={anime.images?.jpg?.image_url} // Use optional chaining to avoid errors
            alt={anime.title}
            className="card-img-top"
          />
          <div className="overlay">
            <i className="fas fa-play play-icon"></i>
          </div>
          <div className="card-body">
            <h5 className="card-title">{anime.title}</h5>
            <p className="card-text">{anime.status}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Anime;
