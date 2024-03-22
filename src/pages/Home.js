// Home.js
import { useEffect, useState } from "react";
import MovieCard from '../components/MovieCard';
import moviesData from '../db.json'; // Adjust the path to your JSON file as needed

function Home() {
 const [movies, setMovies] = useState([]);

 useEffect(() => {
    // Use the imported JSON data
    setMovies(moviesData.movies);
 }, []);

 return (
    <>
      <main>
        <h1>Home Page</h1>
        {movies.map(movie => (
          <MovieCard key={movie.id} title={movie.title} id={movie.id} />
        ))}
      </main>
    </>
 );
};

export default Home;