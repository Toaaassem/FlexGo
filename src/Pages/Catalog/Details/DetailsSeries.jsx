import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { LifeLine } from 'react-loading-indicators'; // Import LifeLine component
import './details.css'; // External CSS file for styling
import{motion} from 'framer-motion'



const DetailsSeries = () => {
    const { id } = useParams();
    const [seriesDetails, setSeriesDetails] = useState(null);

    useEffect(() => {
        const fetchSeriesDetails = async () => {
            try {
                const response = await axios.get(`https://www.episodate.com/api/show-details?q=${id}`);
                setSeriesDetails(response.data.tvShow);
            } catch (error) {
                console.error('Error fetching series details:', error);
            }
        };

        fetchSeriesDetails();
    }, [id]);

    if (!seriesDetails) {
        return (
            <div className="vh-100 d-flex align-items-center justify-content-center flex-column">
          {/* Replaced Loading text with LifeLine loading indicator */}
          <LifeLine color="#FF5599" size="medium" text="Loading" textColor="#FF5599" />
        </div>
        );
    }

    return (
        <div className="movie-details-container">
            <div className="row my-5">
                <motion.div 
                initial={{ x: -250 }}
                animate={{ x: 1 }}
                transition={{ duration: 0.999999, type:'spring' ,stiffness:50 }}
                className="col-md-4">
                    <img 
                        className="w-100 movie-poster" 
                        src={seriesDetails.image_thumbnail_path} 
                        alt={seriesDetails.name} 
                    />
                </motion.div>
                <motion.div 
                initial={{ y: -250 }}
                animate={{ y: -10 }}
                transition={{ duration: 0.9999, type:'spring' ,stiffness:100 }}
                className="col-md-7 offset-md-1 movie-details-content overflow-hidden">
                    <h1 className="movie-title">{seriesDetails.name}</h1>
                    <div className="movie-rating">
                        <span className="stars">
                            {'⭐'.repeat(Math.round(seriesDetails.rating / 2))}
                        </span>
                        <span className="rating-text">{seriesDetails.rating} / 10</span>
                    </div>
                    <p className="movie-overview">{seriesDetails.description || 'No description available.'}</p>
                    <p><strong>Start Date:</strong> {seriesDetails.start_date}</p>
                    <p><strong>Country:</strong> {seriesDetails.country}</p>
                    <p><strong>Network:</strong> {seriesDetails.network}</p>
                    <motion.div
                    whileTap={{ scale: 0.999 }}
                    whileHover={{ scale: 1.1, color:"black" }}
                    transition={{ duration: 0.15 }}
                    style={{width:'fit-content'}}>
                    <Link to="/series" className="btn back-to-list-btn w-100" style={{ backgroundColor: '#FF5599', borderRadius: '25px' }}>
                     Back to series List
            </Link></motion.div>
                    
                </motion.div>
            </div>
        </div>
    );
};

export default DetailsSeries;
