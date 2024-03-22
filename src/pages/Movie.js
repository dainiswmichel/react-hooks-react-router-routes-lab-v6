// src/pages/Movie.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moviesData from '../db.json'; // Adjust the path to your JSON file as needed

function Movie() {
 const { id } = useParams();
 const [movie, setMovie] = useState(null);

 useEffect(() => {
    // Find the movie by id in the moviesData.movies array
    const movieDetails = moviesData.movies.find(m => m.id === parseInt(id));
    setMovie(movieDetails);
 }, [id]);

 if (!movie) {
    return <div>Loading...</div>;
 }

 return (
    <div>
      <h1>{movie.title}</h1>
      <p>Time: {movie.time}</p>
      <div>
        {movie.genres.map((genre, index) => (
          <span key={index}>{genre}</span>
        ))}
      </div>
    </div>
 );
}

export default Movie;