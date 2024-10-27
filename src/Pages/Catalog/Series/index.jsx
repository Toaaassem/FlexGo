import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../Movies/movies.css';
import { motion } from 'framer-motion';

const API_URL = 'https://www.episodate.com/api/most-popular?page=';

const Series = () => {
    const [series, setSeries] = useState([]);
    const [filteredSeries, setFilteredSeries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState({
        country: '',
        network: '',
        status: '',
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const fetchSeries = async () => {
            try {
                const response = await axios.get(`${API_URL}${currentPage}`);
                setSeries(response.data.tv_shows);
                setFilteredSeries(response.data.tv_shows); // Set initial data without filter
                setTotalPages(Math.ceil(response.data.total / 10)); // Assuming 10 series per page
            } catch (error) {
                console.error("Error fetching the series data", error);
            } finally {
                setLoading(false);
            }
        };

        fetchSeries();
    }, [currentPage]);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilter(prevFilter => ({
            ...prevFilter,
            [name]: value
        }));
    };

    const filterSeries = () => {
        let filtered = series;

        if (filter.country) {
            filtered = filtered.filter(serie => serie.country === filter.country);
        }
        if (filter.network) {
            filtered = filtered.filter(serie => serie.network === filter.network);
        }
        if (filter.status) {
            filtered = filtered.filter(serie => serie.status === filter.status);
        }

        setFilteredSeries(filtered);
    };

    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const generatePaginationNumbers = () => {
        let pageNumbers = [];
        let startPage = Math.max(currentPage - 4, 1);
        let endPage = Math.min(currentPage + 5, totalPages);

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }

        return pageNumbers;
    };

    if (loading) {
        return (
            <div className="vh-100 d-flex align-items-center justify-content-center flex-column">
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div className="">
            {/* Inline Header with left-aligned title and right-aligned breadcrumbs */}
            <div>
                <div className="background-container"> 
                    <div className='container'>
                        <div className='row h-100'>
                            <div className='col-12'>
                                <div className="contentt h-100 w-100 d-flex align-items-center justify-content-between">
                                    {/* Title on the left */}
                                    <motion.div
                                        initial={{ y: -250 }}
                                        animate={{ y: -10 }}
                                        transition={{ duration: 0.9999, type: 'spring', stiffness: 120 }}
                                    >
                                        <h1 className="tittle">Series Catalog</h1>
                                    </motion.div>
                                    
                                    {/* Breadcrumbs on the right */}
                                    <ul className='d-flex list m-0 align-items-center'>
                                        <motion.div
                                            initial={{ y: -250 }}
                                            animate={{ y: -10 }}
                                            transition={{ duration: 0.5 }}
                                        >
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
                                            <li>Series</li>
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
                    whileHover={{ scale: 1.1, color: "black" }}
                >
                    <Link
                        to="/movies"
                        className="btn w-100 me-3"
                        style={{ backgroundColor: "#FF5599", borderRadius: "25px" }}
                    >
                        Movies
                    </Link>{" "}
                </motion.div>

                <motion.div
                    style={{ width: "300px", marginRight: "20px", marginLeft: "20px" }}
                    initial={{ y: -250 }}
                    animate={{ y: -1 }}
                    transition={{ duration: 0.7777 }}
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.1, color: "black" }}
                >
                    <Link
                        to="/series"
                        className="btn w-100 me-3"
                        style={{ backgroundColor: "#FF5599", borderRadius: "25px"  }}
                    >
                        Series
                    </Link>{" "}
                </motion.div>

                <motion.div
                    initial={{ y: -250 }}
                    animate={{ y: -1 }}
                    transition={{ duration: 0.9999 }}
                    style={{ width: "300px" }}
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.1, color: "black" }}
                >
                    <Link
                        to="/anime"
                        className="btn w-100 me-3"
                        style={{ backgroundColor: "#FF5599", borderRadius: "25px" }}
                    >
                        Anime
                    </Link>{" "}
                </motion.div>
            </div>

            {/* Filter options */}
            <div className="d-flex justify-content-end align-items-center mt-3">
                <div className="d-flex align-items-center me-2">
                    <select name="country" className="form-select me-2 custom-dropdown" value={filter.country} onChange={handleFilterChange}>
                        <option value="">Select Country</option>
                        <option value="US">US</option>
                        <option value="UK">UK</option>
                        <option value="Canada">Canada</option>
                        <option value="Japan">Japan</option>
                    </select>

                    <select name="network" className="form-select me-2 custom-dropdown" value={filter.network} onChange={handleFilterChange}>
                        <option value="">Select Network</option>
                        <option value="The CW">The CW</option>
                        <option value="HBO">HBO</option>
                        <option value="Netflix">Netflix</option>
                        <option value="NBC">NBC</option>
                    </select>

                    <select name="status" className="form-select custom-dropdown" value={filter.status} onChange={handleFilterChange}>
                        <option value="">Select Status</option>
                        <option value="Ended">Ended</option>
                        <option value="Ongoing">Ongoing</option>
                        <option value="Upcoming">Upcoming</option>
                    </select>
                </div>
                <button className="btn custom-btn me-5" onClick={filterSeries}>Filter</button>
            </div>

            <hr />
            {/* Series grid (4 cards per row) */}
            <div className="container">
                <div className="row">                
                    {filteredSeries.length > 0 ? (
                        filteredSeries.map(serie => (
                            <div key={serie.id} className="col-md-2 mb-4 movie-card-container">
                                <motion.div whileHover={{ scale: 1.1 }}>
                                    <Link 
                                        to={`/series/${serie.id}`} 
                                        state={{ 
                                            name: serie.name, 
                                            permalink: serie.permalink, 
                                            start_date: serie.start_date, 
                                            country: serie.country, 
                                            network: serie.network, 
                                            image: serie.image_thumbnail_path 
                                        }}
                                        className="text-decoration-none"
                                    >
                                        <div className="card h-100 bg-dark text-light movie-card">
                                            <img 
                                                src={serie.image_thumbnail_path} 
                                                className="card-img-top" 
                                                alt={serie.name} 
                                            />
                                            <div className="overlay">
                                                <i className="fas fa-play play-icon"></i>
                                            </div>
                                            <div className="card-body">
                                                <p className="card-title text-center m-0 mt-2">
                                                    {serie.name}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            </div>
                        ))
                    ) : (
                        <p>No series found</p>
                    )}
                </div>
            </div>

            {/* Pagination */}
            <div className="d-flex justify-content-center align-items-center my-4">
                <button className="btn custom-btn" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                    &lt;
                </button>
                {generatePaginationNumbers().map(page => (
                    <button 
                        key={page} 
                        className={`btn mx-2 ${currentPage === page ? 'active' : ''}`} 
                        onClick={() => handlePageChange(page)}
                    >
                        {page}
                    </button>
                ))}
                <button className="btn custom-btn" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default Series;
