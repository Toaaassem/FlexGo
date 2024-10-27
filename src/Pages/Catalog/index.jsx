import React from 'react';
import Movies from './Movies';
import Series from './Series';
import Anime from './Anime';
import DetailsMovies from './Details/DetailsMovies';
import DetailsSeries from './Details/DetailsSeries';
import DetailsAnime from './Details/DetailsAnime';

// Export individual components
export { Movies, Series, Anime, DetailsMovies, DetailsSeries, DetailsAnime };

// Default Catalog component, you can modify it later to display Movies, Series, Anime, etc.
export default function Catalog() {
  return (
    <div>
      
      <Movies />  {/* Render Movies component */}
        <Series />  {/* Render Series component */}
        <Anime />   {/* Render Anime component */}
      
    </div>
  );
}
